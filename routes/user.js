//Router
const router = require("express").Router();
const User = require("../models/user");

//GET

router.get("/", async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } 
  catch(error) {
    response.status(500).send(error.message);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id);

    if (!user) {
      return response.status(404).send("Could not find a user with this ID");
    }

    response.status(200).json(user);
  }
  catch (error) {
    response.status(500).send(error.message);
  }
});

//POST

router.post("/add", async (request, response) => {

  try {
    const user = await User.findOne({
      email: request.body.email
    });

    if (user) {
      return response.status(400).send("This E-mail has already been registered");
    }

    const newUser = new User({
      name: request.body.name,
      familyName: request.body.familyName,
      email: request.body.email,
      password: request.body.password
    });

    await newUser.save();
    response.status(201).json(newUser);
  } 
  catch(error) {
    response.status(500).send(error.message);
  }
});

//PUT

router.put("/update", async (request, response) => {

  try {
    const user = await User.findOne({
      _id: {$ne: request.body.id},
      email: request.body.email
    });

    if (user) {
      return response.status(400).send("This E-mail has already been registered");
    }

    await User.findByIdAndUpdate(request.body.id, {
      name: request.body.name,
      familyName: request.body.familyName,
      email: request.body.email,
      password: request.body.password,
      lists: request.body.lists,
      sharedLists: request.body.sharedLists
    });

    response.status(204).send(true);
  } 
  catch(error) {
    response.status(500).send(error.message);
  }
});

//DELETE

router.delete("/:id", async (request, response) => {
  try {
    const user = await User.findByIdAndDelete(request.params.id);

    if (!user) {
      return response.status(404).send("Could not find a user with this ID");
    }
    
    response.status(204).send(true);
  }
  catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;