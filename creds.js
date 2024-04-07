document.addEventListener("DOMContentLoaded", () => {
    const shapes = document.querySelectorAll('.shape');
    const initialOffsetTop = 220;

    shapes.forEach((shape, index) => {
        let velocity = 2;
        let moving = true;
        let movingRight = true;

        shape.style.top = `${initialOffsetTop + index * 80}px`;
        shape.style.left = "0px";

        const move = () => {
            if (!moving) return;

            let position = parseInt(shape.style.left, 10);
            movingRight ? position += velocity : position -= velocity;

            if (position > window.innerWidth) {
                position = -shape.getBoundingClientRect().width;
            } else if (position < -shape.getBoundingClientRect().width) {
                position = window.innerWidth;
            }

            shape.style.left = `${position}px`;
            if (moving) {
                requestAnimationFrame(move);
            }
        };

        shape.addEventListener('click', () => {
            if (moving) {
                moving = false;
            } else {
                moving = true;
                movingRight = !movingRight;
                move();
            }
        });

        move();
    });
});