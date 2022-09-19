// @ts-nocheck
let audioEl = document.getElementById("audio");
let videoEl = document.getElementById("video");

let popUpsEl = document.getElementsByClassName("popUps-container")[0];

let preEl = document.getElementsByClassName("pre")[0];
let playEl = document.getElementsByClassName("play")[0];
let nextEl = document.getElementsByClassName("next")[0];

//当前音乐
let currentMusic = "";
//当前音乐index
let currentIndex = () => {
  return musicArr.indexOf(currentMusic) || 1;
};
let preMusic = () => musicArr[currentIndex() - 1];
let nextMusic = () => musicArr[currentIndex() + 1];

//换曲次数
let cahngeCount = 0;

//播放状态
let playStatus = false;

//播放列表
let musicArr = shuffle(ikunMusicArr);
musicArr = shuffle(ikunMusicArr);
currentMusic = ikunMusicArr[Math.floor(Math.random() * ikunMusicArr.length)];
audioEl.src = currentMusic;

//设置播放状态及icon
if (audioEl.paused) {
  playStatus = true;
  playEl.children[0].setAttribute("xlink:href", "#icon-bofang");
} else {
  playEl.children[0].setAttribute("xlink:href", "#icon-zanting");
}

//乱序
function shuffle(arr) {
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
  return arr;
}

//播放点击监听
playEl.addEventListener("click", () => {
  if (audioEl.paused) {
    //暂停中
    videoEl.muted = true;
    audioEl.play();
    playEl.children[0].setAttribute("xlink:href", "#icon-zanting");
  } else {
    //播放中
    audioEl.pause();
    playEl.children[0].setAttribute("xlink:href", "#icon-bofang");
  }
});

//播放完成
audioEl.addEventListener("ended", () => {
  let nextUrl = nextMusic();
  audioEl.src = nextUrl;
  currentMusic = nextUrl;
});

//上一曲点击监听
preEl.addEventListener("click", () => {
  let preUrl = preMusic();
  videoEl.muted = true;
  audioEl.play();
  if (cahngeCount > 10) {
    musicArr = shuffle(ikunMusicArr);
    cahngeCount = 0;
  }
<<<<<<< HEAD
=======
  playEl.children[0].setAttribute("xlink:href", "#icon-zanting");
>>>>>>> 8a865ee (小更改)
  cahngeCount++;
  audioEl.src = preUrl;
  currentMusic = preUrl;
});

//下一曲点击监听
nextEl.addEventListener("click", () => {
  let nextUrl = nextMusic();
  videoEl.muted = true;
  audioEl.play();
  if (cahngeCount > 10) {
    musicArr = shuffle(ikunMusicArr);
    cahngeCount = 0;
  }
<<<<<<< HEAD
=======
  playEl.children[0].setAttribute("xlink:href", "#icon-zanting");
>>>>>>> 8a865ee (小更改)
  cahngeCount++;
  audioEl.src = nextUrl;
  currentMusic = nextUrl;
});

//关闭弹出层 开启视频音乐
popUpsEl.addEventListener("click", () => {
  setTimeout(() => {
    popUpsEl.style.display = "none";
    document.getElementsByClassName("icon-container")[0].style.display = "flex";
    videoEl.currentTime = 0;
    videoEl.play();
  }, 500);
});
