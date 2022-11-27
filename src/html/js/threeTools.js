
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// import { OrbitControls } from 'three/addons/controls/OrbitControls'

function threeTools() {
    this.theName = "mainTools";
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.controls = null;

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
    this.setBackdrop = function () {
        this.scene.background = new THREE.Color(0xe0e0e0);
        this.scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);
    }
    this.setBasicCamera = function () {

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        camera.position.y = 5;
        this.camera = camera;
        return camera;
    }
    this.useOrbitControls = function () {

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.listenToKeyEvents(window); // optional
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.target.set(0, 0, 0);
        this.camera.updateProjectionMatrix();
    }
    this.setLighting = function () {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        this.scene.add(directionalLight);
    }
    this.makeMeshFloor = function () {
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        this.scene.add(mesh);

        const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        this.scene.add(grid)
    }
    this.makeCube = function () {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(0, 0.5, 0);
        this.scene.add(cube);
    }
    this.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

}
export default new threeTools();
