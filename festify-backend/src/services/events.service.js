export const fetchEvents = async ({ lat, lng, genres }) => {
    return [
      {
        id: "1",
        title: "Afro House Night",
        genre: "Afro House",
        venue: "Downtown Club",
        date: "2026-02-02",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
        distanceKm: 3.1
      },
      {
        id: "2",
        title: "Live Jazz Sessions",
        genre: "Jazz",
        venue: "The Jazz Room",
        date: "2026-02-03",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
        distanceKm: 5.4
      }
    ].filter(event =>
      !genres || genres.length === 0
        ? true
        : genres.includes(event.genre.toLowerCase())
    );
  };
  