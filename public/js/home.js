const NUM_CONFETTI = 250;
let COLORS = [[255, 184, 209], [255, 22, 84], [144, 70, 207], [4, 139, 168], [121, 190, 238]];
const PI_2 = 2 * Math.PI;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let w = 0;
let h = 0;

const resizeWindow = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeWindow, false);

window.onload = () => setTimeout(resizeWindow, 0);

const range = (a, b) => (b - a) * Math.random() + a;

const drawCircle = (x, y, r, style) => {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    context.fill();
};

let xpos = 0.5;

document.onmousemove = (e) => {
    xpos = e.pageX / w;
};

window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    ((callback) => window.setTimeout(callback, 1000 / 60));

class Confetti {
    constructor() {
        this.style = COLORS[Math.floor(range(0, 5))];
        this.rgb = `rgba(${this.style[0]}, ${this.style[1]}, ${this.style[2]}`;
        this.r = Math.floor(range(2, 6));
        this.r2 = 2 * this.r;
        this.replace();
    }

    replace() {
        this.opacity = 0;
        this.dop = 0.03 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        this.vy = 0.7 * this.r + range(-1, 1);
    }

    draw() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.dop;
        if (this.opacity > 1) {
            this.opacity = 1;
            this.dop *= -1;
        }
        if (this.opacity < 0 || this.y > this.ymax) {
            this.replace();
        }
        if (!(0 < this.x < this.xmax)) {
            this.x = (this.x + this.xmax) % this.xmax;
        }
        drawCircle(Math.floor(this.x), Math.floor(this.y), this.r, `${this.rgb}, ${this.opacity})`);
    }
}

let confetti = Array.from({ length: NUM_CONFETTI }, () => new Confetti());

const step = () => {
    window.requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    confetti.forEach(c => c.draw());
};
step()

/*
canvas effect is a recreation of a codepen, originally by Linmiao Xu
Source: https://codepen.io/linrock/pen/nMadjQ
*/