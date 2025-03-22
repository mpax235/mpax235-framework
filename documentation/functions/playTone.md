# playTone
This function plays a tone with the specified length (in seconds), frequency (in Hz), and type. To use this function, use the following code:

`mpaxfw.playTone([frequency], [seconds], [type]);`

Where `frequency` is the frequency you want in Hz, `seconds` for the duration of the frequency in seconds, and `type` for the type it will be.

For example, if the frequency was 1000Hz, the duration was 1 second, and the type was a sine tone, it would be:

`mpaxfw.playTone(1000, 1, 'sine');`

Example: <a href="documentation/functions/examples/playTone/playTone.html">See the example!</a>