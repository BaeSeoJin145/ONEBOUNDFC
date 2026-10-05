/* ================================================
   ONEBOUND FC — Main Script
   ================================================ */

// ===== PLAYER DATA =====
const PLAYERS = [
    { number: 3,  name: "YEONJE",    nameKr: "연제",   pos: "DF", posFull: "수비수 (Center Back)", specialty: "공중볼 장악", quote: "수비는 팀의 기둥이다" },
    { number: 4,  name: "YUPIL",     nameKr: "유필",   pos: "DF", posFull: "수비수 (Center Back)", specialty: "정확한 태클", quote: "흔들리지 않는 벽이 되겠다" },
    { number: 5,  name: "JIHUN",     nameKr: "지훈",   pos: "DF", posFull: "수비수 (Full Back)", specialty: "빌드업 플레이", quote: "수비에서 시작하는 공격" },
    { number: 6,  name: "JOOYEONG", nameKr: "주영",   pos: "MF", posFull: "미드필더 (Defensive Mid)", specialty: "볼 탈취 & 배급", quote: "중원을 지배하는 자가 경기를 지배한다" },
    { number: 7,  name: "BEOMCHANG", nameKr: "범창",  pos: "FW", posFull: "공격수 (Winger)", specialty: "드리블 돌파", quote: "속도로 승부한다" },
    { number: 8,  name: "YEONWOO",  nameKr: "연우",   pos: "MF", posFull: "미드필더 (Central Mid)", specialty: "경기 운영 & 패스", quote: "팀의 심장이 되겠다" },
    { number: 9,  name: "SIWOO",    nameKr: "시우",   pos: "FW", posFull: "공격수 (Striker)", specialty: "결정적 골 결정력", quote: "골이 나의 언어다" },
    { number: 10, name: "JINSOO",   nameKr: "진수",   pos: "MF", posFull: "미드필더 (Attacking Mid)", specialty: "킬패스 & 프리킥", quote: "10번의 무게를 짊어진다" },
    { number: 11, name: "YEJUN",    nameKr: "예준",   pos: "FW", posFull: "공격수 (Winger)", specialty: "속도 & 크로스", quote: "측면에서 기회를 만든다" },
    { number: 12, name: "DONGGYUN", nameKr: "동균",   pos: "MF", posFull: "미드필더 (Box-to-Box)", specialty: "공수 전환", quote: "끝까지 뛰는 게 실력이다" },
    { number: 20, name: "SIWOO",    nameKr: "시우",   pos: "DF", posFull: "수비수 (Full Back)", specialty: "오버래핑 & 수비 안정", quote: "좌측 라인은 내가 지킨다" },
    { number: 22, name: "MINGYO",   nameKr: "민교",   pos: "FW", posFull: "공격수 (Second Striker)", specialty: "공간 침투", quote: "보이지 않는 곳에서 나타난다" },
    { number: 66, name: "SEOJIN",   nameKr: "서진",   pos: "MF", posFull: "미드필더 (Playmaker)", specialty: "게임 메이킹 & 비전", quote: "경기를 읽는 눈이 무기다" },
    { number: 95, name: "SEOKHO",   nameKr: "석호",   pos: "DF", posFull: "수비수 (Center Back)", specialty: "리더십 & 몸싸움", quote: "최후방에서 팀을 이끈다" },
    { number: 99, name: "SEOJUN",   nameKr: "서준",   pos: "FW", posFull: "공격수 (Striker)", specialty: "파워 슈팅", quote: "골대가 보이면 쏜다" },
];

// Generate pseudo-random stats per player (seeded by number for consistency)
function generateStats(player) {
    const seed = player.number;
    const r = (min, max, offset = 0) => {
        const val = ((seed * 17 + offset * 31) % 40) + 55;
        return Math.min(max, Math.max(min, val));
    };
    if (player.pos === 'FW') {
        return [
            { label: "슈팅", value: r(70, 95, 1) },
            { label: "속도", value: r(65, 92, 2) },
            { label: "드리블", value: r(60, 90, 3) },
            { label: "체력", value: r(55, 85, 4) },
            { label: "패스", value: r(50, 80, 5) },
        ];
    } else if (player.pos === 'MF') {
        return [
            { label: "패스", value: r(70, 95, 1) },
            { label: "시야", value: r(65, 92, 2) },
            { label: "체력", value: r(60, 90, 3) },
            { label: "태클", value: r(55, 85, 4) },
            { label: "슈팅", value: r(50, 80, 5) },
        ];
    } else {
        return [
            { label: "태클", value: r(70, 95, 1) },
            { label: "체력", value: r(65, 92, 2) },
            { label: "헤딩", value: r(60, 90, 3) },
            { label: "패스", value: r(55, 85, 4) },
            { label: "속도", value: r(50, 80, 5) },
        ];
    }
}

// ===== SCHEDULE DATA =====
const SCHEDULE = [
    { day: "12", month: "NOV", home: "ONEBOUND FC", away: "STORM FC", time: "14:00 KST", venue: "시립 운동장", status: "upcoming" },
    { day: "19", month: "NOV", home: "PHOENIX FC", away: "ONEBOUND FC", time: "16:00 KST", venue: "중앙 경기장", status: "upcoming" },
    { day: "26", month: "NOV", home: "ONEBOUND FC", away: "THUNDER SC", time: "15:00 KST", venue: "시립 운동장", status: "upcoming" },
    { day: "03", month: "DEC", home: "GALAXY FC", away: "ONEBOUND FC", time: "14:00 KST", venue: "갤럭시 아레나", status: "upcoming" },
    { day: "10", month: "DEC", home: "ONEBOUND FC", away: "TITAN FC", time: "16:00 KST", venue: "시립 운동장", status: "upcoming" },
];

// ===== DOM ELEMENTS =====
const header = document.getElementById('main-header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');
const closetRail = document.getElementById('closet-rail');
const filterBtns = document.querySelectorAll('.filter-btn');
const scheduleGrid = document.getElementById('schedule-grid');
const playerModal = document.getElementById('player-modal');
const modalClose = document.getElementById('modal-close');
const heroParticles = document.getElementById('hero-particles');
const contactForm = document.getElementById('contact-form');

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderCloset(PLAYERS);
    renderSchedule();
    initParticles();
    initScrollAnimations();
    initDragScroll();
    initCountUp();
});

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    updateActiveNav();
});

function updateActiveNav() {
    const sections = ['home', 'squad', 'schedule', 'about', 'contact'];
    const scrollPos = window.scrollY + 100;
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const link = document.querySelector(`.nav-link[data-section="${id}"]`);
            if (link) {
                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        }
    });
}

// ===== MOBILE MENU =====
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mainNav.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mainNav.classList.remove('open');
    });
});

// ===== RENDER CLOSET =====
function renderCloset(players) {
    closetRail.innerHTML = '';
    players.forEach((player, idx) => {
        const item = document.createElement('div');
        item.className = 'hanger-item fade-in';
        item.dataset.pos = player.pos;
        item.style.animationDelay = `${idx * 0.15}s`;

        item.innerHTML = `
            <div class="hanger-hook"></div>
            <div class="hanger-bar"></div>
            <div class="hanger-uniform">
                <img src="assets/UniformFront.png" alt="${player.name} 유니폼" class="hanger-uniform-img">
                <div class="uniform-overlay">
                    <span class="uniform-player-name">${player.name}</span>
                    <span class="uniform-player-number">${player.number}</span>
                </div>
            </div>
            <div class="hanger-label">
                <div class="hanger-player-name">${player.nameKr}</div>
                <div class="hanger-player-pos">${player.pos}</div>
            </div>
        `;

        item.addEventListener('click', () => openPlayerModal(player));
        closetRail.appendChild(item);

        // Trigger fade-in
        requestAnimationFrame(() => {
            setTimeout(() => item.classList.add('visible'), idx * 80);
        });
    });
}

// ===== POSITION FILTER =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const pos = btn.dataset.pos;
        const filtered = pos === 'all' ? PLAYERS : PLAYERS.filter(p => p.pos === pos);
        renderCloset(filtered);
    });
});

// ===== PLAYER MODAL =====
function openPlayerModal(player) {
    const stats = generateStats(player);

    document.getElementById('modal-number').textContent = `#${player.number}`;
    document.getElementById('modal-player-name').textContent = `${player.nameKr} (${player.name})`;
    document.getElementById('modal-position').textContent = player.pos;
    document.getElementById('modal-pos-full').textContent = player.posFull;
    document.getElementById('modal-num-full').textContent = `#${player.number}`;
    document.getElementById('modal-specialty').textContent = player.specialty;
    document.getElementById('modal-quote').textContent = `"${player.quote}"`;

    // Update back overlay
    document.getElementById('modal-player-name-overlay').textContent = player.name;
    document.getElementById('modal-player-number-overlay').textContent = player.number;

    // Stats
    const statsContainer = document.getElementById('modal-stats');
    statsContainer.innerHTML = '';
    stats.forEach((stat, i) => {
        const row = document.createElement('div');
        row.className = 'stat-bar-row';
        row.innerHTML = `
            <span class="stat-bar-label">${stat.label}</span>
            <div class="stat-bar-track">
                <div class="stat-bar-fill" style="width: 0%"></div>
            </div>
            <span class="stat-bar-value">${stat.value}</span>
        `;
        statsContainer.appendChild(row);

        // Animate bar
        requestAnimationFrame(() => {
            setTimeout(() => {
                row.querySelector('.stat-bar-fill').style.width = `${stat.value}%`;
            }, 100 + i * 100);
        });
    });

    playerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlayerModal() {
    playerModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closePlayerModal);
playerModal.addEventListener('click', (e) => {
    if (e.target === playerModal) closePlayerModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePlayerModal();
});

// ===== RENDER SCHEDULE =====
function renderSchedule() {
    scheduleGrid.innerHTML = '';
    SCHEDULE.forEach((match, idx) => {
        const card = document.createElement('div');
        card.className = 'schedule-card fade-in';
        card.innerHTML = `
            <div class="schedule-date">
                <div class="schedule-day">${match.day}</div>
                <div class="schedule-month">${match.month}</div>
            </div>
            <div class="schedule-divider"></div>
            <div class="schedule-details">
                <div class="schedule-teams">
                    ${match.home} <span class="vs">vs</span> ${match.away}
                </div>
                <div class="schedule-meta">${match.time} · ${match.venue}</div>
            </div>
            <div class="schedule-status ${match.status}">${match.status === 'upcoming' ? '예정' : '종료'}</div>
        `;
        scheduleGrid.appendChild(card);
    });
}

// ===== PARTICLES =====
function initParticles() {
    const colors = ['#770649', '#d1a62a', '#9a1a6a', '#e6c455'];
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 3 + 1;
        p.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100 + 100}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            opacity: ${Math.random() * 0.5 + 0.2};
            animation-duration: ${Math.random() * 15 + 10}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        heroParticles.appendChild(p);
    }
}

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe sections
    document.querySelectorAll('.schedule-card, .uniform-card, .about-inner, .contact-form').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Re-observe closet items on mutation
    const closetObserver = new MutationObserver(() => {
        document.querySelectorAll('.hanger-item.fade-in:not(.visible)').forEach(el => {
            observer.observe(el);
        });
    });
    closetObserver.observe(closetRail, { childList: true });
}

// ===== DRAG SCROLL for Closet Rail =====
function initDragScroll() {
    const rail = closetRail;
    let isDown = false;
    let startX;
    let scrollLeft;

    rail.addEventListener('mousedown', (e) => {
        isDown = true;
        rail.style.cursor = 'grabbing';
        startX = e.pageX - rail.offsetLeft;
        scrollLeft = rail.scrollLeft;
    });
    rail.addEventListener('mouseleave', () => { isDown = false; rail.style.cursor = 'grab'; });
    rail.addEventListener('mouseup', () => { isDown = false; rail.style.cursor = 'grab'; });
    rail.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - rail.offsetLeft;
        const walk = (x - startX) * 2;
        rail.scrollLeft = scrollLeft - walk;
    });
}

// ===== COUNT UP ANIMATION =====
function initCountUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCount(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

function animateCount(el, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * (target - start) + start);
        el.textContent = current.toLocaleString();
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString();
        }
    }
    requestAnimationFrame(update);
}

// ===== CONTACT FORM =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('form-submit');
    btn.textContent = '전송 완료! ✓';
    btn.style.background = 'linear-gradient(135deg, #2a8c4a, #1a6b35)';
    btn.style.borderColor = '#4ae672';
    btn.style.color = '#4ae672';

    setTimeout(() => {
        btn.textContent = '보내기';
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        contactForm.reset();
    }, 3000);
});
