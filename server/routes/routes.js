import express from "express";
import EventsController from "../controllers/controllers.js";

const router = express.Router();

router.get("/", EventsController.getEvents);

router.get("/:continent", EventsController.getEventsByLocation);

export default router;
