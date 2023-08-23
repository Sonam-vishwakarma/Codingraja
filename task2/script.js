const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const skipButton = document.getElementById('skip');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const songTitleElement = document.getElementById('songTitle');

//add your songs here for previous and next song feature
const songs = ['music1.mp3', 'music2.mp3', 'music3.mp3', 'music4.mp3'];
let currentSongIndex = 0;

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
});

skipButton.addEventListener('click', () => {
  audio.currentTime += 10; // Skip 10 seconds
});

previousButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
});

nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
});

audio.addEventListener('ended', () => {
  playPauseButton.textContent = 'Play';
});

audio.addEventListener('play', () => {
  playPauseButton.textContent = 'Pause';
});

audio.addEventListener('pause', () => {
  playPauseButton.textContent = 'Play';
});

function loadSong(index) {
  audio.src = songs[index];
  songTitleElement.textContent = getSongTitleFromFileName(songs[index]); // Update the song title
}

// Extract the song title from the file name (assuming the file name is in the format "song-title.mp3")
function getSongTitleFromFileName(fileName) {
  const titleWithoutExtension = fileName.slice(0, -4); // Remove the ".mp3" extension
  const titleWithSpaces = titleWithoutExtension.replace(/-/g, ' '); // Replace dashes with spaces
  return titleWithSpaces;
}

function loadSong(index) {
  audio.src = songs[index];
}

// Load the first song initially
loadSong(currentSongIndex);