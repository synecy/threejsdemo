
function CControls( Player ) {
  var player = Player.player;
  
  document.addEventListener('keydown', function( event ) {
    switch ( event.keyCode ) {
      case 65: // left
        player.applyImpulse(new THREE.Vector3(0,-1,0), new THREE.Vector3(0,-1,0));
        break;
      case 83: // back
        player.applyImpulse(new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0));
        break;
      case 68: // right
        player.applyImpulse(new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0));
        break;
      case 87: // forward
        player.applyImpulse(new THREE.Vector3(-1,0,0), new THREE.Vector3(-1,0,0));
        break;
      case 32: // space
        if ( player.getLinearVelocity().z < 2 ) {
          player.applyImpulse(new THREE.Vector3(0,0,3), new THREE.Vector3(0,0,1));
        }
        break;
    }
  });
  
  document.addEventListener('keyup', function( event ) {
    switch ( event.keyCode ) {
      case 65: // left
        //player.setLinearVelocity( new THREE.Vector3( 0, 0, 0 ) );
        break;
      case 83: // back
        //player.setLinearVelocity( new THREE.Vector3( 0, 0, 0 ) );
        break;
      case 68: // right
        //player.setLinearVelocity( new THREE.Vector3( 0, 0, 0 ) );
        break;
      case 87: // forward
        //player.setLinearVelocity( new THREE.Vector3( 0, 0, 0 ) );
        break;
      case 32: // space
        break;
    }
  });
  
}
