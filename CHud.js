function CHud( type, text, camera ) {
  
  this.component = null;
  
  if ( type == "text" ) {
    var componentShapes = THREE.FontUtils.generateShapes( text, { size: 0.2 } );
    var componentGeometry = new THREE.ShapeGeometry( componentShapes );
    var componentMaterial = new THREE.MeshBasicMaterial({color: 0xF0E8CA});
    this.component = new THREE.Mesh( componentGeometry, componentMaterial );
    this.component.position.x = 0;
    this.component.position.y = 0;
    this.component.position.z = 0;
    this.component.up = new THREE.Vector3(0,0,1);
  }
  
}

