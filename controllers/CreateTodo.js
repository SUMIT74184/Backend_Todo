const Todo = require("../models/Todo");

//define route handler
exports.CreateTodo = async (req, res) => {
  try {
    //extract title and description
    const { title, description } = req.body;
    //create nre todo obj
    const response = await Todo.create({ title, description });
    //send json response with succ flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
