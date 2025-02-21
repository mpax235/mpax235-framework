/**
 * mpfw (mpax235 Framework) is owned by mpax235.
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
function init() {
    let ver = "1.0";
    console.log('Framework by mpax235. ' + ver);
}

init();

/**
 * MAIN FRAMEWORK CODE
 */
const mpfw = {
    log: function(message) {
        console.log(message);
    },

    createCanvas: function(width, height, color) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.backgroundColor = color;
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

    alertWindow: function(message) {
        window.alert(message);
    },

    loadCSS: function(cssfile) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssfile;
        document.head.appendChild(link);
    },

    defineVariable: function(variable, value) {
        window[variable] = value;
    },

    loadJS: function(jsfile) {
        let script = document.createElement('script');
        script.src = jsfile;
        document.body.appendChild(script);
    },

    createObject: function(elementType, textContent, name, id, classname) {
        let element = document.createElement(elementType);
        if (name) element.setAttribute('name', name);
        if (id) element.id = id;
        if (classname) element.className = classname;
        if (textContent) element.textContent = textContent;
        document.body.appendChild(element);
    },

    discordWebhook: function(url, message) {
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
                    console.log('MPAX235 FRAMEWORK SUCCESS: Discord webhook successful. The message that was sent to the webhook is: ' + message);
                } else {
                    console.error('MPAX235 FRAMEWORK ERROR: Webhook failed with error: ', response.statusText);
                }
            })
            .catch(error => {
                console.error('MPAX235 FRAMEWORK ERROR: Webhook failed with error: ', error);
            });
    }
};
