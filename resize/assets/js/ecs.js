const gravity = 5;

var sprites = {};

class Sprite {
    constructor(obj = {}) {
        this.image = obj.image ?? $('#error');

        this.position = obj.position ?? new Vector(0, 0);

        this.speed = obj.speed ?? new Vector(0, 0);
        this.velocity = obj.velocity ?? new Vector(5, gravity);

        this.direction = 1;
        
        this.gravity = 0;
    }

    draw() {
        context.translate(this.position.x + (this.direction == -1 ? 16 : 0), this.position.y);
        context.scale(this.direction, 1);
        
        context.drawImage(this.image, 0, 0, 16, 16);
        
        context.resetTransform();
    }

    update() {
        this.direction = Math.sign(this.speed.x) || this.direction;
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y + this.gravity;

        while (this.position.y + 16 >= canvas.height) {
            this.position.y--;
        }
    }
}

draw = function() {
    context.drawImage($('#background'), 0, 0);

    Object.values(sprites).forEach(function(sprite) {
        sprite.update();
        sprite.draw();
    });

    requestAnimationFrame(draw);
}

resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
