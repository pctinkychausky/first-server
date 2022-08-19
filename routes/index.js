import express from "express";
import { nanoid } from "nanoid";

const router = express.Router();

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
