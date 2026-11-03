// Spawn the first popup immediately so you know it works
spawnPopup();

// Then continue spawning new ones every 5 to 10 seconds
setInterval(spawnPopup, random(5000, 10000));

function setup() {
    // Create a transparent canvas that covers the screen without blocking clicks
    let c = createCanvas(windowWidth, windowHeight);
    c.style('position', 'fixed');
    c.style('top', '0');
    c.style('left', '0');
    c.style('z-index', '999998');
    c.style('pointer-events', 'none');
}

function draw() {
    clear();
}

function spawnPopup() {
    let ad = createDiv(`
        <div style="background: #ff4757; color: white; padding: 10px; font-weight: bold; display: flex; justify-content: space-between; align-items: center;">
            <span>⚠️ SPECIAL OFFER! ⚠️</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background:none; border:none; color:white; font-weight:bold; cursor:pointer;">X</button>
        </div>
        <div style="padding: 15px; background: white; color: black; font-family: sans-serif;">
            <p style="margin: 0 0 10px 0;">You've won a virtual prize! Click anywhere to claim nothing!</p>
            <button style="background: #2ed573; color: white; border: none; padding: 8px 15px; cursor: pointer; border-radius: 4px;" onclick="alert('Gotcha!'); this.parentElement.parentElement.remove();">Claim Now</button>
        </div>
    `);

    ad.style('position', 'fixed');
    ad.style('left', random(50, windowWidth - 300) + 'px');
    ad.style('top', random(50, windowHeight - 200) + 'px');
    ad.style('width', '250px');
    ad.style('box-shadow', '0 10px 25px rgba(0,0,0,0.3)');
    ad.style('border-radius', '8px');
    ad.style('overflow', 'hidden');
    ad.style('z-index', '999999');
    ad.style('pointer-events', 'auto');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}