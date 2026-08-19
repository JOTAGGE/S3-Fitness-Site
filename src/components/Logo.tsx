import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`logo ${className}`} aria-label="S3 Fitness">
      <div className="logo-badge" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="logo-badge-svg">
          {/* Badge Dark Circle */}
          <circle cx="50" cy="50" r="48" fill="#1e1e1e" stroke="rgba(255, 222, 0, 0.4)" strokeWidth="2.5" />
          
          {/* Head dot of Orange Figure S */}
          <circle cx="51" cy="18" r="6.5" fill="#FF5A1E" />
          
          {/* Orange Stylized S */}
          <path
            d="M 58 26 C 45 26 40 33 42 42 C 45 50 63 52 61 65 C 59 74 47 76 39 71 C 37 69 39 66 42 67 C 48 70 54 69 55 64 C 57 57 41 55 37 44 C 33 34 44 22 58 22 C 62 22 64 23 65 24 C 66 25 64 26 58 26 Z"
            fill="#FF5A1E"
          />
          
          {/* Yellow 3 character */}
          <path
            d="M 57 32 L 76 32 L 76 43 L 67 49 C 74 51 78 57 77 67 C 76 75 68 81 57 81 L 53 81 L 54 75 L 58 75 C 65 75 70 72 70 66 C 70 60 64 57 56 57 L 56 51 L 67 40 L 57 40 Z"
            fill="#FFDE00"
          />

          {/* Curved/Angled Dynamic FITNESS */}
          <text
            x="50"
            y="91"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12.5"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="0.8"
            fontFamily="'Barlow Condensed', sans-serif"
          >
            FITNESS
          </text>
        </svg>
      </div>
      <div className="logo-brand-text">
        <span className="logo-mark">
          <span className="brand-orange">S</span>
          <span className="brand-yellow">3</span>
        </span>
        <span className="logo-word">FITNESS</span>
      </div>
    </Link>
  );
}