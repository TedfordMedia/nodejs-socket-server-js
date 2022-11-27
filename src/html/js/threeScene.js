import threeTools from './threeTools.js';
import sockClientTools from '../sockClient.js';

var socket = io();
sockClientTools.checkSocketClientBasic(socket);
sockClientTools.checkThreeChat(socket);
threeTools.init();
threeTools.setBasicCamera();
threeTools.setLighting();
threeTools.makeCube();
threeTools.setBackdrop();
threeTools.useOrbitControls();
threeTools.makeMeshFloor();

console.log('v1.1 threescene.js loaded');

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

    threeTools.camera.aspect = window.innerWidth / window.innerHeight;
    threeTools.camera.updateProjectionMatrix();

    threeTools.renderer.setSize(window.innerWidth, window.innerHeight);

}
function animate() {
    requestAnimationFrame(animate);
    threeTools.renderer.render(threeTools.scene, threeTools.camera);
}

animate();
