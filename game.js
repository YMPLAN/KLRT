"use strict";

const GAME_DATA = {
  stages: [
    {
      id: "choseong",
      title: "초성나라",
      subtitle: "매연 마을을 맑게!",
      icon: "🏭",
      cleaner: "🧒🏻🫧",
      pollution: ["💨", "🏭", "🌫️", "💨"],
      story: "친환경 필터에 알맞은 단어를 넣어 매연을 깨끗한 공기로 바꿔요. 모든 문제를 풀면 비밀의 방에서 엄마를 찾을 수 있어요!",
      rescue: "엄마",
      rescueIcon: "👩🏻",
      times: { easy: 0, normal: 0, hard: 15 },
      questions: {
        easy: [
          { prompt: "ㅎㄱ", answer: "학교", hint: "친구들과 함께 공부하는 곳이에요." },
          { prompt: "ㅇㅊ", answer: "아침", hint: "하루가 시작되는 때예요." },
          { prompt: "ㄴㅁ", answer: "나무", hint: "숲에서 자라고 맑은 공기를 만들어 줘요." },
          { prompt: "ㅊㄱ", answer: "친구", hint: "함께 놀고 서로 도와주는 사이예요." },
          { prompt: "ㄷㅅㄱ", answer: "도서관", hint: "많은 책을 읽거나 빌리는 곳이에요." }
        ],
        normal: [
          { prompt: "ㅎㄱㄴ", answer: "한글날", hint: "우리 글자의 소중함을 기념하는 날이에요." },
          { prompt: "ㅈㅇㅂㅎ", answer: "자연보호", hint: "산, 강, 동식물을 아끼는 일이에요." },
          { prompt: "ㅂㄹㅅ", answer: "분리수거", hint: "쓰레기를 종류별로 나누어 버리는 일이에요." },
          { prompt: "ㄷㅅㄱ", answer: "독서감상", hint: "책을 읽고 느낀 점을 생각하는 일이에요." },
          { prompt: "ㅎㄱㅅ", answer: "호기심", hint: "새로운 것을 알고 싶어 하는 마음이에요." }
        ],
        hard: [
          { prompt: "ㅍㄹㄱㅍ", answer: "플라스틱", hint: "가볍고 여러 모양으로 만들 수 있지만, 줄여 써야 하는 물질이에요." },
          { prompt: "ㄱㅎㅈ", answer: "과학자", hint: "자연의 원리를 연구하는 사람이에요." },
          { prompt: "ㅇㅁㅍㅎ", answer: "의문표현", hint: "모르는 것을 묻거나 궁금함을 나타내는 말이에요." },
          { prompt: "ㅎㄱㅂㅈ", answer: "환경보전", hint: "자연환경을 잘 지키고 가꾸는 일이에요." },
          { prompt: "ㅈㅅㄱㄴ", answer: "재생가능", hint: "다시 만들어 쓰거나 되살릴 수 있다는 뜻이에요." }
        ]
      }
    },
    {
      id: "proverb",
      title: "속담나라",
      subtitle: "바닷속 신전을 깨끗하게!",
      icon: "🏛️",
      cleaner: "🤿",
      pollution: ["🥤", "🛍️", "🥫", "🧴"],
      story: "속담의 뜻을 생각해 정답을 고르면 잠수복을 입은 주인공이 쓰레기를 주워요. 신전이 다시 보이면 아빠를 만날 수 있어요!",
      rescue: "아빠",
      rescueIcon: "👨🏻",
      times: { easy: 0, normal: 18, hard: 12 },
      questions: {
        easy: [
          { prompt: "작은 것도 모이면 큰 것이 된다는 뜻", hint: "ㅌㄲ ㅁㅇ ㅌㅅ", answer: "티끌 모아 태산", choices: ["티끌 모아 태산", "우물 안 개구리", "하늘의 별 따기"] },
          { prompt: "힘든 일도 함께하면 쉬워진다는 뜻", hint: "ㅂㅈㅈㄷ ㅁㄷㅁ ㄴㄷ", answer: "백지장도 맞들면 낫다", choices: ["백지장도 맞들면 낫다", "등잔 밑이 어둡다", "소 잃고 외양간 고친다"] },
          { prompt: "말을 좋게 해야 좋은 말을 듣는다는 뜻", hint: "ㄱㄴ ㅁㅇ ㄱㅇㅇ ㅇㄴ ㅁㅇ ㄱㄷ", answer: "가는 말이 고와야 오는 말이 곱다", choices: ["가는 말이 고와야 오는 말이 곱다", "누워서 떡 먹기", "그림의 떡"] },
          { prompt: "아주 가까운 곳의 일을 오히려 모른다는 뜻", hint: "ㄷㅈ ㅁㅇ ㅇㄷ", answer: "등잔 밑이 어둡다", choices: ["등잔 밑이 어둡다", "낮말은 새가 듣는다", "고래 싸움에 새우 등 터진다"] },
          { prompt: "어릴 때 든 버릇이 오래간다는 뜻", hint: "ㅅ ㅅ ㅂㄹ ㅇㄷㄲㅈ ㄱㄷ", answer: "세 살 버릇 여든까지 간다", choices: ["세 살 버릇 여든까지 간다", "시작이 반이다", "열 번 찍어 안 넘어가는 나무 없다"] }
        ],
        normal: [
          { prompt: "조심성이 많아 확실한 일도 다시 살펴본다.", hint: "빈칸: ○○○도 두들겨 보고 건너라", answer: "돌다리도 두들겨 보고 건너라", choices: ["돌다리도 두들겨 보고 건너라", "우물 안 개구리", "꿩 대신 닭"] },
          { prompt: "말은 언제나 남에게 전해질 수 있으니 조심해야 한다.", hint: "낮말은 새가 듣고…", answer: "낮말은 새가 듣고 밤말은 쥐가 듣는다", choices: ["낮말은 새가 듣고 밤말은 쥐가 듣는다", "원숭이도 나무에서 떨어진다", "가는 날이 장날"] },
          { prompt: "힘센 사람들 사이의 다툼에 약한 사람이 피해를 본다.", hint: "바다에서 가장 큰 동물이 싸워요.", answer: "고래 싸움에 새우 등 터진다", choices: ["고래 싸움에 새우 등 터진다", "호랑이도 제 말 하면 온다", "금강산도 식후경"] },
          { prompt: "자기가 한 일의 결과는 자기가 받게 된다.", hint: "무엇을 심었는지가 중요해요.", answer: "콩 심은 데 콩 나고 팥 심은 데 팥 난다", choices: ["콩 심은 데 콩 나고 팥 심은 데 팥 난다", "티끌 모아 태산", "백지장도 맞들면 낫다"] },
          { prompt: "아무리 잘하는 사람도 가끔 실수할 수 있다.", hint: "나무를 잘 타는 동물도 실수해요.", answer: "원숭이도 나무에서 떨어진다", choices: ["원숭이도 나무에서 떨어진다", "아니 땐 굴뚝에 연기 날까", "우물 안 개구리"] }
        ],
        hard: [
          { prompt: "세상 물정을 모르고 생각이 좁은 사람", hint: "좁은 곳에서 하늘을 봐요.", answer: "우물 안 개구리", choices: ["우물 안 개구리", "그림의 떡", "바늘 도둑이 소도둑 된다"] },
          { prompt: "무슨 일이든 시작하기가 어렵지, 일단 시작하면 절반은 이룬 셈이다.", hint: "첫걸음이 중요해요.", answer: "시작이 반이다", choices: ["시작이 반이다", "고생 끝에 낙이 온다", "가는 날이 장날"] },
          { prompt: "아무리 어려운 일도 자꾸 노력하면 이룰 수 있다.", hint: "도끼로 나무를 여러 번 찍어요.", answer: "열 번 찍어 안 넘어가는 나무 없다", choices: ["열 번 찍어 안 넘어가는 나무 없다", "누워서 떡 먹기", "소 잃고 외양간 고친다"] },
          { prompt: "일이 잘못된 뒤에 고치려 해도 이미 늦었다.", hint: "소가 없어진 뒤 문을 고쳐요.", answer: "소 잃고 외양간 고친다", choices: ["소 잃고 외양간 고친다", "금강산도 식후경", "티끌 모아 태산"] },
          { prompt: "정작 중요한 사람이나 물건이 빠져 있다.", hint: "잔치를 할 때 음식은 많은데…", answer: "소문난 잔치에 먹을 것 없다", choices: ["소문난 잔치에 먹을 것 없다", "가는 말이 고와야 오는 말이 곱다", "등잔 밑이 어둡다"] }
        ]
      }
    },
    {
      id: "wordchain",
      title: "용암 끝말잇기",
      subtitle: "말을 이어 용암을 식혀라!",
      icon: "🌋",
      cleaner: "☁️🌧️",
      pollution: ["🔥", "🗑️", "🔥", "🧨"],
      story: "악당 나무가 낸 말의 마지막 글자로 시작하는 단어를 골라요. 정답을 맞히면 물주머니와 비구름이 뜨거운 용암을 식혀 줘요!",
      rescue: "평화",
      rescueIcon: "🌳",
      times: { easy: 0, normal: 15, hard: 10 },
      questions: {
        easy: [
          { prompt: "학교", answer: "교실", choices: ["교실", "연필", "가방"], hint: "‘교’로 시작하는 공부하는 방이에요." },
          { prompt: "바다", answer: "다리", choices: ["나비", "다리", "사과"], hint: "‘다’로 시작하고 걸을 때 사용해요." },
          { prompt: "친구", answer: "구름", choices: ["구름", "토끼", "나무"], hint: "‘구’로 시작하고 하늘에 떠 있어요." },
          { prompt: "나무", answer: "무지개", choices: ["바람", "무지개", "자동차"], hint: "‘무’로 시작하고 비 온 뒤 하늘에 보여요." },
          { prompt: "사과", answer: "과자", choices: ["연못", "과자", "우산"], hint: "‘과’로 시작하는 간식이에요." }
        ],
        normal: [
          { prompt: "환경", answer: "경찰", choices: ["찰흙", "경찰", "학교"], hint: "‘경’으로 시작하고 우리를 지켜 주는 사람이에요." },
          { prompt: "재활용", answer: "용기", choices: ["용기", "기차", "약속"], hint: "‘용’으로 시작하며 씩씩한 마음이라는 뜻도 있어요." },
          { prompt: "도서관", answer: "관찰", choices: ["찰흙", "독서", "관찰"], hint: "‘관’으로 시작하고 자세히 살펴보는 일이에요." },
          { prompt: "깨끗함", answer: "함께", choices: ["마음", "함께", "기쁨"], hint: "‘함’으로 시작하고 여럿이 같이한다는 뜻이에요." },
          { prompt: "약속", answer: "속담", choices: ["속담", "담요", "언어"], hint: "‘속’으로 시작하는 옛사람들의 지혜예요." }
        ],
        hard: [
          { prompt: "플라스틱", answer: "틱톡", choices: ["라디오", "틱톡", "크레파스"], hint: "‘틱’으로 시작하는 짧은 영상 서비스 이름이에요." },
          { prompt: "이산화탄소", answer: "소나기", choices: ["기러기", "소나기", "탄소"], hint: "‘소’로 시작하고 갑자기 세게 내리는 비예요." },
          { prompt: "생태계", answer: "계단", choices: ["단풍", "환경", "계단"], hint: "‘계’로 시작하고 위아래로 오를 때 이용해요." },
          { prompt: "재활용품", answer: "품질", choices: ["질문", "품질", "용품"], hint: "‘품’으로 시작하며 물건이 얼마나 좋은지를 나타내요." },
          { prompt: "친환경", answer: "경험", choices: ["환경", "경험", "험담"], hint: "‘경’으로 시작하며 직접 겪어 본 일이에요." }
        ]
      }
    }
  ],
  difficulties: {
    easy: { name: "초급", stars: "★☆☆", label: "힌트와 함께 천천히", reward: 3 },
    normal: { name: "중급", stars: "★★☆", label: "힌트는 2번, 조금 더 빠르게", reward: 5 },
    hard: { name: "고급", stars: "★★★", label: "짧은 시간 안에 도전", reward: 8 }
  }
};

const defaultProgress = { unlocked: 0, completed: [], leaves: 0, sound: true };
let progress = loadProgress();
let session = null;
let timerId = null;
let audioContext = null;
let toastTimer = null;

const app = document.querySelector("#app");
const leafCount = document.querySelector("#leaf-count");
const soundButton = document.querySelector("#sound-button");

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("koreanRescueProgress"));
    return { ...defaultProgress, ...saved, completed: Array.isArray(saved?.completed) ? saved.completed : [] };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem("koreanRescueProgress", JSON.stringify(progress));
  updateHeader();
}

function updateHeader() {
  leafCount.textContent = progress.leaves;
  soundButton.textContent = progress.sound ? "🔊" : "🔇";
  soundButton.setAttribute("aria-label", progress.sound ? "효과음 끄기" : "효과음 켜기");
}

function setScreen(html) {
  clearTimer();
  app.innerHTML = html;
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  session = null;
  setScreen(`
    <section class="screen hero">
      <div class="hero-copy">
        <p class="eyebrow">🌱 국어 × 환경 모험 게임</p>
        <h1>말의 힘으로<br>세상을 구해요!</h1>
        <p>악당 나무가 동글동글 가족의 엄마와 아빠를 데려갔어요. <strong>초성, 속담, 끝말잇기</strong> 문제를 풀어 오염된 세 나라를 깨끗하게 만들고 가족을 구해 주세요.</p>
        <div class="button-row">
          <button class="primary-button" type="button" data-action="prologue">모험 시작하기</button>
          <button class="secondary-button" type="button" data-action="map">이어 하기</button>
        </div>
      </div>
      <div class="hero-art" aria-label="동글동글 지구와 주인공, 가족, 악당 나무">
        <div class="speech-bubble">국어의 힘이 필요해!</div>
        <div class="world-orb"></div>
        <div class="round-person hero-kid" aria-hidden="true">🧒🏻</div>
        <div class="round-person family" aria-hidden="true">👨‍👩‍👦</div>
        <div class="villain-tree" aria-hidden="true">🌳</div>
      </div>
    </section>`);
}

function renderPrologue() {
  setScreen(`
    <section class="screen story-card">
      <p class="eyebrow">이야기의 시작</p>
      <h2>악당 나무에게 무슨 일이 있었을까요?</h2>
      <div class="story-visual" aria-hidden="true"><span>🏭💨</span><span class="story-arrow">➜</span><span>🌳😢</span><span class="story-arrow">➜</span><span>🌳😠</span></div>
      <p>동글동글 나라의 매연과 쓰레기 때문에 나무나라의 나무들이 아팠어요. 마지막으로 남은 나무는 너무 화가 나 악당이 되었고, 엄마와 아빠를 데려갔지요. 하지만 싸움보다 더 좋은 해결 방법이 있어요. 국어 퀴즈를 풀어 환경을 깨끗하게 만들고, 나무나라에 진심으로 사과해요!</p>
      <div class="button-row" style="justify-content:center">
        <button class="primary-button" type="button" data-action="map">나라 지도로 출발!</button>
        <button class="secondary-button" type="button" data-action="home">뒤로</button>
      </div>
    </section>`);
}

function renderMap() {
  const cards = GAME_DATA.stages.map((stage, index) => {
    const locked = index > progress.unlocked;
    const completed = progress.completed.includes(stage.id);
    return `
      <article class="stage-card ${locked ? "locked" : ""} ${completed ? "completed" : ""}">
        <span class="stage-number">STAGE ${index + 1}</span>
        <span class="status-badge ${completed ? "clear" : ""}">${completed ? "✓ 정화 완료" : locked ? "🔒 잠김" : "도전 가능"}</span>
        <span class="stage-icon" aria-hidden="true">${stage.icon}</span>
        <h3>${stage.title}</h3>
        <p>${stage.story}</p>
        <button class="${locked ? "secondary-button" : "primary-button"}" type="button" data-action="difficulty" data-stage="${index}" ${locked ? "disabled" : ""}>${completed ? "다시 도전하기" : locked ? "앞 나라를 먼저 구해요" : "입장하기"}</button>
      </article>`;
  }).join("");

  setScreen(`
    <section class="screen">
      <div class="section-head">
        <div><p class="eyebrow">모험 지도</p><h2>어느 나라를 구할까요?</h2></div>
        <p>한 나라를 깨끗하게 만들면 다음 길이 열려요. 높은 난이도일수록 새싹을 더 많이 받을 수 있어요.</p>
      </div>
      <div class="stage-grid">${cards}</div>
      <div class="button-row">
        <button class="secondary-button" type="button" data-action="home">처음 화면</button>
        <button class="secondary-button" type="button" data-action="reset">기록 새로 시작</button>
      </div>
    </section>`);
}

function renderDifficulty(stageIndex) {
  const stage = GAME_DATA.stages[stageIndex];
  if (!stage || stageIndex > progress.unlocked) return renderMap();
  const cards = Object.entries(GAME_DATA.difficulties).map(([key, diff]) => {
    const time = stage.times[key];
    const support = key === "easy" ? "힌트가 항상 보여요." : key === "normal" ? "힌트 단추를 2번 쓸 수 있어요." : "힌트 없이 도전해요.";
    return `
      <button class="difficulty-card" type="button" data-action="start-game" data-stage="${stageIndex}" data-difficulty="${key}">
        <span class="difficulty-stars">${diff.stars}</span>
        <strong>${diff.name}</strong>
        <small>${diff.label}<br>${support}<br>${time ? `문제마다 ${time}초` : "시간 제한 없음"} · 정답마다 🌱 ${diff.reward}개</small>
      </button>`;
  }).join("");
  setScreen(`
    <section class="screen difficulty-panel">
      <p class="eyebrow">${stage.icon} ${stage.title}</p>
      <h2>도전할 난이도를 골라요</h2>
      <p>${stage.story}</p>
      <div class="difficulty-grid">${cards}</div>
      <div class="button-row"><button class="secondary-button" type="button" data-action="map">지도에서 다시 고르기</button></div>
    </section>`);
}

function startGame(stageIndex, difficulty) {
  const stage = GAME_DATA.stages[stageIndex];
  if (!stage || !GAME_DATA.difficulties[difficulty] || stageIndex > progress.unlocked) return renderMap();
  session = {
    stageIndex,
    difficulty,
    index: 0,
    correct: 0,
    mistakes: 0,
    hints: difficulty === "normal" ? 2 : difficulty === "easy" ? 99 : 0,
    earned: 0,
    accepting: true,
    remaining: stage.times[difficulty]
  };
  renderQuestion();
}

function renderQuestion() {
  clearTimer();
  const stage = GAME_DATA.stages[session.stageIndex];
  const diff = GAME_DATA.difficulties[session.difficulty];
  const questions = stage.questions[session.difficulty];
  const question = questions[session.index];
  const cleanPercent = Math.round((session.index / questions.length) * 100);
  const pollution = Math.max(.05, .76 - (session.index / questions.length) * .68).toFixed(2);
  const isTextInput = stage.id === "choseong";
  const questionClass = stage.id === "proverb" ? "question-main proverb-text" : "question-main";
  const label = stage.id === "choseong" ? "초성을 보고 단어를 써요" : stage.id === "proverb" ? "뜻에 맞는 속담을 골라요" : "마지막 글자로 시작하는 말을 골라요";
  const autoHint = session.difficulty === "easy" ? question.hint : "힌트가 필요하면 아래 단추를 눌러요.";
  const choices = question.choices?.map(choice => `<button class="answer-button" type="button" data-action="answer-choice" data-answer="${escapeAttr(choice)}">${choice}</button>`).join("") || "";
  const timer = stage.times[session.difficulty];
  const sceneCharacter = stage.id === "wordchain"
    ? session.difficulty === "easy" ? "👩🏻 🧒🏻 👨🏻 ☁️🌧️" : session.difficulty === "normal" ? "🧒🏻 ☁️🌧️" : "☁️🌧️"
    : stage.cleaner;

  setScreen(`
    <section class="screen game-layout">
      <div class="scene ${stage.id}" style="--pollution:${pollution};--clean:${cleanPercent}%;--trash-opacity:${1 - cleanPercent / 120}">
        <div class="scene-title"><strong>${stage.icon} ${stage.title}</strong><span class="clean-label">정화 ${cleanPercent}%</span></div>
        <div class="scene-art"><span class="cleaner" aria-hidden="true">${sceneCharacter}</span></div>
        <div class="pollution-items" aria-hidden="true">${stage.pollution.map(item => `<span>${item}</span>`).join("")}</div>
        <div class="clean-progress" aria-label="환경 정화 진행률 ${cleanPercent}%"><span></span></div>
      </div>
      <div class="quiz-panel">
        <div class="quiz-top"><span>${diff.name} · 문제 ${session.index + 1}/${questions.length}</span><span id="timer" class="timer-pill">${timer ? `⏱ ${session.remaining}초` : "천천히 생각해요"}</span></div>
        <div class="question-box">
          <div class="question-label">${label}</div>
          <div class="${questionClass}">${question.prompt}</div>
          <div id="hint-box" class="hint-box">💡 ${autoHint}</div>
          ${isTextInput ? `
            <form class="answer-form" id="answer-form">
              <label class="sr-only" for="answer-input">정답 입력</label>
              <input class="answer-input" id="answer-input" autocomplete="off" maxlength="20" placeholder="정답을 입력하세요" required>
              <button class="primary-button" type="submit">확인</button>
            </form>` : `<div class="choice-grid">${choices}</div>`}
        </div>
        <div class="quiz-tools">
          <p id="feedback" class="feedback"></p>
          ${session.difficulty === "normal" ? `<button id="hint-button" class="hint-button" type="button" data-action="hint" ${session.hints <= 0 ? "disabled" : ""}>💡 힌트 ${session.hints}번</button>` : ""}
        </div>
      </div>
    </section>`);

  session.accepting = true;
  if (isTextInput) document.querySelector("#answer-input")?.focus();
  if (timer) beginTimer(timer);
}

function beginTimer(seconds) {
  session.remaining = seconds;
  const timer = document.querySelector("#timer");
  timerId = window.setInterval(() => {
    session.remaining -= 1;
    if (timer) {
      timer.textContent = `⏱ ${session.remaining}초`;
      timer.classList.toggle("urgent", session.remaining <= 5);
    }
    if (session.remaining <= 0) {
      clearTimer();
      session.accepting = false;
      handleWrong("시간이 다 됐어요. 같은 문제를 다시 도전해요!");
      window.setTimeout(renderQuestion, 1100);
    }
  }, 1000);
}

function clearTimer() {
  if (timerId) window.clearInterval(timerId);
  timerId = null;
}

function normalizeAnswer(value) {
  return String(value).replace(/\s+/g, "").trim().toLowerCase();
}

function checkAnswer(value, button = null) {
  if (!session?.accepting) return;
  const stage = GAME_DATA.stages[session.stageIndex];
  const question = stage.questions[session.difficulty][session.index];
  if (normalizeAnswer(value) === normalizeAnswer(question.answer)) {
    session.accepting = false;
    clearTimer();
    session.correct += 1;
    const reward = GAME_DATA.difficulties[session.difficulty].reward;
    session.earned += reward;
    const feedback = document.querySelector("#feedback");
    if (feedback) {
      feedback.textContent = `정답! 맑아지고 있어요. 🌱 +${reward}`;
      feedback.className = "feedback good";
    }
    if (button) button.classList.add("correct");
    playSound("correct");
    window.setTimeout(nextQuestion, 850);
  } else {
    if (button) {
      button.classList.add("wrong");
      window.setTimeout(() => button.classList.remove("wrong"), 600);
    }
    handleWrong("아쉬워요! 힌트를 살펴보고 다시 생각해 봐요.");
  }
}

function handleWrong(message) {
  session.mistakes += 1;
  const feedback = document.querySelector("#feedback");
  if (feedback) {
    feedback.textContent = message;
    feedback.className = "feedback bad";
  }
  playSound("wrong");
}

function nextQuestion() {
  session.index += 1;
  const total = GAME_DATA.stages[session.stageIndex].questions[session.difficulty].length;
  if (session.index >= total) finishStage();
  else renderQuestion();
}

function showHint() {
  if (!session || session.difficulty !== "normal" || session.hints <= 0) return;
  const stage = GAME_DATA.stages[session.stageIndex];
  const question = stage.questions[session.difficulty][session.index];
  session.hints -= 1;
  const hintBox = document.querySelector("#hint-box");
  const button = document.querySelector("#hint-button");
  if (hintBox) hintBox.textContent = `💡 ${question.hint}`;
  if (button) {
    button.textContent = `💡 힌트 ${session.hints}번`;
    button.disabled = session.hints <= 0;
  }
  playSound("click");
}

function finishStage() {
  clearTimer();
  const stage = GAME_DATA.stages[session.stageIndex];
  const total = stage.questions[session.difficulty].length;
  const firstClear = !progress.completed.includes(stage.id);
  if (firstClear) progress.completed.push(stage.id);
  progress.unlocked = Math.min(GAME_DATA.stages.length - 1, Math.max(progress.unlocked, session.stageIndex + 1));
  progress.leaves += session.earned;
  saveProgress();
  launchConfetti();
  playSound("clear");

  const accuracy = Math.max(0, Math.round((total / (total + session.mistakes)) * 100));
  setScreen(`
    <section class="screen result-card">
      <div class="result-icon" aria-hidden="true">${stage.rescueIcon}</div>
      <p class="eyebrow">${stage.title} 정화 완료!</p>
      <h2>${stage.rescue === "평화" ? "악당 나무와 이야기할 길이 열렸어요!" : `${stage.rescue}를 찾았어요!`}</h2>
      <div class="score-ring" style="--score-angle:${accuracy * 3.6}deg"><strong>${accuracy}%</strong></div>
      <p>모든 문제의 정답을 찾아냈어요. 틀려도 다시 도전한 용기가 정말 멋져요!</p>
      <p class="reward-line">이번 모험에서 새싹 🌱 ${session.earned}개를 모았어요.</p>
      <div class="button-row" style="justify-content:center">
        ${session.stageIndex === GAME_DATA.stages.length - 1 ? `<button class="primary-button" type="button" data-action="ending">마지막 이야기 보기</button>` : `<button class="primary-button" type="button" data-action="map">다음 나라로 가기</button>`}
        <button class="secondary-button" type="button" data-action="difficulty" data-stage="${session.stageIndex}">다른 난이도 도전</button>
      </div>
    </section>`);
}

function renderEnding() {
  if (!progress.completed.includes("wordchain")) return renderMap();
  setScreen(`
    <section class="screen ending-card">
      <p class="eyebrow">우리 모두의 해피 엔딩</p>
      <h2>미안해, 나무나라야. 이제 함께 지킬게!</h2>
      <div class="ending-characters" aria-hidden="true"><span>👩🏻</span><span>🧒🏻</span><span>👨🏻</span><span>🤝</span><span>🌳</span></div>
      <p>용암이 식자 동글동글 가족이 집으로 돌아가는 길이 나타났어요. 가족은 나무나라의 아픔을 몰랐던 일을 진심으로 사과했어요. 악당 나무도 화난 마음을 내려놓았지요. 모두는 매연과 쓰레기를 줄이고 나무를 아끼기로 약속했어요.</p>
      <div class="promise-box">🌏 “우리말을 바르게 사용하고, 자연을 깨끗하게 지키겠습니다!”</div>
      <p>국어의 힘으로 세 나라와 가족, 그리고 악당 나무의 마음까지 구했어요. <strong>동글동글 국어 구조대 임무 완료!</strong></p>
      <div class="button-row" style="justify-content:center">
        <button class="primary-button" type="button" data-action="map">모험 지도 보기</button>
        <button class="secondary-button" type="button" data-action="home">처음 화면</button>
      </div>
    </section>`);
  launchConfetti();
}

function resetProgress() {
  if (!window.confirm("모은 새싹과 완료 기록을 모두 지우고 처음부터 시작할까요?")) return;
  progress = { ...defaultProgress, completed: [], sound: progress.sound };
  saveProgress();
  showToast("기록을 새로 시작했어요!");
  renderMap();
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function playSound(type) {
  if (!progress.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const notes = { click: 420, correct: 660, wrong: 180, clear: 880 };
    oscillator.frequency.value = notes[type] || 420;
    oscillator.type = type === "wrong" ? "sawtooth" : "sine";
    gain.gain.setValueAtTime(.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + (type === "clear" ? .55 : .18));
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + (type === "clear" ? .55 : .18));
  } catch { /* Sound is optional. */ }
}

function launchConfetti() {
  const root = document.querySelector("#confetti");
  const colors = ["#ffd166", "#4e9f62", "#5bb7d9", "#e85d75", "#f28c55"];
  for (let i = 0; i < 46; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--drift", `${(Math.random() - .5) * 240}px`);
    piece.style.animationDelay = `${Math.random() * .5}s`;
    root.appendChild(piece);
    setTimeout(() => piece.remove(), 3300);
  }
}

document.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button || button.disabled) return;
  const action = button.dataset.action;
  playSound("click");
  if (action === "home") renderHome();
  else if (action === "prologue") renderPrologue();
  else if (action === "map") renderMap();
  else if (action === "difficulty") renderDifficulty(Number(button.dataset.stage));
  else if (action === "start-game") startGame(Number(button.dataset.stage), button.dataset.difficulty);
  else if (action === "answer-choice") checkAnswer(button.dataset.answer, button);
  else if (action === "hint") showHint();
  else if (action === "ending") renderEnding();
  else if (action === "reset") resetProgress();
});

document.addEventListener("submit", event => {
  if (event.target.id !== "answer-form") return;
  event.preventDefault();
  const input = document.querySelector("#answer-input");
  if (!input?.value.trim()) return;
  checkAnswer(input.value);
  if (session?.accepting) {
    input.select();
    input.focus();
  }
});

soundButton.addEventListener("click", () => {
  progress.sound = !progress.sound;
  saveProgress();
  if (progress.sound) playSound("click");
  showToast(progress.sound ? "효과음을 켰어요." : "효과음을 껐어요.");
});

updateHeader();
renderHome();
