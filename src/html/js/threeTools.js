
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

function threeTools() {
    this.theName = "mainTools";
    this.renderer = null;
    this.scene = null;
    this.objectsGroup = null;
    this.camera = null;
    this.controls = null;
    let zthis = this;

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
        this.objectsGroup = new THREE.Group();
        this.scene.add(this.objectsGroup);

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
        camera.position.z = 6;
        camera.position.y = 3;
        camera.position.x = -2;
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
    this.loadGlb = function (url, x = 1, y = 1, z = 1, scale) {
        const loader = new GLTFLoader();
        loader.load(url, (gltf) => {
            const root = gltf.scene;
            root.position.set(x, y, z);
            root.scale.set(scale, scale, scale);
            this.objectsGroup.add(root);
        });
    }
    this.loadSomeModel = function (msg) {
        console.log('loadSomeModel', msg);
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
    this.giveRandomColor = function () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    this.makeCube = function () {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: this.giveRandomColor() });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(0, 0.5, 0);
        this.objectsGroup.add(cube);
        this.setObjectPositionRandom(cube);
    }
    this.makeSphere = function () {
        const geometry = new THREE.SphereGeometry(.5, 32, 16);
        const material = new THREE.MeshBasicMaterial({ color: this.giveRandomColor() });
        const sphere = new THREE.Mesh(geometry, material);
        this.objectsGroup.add(sphere);
        this.setObjectPositionRandom(sphere);
    }
    this.setObjectPositionRandom = function (obj) {
        obj.position.x = THREE.MathUtils.randFloat(-10, 10);
        obj.position.y = THREE.MathUtils.randFloat(0, 3);
        obj.position.z = THREE.MathUtils.randFloat(-10, 10);
        this.moveCamTargetGsap(obj);
    }

    this.moveCamTargetGsap = function (obj) {

        var t1 = gsap.timeline();
        // t1.to(zthis.camera.position, {
        //     duration: 1,
        //     x: obj.position.x,
        //     y: obj.position.y,
        //     z: obj.position.z - 5,
        //     onUpdate: function () {
        //         zthis.camera.updateProjectionMatrix();
        //         // zthis.controls.update();
        //     }
        // });
        var t2 = gsap.timeline();
        t2.to(zthis.controls.target, {
            duration: 1,
            x: obj.position.x,
            y: obj.position.y,
            z: obj.position.z,
            onUpdate: function () {
                zthis.controls.update();
            }
        });

    }
    this.makeText = function () {
        console.log('i should make text')
    }

}
export default new threeTools();
