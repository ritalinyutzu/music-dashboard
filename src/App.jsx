import { useState, useEffect, useRef, useCallback } from "react";
import { tracks } from "./data/tracks";
import Sidebar from "./components/Sidebar";
import AlbumArt from "./components/AlbumArt";
import Player from "./components/Player";
import "./App.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const intervalRef = useRef(null);
  const track = tracks[currentIndex];

  const handleNext = useCallback(() => {
    setProgress(0);
    if (isShuffle) {
      setCurrentIndex(Math.floor(Math.random() * tracks.length));
    } else {
      setCurrentIndex((prev) => (prev + 1) % tracks.length);
    }
  }, [isShuffle]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= track.duration) {
            if (!isRepeat) handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentIndex, handleNext, isRepeat, track.duration]);

  const handlePrev = () => {
    if (progress > 3) {
      setProgress(0);
    } else {
      setProgress(0);
      setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    }
  };

  const handleSelectTrack = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSeek = (time) => {
    setProgress(Math.min(Math.max(0, time), track.duration));
  };

  return (
    <div className="app" style={{ "--accent1": track.color[0], "--accent2": track.color[1] }}>
      <Sidebar
        tracks={tracks}
        currentTrack={track}
        onSelectTrack={handleSelectTrack}
      />
      <main className="main">
        <div className="main-content">
          <AlbumArt track={track} />
          <Player
            track={track}
            isPlaying={isPlaying}
            progress={progress}
            volume={volume}
            isShuffle={isShuffle}
            isRepeat={isRepeat}
            onPlayPause={() => setIsPlaying((p) => !p)}
            onNext={handleNext}
            onPrev={handlePrev}
            onSeek={handleSeek}
            onVolumeChange={setVolume}
            onShuffle={() => setIsShuffle((s) => !s)}
            onRepeat={() => setIsRepeat((r) => !r)}
          />
        </div>
      </main>
    </div>
  );
}
