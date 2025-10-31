import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function TimeTunnel({ isActive }) {
  const mountRef = useRef(null);
  const frameRef = useRef({});

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
    camera.position.set(0, 0, 10);

    scene.fog = new THREE.FogExp2(0x000814, 0.008);

    const aLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(aLight);
    const pLight = new THREE.PointLight(0x00e5ff, 0.6, 800);
    pLight.position.set(0, 50, 50);
    scene.add(pLight);

    const rings = new THREE.Group();
    scene.add(rings);

    const ringCount = 90;
    for (let i = 0; i < ringCount; i++) {
      const radius = 2 + i * 0.09;
      const geometry = new THREE.RingGeometry(radius * 0.98, radius, 64, 1);
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.55 + (i / ringCount) * 0.4, 0.8, 0.5),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12 + (i / ringCount) * 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(geometry, mat);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.z = -i * 6;
      rings.add(mesh);
    }

    // Particles
    const particleCount = 1200;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const r = THREE.MathUtils.randFloat(0.2, 18);
      const angle = Math.random() * Math.PI * 2;
      const z = -Math.random() * ringCount * 6;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = Math.sin(angle) * r;
      positions[i * 3 + 2] = z;
      sizes[i] = Math.random() * 2.5 + 0.5;
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const sprite = new THREE.TextureLoader().load(
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><circle cx='8' cy='8' r='8' fill='white'/></svg>"
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.9,
      map: sprite,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.9
    });

    const particlePoints = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlePoints);

    // stars
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 400;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = THREE.MathUtils.randFloatSpread(200);
      starPos[i * 3 + 1] = THREE.MathUtils.randFloatSpread(200);
      starPos[i * 3 + 2] = -Math.random() * 200 - 50;
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starsGeo,
      new THREE.PointsMaterial({ size: 0.8, color: 0xffffff, transparent: true, opacity: 0.65 })
    );
    scene.add(stars);

    // resize
    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);

    // animation state
    let t = 0;
    let forwardBoost = 0;
    let last = performance.now();
    let shakeAmount = 0;

    function animate(now) {
      frameRef.current.requestId = requestAnimationFrame(animate);
      const dt = (now - last) / 1000;
      last = now;
      t += dt;

      // rings rotation
      rings.rotation.z = Math.sin(t * 0.35) * 0.2;
      rings.rotation.y += dt * 0.02;

      // particles move forward
      const pos = particlesGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        pos[idx + 2] += 8 * dt * (0.2 + (i % 10) * 0.01);
        if (pos[idx + 2] > camera.position.z + 10) {
          pos[idx + 2] = -Math.random() * ringCount * 6 - 40;
        }
      }
      particlesGeo.attributes.position.needsUpdate = true;

      // camera idle
      camera.position.x = Math.sin(t * 0.2) * 0.3;
      camera.position.y = Math.cos(t * 0.15) * 0.18;

      // When traveling: ramp up forward movement and apply camera shake
      if (isActive) {
        forwardBoost += dt * 2.5; // ramp
        // stronger forward speed while active
        camera.position.z -= (6 + forwardBoost) * dt * 16;

        // increase shake amount with forwardBoost (cap it)
        shakeAmount = Math.min(1.6, shakeAmount + dt * 3.0);

        // apply camera shake offset
        const shakeX = (Math.random() - 0.5) * shakeAmount * 0.25;
        const shakeY = (Math.random() - 0.5) * shakeAmount * 0.25;
        const shakeZ = (Math.random() - 0.5) * shakeAmount * 0.3;

        camera.position.x += shakeX;
        camera.position.y += shakeY;
        camera.position.z += shakeZ;
      } else {
        // relax
        forwardBoost = Math.max(0, forwardBoost - dt * 4.0);
        shakeAmount = Math.max(0, shakeAmount - dt * 3.0);
        // slowly return camera to z = 10
        if (camera.position.z < 10) {
          camera.position.z += Math.min(2 * dt * 10, 10 - camera.position.z);
        }
      }

      // rotate particle field
      particlePoints.rotation.z += dt * 0.06 * (isActive ? 3 : 1);

      renderer.render(scene, camera);
    }

    last = performance.now();
    frameRef.current.requestId = requestAnimationFrame(animate);

    // cleanup
    return () => {
      cancelAnimationFrame(frameRef.current.requestId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [isActive]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
}
