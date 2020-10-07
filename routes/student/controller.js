const {Student} = require('../../models');

module.exports = {
  getAllStudent: (req, res) => {
    Student.find()
    .populate("class", "name")
    .then(result => {
      res.status(200).json({
        message: "success get data student",
        result
      })
    })
    .catch(err => {
      res.status(404).json("cannot get data student")
    })
  },

  getStudentById: async (req, res) => {
    const students = await Student.findById(req.params.id);
  
    try {
      res.json({
        message: "success get user with id",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getStudentInClass: async (req, res) => {
    const students = await Student.find({class: req.params.id});
  
    try {
      res.json({
        message: "success get student in class",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  postStudent: async (req, res) => {
    // console.log("Student", Student);
    const students = await Student.create(req.body);
    // console.log("students", students);
    try {
      res.json({
        message: "success add data student",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

}