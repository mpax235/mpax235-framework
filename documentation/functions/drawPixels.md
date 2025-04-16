# drawPixels
This function draws pixels on a canvas with the specified canvas id, pixel color, position X, position Y, scale X, and Scale Y. To use this function, use the following code:

`mpaxfw.drawPixels('[canvasID]', '[pixelColor]', [posX], [posY], [X], [Y]);`

Where `canvasID` is the canvas ID you want to target, `pixelColor` for the pixel color you want, `posX` for the X you want the position to be, `posY` for the Y you want the position to be, `X` for the width of the pixel(s), and `Y` for the height of the pixel(s).

For example, if you want to target `mpaxCanvas`, the color to be `#ff0000`, the X position to be `50`, the Y position to be `100`, the X scale to be `100`, and the Y scale to be `50`, it would be:

`mpaxfw.drawPixels('mpaxCanvas', '#ff0000', 50, 100, 100, 50);`

Example: <a href="documentation/functions/examples/drawPixels/drawPixels.html">See the example!</a>