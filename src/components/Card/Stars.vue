<template>
  <div ref="uiStars" :style="starsStyle" class="uiStars" />
</template>
<script setup lang="ts" name="ui-stars">
import { computed, onMounted, ref } from "vue";
import * as THREE from "three";
const props =
  defineProps<{ width: number; height: number; color: string; size: number }>();
let camera;
let scene;
let renderer;
let material;
let mouseX = 0;
let mouseY = 0;
const width = props.width || 500;
const height = props.height || 500;
const uiStars = ref();
let windowHalfX = width / 2;
let windowHalfY = height / 2;
const WH = computed(() => {
  return {
    width: width + "px",
    height: height + "px",
  };
});

const canvas = computed(() => ({
  color: props.color || "#fff",
  size: props.size || 2,
}));
const starsStyle = {
  ...WH.value,
};
onMounted(() => {
  init();
  animate();
});

function init() {
  camera = new THREE.PerspectiveCamera(50, width / height, 5, 2000);
  camera.position.z = 500;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0000ff, 0.001);

  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const size = 2000;

  for (let i = 0; i < 20000; i++) {
    const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;

    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  material = new THREE.PointsMaterial({
    size: canvas.value.size,
    color: canvas.value.color,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  // renderer.setSize(width, height);
  uiStars.value.appendChild(renderer.domElement);

  uiStars.value.style.touchAction = "none";
  uiStars.value.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  windowHalfX = width / 2;
  windowHalfY = height / 2;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function onPointerMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
  camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
  scene.rotation.x += 0.001;
  scene.rotation.y += 0.002;
}
</script>
<style scoped>
.uiStars {
  overflow: hidden;
}
</style>
