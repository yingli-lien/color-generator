document.getElementById('generate').addEventListener('click', function() {
    const mood = document.getElementById('mood').value;
    const palette = generatePalette(mood);
    displayPalette(palette);
});

function generatePalette(mood) {
    let colors = [];
    switch(mood) {
        case 'happy':
            colors = generateColors(255, 200, 0);
            break;
        case 'sad':
            colors = generateColors(0, 0, 200);
            break;
        case 'calm':
            colors = generateColors(0, 200, 200);
            break;
        case 'energetic':
            colors = generateColors(255, 0, 0);
            break;
    }
    return colors;
}

function generateColors(r, g, b) {
    const palette = [];
    for (let i = 0; i < 5; i++) {
        const color = `rgb(${Math.min(r + i * 10, 255)}, ${Math.min(g + i * 10, 255)}, ${Math.min(b + i * 10, 255)})`;
        palette.push(color);
    }
    return palette;
}

function displayPalette(palette) {
    const paletteDiv = document.getElementById('palette');
    paletteDiv.innerHTML = '';
    palette.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        paletteDiv.appendChild(colorBox);
    });
}
