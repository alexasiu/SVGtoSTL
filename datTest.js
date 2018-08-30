    <script type="text/javascript" src="js/external/dat.gui.min.js"></script>
    <script type="text/javascript">
      var GUIText = function() {
        this.ReverseWinding = true;
        this.ShowWireFrame = false;
        this.ShowEdges = false;
        this.Color = "#108A8A";
      };

       window.onload = function() {
        var paramsSVG = {
          loadSVG : function(e) { 
              console.log("clicked");
              $('#upload_svg').focus().trigger('click'); //.click();
          }
        }
        var paramsSTL = {
          downloadSTL : function(e) { 
              console.log("clicked");
              $('#download_stl').focus().trigger('click'); //.click();
          }
        }

        var text = new GUIText();
        var gui = new dat.GUI();

        gui.add(paramsSVG, 'loadSVG').name('Upload SVG');
        gui.add(paramsSTL, 'downloadSTL').name('Download STL');
        gui.add(text, 'ReverseWinding').name('Reverse winding');
        gui.add(text, 'ShowWireFrame').name('Show wireframe');
        gui.add(text, 'ShowEdges').name('Show edges');
        gui.addColor(text, 'Color');
      };
    </script>