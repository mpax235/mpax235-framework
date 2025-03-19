async function loadMarkdown(file) {
    const response = await fetch(file);
    const text = await response.text();
    const content = document.getElementById('content');
    content.innerHTML = marked.parse(text);
}

loadMarkdown('documentation/index.md');

document.getElementById('createCanvas').addEventListener('click', () => {
    loadMarkdown('documentation/functions/createCanvas.md');
});

document.getElementById('createObject').addEventListener('click', () => {
    loadMarkdown('documentation/functions/createObject.md');
});

document.getElementById('defineVariable').addEventListener('click', () => {
    loadMarkdown('documentation/functions/defineVariable.md');
});

document.getElementById('discordWebhook').addEventListener('click', () => {
    loadMarkdown('documentation/functions/discordWebhook.md');
});

document.getElementById('lastFM').addEventListener('click', () => {
    loadMarkdown('documentation/functions/lastFM.md');
});

document.getElementById('loadCSS').addEventListener('click', () => {
    loadMarkdown('documentation/functions/loadCSS.md');
});

document.getElementById('loadJS').addEventListener('click', () => {
    loadMarkdown('documentation/functions/loadJS.md');
});

document.getElementById('log').addEventListener('click', () => {
    loadMarkdown('documentation/functions/log.md');
});

document.getElementById('setFavicon').addEventListener('click', () => {
    loadMarkdown('documentation/functions/setFavicon.md');
});

document.getElementById('setWindowTitle').addEventListener('click', () => {
    loadMarkdown('documentation/functions/setWindowTitle.md');
});

document.getElementById('tone').addEventListener('click', () => {
    loadMarkdown('documentation/functions/tone.md');
});

document.getElementById('turnOffCamera').addEventListener('click', () => {
    loadMarkdown('documentation/functions/turnOffCamera.md');
});

document.getElementById('turnOnCamera').addEventListener('click', () => {
    loadMarkdown('documentation/functions/turnOnCamera.md');
});

document.getElementById('windowAlert').addEventListener('click', () => {
    loadMarkdown('documentation/functions/windowAlert.md');
});