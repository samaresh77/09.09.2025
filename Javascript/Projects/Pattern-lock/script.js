const paternCanvas = document.getElementById('pattern-canvas');
const ctx = paternCanvas.getContext('2d');
const messageDiv = document.getElementById('message');
const gridSize = 3;
const nodeRadius = 20;
let nodes = [];
let pattern = [];
let isDrawing = false;
let currentPos = null;
let correctPattern = [0, 1, 2, 5, 8]; // Predefined correct pattern

// === Initialize Grid Nodes ===
function initNodes() {
    nodes = [];
    const spacing = paternCanvas.width / (gridSize + 1);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            nodes.push({
                x: spacing * (j + 1),
                y: spacing * (i + 1),
                index: i * gridSize + j,
                selected: false
            });
        }
    }
}

// === Draw Grid and Lines ===
function drawNodes() {
    ctx.clearRect(0, 0, paternCanvas.width, paternCanvas.height);

    // Draw connecting lines
    if (pattern.length > 0) {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgba(0, 162, 255, 0.8)';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        const firstNode = nodes[pattern[0]];
        ctx.moveTo(firstNode.x, firstNode.y);
        for (let i = 1; i < pattern.length; i++) {
            const node = nodes[pattern[i]];
            ctx.lineTo(node.x, node.y);
        }

        // Draw trail line to current mouse position while dragging
        if (isDrawing && currentPos) {
            ctx.lineTo(currentPos.x, currentPos.y);
        }

        ctx.stroke();
    }

    // Draw circular nodes
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.selected ? '#00bfff' : 'lightgray';
        ctx.shadowBlur = node.selected ? 10 : 0;
        ctx.shadowColor = node.selected ? '#00bfff' : 'transparent';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.stroke();
    });
}

// === Detect if user is over a node ===
function getNodeAtPosition(x, y) {
    return nodes.find(node => {
        const dx = node.x - x;
        const dy = node.y - y;
        return Math.sqrt(dx * dx + dy * dy) < nodeRadius;
    });
}

// === Mouse/Touch Handlers ===
function startDrawing(e) {
    isDrawing = true;
    pattern = [];
    currentPos = null;
    nodes.forEach(node => node.selected = false);
    drawNodes();
    handleDrawing(e);
}

function stopDrawing() {
    isDrawing = false;
    currentPos = null;
    checkPattern();
}

function handleDrawing(e) {
    if (!isDrawing) return;
    const rect = paternCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentPos = { x, y };

    const node = getNodeAtPosition(x, y);
    if (node && !node.selected) {
        node.selected = true;
        pattern.push(node.index);
    }

    drawNodes();
}

// === Check Pattern ===
function checkPattern() {
    if (arraysEqual(pattern, correctPattern)) {
        messageDiv.textContent = 'Pattern Correct! Unlocked.';
        messageDiv.style.color = 'limegreen';
        messageDiv.classList.remove('vibrate');
    } else {
        messageDiv.textContent = 'Incorrect Pattern. Try Again.';
        messageDiv.style.color = 'red';
        messageDiv.classList.add('vibrate');
        setTimeout(() => messageDiv.classList.remove('vibrate'), 500);
    }
}

// === Compare Arrays ===
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// === Theme Toggle ===
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '☀️';
document.querySelector('.container').appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.innerHTML = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// === Event Listeners ===
paternCanvas.addEventListener('mousedown', startDrawing);
paternCanvas.addEventListener('mouseup', stopDrawing);
paternCanvas.addEventListener('mousemove', handleDrawing);

// Touch support for mobile
paternCanvas.addEventListener('touchstart', (e) => startDrawing(e.touches[0]));
paternCanvas.addEventListener('touchend', stopDrawing);
paternCanvas.addEventListener('touchmove', (e) => handleDrawing(e.touches[0]));

initNodes();
drawNodes();
