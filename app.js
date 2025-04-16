/*
MIT License

Copyright (c) 2025 mpax235

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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

document.getElementById('sendDWebhookMessage').addEventListener('click', () => {
    loadMarkdown('documentation/functions/sendDWebhookMessage.md');
});

document.getElementById('retrieveLastFM').addEventListener('click', () => {
    loadMarkdown('documentation/functions/retrieveLastFM.md');
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

document.getElementById('playTone').addEventListener('click', () => {
    loadMarkdown('documentation/functions/playTone.md');
});

document.getElementById('turnOffCamera').addEventListener('click', () => {
    loadMarkdown('documentation/functions/turnOffCamera.md');
});

document.getElementById('turnOnCamera').addEventListener('click', () => {
    loadMarkdown('documentation/functions/turnOnCamera.md');
});

document.getElementById('alertWindow').addEventListener('click', () => {
    loadMarkdown('documentation/functions/alertWindow.md');
});

document.getElementById('drawPixels').addEventListener('click', () => {
    loadMarkdown('documentation/functions/drawPixels.md');
});