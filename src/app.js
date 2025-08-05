// xamarth

console.log("Application started...");
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const chars1 = 'ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqr';
const chars2 = '!@#$%^&*!@#$%^&*';

function scrambleEffect() {
    if (!gsap.isTweening(text1) && !gsap.isTweening(text2)) {
        gsap.to(text1, {
            duration: 1,
            scrambleText: {
                text: "Samarth",
                speed: 1,
                chars: chars1
            }
        });
        gsap.to(text2, {
            duration: 1,
            scrambleText: {
                text: ".",
                speed: 1,
                chars: chars2
            }
        });
    }
}

window.onload = () => {
    setTimeout(() => {
        scrambleEffect();
    }, timeout = 2000);
};

// xamarth

function toggle() {
    const body = document.getElementById('body');
    const themeToggleInput = document.getElementById('themeToggle1');
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggleInput.checked = true;
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggleInput.checked = false;
    }
};

// xamarth

function menu() {
    const check = document.getElementById('check');
    const div = document.getElementById("mobMenu");
    if (div.style.opacity === "0") {
        div.setAttribute("style", "opacity:1; height: 100vh; top: 64px; transition: opacity 0.4s ease, height 0.4s ease, top 0.4s ease;");
        check.checked = true;
    } else {
        div.setAttribute("style", "opacity:0; height: 0px; top: 64px; transition: opacity 0.4s ease, height 0.4s ease, top 0.4s ease;");
        check.checked = false;
    }
};

// xamarth
