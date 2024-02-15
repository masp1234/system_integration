import express from "express";

const app = express();

app.get("/requestFastAPI", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/fastApiData")
    const data = await response.json();
    console.log(data)
    res.send({ message: data });
});

app.get("/expressData", (req, res) => {
    res.send({ message: "express data" })
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));