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

//#region Main Framework
/**
 * MAIN FRAMEWORK CODE
 */
const mpaxfw = {
    ver: '1.3.3',
    lastfmArtist: '',
    lastfmName: '',
    lastfmAlbum: '',

    //#region Art
    createCanvas: function(id, width, height, backgroundcolor) {
        let canvas = document.createElement('canvas'); // creates the canvas dom element
        canvas.width = width; // sets the canvas's width to the specified width
        canvas.height = height; // sets the canvas's height to the specified height
        canvas.id = id;
        canvas.style.backgroundColor = backgroundcolor; // sets the canvas's background color to the specified backgroundcolor
        document.body.appendChild(canvas); // appends the canvas dom element to the body dom element
    },

    drawPixels: function(canvasID, pixelColor, posX, posY, X, Y) {
        const canvas = document.getElementById(canvasID);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = pixelColor;
        ctx.fillRect(posX, posY, X, Y);
    },
    //#endregion

    //#region Data
    defineVariable: function(variableName, value) {
        window[variableName] = value; // declares the specified variableName with the specified value
    },

    retrieveLastFM: function(apiKey, username) {
        const key = apiKey; // declares key with the specified apiKey value
    
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(username)}&api_key=${key}&format=json`; // the url that this function will work with
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data?.recenttracks?.track && data.recenttracks.track.length > 0) {
                    const latestTrack = data.recenttracks.track[0];
                    const trackName = latestTrack.name || "Unknown Track"; // get the name property from the url, otherwise set it to 'Unknown Track'
                    const trackArtist = latestTrack.artist['#text'] || "Unknown Artist"; // get the artist's #text property from the url, otherwise set it to 'Unknown Artist'
                    const trackAlbum = latestTrack.album['#text'] || "Unknown Album"; // get the album's #text property from the url, otherwise set it to 'Unknown Album'

                    this.lastfmArtist = trackArtist; // sets lastfmArtist to trackArtist
                    this.lastfmName = trackName; // sets lastfmName to trackName
                    this.lastfmAlbum = trackAlbum; // sets lastfmAlbum to trackAlbum
                    // console.log(`${trackName}, ${trackArtist}, ${trackAlbum}`); // for debugging purposes only
                } else {
                    console.error('MPAX235 FRAMEWORK ERROR: ' + data); // print out a error if the url returns a error
                }
            })
            .catch(error => {
                console.error('MPAX235 FRAMEWORK ERROR: ' + error);
            });
    },

    sendDWebhookMessage: function(url, message) {
        const webhookURL = url; // declares webhookURL with the specified url value
        
        const messageContent = {
            content: message // sets content to the specified message
        };

        fetch(webhookURL, {
            method: 'POST', // sets the method to POST
            headers: {
                'Content-Type': 'application/json', // sets the header to application/json
            },
            body: JSON.stringify(messageContent), // converts messageContent to a JSON string
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
    //#endregion

    //#region Device
    turnOffCamera: function(videoObject) {
        const video = document.getElementById(videoObject); // declares video with the specified videoObject
        const stream = video.srcObject; // gets the camera stream in video
        if (stream) {
            const tracks = stream.getTracks(); // declares tracks with stream's tracks
            tracks.forEach(track => track.stop()); // stops all of the stream's tracks
        }
        video.srcObject = null; // sets the stream to null
        video.load(); // reloads the video
        video.remove(); // destroys the video
    },

    turnOnCamera: async function(width, height, id) {
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }) // sets video to true
                    .then(stream => {
                        const videoElement = document.createElement('video'); // creates the video dom element 
                        videoElement.id = id; // sets videoElement's id to the specified id
                        videoElement.width = width; // sets videoElement's width to the specified width
                        videoElement.height = height; // sets videoElement's height to the specified height
                        videoElement.autoplay = true; // sets videoElement's autoplay to true
                        videoElement.srcObject = stream; // appends the stream to videoElement

                        document.body.appendChild(videoElement); // appends videoElement to the body dom element
                    })
                    .catch(err => {
                        console.error('MPAX235 FRAMEWORK ERROR: ' + err);
                    });
            } else {
                console.error('MPAX235 FRAMEWORK ERROR: Camera not found. Please make sure you have a camera plugged into your system and it is detected.'); // if the browser fails to detect a available camera (possible issues are no cameras being plugged in)
            }
        } catch (error) {
            console.error('MPAX235 FRAMEWORK ERROR: ' + error);
        }
    },
    //#endregion

    //#region Elements
    createObject: function(elementType, textContent, name, id, classname, width, height) {
        let element = document.createElement(elementType); // creates the specified dom element
        if (name) element.setAttribute('name', name); // sets the name to the specified name for the dom element
        if (id) element.id = id; // sets the id to the specified id for the dom element
        if (classname) element.className = classname; // sets the className to the specified classname for the dom element
        if (textContent) element.textContent = textContent; // sets the textContent to the specified textContent for the dom element
        if (elementType.toLowerCase() === 'video') { // if the dom element is a video...
            if (width) element.width = width; // sets the video's width to the specified width
            if (height) element.height = height; // sets the video's height to the specified height
        }
        document.body.appendChild(element); // appends the specified dom element to the body dom element
    },
    //#endregion

    //#region Loaders
    loadCSS: function(cssfile) {
        let link = document.createElement('link'); // creates the link dom element
        link.rel = 'stylesheet'; // sets the link element's rel to stylesheet
        link.href = cssfile; // sets the link element's href to the specified cssfile
        document.head.appendChild(link); // appends the link dom element to the head dom element
    },

    loadJS: function(jsfile) {
        let script = document.createElement('script'); // creates the script dom element
        script.src = jsfile; // sets the script element's src to the specified jsfile
        document.body.appendChild(script); // appends the script dom element to the body dom element
    },
    //#endregion

    //#region I/O
    alertWindow: function(message) {
        window.alert(message); // displays a alert box with the specified message
    },

    log: function(message) {
        console.log(message); // prints in the console with the specified message
    },
    //#endregion

    //#region Setters
    setFavicon: function(faviconImage) {
        const links = document.querySelectorAll("link[rel~='icon']"); // gets all link elements
        links.forEach(link => link.parentNode.removeChild(link)); // removes all link elements

        const favicon = document.createElement('link'); // creates the link dom element
        favicon.rel = 'icon'; // sets the link element's rel to icon
        favicon.href = faviconImage; // sets the link element's href to the specified faviconImage
        document.head.appendChild(favicon); // appends the link dom element to the head dom element
    },

    setWindowTitle: function(windowTitle) {
        document.title = windowTitle; // sets the website's title to the specified windowTitle
    },
    //#endregion

    //#region Sound
    playTone: function(frequency, seconds, type) {
        const hz = frequency; // declares hz with the specified frequency
        const sec = seconds; // declares sec with the specified sec

        if (isNaN(hz) || isNaN(sec) || hz <= 0 || sec <= 0) { // if hz or sec contains nothing, or hz and sec is less than 0..
            console.log('MPAX235 FRAMEWORK ERROR: Please enter valid values for the tone() function.'); // reminds the user to enter valid values
            return; // stop this function
        }

        const audioContext = new (window.AudioContext || window.webkitAudioContext)(); // declares audioContext with a new AudioContext

        const oscillator = audioContext.createOscillator(); // declares oscillator with a new Oscillator inside audioContext
        oscillator.type = type; // sets the oscillator's type to the specified type
        oscillator.frequency.setValueAtTime(hz, audioContext.currentTime); // sets the oscillator's frequency to the specified hz
        oscillator.connect(audioContext.destination); // connects a audio node to the audioContext

        oscillator.start(); // starts the oscillator
        setTimeout(() => oscillator.stop(), sec * 1000); // stop the oscillator when the specified seconds pass
    }
    //#endregion
};
//#endregion

//#region Init
/**
 * INIT CODE
 */
function init() {
    console.log('The mpax235 Framework. Version ' + mpaxfw.ver + '. Made by mpax235.');
}

init();
//#endregion