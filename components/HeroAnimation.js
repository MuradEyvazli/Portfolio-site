
"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function HeroAnimation() {
  return (
    <Player
      autoplay
      loop
      src="/animations/hero-animation.json"
      style={{ height: 400, width: 400 }}
    />
  );
}
