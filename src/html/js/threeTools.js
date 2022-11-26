import * as THREE from 'three'
import { OrbitControls } from '/three/examples/jsm/controls/OrbitControls'

function threeTools() {
    this.theName = "mainTools";
    this.renderer = null;
    this.scene = null;

    this.init = function () {
        console.log("threeTools initialised");
        const container = document.getElementById('container');
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);
        this.renderer = renderer;
        this.scene = new THREE.Scene();
    }
    this.setLighting = function (scene) {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);
    }
    this.makeCube = function (scene) {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    }

}
export default new threeTools();
