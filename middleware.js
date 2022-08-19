import express from "express";

export default function addMiddleware(app) {
  app.use(express.static("public"));

  //parse body
  app.use(express.json());
}
