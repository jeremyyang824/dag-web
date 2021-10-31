const mockData = [
  {
    id: "0",
    parentIds: ["8"],
    parentData: {
      8: {
        isSoft: true,
      },
    },
  },
  {
    id: "1",
    parentIds: [],
    parentData: {},
  },
  {
    id: "2",
    parentIds: [],
    parentData: {},
  },
  {
    id: "3",
    parentIds: ["11"],
    parentData: {
      11: {
        isSoft: true,
      },
    },
  },
  {
    id: "4",
    parentIds: ["12"],
    parentData: {
      12: {
        isSoft: false,
      },
    },
  },
  {
    id: "5",
    parentIds: ["18"],
    parentData: {
      18: {
        isSoft: false,
      },
    },
  },
  {
    id: "6",
    parentIds: ["9", "15", "17"],
    parentData: {
      9: {
        isSoft: false,
      },
      15: {
        isSoft: false,
      },
      17: {
        isSoft: true,
      },
    },
  },
  {
    id: "7",
    parentIds: ["3", "17", "20", "21"],
    parentData: {
      3: {
        isSoft: false,
      },
      17: {
        isSoft: false,
      },
      20: {
        isSoft: true,
      },
      21: {
        isSoft: true,
      },
    },
  },
  {
    id: "8",
    parentIds: [],
    parentData: {},
  },
  {
    id: "9",
    parentIds: ["4"],
    parentData: {
      4: {
        isSoft: false,
      },
    },
  },
  {
    id: "10",
    parentIds: ["16", "21"],
    parentData: {
      16: {
        isSoft: false,
      },
      21: {
        isSoft: false,
      },
    },
  },
  {
    id: "11",
    parentIds: ["2"],
    parentData: {
      2: {
        isSoft: true,
      },
    },
  },
  {
    id: "12",
    parentIds: ["21"],
    parentData: {
      21: {
        isSoft: false,
      },
    },
  },
  {
    id: "13",
    parentIds: ["4", "12"],
    parentData: {
      4: {
        isSoft: true,
      },
      12: {
        isSoft: false,
      },
    },
  },
  {
    id: "14",
    parentIds: ["1", "8"],
    parentData: {
      1: {
        isSoft: true,
      },
      8: {
        isSoft: false,
      },
    },
  },
  {
    id: "15",
    parentIds: [],
    parentData: {},
  },
  {
    id: "16",
    parentIds: ["0"],
    parentData: {
      0: {
        isSoft: true,
      },
    },
  },
  {
    id: "17",
    parentIds: ["19"],
    parentData: {
      19: {
        isSoft: false,
      },
    },
  },
  {
    id: "18",
    parentIds: ["9"],
    parentData: {
      9: {
        isSoft: false,
      },
    },
  },
  {
    id: "19",
    parentIds: [],
    parentData: {},
  },
  {
    id: "20",
    parentIds: ["13"],
    parentData: {
      13: {
        isSoft: false,
      },
    },
  },
  {
    id: "21",
    parentIds: [],
    parentData: {},
  },
];


module.exports = mockData;