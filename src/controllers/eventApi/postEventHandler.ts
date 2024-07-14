import createEvent from "@datacontrollers/eventData/createEvent.js";
import { EVENT_ERROR_MESSAGE } from "@consts/eventConst.js";
import { EventType } from "@schema/eventSchema.js";
import { RequestHandler } from "express";

type RequestParams = {};
type ResponseBody = { result?: EventType; message?: string; error?: string };
type RequestBody = EventType;
type RequestQueryParams = {};

const postEventHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const eventData = req.body;

  try {
    // create a new event
    const event = await createEvent(eventData);
    if (event) {
      return res.status(200).json({ result: event });
    } else {
      return res.status(500).json({ error: EVENT_ERROR_MESSAGE.SERVER_ERROR });
    }
  } catch (error) {
    //pass error to handle in error middleware
    next(error);
  }
};

export default postEventHandler;
