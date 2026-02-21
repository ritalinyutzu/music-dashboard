export const tracks = [
  {
    id: 1,
    title: "Midnight Drive",
    artist: "Neon Pulse",
    album: "City Lights",
    duration: 213,
    color: ["#6c3483", "#1a5276"],
  },
  {
    id: 2,
    title: "Golden Hour",
    artist: "The Sunbeams",
    album: "Solstice",
    duration: 187,
    color: ["#d35400", "#f39c12"],
  },
  {
    id: 3,
    title: "Ocean Waves",
    artist: "Blue Horizon",
    album: "Deep Blue",
    duration: 245,
    color: ["#1a5276", "#117a65"],
  },
  {
    id: 4,
    title: "Electric Dreams",
    artist: "Synth Wave",
    album: "Retrograde",
    duration: 198,
    color: ["#512e5f", "#c0392b"],
  },
  {
    id: 5,
    title: "Morning Bloom",
    artist: "Garden Songs",
    album: "Petals",
    duration: 221,
    color: ["#1e8449", "#148f77"],
  },
  {
    id: 6,
    title: "City Rain",
    artist: "Urban Echo",
    album: "Downtown",
    duration: 176,
    color: ["#1f618d", "#2471a3"],
  },
  {
    id: 7,
    title: "Desert Wind",
    artist: "Sandstorm",
    album: "Dunes",
    duration: 234,
    color: ["#784212", "#d4ac0d"],
  },
  {
    id: 8,
    title: "Northern Lights",
    artist: "Arctic Sound",
    album: "Aurora",
    duration: 267,
    color: ["#0e6655", "#6c3483"],
  },
];

export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};
