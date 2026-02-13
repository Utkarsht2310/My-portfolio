import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class EarthCanvas extends Component {
    constructor(props) {
        super(props);
        this.mountRef = React.createRef();
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.controls = null;
        this.animationId = null;
    }

    componentDidMount() {
        this.initScene();
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.animationId);
        if (this.controls) this.controls.dispose();
        if (this.renderer) {
            this.renderer.dispose();
            if (this.mountRef.current && this.renderer.domElement) {
                this.mountRef.current.removeChild(this.renderer.domElement);
            }
        }
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        if (!this.mountRef.current || !this.camera || !this.renderer) return;
        const width = this.mountRef.current.clientWidth;
        const height = this.mountRef.current.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    };

    initScene() {
        const mount = this.mountRef.current;
        if (!mount) return;

        const width = mount.clientWidth;
        const height = mount.clientHeight;

        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 200);
        this.camera.position.set(-4, 3, 6);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;
        mount.appendChild(this.renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(-5, 5, 5);
        this.scene.add(pointLight);

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 2.0;
        this.controls.enablePan = false;
        this.controls.enableZoom = false;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.minPolarAngle = Math.PI / 2;

        // Load GLTF model
        const loader = new GLTFLoader();
        loader.load(
            "./planet/scene.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(2.5, 2.5, 2.5);
                this.scene.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading planet model:", error);
            }
        );

        window.addEventListener("resize", this.handleResize);
        this.animate();
    }

    animate = () => {
        this.animationId = requestAnimationFrame(this.animate);
        if (this.controls) this.controls.update();
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    };

    render() {
        return (
            <div
                ref={this.mountRef}
                style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "350px",
                }}
            />
        );
    }
}

export default EarthCanvas;
