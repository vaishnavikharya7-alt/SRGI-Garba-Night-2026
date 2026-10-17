import React from 'react';

interface MandalaPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
  rotate?: boolean;
}

export const MandalaPattern: React.FC<MandalaPatternProps> = ({
  className = '',
  size = 400,
  opacity = 0.2,
  rotate = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${rotate ? 'animate-spin-slow' : ''}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF6E8" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#D9AD58" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C02D91" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Center nucleus */}
      <circle cx="250" cy="250" r="16" stroke="#D9AD58" strokeWidth="2" fill="none" />
      <circle cx="250" cy="250" r="30" stroke="#FF9933" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="250" cy="250" r="48" stroke="#D9AD58" strokeWidth="1.5" />

      {/* 8-fold inner petal ring */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={`petal-${i}`} transform={`rotate(${angle} 250 250)`}>
          <path
            d="M 250 202 C 242 225 242 235 250 250 C 258 235 258 225 250 202 Z"
            stroke="#D9AD58"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="250" cy="195" r="3" fill="#D9AD58" />
        </g>
      ))}

      {/* Middle circular geometric track */}
      <circle cx="250" cy="250" r="90" stroke="#D9AD58" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="250" cy="250" r="110" stroke="#FF9933" strokeWidth="1.5" />

      {/* 16-fold Lotus Petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (360 / 16) * i;
        return (
          <g key={`lotus-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M 250 140 C 235 175 238 210 250 250 C 262 210 265 175 250 140 Z"
              stroke="#D9AD58"
              strokeWidth="1.2"
              fill="rgba(217, 173, 88, 0.03)"
            />
            <path
              d="M 250 140 L 250 190"
              stroke="#FF9933"
              strokeWidth="0.8"
            />
            <circle cx="250" cy="135" r="2.5" fill="#FF9933" />
          </g>
        );
      })}

      {/* Scalloped outer ring */}
      <circle cx="250" cy="250" r="150" stroke="#D9AD58" strokeWidth="1" />
      <circle cx="250" cy="250" r="170" stroke="#C02D91" strokeWidth="1" strokeDasharray="5 5" />

      {/* 24-fold Outer Sun Ray Ornaments */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (360 / 24) * i;
        return (
          <g key={`ray-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M 250 80 Q 242 125 250 170 Q 258 125 250 80"
              stroke="#D9AD58"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="250" cy="72" r="3" fill="#D9AD58" />
            <line x1="250" y1="72" x2="250" y2="55" stroke="#FF9933" strokeWidth="1" />
            <circle cx="250" cy="50" r="1.5" fill="#FFF6E8" />
          </g>
        );
      })}

      {/* Outer framing circle */}
      <circle cx="250" cy="250" r="215" stroke="#D9AD58" strokeWidth="1.5" strokeDasharray="2 6" />
      <circle cx="250" cy="250" r="235" stroke="#D9AD58" strokeWidth="0.8" />
    </svg>
  );
};

export const DandiyaIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dandiya 1 */}
      <rect
        x="6"
        y="38"
        width="6"
        height="46"
        rx="2"
        transform="rotate(-45 6 38)"
        fill="url(#dandiyaGrad1)"
        stroke="#D9AD58"
        strokeWidth="1.2"
      />
      {/* Dandiya 2 */}
      <rect
        x="38"
        y="42"
        width="6"
        height="46"
        rx="2"
        transform="rotate(45 38 42)"
        fill="url(#dandiyaGrad2)"
        stroke="#D9AD58"
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id="dandiyaGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C02D91" />
          <stop offset="50%" stopColor="#D9AD58" />
          <stop offset="100%" stopColor="#FF9933" />
        </linearGradient>
        <linearGradient id="dandiyaGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor="#D9AD58" />
          <stop offset="100%" stopColor="#371451" />
        </linearGradient>
      </defs>
    </svg>
  );
};
