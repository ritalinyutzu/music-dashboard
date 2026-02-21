import { formatTime } from "../data/tracks";

export default function Sidebar({ tracks, currentTrack, onSelectTrack }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
        <span className="logo-text">MusicDash</span>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-title">Library</div>
        <ul className="track-list">
          {tracks.map((track, index) => (
            <li
              key={track.id}
              className={`track-item ${currentTrack.id === track.id ? "active" : ""}`}
              onClick={() => onSelectTrack(index)}
            >
              <div
                className="track-thumb"
                style={{
                  background: `linear-gradient(135deg, ${track.color[0]}, ${track.color[1]})`,
                }}
              >
                {currentTrack.id === track.id && (
                  <div className="now-playing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
              <div className="track-meta">
                <span className="track-name">{track.title}</span>
                <span className="track-artist">{track.artist}</span>
              </div>
              <span className="track-duration">{formatTime(track.duration)}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
