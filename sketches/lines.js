const lines_sketch = (p) => {
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
        for (var y = 100; y < 700; y += 10) {
            p.beginShape();
            for (var x = 100; x <= 700; x += 1) {
                let n = p.map(p.noise(x / 60, y / 60), 0, 1, -1, 1);

                var noise_strength;
                if (x < 400) {
                    noise_strength = p.abs(x);
                } else {
                    noise_strength = p.abs(x - 800);
                }

                // var x_noise = x + n;
                var y_noise = y + noise_strength / 20 * n;

                p.curveVertex(x, y_noise);
            }
            p.endShape();
        }
    }
};

let lines = new p5(lines_sketch, "lines");
