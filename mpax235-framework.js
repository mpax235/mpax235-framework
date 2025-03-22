/**
 * The mpax235 Framework is owned by mpax235.
 * 
 * MIT License
 * 
 * Copyright (c) 2025 mpax235
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * MAIN FRAMEWORK CODE
 */
const mpaxfw = {
    ver: '1.3.1',
    lastfmArtist: '',
    lastfmName: '',
    lastFmAlbum: '',

    log: function(message) {
        console.log(message);
    },

    createCanvas: function(width, height, backgroundcolor) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.backgroundColor = backgroundcolor;
        document.body.appendChild(canvas);
    },

    setWindowTitle: function(windowTitle) {
        document.title = windowTitle;
    },

    setFavicon: function(faviconImage) {
        const links = document.querySelectorAll("link[rel~='icon']");
        links.forEach(link => link.parentNode.removeChild(link));

        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = faviconImage;
        document.head.appendChild(favicon);
    },

    windowAlert: function(message) {
        window.alert(message);
    },

    loadCSS: function(cssfile) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssfile;
        document.head.appendChild(link);
    },

    defineVariable: function(variableName, value) {
        window[variableName] = value;
    },

    loadJS: function(jsfile) {
        let script = document.createElement('script');
        script.src = jsfile;
        document.body.appendChild(script);
    },

    createObject: function(elementType, textContent, name, id, classname, width, height) {
        let element = document.createElement(elementType);
        if (name) element.setAttribute('name', name);
        if (id) element.id = id;
        if (classname) element.className = classname;
        if (textContent) element.textContent = textContent;
        if (elementType.toLowerCase() === 'video') {
            if (width) element.width = width;
            if (height) element.height = height;
        }
        document.body.appendChild(element);
    },

    sendDWebhookMessage: function(url, message) {
        const webhookURL = url;
        
        const messageContent = {
            content: message
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageContent),
        })
            .then(response => {
                if (response.ok) {
                    console.log('MPAX235 FRAMEWORK SUCCESS: Discord webhook function successful. The message that was sent to the webhook is: ' + message);
                } else {
                    console.error('MPAX235 FRAMEWORK ERROR: Webhook failed with error: ', response.statusText);
                }
            })
            .catch(error => {
                console.error('MPAX235 FRAMEWORK ERROR: Webhook failed with error: ', error);
            });
    },

    turnOnCamera: async function(width, height, id) {
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(stream => {
                        const videoElement = document.createElement('video');
                        videoElement.id = id;
                        videoElement.width = width;
                        videoElement.height = height;
                        videoElement.autoplay = true;
                        videoElement.srcObject = stream;

                        document.body.appendChild(videoElement);
                    })
                    .catch(err => {
                        console.error('MPAX235 FRAMEWORK ERROR: ' + err);
                    });
            } else {
                console.error('MPAX235 FRAMEWORK ERROR: Camera not found. Please make sure you have a camera plugged into your system and it is detected.');
            }
        } catch (error) {
            console.error('MPAX235 FRAMEWORK ERROR: ' + error);
        }
    },

    turnOffCamera: function(videoObject) {
        const video = document.getElementById(videoObject);
        const stream = video.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
        video.srcObject = null;
        video.load();
        video.remove();
    },

    lastFM: function(apiKey, username) {
        const key = apiKey;
    
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(username)}&api_key=${key}&format=json`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data?.recenttracks?.track && data.recenttracks.track.length > 0) {
                    const latestTrack = data.recenttracks.track[0];
                    const trackName = latestTrack.name || "Unknown Track";
                    const trackArtist = latestTrack.artist['#text'] || "Unknown Artist";
                    const trackAlbum = latestTrack.album['#text'] || "Unknown Album";

                    this.lastfmArtist = trackArtist;
                    this.lastfmName = trackName;
                    this.lastFmAlbum = trackAlbum;
                    console.log(`${trackName}, ${trackArtist}, ${trackAlbum}`);
                } else {
                    console.error('MPAX235 FRAMEWORK ERROR: ' + data);
                }
            })
            .catch(error => {
                console.error('MPAX235 FRAMEWORK ERROR: ' + error);
            });
    },

    playTone: function(frequency, seconds, type) {
        const hz = frequency;
        const sec = seconds;

        if (isNaN(hz) || isNaN(sec) || hz <= 0 || sec <= 0) {
            console.log('MPAX235 FRAMEWORK ERROR: Please enter valid values for the tone() function.');
            return;
        }

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        const oscillator = audioContext.createOscillator();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(hz, audioContext.currentTime);
        oscillator.connect(audioContext.destination);

        oscillator.start();
        setTimeout(() => oscillator.stop(), sec * 1000);
    }
};

/**
 * INIT CODE
 */
function init() {
    console.log('The mpax235 Framework. Version ' + mpaxfw.ver + '. Made by mpax235.');
}

init();