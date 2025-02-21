const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "Sakshi Raj",
        email: "2236989.cse.cec@cgc.edu.in",
        roll_number: "2236989",
        numbers,
        alphabets,
        highest_alphabet
    });
});

// GET /bfhl endpoint
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

module.exports = app; // ✅ Required for Vercel deployment
