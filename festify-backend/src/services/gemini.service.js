import axios from "axios";

export const enhanceWithGemini = async (events, genres) => {
  // For now: simulate Gemini behavior
  return events.map(event => ({
    ...event,
    aiSummary: `A high-energy ${event.genre} experience for music lovers nearby.`,
    relevanceScore: Math.floor(Math.random() * 100)
  }))
  .sort((a, b) => b.relevanceScore - a.relevanceScore);
};
