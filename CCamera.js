
function CCamera( x, y, z, look_x, look_y, look_z ) {

  this.camera = new THREE.PerspectiveCamera(75,
                                           window.innerWidth/window.innerHeight, 
                                           0.1, 
                                           1000
                                          );
  this.camera.up = new THREE.Vector3(0,0,1);
  
  
  this.camera.position.z = x;
  this.camera.position.x = y;
  this.camera.position.y = z;
  this.camera.lookAt( new THREE.Vector3(look_x, look_y, look_z) );
  
}

