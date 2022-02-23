const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.use("/api/product", (req, res) => {
    res.json({message: "Product"});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

// module.exports = app;
