export function GradientMesh() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-40"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      style={{ filter: 'blur(80px)' }}
    >
      <defs>
        <linearGradient id="mesh1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="mesh2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="150" r="300" fill="url(#mesh1)" />
      <circle cx="1000" cy="400" r="350" fill="url(#mesh2)" />
    </svg>
  );
}

export function GradientMeshWarm() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      style={{ filter: 'blur(100px)' }}
    >
      <defs>
        <linearGradient id="meshWarm1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="meshWarm2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="200" r="280" fill="url(#meshWarm1)" />
      <circle cx="1050" cy="300" r="320" fill="url(#meshWarm2)" />
    </svg>
  );
}

export function DecorativeShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-teal-200 rounded-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-cyan-200 rounded-full opacity-15 animate-float" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl opacity-10 transform -rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}

export function WavePattern() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-24 opacity-5"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,50 Q300,30 600,50 T1200,50 L1200,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DottedPattern() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }} />
  );
}
