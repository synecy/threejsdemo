
function CObject( objectType, x, y, z ) {
  
  switch(objectType) {
    case "player":
        var geometry = new THREE.SphereGeometry( .5, 32, 32 );
        var texture = THREE.ImageUtils.loadTexture( "textures/testi.png" );
        var material = new THREE.MeshPhongMaterial({ ambient: 0x333333, 
                                                     //map: texture,
                                                     transparent: true,
                                                     color: 0x607d8b, 
                                                     specular: 0xcfd8dc, 
                                                     shininess: 2, 
                                                     shading: THREE.SmoothShading, 
                                                     wireframe: false,
                                                     fog: true
                                                  });
        var physMaterial = Physijs.createMaterial( material, 0.9, 0.7);
        this.object = new Physijs.SphereMesh(geometry, physMaterial);
        break;
          
   case "ball":
        var geometry = new THREE.SphereGeometry( .5, 32, 32 );
        var texture = THREE.ImageUtils.loadTexture( "textures/testi.png" );
        var material = new THREE.MeshPhongMaterial({ ambient: 0x333333, 
                                                     map: texture,
                                                     transparent: true,
                                                     color: 0x607d8b, 
                                                     specular: 0xcfd8dc, 
                                                     shininess: 2, 
                                                     shading: THREE.SmoothShading, 
                                                     wireframe: false,
                                                     fog: true
                                                  });
        var physMaterial = Physijs.createMaterial( material, 0.8, 0.3);
        this.object = new Physijs.SphereMesh(geometry, physMaterial);
        break;
    
    case "plane":
        var geometry = new THREE.BoxGeometry( 20, 20, 1 );
        var texture = THREE.ImageUtils.loadTexture( "textures/testi.png" );
        var material = new THREE.MeshPhongMaterial({ ambient: 0x333333, 
                                                     map: null,
                                                     transparent: true,
                                                     color: 0x333333, 
                                                     specular: 0xcfd8dc, 
                                                     shininess: 2, 
                                                     shading: THREE.SmoothShading, 
                                                     wireframe: false,
                                                     fog: true
                                                  });
        var physMaterial = Physijs.createMaterial( material, 0.8, 0.3);
        this.object = new Physijs.BoxMesh(geometry, physMaterial, 0);
        break;
    
    case "staticbox":
        var geometry = new THREE.BoxGeometry( .5, .5, .5 );
        var texture = THREE.ImageUtils.loadTexture( "textures/testi.png" );
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;
        var material = new THREE.MeshPhongMaterial({ ambient: 0x333333, 
                                                     //map: texture,
                                                     transparent: true,
                                                     color: 0x607d8b, 
                                                     specular: 0xcfd8dc, 
                                                     shininess: 2, 
                                                     shading: THREE.SmoothShading,
                                                     //side: THREE.DoubleSide,
                                                     wireframe: false,
                                                     fog: true
                                                    });
        var physMaterial = Physijs.createMaterial( material, 0.8, 0.3);
        this.object = new Physijs.BoxMesh(geometry, physMaterial, 0);
        break;
		
    default:
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var texture = THREE.ImageUtils.loadTexture( "textures/testi.png" );
        var material = new THREE.MeshPhongMaterial({ ambient: 0x333333, 
                                                     //map: texture,
                                                     transparent: true,
                                                     color: 0x607d8b, 
                                                     specular: 0xcfd8dc, 
                                                     shininess: 2, 
                                                     shading: THREE.SmoothShading,
                                                     //side: THREE.DoubleSide,
                                                     wireframe: false,
                                                     fog: true
                                                    });
        var physMaterial = Physijs.createMaterial( material, 0.8, 0.3);
        this.object = new Physijs.BoxMesh(geometry, physMaterial);
        break;
  }

  this.object.castShadow = true;
  this.object.receiveShadow = true;
  this.object.position.x = x;
  this.object.position.y = y;
  this.object.position.z = z;
  
  return this.object;
}

