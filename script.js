/* ===================================================
   DARKAURA

   File    : script.js
   Author  : Diyorbek
   Version : 3.0

   Description:
   Home Page Script

=================================================== */


/* ===================================================
   PRESET GRID
=================================================== */

const presetGrid = document.getElementById("preset-grid");


/* ===================================================
   LOAD PRESETS
=================================================== */

if (presetGrid) {

    fetch("presets.json")

        .then(response => response.json())

        .then(data => {

            data.forEach(preset => {

                presetGrid.innerHTML += `

                <a
                    href="preset.html?id=${preset.id}"
                    class="preset-card">

                    <div class="preset-image">

                        <img
                            src="${preset.thumbnail}"
                            alt="${preset.title}"
                            class="preset-thumb"
                            loading="lazy">

                        <div class="preset-overlay">

                            <div class="overlay-content">

                                <span>OPEN</span>

                                <i class="fa-solid fa-arrow-right"></i>

                            </div>

                        </div>

                    </div>

                    <div class="preset-info">

                        <h3>${preset.title}</h3>

                    </div>

                </a>

                `;

            });

            initializePresetCards();

        })

        .catch(error => {

            console.error("Preset Loading Error:", error);

        });

}
/* ===================================================
   INITIALIZE PRESET CARDS
=================================================== */

function initializePresetCards() {

    const presetCards = document.querySelectorAll(".preset-card");

    presetCards.forEach(card => {

        card.addEventListener("click", function (e) {

            e.preventDefault();

            const url = this.getAttribute("href");

            /* Click Animation */

            this.classList.add("clicked");

            /* Fade Transition */

            document.body.classList.add("fade-out");

            /* Redirect */

            setTimeout(() => {

                window.location.href = url;

            }, 300);

        });

    });

}
/* ===================================================
   LOADER
=================================================== */

const loader = document.getElementById("loader");
const loadingText = document.getElementById("loading-text");


/* ===================================================
   LOADING TEXT ANIMATION
=================================================== */

if (loadingText) {

    const loadingStates = [

        "Loading.",
        "Loading..",
        "Loading..."

    ];

    let currentState = 0;

    const loadingAnimation = setInterval(() => {

        loadingText.textContent = loadingStates[currentState];

        currentState = (currentState + 1) % loadingStates.length;

    }, 400);


    /* ===============================================
       WINDOW LOADED
    =============================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            clearInterval(loadingAnimation);

            if (loader) {

                loader.classList.add("hide");

            }

        }, 1800);

    });

}