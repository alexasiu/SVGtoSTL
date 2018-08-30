# SVG to STL Converter

Convert an SVG into an STL model ready to 3D print. Based on the work by [rcalme]. 

### Instructions
The SVG should be composed of layers and each layer name can have any name. To specify the extrusion height, just append to the end of the name *_X* where *X* is the desired height in units of millimeter. For example if I want *Layer 1* to have a height of 30mm then I would change the layer name to *Layer 1_30*.

**Default units are mm.**

### Demo
You can try the tool [hosted directly from github].

### Screenshot


### Known problems
* Can only support shape extrusion, no cuts.
* SVG must have a minimum of 2 layers, even if the layer is empty.
* Fonts need to be converted to outlines. In Illustrator, Type>Create Outline.
* If a primitive shape doesn’t work, try converting it to a Compound Path. Let me know which shape it is that doesn’t work.
* If a shape appears hollow, try toggling the ‘Reverse Winding’ option.

### Requirements
This tool requires javascript support, and a browser that can handle a [WebGL] canvas, and the [File API]. Does not work on Internet Explorer.

### Version
1.0

### Tools Used
This tool makes use of a number of other open source projects:
* [three.js] - For WebGL rendering of a 3D scene
* [d3-threeD] - For converting SVG paths into three.js geometries
* [dat.gui] - For creating the gui interface
* [dat.gui-light-theme] - For changing the default dat.gui appearance
* [flatten.js] - For applying all heirarchical transforms in an SVG to its paths. Updated to be compatible with SVG rectangle and other primitive shapes exported from Illustrator.
* [STLExporter] - For converting a three.js geometry into an ASCII STL file
* [jQuery]

   [dat.gui]: <https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage>
   [dat.gui-light-theme]: <https://github.com/liabru/dat-gui-light-theme>
   [rcalme]: <https://github.com/rcalme/svg-to-stl>
   [printing press]: <https://en.wikipedia.org/wiki/Printing_press>
   [scalable vector graphics]: <https://en.wikipedia.org/wiki/Scalable_Vector_Graphics>
   [stereo-lithography]: <https://en.wikipedia.org/wiki/STL_(file_format)>
   [hosted directly from github]: <http://alexasiu.com/SVGtoSTL/SVGtoSTL.html>
   [example-svg/Entypo]: </example-svg/Entypo>
   [WebGL]: <https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API>
   [File API]: <http://www.w3.org/TR/FileAPI/>
   [three.js]: <https://github.com/mrdoob/three.js>
   [d3-threeD]: <https://github.com/asutherland/d3-threeD>
   [flatten.js]: <https://gist.github.com/timo22345/9413158>
   [STLExporter]: <https://gist.github.com/kjlubick/fb6ba9c51df63ba0951f>
   [Spectrum]: <https://github.com/bgrins/spectrum>
   [jQuery]: <https://jquery.com/>
