# SVG to STL Converter
Created to enable the 3D printing of plates for a [printing press] from a 2D vector graphic, this tool runs entirely in the local browser. As the name implies, it takes a [scalable vector graphics] \(SVG\) file as input, and produces an ASCII [stereo-lithography] \(STL\) file as output.

### Demo
You can try the tool [hosted directly from github].

### Screenshot
 ![Screenshot](https://github.com/rcalme/svg-to-stl/blob/master/screenshot.png)

### Known problems

### Requirements
This tool requires javascript support, and a browser that can handle a [WebGL] canvas, and the [File API].

### Version


### Tools Used
svg-to-stl makes use of a number of other open source projects:
* [three.js] - For WebGL rendering of a 3D scene
* [d3-threeD] - For converting SVG paths into three.js geometries
* [flatten.js] - For applying all heirarchical transforms in an SVG to its paths
* [STLExporter] - For converting a three.js geometry into an ASCII STL file
* [Spectrum] - For a javascript color-picker
* [jQuery]


   [printing press]: <https://en.wikipedia.org/wiki/Printing_press>
   [scalable vector graphics]: <https://en.wikipedia.org/wiki/Scalable_Vector_Graphics>
   [stereo-lithography]: <https://en.wikipedia.org/wiki/STL_(file_format)>
   [hosted directly from github]: <https://rawgit.com/ryancalme/svg-to-stl/master/SVGtoSTL.html>
   [example-svg/Entypo]: </example-svg/Entypo>
   [WebGL]: <https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API>
   [File API]: <http://www.w3.org/TR/FileAPI/>
   [three.js]: <https://github.com/mrdoob/three.js>
   [d3-threeD]: <https://github.com/asutherland/d3-threeD>
   [flatten.js]: <https://gist.github.com/timo22345/9413158>
   [STLExporter]: <https://gist.github.com/kjlubick/fb6ba9c51df63ba0951f>
   [Spectrum]: <https://github.com/bgrins/spectrum>
   [jQuery]: <https://jquery.com/>
