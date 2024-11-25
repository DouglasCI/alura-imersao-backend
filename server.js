import express from "express";
import routes from "./src/routes/route.js";

const PORT = 3000;
const app = express();

app.use(express.static("uploads"));

routes(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});