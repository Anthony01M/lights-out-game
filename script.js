document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const size = 5;
    const lights = [];

    for (let i = 0; i < size; i++) {
        lights[i] = [];
        for (let j = 0; j < size; j++) {
            const light = document.createElement('div');
            light.classList.add('light');
            light.dataset.row = i;
            light.dataset.col = j;
            light.addEventListener('click', toggleLights);
            grid.appendChild(light);
            lights[i][j] = light;
        }
    }

    function toggleLights(event) {
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        toggleLight(row, col);
        toggleLight(row - 1, col);
        toggleLight(row + 1, col);
        toggleLight(row, col - 1);
        toggleLight(row, col + 1);
        checkWin();
    }

    function toggleLight(row, col) {
        if (row >= 0 && row < size && col >= 0 && col < size) {
            lights[row][col].classList.toggle('off');
        }
    }

    function checkWin() {
        const allOff = lights.flat().every(light => light.classList.contains('off'));
        if (allOff) {
            alert('You win!');
        }
    }
    
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});