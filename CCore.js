



// Init
Physijs.scripts.worker = '/libs/physijs_worker.js';
Physijs.scripts.ammo = '/libs/ammo.js';
var Scene = new CScene();
var Camera = new CCamera( 4, 8, 8, 0, 0, 0 );
var Renderer = new THREE.WebGLRenderer( { antialias: true } );
var Player = new CPlayer();
var Controls = new CControls( Player );
var Hud = new CHud("text", "testing", Camera.camera);

Scene.scene.add(Hud.component);
Scene.scene.add(Player.player);
Scene.scene.add(Camera.camera);
Renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(Renderer.domElement); 
Renderer.shadowMapEnabled = true;
Renderer.shadowMapType = THREE.PCFSoftShadowMap;

var prot = 0;

// Render
function Render() { 
    
  var radius = 3
  var px = Player.player.position.x;
  var py = Player.player.position.y;
  var pz = Player.player.position.z;
  
  var offsetRot = prot * Math.PI / 180;
  var vx = px + radius * Math.cos(offsetRot);
  var vy = py + radius * Math.sin(offsetRot);
  var vz = pz + 1;

  Scene.sbox.position.x = vx;
  Scene.sbox.position.y = vy;
  Scene.sbox.position.z = vz;
  
  if ( prot < 360 ) {
    prot++;
  } else {
    prot = 0;
  }
  
  Hud.component.position.x = Player.player.position.x;
  Hud.component.position.y = Player.player.position.y-0.7;
  Hud.component.position.z = Player.player.position.z+0.8;
  Hud.component.quaternion.copy( Camera.camera.quaternion );
  Hud.component.setRotationFromQuaternion(Camera.camera.quaternion);
  Hud.component.updateMatrix();
  
  Scene.lights[2].position.x = Player.player.position.x;
  Scene.lights[2].position.y = Player.player.position.y;
  Scene.lights[2].position.z = Player.player.position.z;
  
  Camera.camera.lookAt( new THREE.Vector3(Player.player.position.x, Player.player.position.y, Player.player.position.z) );
  
  Camera.camera.position.x = Player.player.position.x+4;
  Camera.camera.position.y = Player.player.position.y+5;
  Camera.camera.position.z = Player.player.position.z+3;
  
  // Teleport player back
  if ( Player.player.position.z < -5 ) {
    Player.player.__dirtyPosition = true;
    Player.player.position.x = 3;
    Player.player.position.y = 3;
    Player.player.position.z = 2.5;
    Player.player.setLinearVelocity( new THREE.Vector3( 0, 0, 0 ) );
    Player.player.setAngularVelocity( new THREE.Vector3( 0, 0, 0) );
  }
  
  Scene.scene.simulate();
  Renderer.render(Scene.scene, Camera.camera); 
  requestAnimationFrame(Render); 
}; 
Render(); // Kickstart


