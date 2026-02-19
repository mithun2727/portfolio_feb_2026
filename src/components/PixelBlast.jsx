import React, { useEffect, useRef } from 'react';

const PixelBlast = ({
  variant = 'square',
  pixelSize = 3,
  color = '#000000',
  patternScale = 2,
  patternDensity = 1,
  enableRipples = true,
  rippleSpeed = 0.3,
  rippleThickness = 0.1,
  rippleIntensityScale = 1,
  speed = 0.5,
  transparent = true,
  edgeFade = 0.5,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    let animationFrameId;
    let time = 0;

    // Create pixel grid
    const gridSize = pixelSize * patternScale;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += speed * 0.01;

      // Draw pixels
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          // Calculate distance from center for ripple effect
          const centerX = width / 2;
          const centerY = height / 2;
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Ripple animation
          let opacity = patternDensity;
          if (enableRipples) {
            const ripple = Math.sin(distance * rippleThickness - time * rippleSpeed * 10) * rippleIntensityScale;
            opacity = Math.max(0, Math.min(1, patternDensity + ripple * 0.5));
          }

          // Edge fade effect
          if (edgeFade > 0) {
            const edgeDistX = Math.min(x, width - x) / width;
            const edgeDistY = Math.min(y, height - y) / height;
            const edgeDist = Math.min(edgeDistX, edgeDistY) * 2;
            const fadeAmount = Math.pow(edgeDist, 1 / edgeFade);
            opacity *= fadeAmount;
          }

          // Random variation
          const noise = Math.sin(i * 0.5 + j * 0.7 + time) * 0.3 + 0.7;
          opacity *= noise;

          if (opacity > 0.1) {
            ctx.fillStyle = transparent 
              ? `rgba(0, 0, 0, ${opacity * 0.3})` 
              : color;
            
            if (variant === 'square') {
              ctx.fillRect(x, y, pixelSize, pixelSize);
            } else {
              ctx.beginPath();
              ctx.arc(x + pixelSize / 2, y + pixelSize / 2, pixelSize / 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, pixelSize, color, patternScale, patternDensity, enableRipples, rippleSpeed, rippleThickness, rippleIntensityScale, speed, transparent, edgeFade]);

  return (
    <canvas
      ref={canvasRef}
      width={1080}
      height={1080}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default PixelBlast;
