// Removes all children from a three.js group
function clearGroup(group) {
    for (var i = group.children.length; i >= 0; i--) {
        group.remove(group.children[i]);
    }
}

// Takes an SVG string, and returns a scene to render as a 3D STL
function renderObject(pathWithDepth, scene, group, options) {
    console.log("Rendering 3D object...");

    // Solid Color
    options.color = new THREE.Color( options.objectColor ); 
    options.material = (options.wantInvertedType) ?
        new THREE.MeshLambertMaterial({
          color: options.color,
          emissive: options.color,
        }) :
        new THREE.MeshLambertMaterial({
          color: options.color,
          emissive: options.color,
          side:THREE.DoubleSide});

    // // Create an extrusion from the SVG path shapes
    var svgMesh = getExtrudedSvgObject( pathWithDepth, options, group );

    // // Add the merged geometry to the scene
    group.add( svgMesh );

    // Flip image to keep original svg orientation
    var invertTransform = new THREE.Matrix4().makeScale( -1, 1, 1 );
    svgMesh.applyMatrix( invertTransform );

    // Show the wireframe?
    if(options.wantWireFrame) {
        var wireframe = new THREE.WireframeGeometry( svgMesh.geometry );
        var material = new THREE.LineBasicMaterial( { color: 0xffffff } );
        var line = new THREE.LineSegments( wireframe, material );
        line.applyMatrix( invertTransform );
        group.add( line );
    }
    
    // Show hard edges?
    if(options.wantEdges) {
        var geometry = new THREE.EdgesGeometry( svgMesh.geometry );
        var material = new THREE.LineBasicMaterial( { color: 0xffffff } );
        var lines = new THREE.LineSegments( geometry, material );
        lines.applyMatrix( invertTransform );
        group.add( lines );
    }

};

// Creates a three.js Mesh object out of SVG paths
function getExtrudedSvgObject( pathWithDepth, options, group ) {

    var objUnion;

    var singleGeometry = new THREE.Geometry();

    for (var i = 0; i < pathWithDepth.length; i++) {
        // Turn each SVG path into a three.js shape
        var path = $d3g.transformSVGPath( pathWithDepth[i].path );
        // We may have had the winding order backward.
        var newShapes = path.toShapes(options.svgWindingIsCW);
        // Extrude all the shapes 
        var shapeExtruded = new THREE.ExtrudeGeometry( newShapes, {
                                        depth: pathWithDepth[i].depth,
                                        bevelEnabled: false
                                    });
        // Convert into a mesh
        var shapeMesh = new THREE.Mesh(shapeExtruded, options.material);
        shapeMesh.updateMatrix();
        // Join with existing mesh
        singleGeometry.merge(shapeMesh.geometry, shapeMesh.matrix);
    }

    // Convert geometry to mesh
    objUnion = new THREE.Mesh(singleGeometry, options.material);

    // Center on X/Y origin
    objUnion.geometry.computeBoundingBox();
    boundBox = objUnion.geometry.boundingBox;
    var translateTransform = new THREE.Matrix4().makeTranslation(
        // Half its width left
        -(Math.abs((boundBox.max.x-boundBox.min.x)/2)+boundBox.min.x),
        // Half its height downward
        -(Math.abs((boundBox.max.y-boundBox.min.y)/2)+boundBox.min.y),
        // Don't mess with the depth 
        0 );                    
    objUnion.geometry.applyMatrix( translateTransform );

    // Rotate 180 deg. Different coordinate systems for SVG and three.js?
    var rotateTransform = new THREE.Matrix4().makeRotationZ( Math.PI );
    objUnion.geometry.applyMatrix( rotateTransform );

    // // So that these attributes of the mesh are populated for later
    objUnion.geometry.computeBoundingBox();
    objUnion.geometry.computeBoundingSphere();

    return objUnion;
};

