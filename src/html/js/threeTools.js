
function threeTools() {
    this.theName = "mainTools";
    this.renderer = null;

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
    }

}
export default new threeTools();
