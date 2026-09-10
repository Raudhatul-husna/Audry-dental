/* =========================
   ELEMENTS
========================= */

const mobileMenu = document.getElementById('mobileMenu');
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');
const toastBox = document.getElementById('toast');


/* =========================
   MOBILE MENU
========================= */

function openMenu() {
    mobileMenu.style.display = 'block';
}

function closeMenu() {
    mobileMenu.style.display = 'none';
}


/* =========================
   SEARCH
========================= */

function openSearch() {
    searchBox.style.display = 'block';

    setTimeout(() => {
        searchInput.focus();
    }, 100);
}

function closeSearch() {
    searchBox.style.display = 'none';

    searchInput.value = '';

    searchResult.innerHTML =
        'Ketik nama layanan yang ingin dicari.';
}


function findService() {

    const services = [
        'Behel Gigi',
        'Bleaching Gigi',
        'Scaling',
        'Tambal Gigi'
    ];

    const query =
        searchInput.value
            .toLowerCase()
            .trim();

    if (!query) {

        searchResult.innerHTML =
            'Ketik nama layanan yang ingin dicari.';

        return;
    }

    const results =
        services.filter(service =>
            service
                .toLowerCase()
                .includes(query)
        );

    if (results.length > 0) {

        searchResult.innerHTML =
            'Ditemukan: <b>' +
            results.join(', ') +
            '</b>';

    } else {

        searchResult.innerHTML =
            'Layanan tidak ditemukan.';

    }
}


/* =========================
   TOAST
========================= */

function showToast(message) {

    toastBox.textContent = message;

    toastBox.style.display = 'block';

    setTimeout(() => {

        toastBox.style.display = 'none';

    }, 2000);
}


/* =========================
   BOOKING
========================= */

function book(event) {

    event.preventDefault();

    const nama =
        document.getElementById('nama').value;

    const layanan =
        document.getElementById('layanan').value;

    showToast(
        'Appointment berhasil dibuat ✓'
    );

    setTimeout(() => {

        openWhatsApp(nama, layanan);

    }, 700);
}


/* =========================
   WHATSAPP
========================= */

function openWhatsApp(nama, layanan) {

    const message =
        'Halo Audry Dental, saya ingin membuat appointment.%0A%0A' +
        'Nama: ' + encodeURIComponent(nama) + '%0A' +
        'Layanan: ' + encodeURIComponent(layanan);

    const phone =
        '6280000000000';

    const url =
        'https://wa.me/' +
        phone +
        '?text=' +
        message;

    window.open(url, '_blank');
}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {

        closeMenu();
        closeSearch();

    }

});