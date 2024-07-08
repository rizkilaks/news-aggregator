const express = require("express");
const router = express.Router();
const savedNewsController = require("../controllers/savedNewsController");

router.post("/", savedNewsController.saveNews);
router.get("/:userId", savedNewsController.getSavedNews);

module.exports = router;
