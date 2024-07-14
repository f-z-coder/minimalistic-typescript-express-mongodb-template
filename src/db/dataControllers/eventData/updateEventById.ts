import eventModel, { EventType } from "@schema/eventSchema.js";
const updateEventById = async (
  eventId: string,
  eventDataToUpdate: EventType
): Promise<EventType | null> => {
  try {
    const updatedEvent = await eventModel
      .findByIdAndUpdate(eventId, eventDataToUpdate, {
        new: true,
      })
      .lean()
      .exec();

    return updatedEvent;
  } catch (error) {
    throw new Error(`Error updating event with id: ${eventId}`);
  }
};

export default updateEventById;
