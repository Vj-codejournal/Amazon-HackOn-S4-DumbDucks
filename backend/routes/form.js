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

router.get("/get", async (req, res) => {
        try {
            const forms = await Form.find();
            const result = forms.map(form => {
                return {
                    name: form.costumerName,
                    description: `${form.title} and ${form.description}`
                };
            });
            console.log(result);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

module.exports = router;