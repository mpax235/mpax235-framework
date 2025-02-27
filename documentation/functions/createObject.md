# createObject
This function creates a HTML element with the specified type, text, name, id, and class name. Exclusive to video elements are width and height. To use this function, use the following code:

`mpawfw.createObject('[elementType]', '[textContent]', '[name]', '[id]', '[classname]', [width], [height]);`

Where `elementType` is the type of element you want, `textContent` for the text content you want, `name` for the name you want, `id` for the id you want, and `classname` for the class name you want.

**Exclusive to Video elements:** `width` is the width you want, and `height` is the height you want.

For example, if you want the element to be `h1`, say `hello mpax235 framework!`, have a name of `Hello World`, have a id of `helloworld`, and have a class name of `helloworldclass` it would be:

`mpaxfw.createObject('h1', 'hello mpax235 framework!', 'Hello World', 'helloworld', 'helloworldclass');`

Example: <a href="documentation/functions/examples/createObject/createObject.html">See the example!</a>