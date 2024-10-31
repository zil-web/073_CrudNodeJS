import express from "express";

const router = express.Router();

const burung = [
    {
        nama: "bangau",
        jenis: "Mycteria cinerea",
        warna: "putih",
        berat: "5-15 kg"
    },
    {
        nama: "bangau",
        jenis: "Yellow-billed Stork (Mycteria ibis)",
        warna: "putih",
        berat: "5-8 kg"
    },
    {
        nama: "bangau",
        jenis: "Painted Stork ( Mycteria leucocephala)",
        warna: "putih",
        berat: "8-10 kg"
    },
    {
        nama: "bangau",
        jenis: "Wood Stork (Mycteria americana)",
        warna: "putih",
        berat: "17-20 kg"
    }
];

router.get("/", (req, res) => {
    res.send(burung);
});

export default router