
// Scene construction
function CScene() {
  this.scene = new Physijs.Scene(); 
  this.scene.setGravity( new THREE.Vector3( 0, 0, -9.81 ) );
  this.objects = [];
  this.lights = [];
  
  for (x=0;x<5;x++) {
    for (y=0;y<5;y++) {
      var box = new CObject("", x*1.3, y*1.3, 1 );
      this.scene.add(box);
      this.objects.push(box);
    }
  }

  this.sbox = new CObject("staticbox", 0, 0, 2);
  this.scene.add(this.sbox);
  
  var plane = new CObject("plane", 0, 0, 0 );
  this.scene.add( plane );
  this.objects.push( plane );
  
  var ambientLight = new CLighting( "ambient" );
  this.scene.add( ambientLight );
  this.lights.push( ambientLight );
  
  var spotLight = new CLighting( "spot" );
  this.scene.add( spotLight );
  this.lights.push( spotLight );
  
  var pointLight = new CLighting( "point" );
  this.scene.add( pointLight );
  this.lights.push( pointLight );
  
}


