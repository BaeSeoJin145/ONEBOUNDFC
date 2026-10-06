/* ================================================
   ONEBOUND FC — Complete Script
   Colors: ONE Purple #770649 / BOUND Gold #d1a62a
   ================================================ */

// ===== 15 PLAYERS DATA (Official Roster) =====
const PLAYERS = [
    // DEFENDERS (5)
    { number: 3,  name: "YEONJE",    nameKr: "연제",   pos: "DF", posFull: "수비수 (Center Back)", specialty: "공중볼 장악 & 헤더", quote: "수비는 팀의 기둥이다" },
    { number: 4,  name: "YUPIL",     nameKr: "유필",   pos: "DF", posFull: "수비수 (Center Back)", specialty: "정확한 태클 & 커팅", quote: "흔들리지 않는 벽이 되겠다" },
    { number: 5,  name: "JIHUN",     nameKr: "지훈",   pos: "DF", posFull: "수비수 (Full Back)", specialty: "빌드업 플레이 & 스피드", quote: "수비에서 시작하는 날카로운 공격" },
    { number: 20, name: "SIWOO",     nameKr: "시우",   pos: "DF", posFull: "수비수 (Full Back)", specialty: "오버래핑 & 맨마킹", quote: "좌측 사이드라인은 나의 영역" },
    { number: 95, name: "SEOKHO",    nameKr: "석호",   pos: "DF", posFull: "수비수 (Center Back)", specialty: "피지컬 경합 & 리더십", quote: "최후방 수비는 내가 책임진다" },

    // MIDFIELDERS (5)
    { number: 6,  name: "JOOYEONG",  nameKr: "주영",   pos: "MF", posFull: "미드필더 (Defensive Mid)", specialty: "볼 탈취 & 템포 조절", quote: "중원을 지배하는 자가 승리한다" },
    { number: 8,  name: "YEONWOO",   nameKr: "연우",   pos: "MF", posFull: "미드필더 (Central Mid)", specialty: "정교한 패스 & 시야", quote: "팀의 심장으로 호흡한다" },
    { number: 10, name: "JINSOO",    nameKr: "진수",   pos: "MF", posFull: "미드필더 (Attacking Mid)", specialty: "킬패스 & 데드볼 마스터", quote: "10번의 무게를 증명하겠다" },
    { number: 12, name: "DONGGYUN",  nameKr: "동균",   pos: "MF", posFull: "미드필더 (Box-to-Box)", specialty: "활동량 & 공수 전환", quote: "끝까지 뛰는 자가 기회를 잡는다" },
    { number: 66, name: "SEOJIN",    nameKr: "서진",   pos: "MF", posFull: "미드필더 (Playmaker)", specialty: "게임 메이킹 & 전술 지휘", quote: "경기를 읽는 눈이 가장 큰 무기다" },

    // FORWARDS (5)
    { number: 7,  name: "BEOMCHANG", nameKr: "범창",   pos: "FW", posFull: "공격수 (Winger)", specialty: "폭발적 드리블 돌파", quote: "속도로 수비진을 허문다" },
    { number: 9,  name: "SIWOO",     nameKr: "시우",   pos: "FW", posFull: "공격수 (Striker)", specialty: "골 결정력 & 타겟 플레이", quote: "득점이 나의 존재 이유다" },
    { number: 11, name: "YEJUN",     nameKr: "예준",   pos: "FW", posFull: "공격수 (Winger)", specialty: "스프린트 & 택배 크로스", quote: "측면을 지배하는 날개" },
    { number: 22, name: "MINGYO",    nameKr: "민교",   pos: "FW", posFull: "공격수 (Second Striker)", specialty: "공간 침투 & 테크닉", quote: "빈틈이 생기면 놓치지 않는다" },
    { number: 99, name: "SEOJUN",    nameKr: "서준",   pos: "FW", posFull: "공격수 (Striker)", specialty: "파워 슈팅 & 아크로바틱 피니시", quote: "골문이 열리면 거침없이 쏜다" }
];

// Seeded stats generator
function generateStats(player) {
    const seed = player.number;
    const r = (min, max, offset = 0) => {
        const val = ((seed * 19 + offset * 37) % 36) + 60;
        return Math.min(max, Math.max(min, val));
    };

    if (player.pos === 'FW') {
        return [
            { label: "슈팅", value: r(82, 97, 1) },
            { label: "속도", value: r(80, 96, 2) },
            { label: "드리블", value: r(75, 93, 3) },
            { label: "체력", value: r(70, 88, 4) },
            { label: "패스", value: r(68, 85, 5) },
        ];
    } else if (player.pos === 'MF') {
        return [
            { label: "패스", value: r(83, 98, 1) },
            { label: "시야", value: r(80, 96, 2) },
            { label: "체력", value: r(78, 95, 3) },
            { label: "드리블", value: r(72, 90, 4) },
            { label: "슈팅", value: r(65, 87, 5) },
        ];
    } else {
        return [
            { label: "태클", value: r(84, 98, 1) },
            { label: "체력", value: r(80, 94, 2) },
            { label: "헤딩", value: r(78, 95, 3) },
            { label: "패스", value: r(68, 86, 4) },
            { label: "속도", value: r(65, 89, 5) },
        ];
    }
}

// ===== GALLERY DATA =====
const GALLERY_DATA = [
    {
        id: 1,
        title: "개막전 치열한 볼 경합",
        date: "2023.10.15 · vs Glory FC",
        cat: "match",
        img: "assets/gallery_match.jpg",
        caption: "리그 개막전 원정 경기에서 펼쳐진 치열한 볼 경합 순간. 끈질긴 압박으로 승리를 이끌었습니다."
    },
    {
        id: 2,
        title: "환상적인 결승골 득점 순간",
        date: "2023.11.02 · vs United SC",
        cat: "match",
        img: "assets/gallery_match2.jpg",
        caption: "후반 추가시간 극적으로 터진 오른발 감아차기 슛! 야간 조명 아래 짜릿한 결승골이 작렬했습니다."
    },
    {
        id: 3,
        title: "승리의 환호와 원팀 세리머니",
        date: "2023.10.22 · 홈 개막전",
        cat: "team",
        img: "assets/gallery_celebration.jpg",
        caption: "경기 종료 휘슬 직후 승리를 확정짓고 하나 되어 얼싸안은 선수들의 뜨거운 포효."
    },
    {
        id: 4,
        title: "ONEBOUND FC 공식 스쿼드",
        date: "2023/24 시즌 공식 프로필",
        cat: "team",
        img: "assets/gallery_team.jpg",
        caption: "하나로 묶인 열정, 2023/24 시즌을 빛낼 ONEBOUND FC 공식 선수단 단체 프로필."
    },
    {
        id: 5,
        title: "일몰 속 야간 전술 훈련",
        date: "2023.09.28 · 훈련 세션",
        cat: "training",
        img: "assets/gallery_training.jpg",
        caption: "골든 아워의 노을빛 아래 진행된 민첩성 향상 훈련과 원터치 패스 전술 세션."
    },
    {
        id: 6,
        title: "경기 전 그라운드 전술 미팅",
        date: "2023.10.15 · 전술 브리핑",
        cat: "training",
        img: "assets/gallery_tactics.jpg",
        caption: "킥오프 30분 전, 승리를 향한 결의를 다지며 감독과 선수단이 함께한 전술 허들."
    }
];

// ===== SCHEDULE DATA =====
const SCHEDULE = [
    { day: "12", month: "NOV", home: "ONEBOUND FC", away: "STORM FC", time: "14:00 KST", venue: "시립 운동장", status: "upcoming" },
    { day: "19", month: "NOV", home: "PHOENIX FC", away: "ONEBOUND FC", time: "16:00 KST", venue: "중앙 경기장", status: "upcoming" },
    { day: "26", month: "NOV", home: "ONEBOUND FC", away: "THUNDER SC", time: "15:00 KST", venue: "시립 운동장", status: "upcoming" },
    { day: "03", month: "DEC", home: "GALAXY FC", away: "ONEBOUND FC", time: "14:00 KST", venue: "갤럭시 아레나", status: "upcoming" },
    { day: "10", month: "DEC", home: "ONEBOUND FC", away: "TITAN FC", time: "16:00 KST", venue: "시립 운동장", status: "upcoming" },
];

// ===== DOM ELEMENTS =====
let carouselTrack, carouselViewport, posTabs, railPrev, railNext;
let indicatorNumber, indicatorName, indicatorPos;
let playerPanelOverlay, playerPanel, panelClose, panelBackBtn;
let panelJerseyWrapper, panelJerseyBackImg, panelFlipBtn;
let galleryGrid, galleryTabs, lightbox, lightboxImg, lightboxCaption, lightboxClose, lightboxPrev, lightboxNext;
let currentLightboxIndex = 0;
let currentFilteredGallery = GALLERY_DATA;
let activePlayer = PLAYERS[9]; // default: #66 SEOJIN

// ===== DOM LOADED =====
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM
    carouselTrack = document.getElementById('carousel-track');
    carouselViewport = document.getElementById('carousel-viewport');
    posTabs = document.querySelectorAll('.pos-tab');
    railPrev = document.getElementById('rail-nav-prev');
    railNext = document.getElementById('rail-nav-next');

    indicatorNumber = document.getElementById('indicator-number');
    indicatorName = document.getElementById('indicator-name');
    indicatorPos = document.getElementById('indicator-pos');

    playerPanelOverlay = document.getElementById('player-panel-overlay');
    playerPanel = document.getElementById('player-panel');
    panelClose = document.getElementById('panel-close');
    panelBackBtn = document.getElementById('panel-back-btn');
    panelJerseyWrapper = document.getElementById('panel-jersey-wrapper');
    panelJerseyBackImg = document.getElementById('panel-jersey-back-img');
    panelFlipBtn = document.getElementById('panel-flip-btn');

    galleryGrid = document.getElementById('gallery-grid');
    galleryTabs = document.querySelectorAll('.gal-tab');
    lightbox = document.getElementById('lightbox');
    lightboxImg = document.getElementById('lightbox-img');
    lightboxCaption = document.getElementById('lightbox-caption');
    lightboxClose = document.getElementById('lightbox-close');
    lightboxPrev = document.getElementById('lightbox-prev');
    lightboxNext = document.getElementById('lightbox-next');

    // Initialize components
    initLockerRoom();
    initPlayerPanel();
    initGallery();
    renderSchedule();
    initHeaderScroll();
    initMobileNav();
    initParticles();
    initScrollAnimations();
    initCountUp();
    initContactForm();
});

// ===== 1. LOCKER ROOM (3D CLOSET) =====
// ===== 1. REALISTIC CALM FABRIC PHYSICS ENGINE =====
const ClothEngine = {
    items: [],
    imagesCache: {},
    animId: null,
    isInitialized: false,

    init() {
        if (!this.isInitialized) {
            this.loop = this.loop.bind(this);
            this.isInitialized = true;
            this.animId = requestAnimationFrame(this.loop);
        }
    },

    addItem(canvas, imgUrl, hangerEl, hookEl) {
        let img = this.imagesCache[imgUrl];
        if (!img) {
            img = new Image();
            img.src = imgUrl;
            this.imagesCache[imgUrl] = img;
        }

        const ctx = canvas.getContext('2d');
        const instance = {
            canvas,
            ctx,
            img,
            hangerEl,
            hookEl,
            // Calm, weighted fabric physics
            amp: 0,              // At rest: completely stable
            targetAmp: 0,        // Decays to 0
            phase: 0,
            phaseSpeed: 2.2,     // Natural heavy pendulum speed
            tilt: 0,             // Hanger angle in degrees
            tiltVel: 0,          // Angular velocity
            direction: 1,        // Wave direction (+1 or -1)
            slices: 55,          // Clean smooth slices
            wBase: 210,          // Base width
            hBase: 236,          // Base height
            canvasW: 280,
            canvasH: 260,
            srcX: 160,
            srcY: 130,
            srcW: 680,
            srcH: 765,
            isLoaded: img.complete && img.naturalWidth > 0,
            needsDraw: true      // True on init and when moving
        };

        if (!instance.isLoaded) {
            img.addEventListener('load', () => {
                instance.isLoaded = true;
                instance.needsDraw = true;
            });
        }

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = instance.canvasW * dpr;
        canvas.height = instance.canvasH * dpr;
        canvas.style.width = `${instance.canvasW}px`;
        canvas.style.height = `${instance.canvasH}px`;
        ctx.scale(dpr, dpr);

        this.items.push(instance);
        return instance;
    },

    clear() {
        this.items = [];
    },

    // Gentle realistic impulse (slightly more fluid sway)
    triggerImpulse(instance, amp = 9.5, dir = 1) {
        if (!instance) return;
        instance.direction = dir;
        instance.targetAmp = Math.max(instance.targetAmp, amp);
        instance.tiltVel += dir * (amp * 0.12);
        instance.needsDraw = true;
    },

    // Natural wave on arrow click
    triggerWaveAll(direction = 1, intensity = 13) {
        this.items.forEach((item, idx) => {
            setTimeout(() => {
                this.triggerImpulse(item, intensity, direction);
            }, idx * 45);
        });
    },

    // Moderate scroll physics
    triggerScroll(delta) {
        const dir = delta > 0 ? -1 : 1;
        const speed = Math.min(Math.abs(delta) * 0.38, 16);
        if (speed < 0.4) return;
        this.items.forEach((item) => {
            item.direction = dir;
            item.targetAmp = Math.max(item.targetAmp, speed);
            item.tiltVel += dir * (speed * 0.06);
            item.needsDraw = true;
        });
    },

    loop() {
        const dt = 0.016;
        const springK = 0.055;
        const springDamp = 0.915; // Allows ~2-3 graceful, natural oscillations

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (!item.canvas.parentElement) continue;

            // Amplitude decay towards 0 (rest)
            item.amp += (item.targetAmp - item.amp) * 0.09;
            item.targetAmp *= 0.95; // Smooth decay allowing a bit more fluid sway

            if (item.amp < 0.04) {
                item.amp = 0;
            }

            // Hanger pendulum spring physics
            const accel = -springK * item.tilt;
            item.tiltVel = (item.tiltVel + accel) * springDamp;
            item.tilt += item.tiltVel;

            if (Math.abs(item.tilt) < 0.03 && Math.abs(item.tiltVel) < 0.03) {
                item.tilt = 0;
                item.tiltVel = 0;
            }

            // Advance phase only when there is motion
            if (item.amp > 0) {
                item.phase += item.phaseSpeed * dt;
                item.needsDraw = true;
            } else if (Math.abs(item.tilt) > 0.04) {
                item.needsDraw = true;
            }

            // Sync physical hanger & hook in DOM
            if (item.hangerEl) {
                item.hangerEl.style.transform = `rotate(${item.tilt.toFixed(2)}deg)`;
            }
            if (item.hookEl) {
                item.hookEl.style.transform = `translateX(${(item.tilt * 0.32).toFixed(1)}px)`;
            }

            // If not loaded, or at rest and already drawn, skip redraw to conserve resources
            if (!item.isLoaded || !item.needsDraw) continue;

            // Viewport culling
            const rect = item.canvas.getBoundingClientRect();
            if (rect.right < -80 || rect.left > window.innerWidth + 80) continue;

            const ctx = item.ctx;
            const w = item.canvasW;
            const h = item.canvasH;
            const img = item.img;
            const slices = item.slices;
            const wBase = item.wBase;
            const hBase = item.hBase;
            const cx = w / 2;
            const topY = 0;

            const sliceH = hBase / slices;
            const srcSliceH = item.srcH / slices;

            ctx.clearRect(0, 0, w, h);

            // Draw calm, realistic fabric drape slices with natural fluid sway
            for (let s = 0; s < slices; s++) {
                const yNorm = (s + 0.5) / slices; // 0 (collar) to 1 (hem)
                const pinnedWeight = Math.pow(yNorm, 1.65); // Natural cloth curvature

                // S-curve drape wave with slight secondary inertia lag for authentic cloth feel
                const wave = (Math.sin(item.phase - yNorm * 1.8) + 0.18 * Math.sin(item.phase * 1.6 - yNorm * 3.2)) 
                             * item.amp * pinnedWeight * item.direction;

                // Natural hanger pendulum displacement
                const hangerOffset = Math.tan(item.tilt * Math.PI / 180) * (yNorm * hBase * 0.48);

                const totalDx = (cx - wBase / 2) + wave + hangerOffset;
                const dy = topY + s * sliceH;
                const srcSy = item.srcY + s * srcSliceH;

                ctx.drawImage(
                    img,
                    item.srcX, srcSy, item.srcW, srcSliceH,
                    totalDx, dy, wBase, sliceH + 0.8
                );
            }

            // When completely settled, stop drawing until next user interaction
            if (item.amp === 0 && item.tilt === 0) {
                item.needsDraw = false;
            }
        }

        this.animId = requestAnimationFrame(this.loop);
    }
};

let lastScrollLeft = 0;

function initLockerRoom() {
    ClothEngine.init();
    renderJerseyTrack(PLAYERS);
    updateIndicator(activePlayer);

    // Position filter tabs
    posTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            posTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const pos = tab.dataset.pos;
            const filtered = pos === 'all' ? PLAYERS : PLAYERS.filter(p => p.pos === pos);
            renderJerseyTrack(filtered);
            if (filtered.length > 0) {
                updateIndicator(filtered[0]);
            }
            ClothEngine.triggerWaveAll(1, 9);
        });
    });

    // Arrow navigation with fluid natural cloth waves
    if (railPrev) {
        railPrev.addEventListener('click', () => {
            carouselViewport.scrollBy({ left: -320, behavior: 'smooth' });
            ClothEngine.triggerWaveAll(1, 13);
        });
    }
    if (railNext) {
        railNext.addEventListener('click', () => {
            carouselViewport.scrollBy({ left: 320, behavior: 'smooth' });
            ClothEngine.triggerWaveAll(-1, 13);
        });
    }

    // Scroll-based cloth physics detection
    carouselViewport.addEventListener('scroll', () => {
        const currentScroll = carouselViewport.scrollLeft;
        const delta = currentScroll - lastScrollLeft;
        if (Math.abs(delta) > 2) {
            ClothEngine.triggerScroll(delta);
        }
        lastScrollLeft = currentScroll;
    });

    // Drag-to-scroll on viewport with physics momentum
    let isDown = false;
    let startX, scrollLeft;
    carouselViewport.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carouselViewport.offsetLeft;
        scrollLeft = carouselViewport.scrollLeft;
    });
    carouselViewport.addEventListener('mouseleave', () => { isDown = false; });
    carouselViewport.addEventListener('mouseup', () => { isDown = false; });
    carouselViewport.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselViewport.offsetLeft;
        const walk = (x - startX) * 1.8;
        carouselViewport.scrollLeft = scrollLeft - walk;
    });
}

function renderJerseyTrack(players) {
    ClothEngine.clear();
    carouselTrack.innerHTML = '';

    players.forEach((player, idx) => {
        const item = document.createElement('div');
        item.className = 'jersey-item';
        if (player.number === activePlayer.number) {
            item.classList.add('active');
        }
        item.dataset.number = player.number;
        item.dataset.pos = player.pos;

        item.innerHTML = `
            <div class="jersey-hook"></div>
            <div class="jersey-wire"></div>
            <div class="jersey-hanger"></div>
            <div class="jersey-img-container">
                <canvas class="jersey-cloth-canvas"></canvas>
                <img src="assets/jerseys/jersey_${player.number}.png" 
                     alt="${player.name} (${player.number})" 
                     class="jersey-hanger-img" 
                     loading="lazy">
            </div>
            <div class="jersey-item-tag">
                <span class="jersey-tag-num">#${player.number}</span>
                <span class="jersey-tag-name">${player.nameKr}</span>
            </div>
        `;

        const canvas = item.querySelector('.jersey-cloth-canvas');
        const hanger = item.querySelector('.jersey-hanger');
        const hook = item.querySelector('.jersey-hook');
        const clothInst = ClothEngine.addItem(
            canvas,
            `assets/jerseys/jersey_${player.number}.png`,
            hanger,
            hook
        );
        item._clothInst = clothInst;

        // Natural fluid hover sway
        item.addEventListener('mouseenter', () => {
            document.querySelectorAll('.jersey-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            updateIndicator(player);

            ClothEngine.triggerImpulse(clothInst, 9.5, 1);

            // Subtle gentle reaction on neighboring jerseys
            const prev = item.previousElementSibling;
            const next = item.nextElementSibling;
            if (prev && prev._clothInst) ClothEngine.triggerImpulse(prev._clothInst, 4.5, 1);
            if (next && next._clothInst) ClothEngine.triggerImpulse(next._clothInst, 4.5, -1);
        });

        // Click opens Squad Sheet
        item.addEventListener('click', () => {
            activePlayer = player;
            document.querySelectorAll('.jersey-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            updateIndicator(player);
            ClothEngine.triggerImpulse(clothInst, 11, 1);
            openPlayerPanel(player);
        });

        carouselTrack.appendChild(item);
    });
}

function updateIndicator(player) {
    if (!player) return;
    if (indicatorNumber) indicatorNumber.textContent = `#${player.number}`;
    if (indicatorName) indicatorName.textContent = `${player.nameKr} (${player.name})`;
    if (indicatorPos) indicatorPos.textContent = `${player.posFull} · ONEBOUND FC`;
}

// ===== 2. PLAYER DETAIL MODAL (SQUAD SHEET) =====
function initPlayerPanel() {
    // Close button
    if (panelClose) {
        panelClose.addEventListener('click', closePlayerPanel);
    }
    if (panelBackBtn) {
        panelBackBtn.addEventListener('click', closePlayerPanel);
    }
    // Click outside to close
    if (playerPanelOverlay) {
        playerPanelOverlay.addEventListener('click', (e) => {
            if (e.target === playerPanelOverlay) closePlayerPanel();
        });
    }
    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && playerPanelOverlay.classList.contains('active')) {
            closePlayerPanel();
        }
    });

    // Flip jersey button
    if (panelFlipBtn) {
        panelFlipBtn.addEventListener('click', toggleJerseyFlip);
    }

    // 3D drag rotate / flip interaction on jersey
    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;
    let targetRotation = 0;

    panelJerseyWrapper.addEventListener('click', (e) => {
        // Simple click toggles flip
        if (!isDragging) {
            toggleJerseyFlip();
        }
    });

    panelJerseyWrapper.addEventListener('mousedown', (e) => {
        isDragging = false;
        startX = e.clientX;
    });

    window.addEventListener('mousemove', (e) => {
        if (startX !== 0 && Math.abs(e.clientX - startX) > 8) {
            isDragging = true;
        }
    });

    window.addEventListener('mouseup', () => {
        setTimeout(() => { isDragging = false; startX = 0; }, 50);
    });
}

function toggleJerseyFlip() {
    panelJerseyWrapper.classList.toggle('flipped');
}

function openPlayerPanel(player) {
    const posBadge = document.getElementById('info-pos-label');
    const numBig = document.getElementById('info-number-big');
    const nameKr = document.getElementById('info-name-kr');
    const nameEn = document.getElementById('info-name-en');
    const posFull = document.getElementById('info-pos-full');
    const numDetail = document.getElementById('info-num-detail');
    const specialty = document.getElementById('info-specialty');
    const quote = document.getElementById('info-quote');
    const statsContainer = document.getElementById('info-stats');

    const posKorean = player.pos === 'DF' ? 'DEFENDER' : player.pos === 'MF' ? 'MIDFIELDER' : 'FORWARD';
    if (posBadge) posBadge.textContent = posKorean;
    if (numBig) numBig.textContent = `#${player.number}`;
    if (nameKr) nameKr.textContent = player.nameKr;
    if (nameEn) nameEn.textContent = `${player.name} (${player.nameKr})`;
    if (posFull) posFull.textContent = player.posFull;
    if (numDetail) numDetail.textContent = player.number;
    if (specialty) specialty.textContent = player.specialty;
    if (quote) quote.textContent = `"${player.quote}"`;

    // Load authentic jersey back image
    if (panelJerseyBackImg) {
        panelJerseyBackImg.src = `assets/jerseys/jersey_${player.number}.png`;
    }

    // Default to back view (facing player's name & number)
    panelJerseyWrapper.classList.add('flipped');

    // Populate attributes
    if (statsContainer) {
        statsContainer.innerHTML = '';
        const stats = generateStats(player);
        stats.forEach((stat, idx) => {
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

            // Animate bar fill
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const fill = row.querySelector('.stat-bar-fill');
                    if (fill) fill.style.width = `${stat.value}%`;
                }, 150 + idx * 80);
            });
        });
    }

    playerPanelOverlay.classList.add('active');

    // Scroll the locker-room section into view so overlay is visible
    const lockerSection = document.getElementById('locker-room');
    if (lockerSection) {
        lockerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function closePlayerPanel() {
    playerPanelOverlay.classList.remove('active');
}

// ===== 3. GALLERY & LIGHTBOX =====
function initGallery() {
    renderGallery(GALLERY_DATA);

    // Filter tabs
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            galleryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.dataset.cat;
            currentFilteredGallery = cat === 'all' ? GALLERY_DATA : GALLERY_DATA.filter(g => g.cat === cat);
            renderGallery(currentFilteredGallery);
        });
    });

    // Lightbox events
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevLightbox);
    }
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextLightbox);
    }
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevLightbox();
        if (e.key === 'ArrowRight') showNextLightbox();
    });
}

function renderGallery(items) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card fade-in';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="gallery-card-overlay">
                <div class="gallery-card-title">${item.title}</div>
                <div class="gallery-card-date">${item.date}</div>
            </div>
        `;
        card.addEventListener('click', () => {
            openLightbox(index);
        });
        galleryGrid.appendChild(card);

        requestAnimationFrame(() => {
            setTimeout(() => card.classList.add('visible'), index * 80);
        });
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightboxContent() {
    const item = currentFilteredGallery[currentLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.img;
    lightboxCaption.innerHTML = `<strong>${item.title}</strong> — ${item.caption} <br><span style="color:var(--gold);font-size:0.8rem">${item.date} (${currentLightboxIndex + 1}/${currentFilteredGallery.length})</span>`;
}

function showPrevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredGallery.length) % currentFilteredGallery.length;
    updateLightboxContent();
}

function showNextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredGallery.length;
    updateLightboxContent();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== 4. SCHEDULE =====
function renderSchedule() {
    const scheduleGrid = document.getElementById('schedule-grid');
    if (!scheduleGrid) return;
    scheduleGrid.innerHTML = '';
    SCHEDULE.forEach((match) => {
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

// ===== 5. HEADER & NAV =====
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        const sections = ['home', 'locker-room', 'gallery', 'schedule', 'about', 'contact'];
        const scrollPos = window.scrollY + 120;
        sections.forEach(id => {
            const sec = document.getElementById(id);
            if (sec) {
                const top = sec.offsetTop;
                const bottom = top + sec.offsetHeight;
                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.dataset.section === id);
                    });
                }
            }
        });
    });
}

function initMobileNav() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const links = document.querySelectorAll('.nav-link');

    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        nav.classList.toggle('open');
    });

    links.forEach(l => {
        l.addEventListener('click', () => {
            btn.classList.remove('active');
            nav.classList.remove('open');
        });
    });
}

// ===== 6. PARTICLES =====
function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    const colors = ['#770649', '#d1a62a', '#9a1a6a', '#e6c455'];
    for (let i = 0; i < 35; i++) {
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
            animation-delay: ${Math.random() * 8}s;
        `;
        container.appendChild(p);
    }
}

// ===== 7. SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.schedule-card, .uniform-card, .about-inner, .contact-form, .gallery-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== 8. COUNT UP =====
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
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString();
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString();
        }
    }
    requestAnimationFrame(update);
}

// ===== 9. CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('form-submit');
        btn.textContent = '문의가 전송되었습니다! ✓';
        btn.style.background = 'linear-gradient(135deg, #1b7a3e, #105228)';
        btn.style.borderColor = '#4ae672';
        btn.style.color = '#4ae672';

        setTimeout(() => {
            btn.textContent = '보내기';
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
            form.reset();
        }, 3000);
    });
}
