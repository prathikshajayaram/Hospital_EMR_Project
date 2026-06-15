const express = require("express");

const router = express.Router();

const visitController =
require("../controllers/visitController");

router.post(
    "/",
    visitController.createVisit
);

module.exports = router;