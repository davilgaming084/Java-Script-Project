let range_length = document.querySelector("#range");
let number = document.querySelector("#Number");
let Charactar = document.querySelector("#Charactar");
let textinput = document.querySelector("#textinput");
let copyButton = document.querySelector("#copy");
let floatingMessage = document.querySelector("#floating-message");

// Copy to clipboard functionality
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(textinput.value);
});

// Show 8 digit password on page reload
GenratePaword(8);

// Checkbox functionality
number.addEventListener('change', () => {
    number.value = number.checked; // Use checked property
});
Charactar.addEventListener('change', () => {
    Charactar.value = Charactar.checked; // Use checked property
});

// Work after changing range
range_length.addEventListener('change', (e) => {
    GenratePaword(e.target.value);
    showFloatingMessage(); // Show floating message on range change
});

// Generate password function
function GenratePaword(length) {
    document.querySelector("#length").textContent = `Length: ${length}`;
    let finalPass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if (number.value === "true") {
        str += "0123456789";
    }
    if (Charactar.value === "true") {
        str += "~!@#$%^&*()_[]";
    }
    
    for (let index = 0; index < length; index++) {
        let randomNumber = Math.floor(Math.random() * str.length);
        finalPass += str.charAt(randomNumber);
    }
    textinput.value = finalPass;
}




// ---------------------------------------------------------------------------------------------------------------------------------------------------
// styling word by chatgpt 

// Show floating message with animation
function showFloatingMessage() {
    floatingMessage.textContent = "Password Length Changed!";
    floatingMessage.style.opacity = '1';
    floatingMessage.style.visibility = 'visible';
    floatingMessage.style.transform = 'translateY(0)';
    
    gsap.to(floatingMessage, {
        y: -30, // Float up
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
            // Hide after floating
            floatingMessage.style.opacity = '0';
            floatingMessage.style.visibility = 'hidden';
            floatingMessage.style.transform = 'translateY(0)'; // Reset
        }
    });
}


// Initialize GSAP for 3D scrolling effect
gsap.to("#3d-model", {
    y: '+=300', // Adjust for scrolling effect
    repeat: -1,
    duration: 10,
    ease: "none"
});

// Animate UI elements
gsap.from(".container", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

// 3D model integration
let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-model').appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x007bff, wireframe: true });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize the Three.js scene
init();
