import threeTools from './threeTools.js';
console.log('v1.1 threescene.js loaded');

threeTools.init();
threeTools.setBasicCamera();
threeTools.setLighting();
threeTools.makeCube();
threeTools.setBackdrop();
threeTools.useOrbitControls();

window.addEventListener( 'resize', threeTools.onWindowResize );
 
function animate() {
    requestAnimationFrame(animate);
    threeTools.renderer.render(threeTools.scene, threeTools.camera);
}

animate();
