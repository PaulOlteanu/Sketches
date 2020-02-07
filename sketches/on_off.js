const on_off_sketch = (p) => {
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
        let incrementer = 5;
        for (var radius = 0; radius < 300; radius += incrementer) {
            if (p.random() > 0.5) {
                incrementer += 5;
            }

            let drawing = p.random([true, false]);
            p.beginShape();
            let start_angle = radius / 300 * 360;
            let swap_chance = 1 - p.map(radius / 300, 0, 1, 0.999, 0.95);
            for (var angle = start_angle - 10; angle <= start_angle + 370; angle += 1) {
                if (drawing && p.random() < swap_chance) {
                    p.endShape();
                    drawing = false;
                    continue;
                } else if (!drawing && p.random() < swap_chance) {
                    p.beginShape();
                    drawing = true;
                }

                if (drawing) {
                    let x = radius * p.cos(angle);
                    let y = radius * p.sin(angle);

                    let n = p.noise(x / 200, y / 200);
                    // let n = p.noise(x / 100, y / 100);
                    // let n = p.noise(x / 50, y / 50);

                    n = p.map(n, 0, 1, -1, 1);

                    let noise_strength = radius / 300;

                    x = (radius + 150 * noise_strength * n) * p.cos(angle);
                    y = (radius + 150 * noise_strength * n) * p.sin(angle);

                    p.curveVertex(x + 400, y + 400);
                }
            }
            p.endShape();
        }
    }
};

let on_off = new p5(on_off_sketch, "on-off");
