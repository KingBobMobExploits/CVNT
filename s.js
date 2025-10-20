const audio = document.getElementById("bgm");

window.addEventListener("load", () => {
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.warn("Autoplay blocked by browser.");
    });
  }
});
