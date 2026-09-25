const expres = require("express");
const cookieParser = require("cookie-parser");

const app = expres();

app.use(expres.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Backend",
        status: "success"
    });
});

/**
 * - API routes
 * - /api/
 */


module.exports = app;