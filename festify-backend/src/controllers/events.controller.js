import { fetchEvents } from "../services/events.service.js";
import { enhanceWithGemini } from "../services/gemini.service.js";

export const getNearbyEvents = async (req, res) => {
  try {
    const { lat, lng, genres } = req.body;

    if (!lat || !lng) {
      return res.status(400).json({ message: "Location required" });
    }

    const rawEvents = await fetchEvents({ lat, lng, genres });

    const enhancedEvents = await enhanceWithGemini(
      rawEvents,
      genres
    );

    res.json({
      count: enhancedEvents.length,
      events: enhancedEvents
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch events" });
  }
};
