(async () => {
  // fetch data and render
  const resp = await fetch(
    "/api/data/2"
  );
  const data = await resp.json();

  const screen_width = document.body.offsetWidth,
    screen_height = document.documentElement.clientHeight;
  const nodeRadius = 10,
    duration = 750,
    x_sep = 120,
    y_sep = 50;

  const dag = d3.dagStratify()(data);
  const layout = d3
    .sugiyama()
    //.nodeSize((node) => [12 * nodeRadius, 6 * nodeRadius])
    .nodeSize((node) => [x_sep, y_sep])
    .layering(d3.layeringSimplex()) //layeringTopological, layeringLongestPath
    .decross(d3.decrossOpt())
    .coord(d3.coordQuad()); //coordGreedy, coordQuad, coordCenter
  const { width, height } = layout(dag);

  // --------------------------------
  // This code only handles rendering
  // --------------------------------

  const zoom = d3
    .zoom()
    .on("zoom", (_) => svgGroup.attr("transform", d3.event.transform));

  // initialize tooltips
  const tip = d3
    .tip()
    .attr("class", "d3-tip")
    .direction("e")
    .offset([0, 5])
    .html(
      (d) => `
      <span style='margin-left: 2.5px;'><b>node id: ${d.data.id}</b></span><br>
      <table style="margin-top: 2.5px;">
        <tr><td>OAS</td><td>test 123</td></tr>
        <tr><td>DDD</td><td>demo case x</td></tr>
      </table>
      `
    );

  const svgSelection = d3
    .select("body")
    .append("svg")
    .attr("viewBox", [0, 0, width, height].join(" "))
    .attr("width", screen_width)
    .attr("height", screen_height)
    .call(zoom)
    .call(tip);
  const svgGroup = svgSelection.append("g").attr("class", "container");

  // How to draw edges
  const line = d3
    .line()
    .curve(d3.curveCatmullRom)
    .x((d) => d.x)
    .y((d) => d.y);

  // Plot edges
  svgGroup
    .append("g")
    .selectAll("path")
    .data(dag.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("stroke-dasharray", ({ source, target }) => {
      // hard dependency or soft dependency
      return target.data.parentData[source.data.id].isSoft ? "6,3" : "";
    })
    .attr("d", ({ points }) => line(points));

  // Select nodes
  const nodes = svgGroup
    .append("g")
    .selectAll("g")
    .data(dag.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", ({ x, y }) => `translate(${x}, ${y})`)
    //.on("click", click)
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
  // Plot node circles
  nodes.append("circle").attr("class", "node").attr("r", nodeRadius);

  // Plot arrow
  const arrow = d3
    .symbol()
    .type(d3.symbolTriangle)
    .size((nodeRadius * nodeRadius) / 5.0);
  svgGroup
    .append("g")
    .selectAll("path")
    .data(dag.links())
    .enter()
    .append("path")
    .attr("class", "arrow")
    .attr("d", arrow)
    .attr("transform", ({ source, target, points }) => {
      const [end, start] = points.slice().reverse();
      const dx = start.x - end.x;
      const dy = start.y - end.y;
      const scale = (nodeRadius * 1.15) / Math.sqrt(dx * dx + dy * dy);
      const angle = (Math.atan2(-dy, -dx) * 180) / Math.PI + 90;
      return `translate(${end.x + dx * scale}, ${
        end.y + dy * scale
      }) rotate(${angle})`;
    });

  // Add text to nodes
  nodes
    .append("text")
    .attr("dy", "-2")
    .attr("x", 13)
    .attr("text-anchor", "start")
    .text((d) => `id: ${d.data.id}`);
  nodes
    .append("text")
    .attr("dy", "10")
    .attr("x", 13)
    .attr("text-anchor", "start")
    .text((d) => "some other info");
})();
