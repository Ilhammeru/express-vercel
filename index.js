const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get("/api/product", (req, res) => {
    res.json({message: "Producttt"});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

// module.exports = app;
