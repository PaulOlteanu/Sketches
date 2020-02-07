const flipper_sketch = (p) => {
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
        let incrementer = 4;
        let prev_side = p.random([0, 1, 2, 3, 4, 5]);
        let prev_len = p.random([1, 2, 3, 4, 5]);

        for (let radius = 0; radius < 300; radius += incrementer) {
            let new_side = p.random([0, 1, 2, 3, 4, 5]);
            let new_len = p.random([1, 2, 3, 4, 5]);

            p.beginShape();
            for (let angle = 60 * new_side; angle <= new_side * 60 + new_len * 60; angle += 0.1) {
                let x = radius * p.cos(angle);
                let y = radius * p.sin(angle);

                p.curveVertex(x + 400, y + 400);

            }
            p.endShape();

            if (new_side % 6 == prev_side % 6 || new_side % 6 == (prev_side + prev_len) % 6) {
                // Line at new_side
                let angle = new_side * 60;
                p.beginShape();
                for (let r = radius - incrementer; r <= radius; r += 0.1) {
                    let x = r * p.cos(angle);
                    let y = r * p.sin(angle);
                    p.curveVertex(x + 400, y + 400);
                }
                p.endShape();
            }

            if ((new_side + new_len) % 6 == prev_side % 6 || (new_side + new_len) % 6 == (prev_side + prev_len) % 6) {
                // Line at new_side + new_len
                let angle = new_side * 60 + new_len * 60;
                p.beginShape();
                for (let r = radius - incrementer; r <= radius; r += 0.1) {
                    let x = r * p.cos(angle);
                    let y = r * p.sin(angle);
                    p.curveVertex(x + 400, y + 400);
                }
                p.endShape();
            }

            if (p.random() > 0.5) {
                incrementer += 4;
            }


            prev_side = new_side;
            prev_len = new_len;
        }
    }
};

let flipper = new p5(flipper_sketch, "flipper");
