
    const loadr = new THREE.FontLoader();

    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
        const geometry = new THREE.TextBufferGeometry( "CUTE DHAIRUWU", {
            font: font,
            size: 80,
            height: 5,
            // curveSegments: 12,
            // bevelEnabled: true,
            // bevelThickness: 10,
            // bevelSize: 8,
            // bevelOffset: 0,
            // bevelSegments: 5
        } );
        const fontmesh= new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
            color: 'pink',
            metalness:0.0,
            roughness:0.5
        }));
    
        fontmesh.position.set(-300,350,10);
        scene.add(fontmesh);
        
        
    } );
    
   
    
    
    // loadr.load( 'aotfont.json', function ( font ) {
    
    // const geometry = new THREE.TextBufferGeometry( "Click on character to know them", {
    //     font: font,
    //     size: 40,
    //     height: 5,
    //     // curveSegments: 12,
    //     // bevelEnabled: true,
    //     // bevelThickness: 10,
    //     // bevelSize: 8,
    //     // bevelOffset: 0,
    //     // bevelSegments: 5
    // } );
    // const fontmesh= new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    //     color: '#363903',
    //     metalness:0.0,
    //     roughness:0.5
    // }));
    
    // fontmesh.position.set(-310,320,10);
    // scene.add(fontmesh);
    
    
    // } );
    
    
    