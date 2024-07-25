document.addEventListener('DOMContentLoaded', (event) => {
    const square = document.getElementById('square');
    const eye1 = document.getElementById('eye1');
    const eye2 = document.getElementById('eye2');
    let topPosition = 100;
    let leftPosition = 100;

    function resetEyes() {
        eye1.style.top = '30px';
        eye1.style.left = '20px';
        eye2.style.top = '30px';
        eye2.style.right = '20px';
    }

    function moveEyes(direction) {
        switch (direction) {
            case 'up':
                eye1.style.top = '20px';
                eye2.style.top = '20px';
                break;
            case 'down':
                eye1.style.top = '40px';
                eye2.style.top = '40px';
                break;
            case 'left':
                eye1.style.left = '10px';
                eye2.style.right = '30px';
                break;
            case 'right':
                eye1.style.left = '30px';
                eye2.style.right = '10px';
                break;
        }
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        switch (key) {
            case 'ArrowUp':
                topPosition -= 10;
                moveEyes('up');
                break;
            case 'ArrowDown':
                topPosition += 10;
                moveEyes('down');
                break;
            case 'ArrowLeft':
                leftPosition -= 10;
                moveEyes('left');
                break;
            case 'ArrowRight':
                leftPosition += 10;
                moveEyes('right');
                break;
        }

        square.style.top = `${topPosition}px`;
        square.style.left = `${leftPosition}px`;
    });

    document.addEventListener('keyup', (event) => {
        resetEyes();
    });
});
