import deleteEventHandler from "@controllers/eventApi/deleteEventHandler.js";
import getEventHandler from "@controllers/eventApi/getEventHandler.js";
import postEventHandler from "@controllers/eventApi/postEventHandler.js";
import putEventHandler from "@controllers/eventApi/putEventHandler.js";
import { Router } from "express";
import { EVENT_CREATE_ENPOINT, EVENT_ID_ENDPOINT } from "@consts/eventConst.js";

const eventRouter = Router();
//endpoint routes for /api/v1/event
eventRouter.post(EVENT_CREATE_ENPOINT, postEventHandler);
eventRouter.get(EVENT_ID_ENDPOINT, getEventHandler);
eventRouter.put(EVENT_ID_ENDPOINT, putEventHandler);
eventRouter.delete(EVENT_ID_ENDPOINT, deleteEventHandler);

export default eventRouter;
