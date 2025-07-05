const THREE = require('three');

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.getElementById('container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
scene.add(directionalLight);

// Create a rotating cube with "Hello World" effect
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshLambertMaterial({ 
    color: 0x00ff88,
    transparent: true,
    opacity: 0.8
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

// Create floating spheres around the cube
const spheres = [];
for (let i = 0; i < 8; i++) {
    const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const sphereMaterial = new THREE.MeshLambertMaterial({ 
        color: new THREE.Color().setHSL(i / 8, 1, 0.5),
        transparent: true,
        opacity: 0.7
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
    const angle = (i / 8) * Math.PI * 2;
    sphere.position.x = Math.cos(angle) * 4;
    sphere.position.z = Math.sin(angle) * 4;
    sphere.position.y = Math.sin(angle * 2) * 2;
    
    sphere.castShadow = true;
    spheres.push(sphere);
    scene.add(sphere);
}

// Create a ground plane
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshLambertMaterial({ 
    color: 0x999999,
    transparent: true,
    opacity: 0.3
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -3;
plane.receiveShadow = true;
scene.add(plane);

// Position camera
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

// Mouse controls for camera rotation
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
    mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
    
    targetX = mouseX * 0.5;
    targetY = mouseY * 0.5;
});

// Zoom with mouse wheel
document.addEventListener('wheel', (event) => {
    camera.position.multiplyScalar(event.deltaY > 0 ? 1.1 : 0.9);
    camera.position.clampLength(3, 20);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    // Animate floating spheres
    spheres.forEach((sphere, index) => {
        const time = Date.now() * 0.001;
        const angle = (index / 8) * Math.PI * 2 + time;
        
        sphere.position.x = Math.cos(angle) * 4;
        sphere.position.z = Math.sin(angle) * 4;
        sphere.position.y = Math.sin(angle * 2 + time) * 2;
        
        sphere.rotation.x += 0.02;
        sphere.rotation.y += 0.02;
    });
    
    // Smooth camera movement based on mouse
    camera.position.x += (targetX * 8 - camera.position.x) * 0.05;
    camera.position.y += (targetY * 8 + 5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
    
    // Render the scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();

console.log('🎉 Three.js Hello World scene initialized!');
