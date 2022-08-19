import express from "express";
import { nanoid } from "nanoid";
import app from "../server";

const router = express.Router();

const cars = [{ name: "Bugatti", _id: "123" }];

function setupRoutes(app) {
  app.get("/api/v1/cars/:id?", (req, res) => {
    const id = req.params.id;
    if (id) {
      const car = cars.find((car) => car._id === id);
      return res.status(200).json(car);
    }
    res.json(cars);
  });

  app.post("/api/v1/cars", (req, res) => {
    console.log(req.body);
    const newCar = { ...req.body, _id: nanoid() };
    cars.push(newCar);
    res.status(201).send(newCar); //201 CREATED
    // res.status(201).send("CREATED");
  });
}

export default setupRoutes;
