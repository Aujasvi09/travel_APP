const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const hotelDataAddedToDb = require("./routes/dataimport.router");
const categoryDataAddedToDbRouter = require("./routes/categoryimport.router")

const hotelRouter = require("./routes/hotel_router");
const categoryRouter = require("./routes/category_router")
const singleHotelRouter = require("./routes/singlehotel.router")
const authRouter = require("./routes/auth.router")
const wishlistRouter = require("./routes/wishlist.router")

const connectDB = require("./config/dbconfig");
const app = express();
app.use(cors())

const PORT = 3500;

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello.....");
});

app.use("/api/hotelData", hotelDataAddedToDb);
app.use("/api/hotels", hotelRouter);
app.use("/api/categoryData",categoryDataAddedToDbRouter)
app.use("/api/category",categoryRouter)
app.use("/api/hotels",singleHotelRouter)
app.use("/api/auth", authRouter)
app.use("/api/wishlist", wishlistRouter);


mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is Up and Running");
  });
});
