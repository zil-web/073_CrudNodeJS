import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./routes/mobil.js";
<<<<<<< HEAD
=======
import hewanRoute from "./routes/hewan.js";
import laptopRoute from "./routes/laptop.js";
>>>>>>> a31d0f6c2d9cbc6fe37b48a69afcdef0a688c099

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

<<<<<<< HEAD
app.use("/mobil", mobilRoute)
=======
app.use("/mobil", mobilRoute);
app.use("/hewan", hewanRoute);
app.use("/laptop", (laptopRoute));

>>>>>>> a31d0f6c2d9cbc6fe37b48a69afcdef0a688c099
app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagiiii");
});

app.listen(PORT, () => console.log(
    `Server berjalan di port : http://localhost:${PORT}`));