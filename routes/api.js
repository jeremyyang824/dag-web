const express = require("express");
const router = express.Router();

const mockData = require("../repo/mockData");
const dataRepo = require("../repo/dataRepo");

router.get("/data/:id", async function (req, res, next) {
  const id = req.params.id;
  console.log(`id: ${id}`);
  res.send(await getData(id));
});

router.get("/test/:id", async function (req, res, next) {
  const id = req.params.id;
  const vals = await dataRepo.getAll(id);
  res.send(vals);
});

async function getData(id) {
  return await mockData;
}

module.exports = router;
