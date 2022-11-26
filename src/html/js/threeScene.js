import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';

import threeTools from './threeTools.js';
console.log('v1.1 threescene.js loaded');

threeTools.init();
threeTools.setBasicCamera();


threeTools.setLighting();
threeTools.makeCube();

window.addEventListener( 'resize', threeTools.onWindowResize );
 
function animate() {
    requestAnimationFrame(animate);
    threeTools.renderer.render(threeTools.scene, threeTools.camera);
}

animate();
