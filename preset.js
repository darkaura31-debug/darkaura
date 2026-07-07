/* ===================================================
   DARKAURA

   File    : preset.js
   Author  : Diyorbek
   Version : 2.0
   Theme   : Dark Purple

   Description:
   Loads preset data from presets.json
   using the URL id parameter.

=================================================== */


/* ===================================================
   URL PARAMETERS
=================================================== */

const params = new URLSearchParams(window.location.search);

const presetId = params.get("id");


/* ===================================================
   LOAD PRESET DATA
=================================================== */

fetch("presets.json")

    .then(response => response.json())

    .then(data => {

        /* Find Current Preset */

        const preset = data.find(item => item.id === presetId);


        /* Preset Not Found */

        if (!preset) {

            document.getElementById("preset-title").textContent =
                "Preset Not Found";

            return;

        }


        /* Thumbnail */

        document.getElementById("preset-thumb").src =
            preset.thumbnail;


        /* Title */

        document.getElementById("preset-title").textContent =
            preset.title;


        /* Description */

        document.getElementById("preset-description").textContent =
            preset.description;


        /* XML Download */

        document.getElementById("xml-btn").href =
            preset.xml;


        /* QR Code */

        document.getElementById("qr-btn").href =
            preset.qr;


        /* Alight Motion Link */

        document.getElementById("link-btn").href =
            preset.link;

    })

    .catch(error => {

        console.error("Preset Loading Error:", error);

    });