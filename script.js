let musics = [
    {title:'All About Tha (Boom!)', wrestler:'Adam Cole', src:'musics/Adam Cole - All About Tha (Boom!).mp3', img:'images/adam.jpeg'},
    {title:'I Bring the Darkness', wrestler:'Baron Corbin', src:'musics/Baron Corbin - I Bring the Darkness.mp3', img:'images/baron.jpeg'},
    {title:'Im Back', wrestler:'Eric Bischoff', src:'musics/Eric Bischoff - Im Back.mp3', img:'images/bischoff.png'}
];
let music = document.querySelector('audio');
let indexMusic = 0;
let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let nameWrestler = document.querySelector('.description i');

renderMusic(indexMusic);

document.querySelector('.play-button').addEventListener('click', playMusic);
document.querySelector('.pause-button').addEventListener('click', pauseMusic);
music.addEventListener('timeupdate', barProgress)
document.querySelector('.previous-button').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 2;
    }
    renderMusic(indexMusic);
});
document.querySelector('.next-button').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 2) {
        indexMusic = 0;
    }
    renderMusic(indexMusic);
});

function renderMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].title;
        nameWrestler.textContent = musics[index].wrestler;
        image.src = musics[index].img;
        musicDuration.textContent = secToMin(Math.floor(music.duration));
    });
}

function playMusic() {
    music.play();
    document.querySelector('.pause-button').style.display = 'block';
    document.querySelector('.play-button').style.display = 'none';
}

function pauseMusic() {
    music.pause();
    document.querySelector('.pause-button').style.display = 'none';
    document.querySelector('.play-button').style.display = 'block';
}

function barProgress() {
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let elapsedTime = document.querySelector('.start')
    elapsedTime.textContent = secToMin(Math.floor(music.currentTime));
}

function secToMin(seconds) {
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if (secondsField < 10) {
        secondsField = '0' + secondsField;
    }

    return minutesField+ ':' +secondsField;
}