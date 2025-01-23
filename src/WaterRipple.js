import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const WaveDotsEffect = () => {
    const mountRef = useRef(null); // Ref to hold the DOM element for Three.js canvas
    const scrollYRef = useRef(0);

    useEffect(() => {
        // Initialize scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Geometry for the grid of points (dots)
        const width = 50;
        const depth = 30;
        const divisions = 60; // How many rows and columns of points
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];  
        const inwardOffset = 12;

        //FOR CALCULATING CENTER OPACITY:
        const pi = 3.14159265359;

        // Create grid of points (vertices)
        for (let x = 0; x <= divisions; x++) {
            for (let z = 0; z <= divisions; z++) {
                positions.push((x / divisions) * width - width / 2);  // X position
                positions.push(0);  // Y position (start at 0, will change with waves)
                positions.push(((z / divisions) * depth - depth / 2) + inwardOffset);  // Z position

                // Assign random colors to the points
                colors.push(1);  // R
                colors.push(1);  // G
                colors.push(1);  // B
                
                let pointInCos = (x / divisions)*(2*pi);
                let normalized = (Math.cos(pointInCos) + 1)/2;

                colors.push((1 - ((divisions - z)*0.9 / divisions))*normalized*1.2);
                //colors.push(0.5 - ((divisions - z)*0.5 / divisions));
            }
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));

        // Create material with points (dots) representation
        const material = new THREE.PointsMaterial({
            size: 0.05, // Size of the points
            vertexColors: true, // Use vertex colors for each point
            opacity: 1, // Full opacity by default
            transparent: true, //allow transparency
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Set up camera position
        camera.position.y = 2;
        camera.position.z = 15;

        // Handle window resize
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const onScroll = () => {
            scrollYRef.current = window.scrollY;
        };

        window.addEventListener('resize', onWindowResize);
        window.addEventListener('scroll', onScroll);

        // Animation loop
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);

            const scrollFactor = scrollYRef.current * 0.008;

            camera.position.y = 4 - scrollFactor;  // Move the camera up/down based on scroll
            camera.rotation.x = Math.min(scrollFactor * 0.01, 0.5);  // Tilt the camera as you scroll (adjust this factor for desired tilt)

            // Update the positions of the points to simulate waves
            const positions = points.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const z = positions[i + 2];
                const dist = Math.sqrt(x * x + z * z); // Distance from the center
                positions[i + 1] = Math.sin(dist - time * 0.3) * 0.5; // Adjust Y position to simulate wave
            }

            points.geometry.attributes.position.needsUpdate = true; // Update the geometry

            time += 0.1;
            renderer.render(scene, camera);
        };

        animate(); // Start the animation loop

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('scroll', onScroll);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh', position: 'fixed'}} />;
};

export default WaveDotsEffect;