import express from "express";

const router = express.Router();

const paus = [
    {
        nama: "Paus Biru",
        jenis: "Balaenoptera Musculus",
        warna: "biru",
        berat: " 150 ton"
    },
    {
        nama: "Paus bungkuk",
        jenis: "Megaptera novaeangliae",
        warna: "hitam kebiruan",
        berat: "36.000 kilogram"
    },
    {
        nama: "Paus Sikat Selatan",
        jenis: "Eubalaena Australis",
        warna: "hitam",
        berat: "60 ton"
    },
    {
        nama: "Paus Bryde",
        jenis: "Balaenoptera Edeni",
        warna: "hitam",
        berat: "45 ton"
    }
];

router.get("/", (req, res) => {
    res.send(burung);
});

export default router