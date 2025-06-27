function sendToEther() {
  const textarea = document.getElementById('ether-input');
  const sound = document.getElementById('whoosh-sound');
  if (sound) sound.play();
  textarea.style.transition = 'transform 1s ease-in, opacity 1s ease-in';
  textarea.style.transform = 'rotate(720deg) scale(0)';
  textarea.style.opacity = '0';

  setTimeout(() => {
    textarea.value = '';
    textarea.style.transform = '';
    textarea.style.opacity = '';
  }, 1000);
}
