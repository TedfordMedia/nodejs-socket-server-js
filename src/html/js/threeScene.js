console.log('v1.1 threescene.js loaded');

import threeTools from './threeTools.js';
threeTools.init();


const scene = threeTools.scene;
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = threeTools.renderer;

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

threeTools.setLighting(scene);
threeTools.makeCube(scene);

camera.position.z = 5;

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
