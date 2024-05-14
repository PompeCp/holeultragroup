const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 4000;
app.use(express.static(__dirname + "/public/"));
app.use("/hotel", require("./routes/hotel"));
app.use("/habitacion", require("./routes/habitacion"));
app.use("/reservas", require("./routes/reservas"));

app.listen(PORT, () => {
  console.log("localhost:" + PORT);
});
