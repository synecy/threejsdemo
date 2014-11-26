
function CLighting( lightType ) {
  
  switch( lightType ) {
    case "ambient":
      this.light = new THREE.AmbientLight(0xffffff);
      break;
      
    case "spot":
      this.light = new THREE.SpotLight( 0xcfd8dc ); 
      this.light.position.set( 100, 1000, 600 ); 
      this.light.castShadow = true; 
      this.light.shadowMapWidth = 8096; 
      this.light.shadowMapHeight = 8096; 
      this.light.shadowCameraNear = 500; 
      this.light.shadowCameraFar = 5000; 
      this.light.shadowCameraFov = 10; 
      this.light.shadowDarkness = 0.6;
      break;
      
    case "point":
      this.light = new THREE.PointLight( 0x00ffff, 3, 10 ); 
      this.light.position.set( 0, 0, 4 ); 
      break;
      
    default:
      this.light = new THREE.AmbientLight( 0x333333 );
      break;
  }
  
  return this.light;
}

