class Game {
    constructor() {
        this.width;
        this.height;
        this.heart = 3
        this.difficulty = this.selectDifficulty()
        this.countdown = document.getElementById('countdown')
    };
    start() {
        this.getWidthHeight();
        this.selectDifficulty()
        console.log(this.difficulty)
    };
    getWidthHeight = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.spawnPosition(this.width, this.height);
    };
    spawnPosition(width, height) {
        let randomWidth = (Math.floor(Math.random() * width) - 60);
        let randomHeight = (Math.floor(Math.random() * height) - 60);
        if (randomWidth < 0) randomWidth = 0;
        if (randomHeight < 50) randomHeight = 50;
        this.fly(randomWidth, randomHeight)
        console.log(this.difficulty)

    };
    fly(randWidth, randHeight) {
        this.flyVerify()
        const container = document.getElementById('container');
        const fly = document.createElement('img');
        fly.src = 'img/mosca-inv.png';
        fly.style.left = randWidth + 'px';
        fly.style.top = randHeight + 'px';
        fly.style.position = 'absolute'
        fly.id = 'mosca'
        fly.onclick = () => fly.remove()
        container.appendChild(fly);

    }
    flyVerify() {
        const fly = document.getElementById('mosca')
        if (fly) {
            fly.remove()
            if (this.heart <= 0) return window.location.href = "../derrota/index.html"
            document.getElementById('life' + this.heart).src = './img/coracao_vazio.png'
            this.heart--
        }
    }
    timer() {
        setInterval(() => {
            this.countdown.innerText -= 1
            if (this.countdown.innerText < 0) return window.location.href = "../vitoria/index.html"
        }, 1000);
    };
    selectDifficulty(){
        let dif = window.location.search
        dif = dif.replace("?", '')
        console.log(dif)
        if(dif === 'easy') return this.difficulty = 2500
        if(dif == 'moderate') return this.difficulty = 1500
        if(dif == 'hardcore') return this.difficulty = 1000
        if(dif == 'godmode') return this.difficulty = 500
    }
};

const game = new Game