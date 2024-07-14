import deleteEventById from "@datacontrollers/eventData/deleteEventById.js";
import { EVENT_ERROR_MESSAGE } from "@consts/eventConst.js";
import { EventType } from "@schema/eventSchema.js";
import { RequestHandler } from "express";
import mongoose from "mongoose";

//define your type
type RequestParams = { eventId: string };
type ResponseBody = { result?: EventType; message?: string; error?: string };
type RequestBody = {};
type RequestQueryParams = {};

const deleteEventHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const eventId = req.params.eventId;
  // check if event is valid if not it will error cast error
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ error: EVENT_ERROR_MESSAGE.INVALID_EVENT_ID });
  }
  try {
    const event = await deleteEventById(eventId);
    if (event) {
      return res.status(200).json({ result: event });
    } else {
      return res.status(404).json({ error: EVENT_ERROR_MESSAGE.SERVER_ERROR });
    }
  } catch (error) {
    //pass error to handle in error middleware
    next(error);
  }
};
export default deleteEventHandler;
