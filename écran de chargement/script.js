const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 200;
canvas.height = 200;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

class Particle {
    constructor(radius, angle) {
        this.radius = radius;
        this.angle = angle;
        this.size = Math.random() * 3 + 1;
        this.speed = 0.02 + Math.random() * 0.02;
        this.color = '#00ffff';

    }
    update() {
        this.angle += this.speed;
        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const particles = [];
const particleCount = 100;
const spinnerRadius = 50;

for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const radius = spinnerRadius + Math.random() * 20;
    particles.push(new Particle(radius, angle));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();
