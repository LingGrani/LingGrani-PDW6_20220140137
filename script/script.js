// Memilih elemen-elemen yang dibutuhkan
var bgVideo = document.querySelector(".bgVideo"); // Memilih elemen video latar belakang
var playBtn = document.querySelector(".play"); // Memilih tombol putar
var pauseBtn = document.querySelector(".pause"); // Memilih tombol jeda
var audio = document.querySelector("audio"); // Memilih elemen audio
var soundBar = document.querySelector(".suara"); // Memilih elemen bar suara
var volumeControl = document.getElementById("volumeControl"); // Memilih elemen kontrol volume
var progressBar = document.getElementById("progressBar"); // Memilih elemen bar kemajuan

// Mengatur tombol
function play() {
  audio.play(); // Memulai pemutaran audio
  bgVideo.play(); // Memulai pemutaran video latar belakang
  pauseBtn.style.display = "block"; // Menampilkan tombol jeda
  playBtn.style.display = "none"; // Menyembunyikan tombol putar
}

function pause() {
  audio.pause(); // Memberhentikan pemutaran audio
  bgVideo.pause(); // Memberhentikan pemutaran video latar belakang
  pauseBtn.style.display = "none"; // Menyembunyikan tombol jeda
  playBtn.style.display = "block"; // Menampilkan tombol putar
}

function changeVolume() {
  audio.volume = volumeControl.value; // Mengubah volume audio sesuai dengan nilai kontrol volume
}

function changeProgress() {
  var progressValue = progressBar.value / 100 * audio.duration; // Menghitung nilai kemajuan audio berdasarkan posisi slider
  audio.currentTime = progressValue; // Mengubah waktu pemutaran audio sesuai dengan nilai kemajuan
}

// Mendengarkan perubahan waktu pada audio untuk memperbarui kemajuan
audio.addEventListener('timeupdate', function() {
  var currentTime = audio.currentTime; // Waktu saat ini dalam audio
  var duration = audio.duration; // Durasi total audio
  var progressValue = (currentTime / duration) * 100; // Menghitung nilai kemajuan dalam persentase
  progressBar.value = progressValue; // Memperbarui nilai slider kemajuan
});
