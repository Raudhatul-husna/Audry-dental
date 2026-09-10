/* =====================================================
   AUDRY DENTAL — JAVASCRIPT
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const mobileMenu = document.getElementById("mobileMenu");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");
const toastBox = document.getElementById("toast");


/* =====================================================
   MOBILE MENU — GARIS TIGA
===================================================== */

function openMenu() {

    if (!mobileMenu) return;

    mobileMenu.style.display = "block";

    document.body.style.overflow = "hidden";
}


function closeMenu() {

    if (!mobileMenu) return;

    mobileMenu.style.display = "none";

    document.body.style.overflow = "";
}


/* =====================================================
   SEARCH — TOMBOL CARI
===================================================== */

function openSearch() {

    if (!searchBox) return;

    searchBox.style.display = "block";

    document.body.style.overflow = "hidden";

    setTimeout(function () {

        if (searchInput) {
            searchInput.focus();
        }

    }, 150);
}


function closeSearch() {

    if (!searchBox) return;

    searchBox.style.display = "none";

    document.body.style.overflow = "";

    if (searchInput) {
        searchInput.value = "";
    }

    if (searchResult) {

        searchResult.innerHTML =
            "Ketik nama layanan yang ingin dicari.";

    }
}


/* =====================================================
   SEARCH SERVICES
===================================================== */

function findService() {

    if (!searchInput || !searchResult) return;


    const services = [

        "Behel Gigi",
        "Bleaching Gigi",
        "Gigi Tiruan",
        "Gum Lifting",
        "Implant Gigi",
        "Operasi Gigi Bungsu",
        "Penambalan Gigi",
        "Perawatan Saraf Gigi",
        "Rontgen Gigi",
        "Scaling Gigi",
        "Veneer Gigi"

    ];


    const query =
        searchInput.value
        .toLowerCase()
        .trim();


    if (!query) {

        searchResult.innerHTML =
            "Ketik nama layanan yang ingin dicari.";

        return;
    }


    const results =
        services.filter(function(service) {

            return service
                .toLowerCase()
                .includes(query);

        });


    if (results.length > 0) {

        searchResult.innerHTML =
            "Ditemukan: <b>" +
            results.join(", ") +
            "</b>";

    } else {

        searchResult.innerHTML =
            "Layanan tidak ditemukan.";

    }
}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    if (!toastBox) return;


    toastBox.textContent = message;

    toastBox.style.display = "block";


    setTimeout(function() {

        toastBox.style.display = "none";

    }, 2500);
}


/* =====================================================
   BOOKING
===================================================== */

function book(event) {

    event.preventDefault();


    const namaElement =
        document.getElementById("nama");

    const hpElement =
        document.getElementById("hp");

    const layananElement =
        document.getElementById("layanan");


    if (!namaElement || !hpElement || !layananElement) {

        return;

    }


    const nama =
        namaElement.value.trim();

    const hp =
        hpElement.value.trim();

    const layanan =
        layananElement.value;


    if (!nama || !hp || !layanan) {

        showToast(
            "Silakan lengkapi data terlebih dahulu."
        );

        return;
    }


    showToast(
        "Appointment berhasil dibuat ✓"
    );


    setTimeout(function() {

        openWhatsApp(
            nama,
            hp,
            layanan
        );

    }, 700);
}


/* =====================================================
   WHATSAPP
===================================================== */

function openWhatsApp(
    nama,
    hp,
    layanan
) {


    /*
       GANTI NOMOR DI BAWAH
       DENGAN NOMOR WHATSAPP AUDRY DENTAL
    */

    const phone =
        "6280000000000";


    const message =
        "Halo Audry Dental,\n\n" +
        "Saya ingin membuat appointment.\n\n" +
        "Nama: " + nama + "\n" +
        "No. WhatsApp: " + hp + "\n" +
        "Layanan: " + layanan;


    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank"
    );
}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeMenu();

            closeSearch();

        }

    }
);


/* =====================================================
   CLOSE SEARCH WHEN CLICK OUTSIDE
===================================================== */

if (searchBox) {

    searchBox.addEventListener(
        "click",
        function(event) {

            if (event.target === searchBox) {

                closeSearch();

            }

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU WHEN CLICK LINK
===================================================== */

if (mobileMenu) {

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                closeMenu();

            }
        );

    });

}
