// === DATA ANGGOTA ===
const db = {
    '7pm': [
        { name: 'Rakan', role: 'Drummer', quote: 'Teknik Industri 24', ig: 'https://www.instagram.com/rakanmhrdk/', img: 'pict/person/rakan.jpeg' },
        { name: 'Agoy', role: 'Guitarist', quote: 'Teknik Informatika 22', ig: 'https://www.instagram.com/agoy.ay/', img: 'pict/person/agoy.jpeg' },
        { name: 'Pita', role: 'Vocalist', quote: 'Teknik Telekomunikasi 24', ig: 'https://www.instagram.com/alfita_en/', img: 'pict/person/pita.jpeg' },
        { name: 'Reza', role: 'Guitarist', quote: 'Teknik Sistem Energi 24', ig: 'https://www.instagram.com/sahrezapratama/', img: 'pict/person/reza.jpeg' },
        { name: 'Afri', role: 'Keyboardist', quote: 'Teknik Elektro 24', ig: 'https://www.instagram.com/its.afriii_/', img: 'pict/person/afri.png' },
        { name: 'Rein', role: 'Bassist', quote: 'Sains Data 23', ig: 'https://www.instagram.com/reyn.cos/', img: 'pict/person/rein.jpg' },
    ],
    'lunar': [
        { name: 'Agoy', role: 'Bassist', quote: 'Teknik Informatika 22', ig: 'https://www.instagram.com/agoy.ay/', img: 'pict/person/agoy.jpeg' },
        { name: 'Azis', role: 'Vocalist', quote: 'SAP 20', ig: 'https://www.instagram.com/alazssltn/', img: 'pict/person/azis.png' },
        { name: 'Radit', role: 'Keyboardist', quote: 'Teknik Informatika 22', ig: 'https://www.instagram.com/radd.jpeg/', img: 'pict/person/radit.jpg' },
        { name: 'Sulthan', role: 'Drummer', quote: 'Unknown', ig: '#', img: 'pict/person/sulthan.jpg' },
        { name: 'Garlan', role: 'Guitarist', quote: 'Teknik Informatika 22', ig: 'https://www.instagram.com/garlanwijaya_/', img: 'pict/person/garlan.png' },
        { name: 'Raga', role: 'Guitarist', quote: 'Teknik Informatika 19', ig: 'https://www.instagram.com/raga_rasen/', img: 'pict/person/ragan.png' },
    ],
    'pengurus26': [
        { name: 'M. Rakan Mahardika', role: 'Ketua 2026', quote: 'Teknik Industri 24', ig: 'https://www.instagram.com/rakanmhrdk/', img: 'pict/person/rakan.jpeg' },
        { name: 'M. Afriandy', role: 'Wakil Ketua', quote: 'Teknik Elektro 24', ig: 'https://www.instagram.com/its.afriii_/', img: 'pict/person/afri.png' },
        { name: 'Alfita Eryani N.', role: 'Staff', quote: 'Teknik Telekomunikasi 24', ig: 'https://www.instagram.com/alfita_en/', img: 'pict/person/pita.jpeg' },
        { name: 'Sahreza Pratama Putra', role: 'Staff', quote: 'Teknik Sistem Energi 24', ig: 'https://www.instagram.com/sahrezapratama/', img: 'pict/person/reza.jpeg' },
    ],
    'aktif': [
        { name: 'Adhe Rachman', role: 'Guitarist/Bassist', quote: 'SAP 24', ig: 'https://www.instagram.com/pencilgoonnn/', img: 'pict/person/adhe.jpg' },
        { name: 'Daniel putra nugraha', role: 'Keyboardist', quote: 'Unknown', ig: 'https://www.instagram.com/dhan.00_/', img: 'pict/person/daniel.jpg' },
        { name: 'Zahra Ayu Nur Amelia', role: 'Vocalist', quote: 'DKV 24', ig: 'https://www.instagram.com/mau_jd_batman/', img: 'pict/person/mimin.png' },
        { name: 'Habibie', role: 'Violinist', quote: 'DKV 21', ig: 'https://www.instagram.com/_emperor.11_/', img: 'pict/person/habibi.png' },
        { name: 'Albert Christian Sihaloho', role: 'Vocalist', quote: 'Teknik Informatika', ig: 'https://www.instagram.com/michi_chnk/', img: 'pict/person/michi.png' },
    ],
    'demis': [
        { name: 'Perdana Raga Winata', role: 'Ketua 2023', quote: 'Teknik Informatika 19', ig: 'https://www.instagram.com/raga_rasen/', img: 'pict/person/ragan.png' },
        { name: 'Al Azis Sultan R.', role: 'Bamus 2023', quote: 'SAP 20', ig: 'https://www.instagram.com/alazssltn/', img: 'pict/person/azis.png' },
        { name: 'Andreas Alfin Yoga Utama', role: 'Ketua 2024/Bamus 2025', quote: 'Teknik Informatika 22', ig: '#', img: 'pict/person/agoy.jpeg' },
        { name: 'Aulia Rizky S.', role: 'Ketua 2025', quote: 'Sains Data 23', ig: '#', img: 'pict/person/Reinprofile.jpg' },
        { name: 'I Gede Krisna Yoga Saputra.', role: 'Wakil Ketua 2025', quote: 'Teknik Informatika 23', ig: 'https://www.instagram.com/yoga_pepsodent/', img: 'pict/person/yoga.jpg' },
        { name: 'M. Fadhil Hawari', role: 'Bendahara Umum 2025', quote: 'Teknik Informatika 23', ig: 'https://www.instagram.com/hawaricracker/', img: 'pict/person/hawa.jpg' },
        { name: 'Garlan Wijaya', role: 'Ketua Umum 2025', quote: 'Teknik Informatika 22', ig: 'https://www.instagram.com/garlanwijaya_/', img: 'pict/person/garlan.png' },
    ],
    'lulus': [
        { name: 'Perdana Raga Winata', role: 'Guitarist', quote: 'Teknik Informatika 19', ig: 'https://www.instagram.com/raga_rasen/', img: 'pict/person/ragan.png' },
    ],
    'founder': [
        { name: 'Perdana Raga Winata (Raga)', role: 'Guitarist', quote: 'Teknik Informatika 19', ig: 'https://www.instagram.com/raga_rasen/', img: 'pict/person/ragan.png' },
        { name: 'Taka', role: 'Perkusi', quote: 'Unknown', ig: '#', img: 'pict/person/taka.jpg' },
        { name: 'Ferli Andriansyah (Ferly)', role: 'Guitarist', quote: 'Teknik Informatika 20', ig: 'https://www.instagram.com/ferly.ian/', img: 'pict/person/ferly.jpg' },
        { name: 'Al Azis Sultan R. (Azis)', role: 'Vokalist', quote: 'SAP 20', ig: '#', img: 'pict/person/azis.png' }
    ]
};

// --- RENDER KARTU ---
function createCards(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach(m => {
            const imageSrc = m.img ? m.img : 'https://via.placeholder.com/150/ffafcc/ffffff?text=User';
            container.innerHTML += `
                        <a href="${m.ig}" target="_blank" class="member-bio-card">
                            <img src="${imageSrc}" class="bio-photo" alt="${m.name}">
                            <div class="bio-text">
                                <h4>${m.name}</h4>
                                <p style="font-size:0.75rem; color: #ff85a1; font-weight:700;">${m.role}</p>
                                <p style="font-size:0.7rem; color: #666;">"${m.quote}"</p>
                            </div>
                        </a>`;
        });
    } else {
        container.innerHTML = '<p style="text-align:center; width:100%; color:#666;">Data belum tersedia.</p>';
    }
}

// --- OVERLAY ---
function openOverlay(id) {
    if (id === '7pm') createCards(db['7pm'], 'grid-7pm');
    if (id === 'lunar') createCards(db['lunar'], 'grid-lunar');
    if (id === 'members') switchMemberTab('pengurus26', document.querySelector('.cat-btn'));

    document.getElementById('page-' + id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOverlay(id) {
    document.getElementById('page-' + id).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// --- TAB ANGGOTA ---
function switchMemberTab(category, btn) {
    createCards(db[category], 'grid-general');
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

// --- MUSIC PLAYER ---
const audio = document.getElementById('bgMusic');
const btn = document.getElementById('playPause');
const statusText = document.getElementById('statusText');

function togglePlay() {
    if (audio.paused) {
        audio.play().then(() => {
            btn.innerHTML = "⏸";
            btn.classList.add('playing');
            statusText.innerText = "NOW PLAYING";
        });
    } else {
        audio.pause();
        btn.innerHTML = "▶";
        btn.classList.remove('playing');
        statusText.innerText = "PAUSED";
    }
}

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlay();
});

// Autoplay saat interaksi pertama
document.body.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().then(() => {
            btn.innerHTML = "⏸";
            btn.classList.add('playing');
            statusText.innerText = "NOW PLAYING";
        }).catch(e => console.log("Autoplay blocked until interaction"));
    }
}, { once: true });

// --- FITUR KLIK FOTO GALERI (AUTO ZOOM) ---
const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
    img.addEventListener('click', function () {
        // Toggle class 'show-full' saat foto diklik
        this.classList.toggle('show-full');
    });
});

// --- ANIMASI NOT MUSIK ---
const notesContainer = document.getElementById('particles');
const symbols = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];

function createNote() {
    const note = document.createElement('div');
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];

    note.classList.add('music-note');
    note.innerText = symbol;

    const left = Math.random() * 100;
    const size = Math.random() * 20 + 15;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 2;

    note.style.left = left + '%';
    note.style.fontSize = size + 'px';
    note.style.animationDuration = duration + 's';
    note.style.animationDelay = delay + 's';

    const colors = ['rgba(255,255,255,0.7)', 'rgba(255, 175, 204, 0.6)', 'rgba(162, 210, 255, 0.6)'];
    note.style.color = colors[Math.floor(Math.random() * colors.length)];

    notesContainer.appendChild(note);

    setTimeout(() => {
        note.remove();
    }, (duration + delay) * 1000);
}

setInterval(createNote, 800);
for (let i = 0; i < 10; i++) createNote();

