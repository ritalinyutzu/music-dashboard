import { formatTime } from "../data/tracks";

export default function Player({
  track,
  isPlaying,
  progress,
  volume,
  isShuffle,
  isRepeat,
  onPlayPause,
  onNext,
  onPrev,
  onSeek,
  onVolumeChange,
  onShuffle,
  onRepeat,
}) {
  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    onSeek(ratio * track.duration);
  };

  const handleVolume = (e) => {
    onVolumeChange(Number(e.target.value));
  };

  return (
    <div className="player">
      <div className="track-info">
        <h2 className="track-title">{track.title}</h2>
        <p className="track-artist-name">{track.artist} &bull; {track.album}</p>
      </div>

      <div className="progress-section">
        <span className="time-label">{formatTime(progress)}</span>
        <div className="progress-bar" onClick={handleSeek}>
          <div
            className="progress-fill"
            style={{ width: `${(progress / track.duration) * 100}%` }}
          />
          <div
            className="progress-thumb"
            style={{ left: `${(progress / track.duration) * 100}%` }}
          />
        </div>
        <span className="time-label">{formatTime(track.duration)}</span>
      </div>

      <div className="controls">
        <button
          className={`control-btn secondary ${isShuffle ? "active" : ""}`}
          onClick={onShuffle}
          title="Shuffle"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
          </svg>
        </button>

        <button className="control-btn secondary" onClick={onPrev} title="Previous">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>

        <button className="control-btn primary" onClick={onPlayPause} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button className="control-btn secondary" onClick={onNext} title="Next">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>

        <button
          className={`control-btn secondary ${isRepeat ? "active" : ""}`}
          onClick={onRepeat}
          title="Repeat"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
          </svg>
        </button>
      </div>

      <div className="volume-section">
        <svg className="volume-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolume}
          className="volume-slider"
        />
        <span className="volume-label">{volume}%</span>
      </div>
    </div>
  );
}
