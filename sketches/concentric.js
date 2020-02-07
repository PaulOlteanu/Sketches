const concentric_sketch = (p) => {
    p.setup = function() {
        p.createCanvas(800, 800);
        p.angleMode(p.DEGREES);
        p.noFill();
        p.strokeWeight(2);
        p.background(0);
        p.stroke(255);
        p.noLoop();
    }

    p.draw = function() {
        for (var radius = 0; radius < 600; radius += 8) {
            p.beginShape();
            for (var angle = -10; angle <= 100; angle += 1) {
                let x = radius * p.cos(angle);
                let y = radius * p.sin(angle);

                // let n = p.noise(x / 50, y / 100);
                let n = p.map(p.noise(x / 100, y / 40), 0, 1, -1, 1);

                // let noise_strength = (y - radius / 8 + angle) / 10;
                let noise_strength = (y - radius / 2 + angle * 4) / 10;

                x = x + noise_strength / 4 * n;
                y = y + noise_strength * n;

                p.curveVertex(x, y);
            }
            p.endShape();
        }
    }
};

let concentric = new p5(concentric_sketch, "concentric");
