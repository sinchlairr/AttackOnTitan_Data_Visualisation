
    const loadr = new THREE.FontLoader();

    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
        const geometry = new THREE.TextBufferGeometry( "Dhairya World", {
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
            color: 'black',
            metalness:0.0,
            roughness:0.5
        }));
    
        fontmesh.position.set(-300,400,10);
        scene.add(fontmesh);
        
        
    } );
    
    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
    const geometry = new THREE.TextBufferGeometry( "Dhairya World", {
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
        color: 'red',
        metalness:0.0,
        roughness:0.5
    }));
    
    fontmesh.position.set(-310,395,10);
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
    
    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
    const geometry = new THREE.TextBufferGeometry( "Eren Yeagar", {
        font: font,
        size: 40,
        height: 5,
        // curveSegments: 12,
        // bevelEnabled: true,
        // bevelThickness: 10,
        // bevelSize: 8,
        // bevelOffset: 0,
        // bevelSegments: 5
    } );
    const fontmesh= new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: '#fefae0',
        metalness:0.0,
        roughness:0.5
    }));
    
    const domEvents= new THREEx.DomEvents(camera,renderer.domElement);
    
         domEvents.addEventListener(fontmesh,'click', event=>{
            // if (!sphereclicked){
            // material.wireframe=false;
            // sphereclicked= true;}
            // else{
            //     material.wireframe=true;
            //     sphereclicked=false;
            // }
            location.href = "files/eren/index.html";
        });
    
    fontmesh.position.set(-100,180,-300);
    
    scene.add(fontmesh);
    
    
    } );
    
    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
    const geometry = new THREE.TextBufferGeometry( "Strong Dhairuwu", {
        font: font,
        size: 35,
        height: 5,
        // curveSegments: 12,
        // bevelEnabled: true,
        // bevelThickness: 10,
        // bevelSize: 8,
        // bevelOffset: 0,
        // bevelSegments: 5
    } );
    const fontmesh= new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: '#fefae0',
        metalness:0.0,
        roughness:0.5
    }));
    
    const domEvents= new THREEx.DomEvents(camera,renderer.domElement);
    
         domEvents.addEventListener(fontmesh,'click', event=>{
            // if (!sphereclicked){
            // material.wireframe=false;
            // sphereclicked= true;}
            // else{
            //     material.wireframe=true;
            //     sphereclicked=false;
            // }
            location.href = "files/armin/index.html";
        });
    
    fontmesh.position.set(600,130,-300);
    fontmesh.rotation.y=200;
    scene.add(fontmesh);
    
    
    } );
    
    
    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
    const geometry = new THREE.TextBufferGeometry( "Dark Dhairuwu", {
        font: font,
        size: 35,
        height: 5,
        // curveSegments: 12,
        // bevelEnabled: true,
        // bevelThickness: 10,
        // bevelSize: 8,
        // bevelOffset: 0,
        // bevelSegments: 5
    } );
    const fontmesh= new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: '#fefae0',
        metalness:0.0,
        roughness:0.5
    }));
    
    const domEvents= new THREEx.DomEvents(camera,renderer.domElement);
    
         domEvents.addEventListener(fontmesh,'click', event=>{
            // if (!sphereclicked){
            // material.wireframe=false;
            // sphereclicked= true;}
            // else{
            //     material.wireframe=true;
            //     sphereclicked=false;
            // }
            location.href = "files/leviack/index.html";
        });
    
    fontmesh.position.set(-100,130,-700);
    scene.add(fontmesh);
    
    
    } );
    
    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
    const geometry = new THREE.TextBufferGeometry( "GLOWUP DHAIRUWU", {
        font: font,
        size: 35,
        height: 5,
        // curveSegments: 12,
        // bevelEnabled: true,
        // bevelThickness: 10,
        // bevelSize: 8,
        // bevelOffset: 0,
        // bevelSegments: 5
    } );
    const fontmesh= new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: '#fefae0',
        metalness:0.0,
        roughness:0.5
    }));
    
    const domEvents= new THREEx.DomEvents(camera,renderer.domElement);
    
         domEvents.addEventListener(fontmesh,'click', event=>{
            // if (!sphereclicked){
            // material.wireframe=false;
            // sphereclicked= true;}
            // else{
            //     material.wireframe=true;
            //     sphereclicked=false;
            // }
            location.href = "files/zeke/index.html";
        });
    
    fontmesh.position.set(220,130,600);
    fontmesh.rotation.y=Math.PI;
    
    scene.add(fontmesh);
    
    
    } );
    
    
    loadr.load( 'files/libraries/poppins.json', function ( font ) {
    
    const geometry = new THREE.TextBufferGeometry( "Cute Dhairuwu", {
        font: font,
        size: 33,
        height: 5,
        // curveSegments: 12,
        // bevelEnabled: true,
        // bevelThickness: 10,
        // bevelSize: 8,
        // bevelOffset: 0,
        // bevelSegments: 5
    } );
    const fontmesh= new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: '#fefae0',
        metalness:0.0,
        roughness:0.5
    }));
    
    var domEvents= new THREEx.DomEvents(camera,renderer.domElement);
    
         domEvents.addEventListener(fontmesh,'click', event=>{
            // if (!sphereclicked){
            // material.wireframe=false;
            // sphereclicked= true;}
            // else{
            //     material.wireframe=true;
            //     sphereclicked=false;
            // }
            location.href = "files/mikasa/index.html";
        });
    
    
    
    fontmesh.position.set(-750,130,100);
    fontmesh.rotation.y=340;
    scene.add(fontmesh);
    
    
    } );
    