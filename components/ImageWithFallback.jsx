import React from 'react';

export function ImageWithFallback(props) {
  const { src, alt, fallbackSrc = "https://via.placeholder.com/400x300?text=No+Image", ...rest } = props;

  const handleError = (e) => {
    e.target.src = fallbackSrc;
  };

  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      onError={handleError}
      {...rest}
    />
  );
}
