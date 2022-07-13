let musics = [
    {title:'All About Tha (Boom!)', wrestler:'Adam Cole', src:'musics/Adam Cole - All About Tha (Boom!).mp3', img:'images/adam.jpeg'},
    {title:'I Bring the Darkness', wrestler:'Baron Corbin', src:'musics/Baron Corbin - I Bring the Darkness.mp3', img:'images/baron.jpeg'},
    {title:'Live In Fear', wrestler:'Bray Wyatt', src:'musics/Bray Wyatt - Live In Fear.mp3', img:'images/bray.jpg'},
    {title:'Born For Greatness', wrestler:'Bryan Danielson', src:'musics/Bryan Danielson - Born For Greatness.mp3', img:'images/bryan.jpg'},
    {title:'Judas', wrestler:'Chris Jericho', src:'musics/Chris Jericho - Judas.mp3', img:'images/jericho.jpg'},
    {title:'Cult of Personality', wrestler:'CM Punk', src:'musics/Cm Punk - Cult of Personality.mp3', img:'images/punk.jpg'},
    {title:'I Fell', wrestler:'Darby Allin', src:'musics/Darby Allin - I Fell.mp3', img:'images/darby.jpeg'},
    {title:'Im Back', wrestler:'Eric Bischoff', src:'musics/Eric Bischoff - Im Back.mp3', img:'images/bischoff.png'},
    {title:'Wild Thing', wrestler:'Jon Moxley', src:'musics/Jon Moxley - Wild Thing.mp3', img:'images/moxley.jpeg'},
    {title:'Battle Cry', wrestler:'Kenny Omega', src:'musics/Kenny Omega - Battle Cry.mp3', img:'images/kenny.jpg'},
    {title:'Ogentroost', wrestler:'Malakai Black', src:'musics/Malakai Black - Ogentroost.mp3', img:'images/malakai.jpg'},
    {title:'Some Bodies Gonna Get It', wrestler:'Mark Henry', src:'musics/Mark Henry - Some Bodies Gonna Get It.mp3', img:'images/mark.jpg'},
    {title:'Better Than You', wrestler:'MJF', src:'musics/MJF - Better Than You.mp3', img:'images/mjf.jpeg'},
    {title:'The Second Comming', wrestler:'Seth Rollins', src:'musics/Seth Rollins - The Second Comming.mp3', img:'images/seth.jpg'},
    {title:'Devil In Your Six', wrestler:'The Good Brothers', src:'musics/The Good Brothers - Devil In Your Six.mp3', img:'images/brothers.jpg'},
    {title:'The Game', wrestler:'Triple H', src:'musics/Triple H - The Game.mp3', img:'images/hhh.jpg'},
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
        indexMusic = 15;
    }
    renderMusic(indexMusic);
});
document.querySelector('.next-button').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 15) {
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