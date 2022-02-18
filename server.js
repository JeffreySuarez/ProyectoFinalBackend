import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
  { name: "Jeffrey", edad: "42" },
  { name: "Edith", edad: "36" },
  { name: "Esteban", edad: "9" },
  { name: "Cuñada", edad: "32" },
  { name: "dana", edad: "11" },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(8000, () => {
  console.log("Server On");
});
