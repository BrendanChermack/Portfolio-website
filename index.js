/*import './style.css'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#obj'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(300, 150);
camera.position.setZ(30);

const loader = new FBXLoader();
loader.load(logical_m_jj.fbx, function(fbx){
        scene.add(logical_m_jj)
    },
    function(err){
        console.log(err)
    }
);

const geometry = new THREE.BoxGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0x01c3d4 } ); 
const logModel = new THREE.Mesh( geometry, material ); scene.add( logical_m_jj );
scene.add(logModel);

function animate(){
    requestAnimationFrame( animate );
    logModel.rotation.x += 0.005;
    logModel.rotation.y += 0.005;
    renderer.render( scene, camera );
}
animate();
*/