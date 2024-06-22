const express = require("express");
const router = express.Router();
const Form = require("../models/form");

router.post("/submit", async (req, res) => {
    try {
        const form = new Form(req.body);
        const submitForm = await form.save();
        res.status(201).json(submitForm);
    } catch (error) {
        console.log("error" + error.message);
        res.status(422).send(error);
    }
});

module.exports = router;