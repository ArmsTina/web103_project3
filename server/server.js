import express from "express";
import "./config/dotenv.js";
import eventRouter from "./routes/routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use("/events", eventRouter);

app.get("/", (req, res) => {
  res.send(
    '<h1 style="text-align: center; margin-top: 50px;">Hello, Wolrd!</h1>'
  );
});

app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
