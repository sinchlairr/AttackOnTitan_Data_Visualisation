
    const loadr = new THREE.FontLoader();

loadr.load( 'files/libraries/aotfont.json', function ( font ) {

	const geometry = new THREE.TextBufferGeometry( "Attack On Titans", {
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

loadr.load( 'files/libraries/aotfont.json', function ( font ) {

const geometry = new THREE.TextBufferGeometry( "Attack On Titans", {
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

loadr.load( 'files/libraries/aotfont.json', function ( font ) {

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

loadr.load( 'files/libraries/aotfont.json', function ( font ) {

const geometry = new THREE.TextBufferGeometry( "Armin Arlert", {
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

fontmesh.position.set(350,80,-300);
scene.add(fontmesh);


} );


loadr.load( 'files/libraries/aotfont.json', function ( font ) {

const geometry = new THREE.TextBufferGeometry( "Levi Ackerman", {
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

fontmesh.position.set(280,480,-500);
scene.add(fontmesh);


} );

loadr.load( 'files/libraries/aotfont.json', function ( font ) {

const geometry = new THREE.TextBufferGeometry( "Zeke Yeager", {
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

fontmesh.position.set(220,500,800);
fontmesh.rotation.y=Math.PI;

scene.add(fontmesh);


} );


loadr.load( 'files/libraries/aotfont.json', function ( font ) {

const geometry = new THREE.TextBufferGeometry( "Mikasa Ackerman", {
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



fontmesh.position.set(-580,330,-100);
scene.add(fontmesh);


} );
