const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  markTaskAsDone
} = require("../controllers");
const upload = require("../config/multer");

const router = require("express").Router();

router.get("/", getTasks);
router.post("/", upload.single("linkedFile"), createTask);
router.patch("/:id", upload.single("linkedFile"), updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/done", markTaskAsDone);

module.exports = router;