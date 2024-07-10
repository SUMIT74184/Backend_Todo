const express = require("express");
const router = express.Router();

//import controller
const { CreateTodo } = require("../controllers/CreateTodo");
const { getTodo, getTodoByID } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//define the api routes
router.post("/CreateTodo", CreateTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoByID);
//paths--------mapped overhere with the function

router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports = router;
