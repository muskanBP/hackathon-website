import React from "react";

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Img({ src, alt, width, height, className }: ImgProps) {
  return <img src={src} alt={alt} width={width} height={height} className={className} />;
}
