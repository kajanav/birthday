"use strict";

/* ==========================================================================
   💌  CUSTOMIZE EVERYTHING HERE
   --------------------------------------------------------------------------
   Change names, photos, music, questions and every message in this section.
   You never need to touch anything below the "THE EXPERIENCE" line.

   You can use these placeholders inside ANY text and they fill themselves in:
     {name}  → his name            {from} → your name
     {age}   → 25                  {nth}  → 25th        {NTH} → 25TH
     {dd}    → 04                  {mm}   → 11
   Use \n inside a text to start a new line.
   ========================================================================== */

const birthdayData = {
    name: "Katheesh",
    age: 25,
    birthday: "04 November", // 04.11.2026
    from: "Kajana",

    // Put your real photos in assets/photos/ with these exact names
    // (or change the paths). Any photo that's missing shows a pretty placeholder.
    photos: [
        "assets/photos/photo1.jpg",
        "assets/photos/photo2.jpg",
        "assets/photos/photo3.jpg",
        "assets/photos/photo4.jpg",
        "assets/photos/photo5.jpg"
    ],

    // Music starts only after he taps "Let's Begin" (browsers block autoplay).
    music: "assets/music/birthday-music.mp3",
    musicEnabled: true,
    musicVolume: 0.6
};

const messages = {
    pageTitle: "A Little Surprise For {name} ❤️",

    welcome: {
        eyebrow: "A little surprise for {name}",
        title: "Hey Birthday Boy ❤️",
        lines: [
            "You are turning {age}...",
            "And I have something special for you.",
            "Before I wish you...\nI have a few questions for you 👀"
        ],
        button: "Let's Begin ❤️"
    },

    quiz: {
        progress: "Question {current} of {total}",
        next: "Next Question →",
        finish: "Continue ❤️"
    },

    secret: {
        // style: "soft" (quiet italic) or "big" (glowing). clearBefore fades out earlier lines first.
        lines: [
            { text: "Okay...", style: "soft", pause: 700 },
            { text: "Then let me tell you something. ❤️", pause: 2200 },
            { text: "You mean more to me\nthan I can ever explain with words.", clearBefore: true, pause: 2200 },
            { text: "And today isn't just about turning {age}...", style: "soft", pause: 1800 },
            { text: "It's about celebrating YOU. ❤️", style: "big", pause: 1200 }
        ],
        button: "Open Your Surprise 💌"
    },

    memories: {
        eyebrow: "Chapter One",
        title: "Our Memories ❤️",
        subtitle: "A few moments I never want to forget.",
        back: "← Back",
        next: "Continue Our Story →"
    },

    story: {
        eyebrow: "Chapter Two",
        title: "Our Story",
        subtitle: "Tap to keep going...",
        back: "← Back",
        next: "Next ❤️",
        ready: "I'm Ready 🎂"
    },

    reveal: {
        words: "Twenty Five...",
        years: "Years of you ❤️",
        today: "And today...\n\nwe celebrate YOU.",
        happy: "🎂 HAPPY {NTH} BIRTHDAY 🎂",
        love: "My Love ❤️",
        button: "Read My Letter 💌"
    },

    letter: {
        titleTop: "🎂 Happy {nth} Birthday,",
        titleLove: "My Love ❤️",
        hint: "Tap the letter to read it all at once ✨",
        paragraphs: [
            "{age} years of you...",
            "And I'm so lucky that I get to be part of your story. ❤️",
            "You are not just someone special in my life.",
            "You are one of the most beautiful parts of it.",
            "Thank you for every conversation,\nevery laugh,\nevery little moment,\nand every memory we've created together.",
            "I hope this new chapter of your life\nbrings you happiness, success, peace,\nand everything you've been wishing for.",
            "I hope you keep chasing your dreams.",
            "I hope you keep smiling.",
            "And I hope I get to be there\nfor many more birthdays,\nmany more memories,\nand many more beautiful moments with you.",
            "Happy {nth} Birthday, my love. ❤️",
            "You deserve all the happiness in the world."
        ],
        signoff: "With all my love,",
        signature: "{from} ❤️",
        oneMore: "One More Thing... 👀"
    },

    oneMore: {
        lines: [
            { text: "If I could give you one thing for your {nth} birthday...", style: "soft", pause: 1600 },
            { text: "I'd give you the ability to see yourself\nthrough my eyes.", pause: 2000 },
            { text: "Maybe then you'd understand\njust how special you really are to me. ❤️", style: "big", pause: 800 }
        ],
        button: "Continue ❤️"
    },

    final: {
        lines: [
            "Another year older...",
            "Another year more amazing.",
            "Happy {nth} Birthday, My Love. 🎂❤️"
        ],
        madeWith: "Made with love ❤️",
        by: "by",
        letterAgain: "Read My Letter Again 💌",
        restart: "Start Again ↺"
    }
};

/*
   QUIZ
   result: "wrong" → shake + reaction, he tries again
           "right" → reaction + Next button
   hearts: true    → extra heart explosion
   A question-level "reaction" is used for any option without its own.
   intro + introPause → a dramatic line shown before the question.
   autoAdvance → moves on by itself after an answer.
*/
const quizQuestions = [
    {
        question: "Do you know what makes today special? 👀",
        options: [
            {
                text: "It's just another day",
                result: "wrong",
                reaction: "Wrong answer! 😤\n\nHow can you not know this?\n\nTry again, birthday boy! ❤️"
            },
            { text: "It's my birthday 🎂", result: "right" },
            { text: "Something special is coming ❤️", result: "right" }
        ],
        reaction: "Good answer 😌❤️\n\nBut we're only getting started..."
    },
    {
        question: "Who do you think has been waiting for this day more than you? 😌",
        options: [
            {
                text: "My friends",
                result: "right",
                reaction: "Hmm... they love you, that's true. 😌\n\nBut I know someone who's been counting down the days even more... ❤️"
            },
            {
                text: "My family",
                result: "right",
                reaction: "Aww, they definitely have. 🥹\n\nBut I know someone who's been counting down the days even more... ❤️"
            },
            {
                text: "Someone who loves me a lot ❤️",
                result: "right",
                hearts: true,
                reaction: "Hmm... looks like you know her pretty well. 😌❤️"
            }
        ]
    },
    {
        question: "What's your favourite thing about us? ❤️",
        options: [
            { text: "Our conversations", result: "right" },
            { text: "Our memories", result: "right" },
            { text: "The way we understand each other", result: "right" },
            { text: "Everything about us ❤️", result: "right", hearts: true }
        ],
        reaction: "Whatever your answer is...\n\nI hope we create thousands of moments like these together. ❤️"
    },
    {
        question: "If you could choose one thing for your birthday, what would it be? 🎁",
        options: [
            {
                text: "A gift 🎁",
                result: "right",
                reaction: "A gift? Noted. 😌\n\nBut I think you might get something even better today... ❤️"
            },
            {
                text: "A birthday cake 🎂",
                result: "right",
                reaction: "Cake is a very good answer. 🎂\n\nBut you're still sweeter. 😌❤️"
            },
            {
                text: "A surprise 😍",
                result: "right",
                reaction: "Well... 😍\n\nYou're literally in the middle of one right now. ❤️"
            },
            {
                text: "Her ❤️",
                result: "right",
                hearts: true,
                reaction: "Good choice. 😌\n\nUnfortunately...\nI'm already yours. ❤️"
            }
        ]
    },
    {
        intro: "One last question...",
        introPause: 2000,
        question: "Do you know how much you mean to me? ❤️",
        options: [
            { text: "Yes ❤️", result: "right", hearts: true },
            { text: "Maybe...", result: "right" },
            { text: "I want to know 🥺", result: "right", hearts: true }
        ],
        autoAdvance: true,
        advanceDelay: 1300
    }
];

/* MEMORIES — photo is the position in birthdayData.photos (0 = photo1). date is optional. */
const memories = [
    {
        photo: 0,
        title: "Our First Memory ❤️",
        message: "One moment...\nthat became a beautiful memory.",
        date: "" // e.g. "14 • 02 • 2023"
    },
    {
        photo: 1,
        title: "That Smile ❤️",
        message: "One of the many reasons\nI love seeing you happy.",
        date: ""
    },
    {
        photo: 2,
        title: "Our Little Moments ✨",
        message: "The small moments\nalways become the biggest memories.",
        date: ""
    },
    {
        photo: 3,
        title: "Every Laugh 🥹",
        message: "You make even the most ordinary days\nfeel like my favourite ones.",
        date: ""
    },
    {
        photo: 4,
        title: "My Favourite Place ❤️",
        message: "Right next to you.\nAlways.",
        date: ""
    }
];

/* OUR STORY — revealed one step at a time. style: "soft" | highlight: true */
const storyTimeline = [
    { label: "Then ❤️", text: "The day our story started..." },
    { text: "Then came the conversations..." },
    { text: "Then came the laughter..." },
    { text: "Then came the memories..." },
    { text: "And somehow...\nyou became one of the most important people in my life. ❤️", highlight: true },
    { text: "And now...", style: "soft" },
    { text: "You're turning {age}. 🎂", highlight: true },
    { text: "And I get to celebrate you. ❤️", highlight: true }
];


/* ==========================================================================
   ✨  THE EXPERIENCE  (no need to edit below this line)
   ========================================================================== */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const random = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const pad = (n) => String(n).padStart(2, "0");

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let reduceMotion = motionQuery.matches;
if (motionQuery.addEventListener) {
    motionQuery.addEventListener("change", (event) => { reduceMotion = event.matches; });
}
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const isCompact = () => window.innerWidth < 640;

const PALETTE = {
    rose: "#ff7aa8",
    pink: "#f7b6cf",
    blush: "#ffd9e6",
    gold: "#e9c97f",
    goldSoft: "#f3dfae",
    wine: "#c2185b",
    lilac: "#c79bf0",
    white: "#fff8fb"
};
const SPARKLE_COLORS = [PALETTE.rose, PALETTE.pink, PALETTE.gold, PALETTE.goldSoft, PALETTE.white];

const HEART_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';


/* ---------- Text & date helpers ---------- */

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

function parseBirthday(text) {
    const match = String(text).match(/(\d{1,2})\s*([A-Za-z]+)/);
    if (match) {
        const prefix = match[2].toLowerCase().slice(0, 3);
        const month = MONTHS.findIndex((name) => name.toLowerCase().startsWith(prefix));
        if (month >= 0) return { day: Number(match[1]), month };
    }
    return { day: 4, month: 10 };
}

function ordinal(n) {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

const birthday = parseBirthday(birthdayData.birthday);

const tokens = {
    name: birthdayData.name,
    from: birthdayData.from,
    age: birthdayData.age,
    nth: ordinal(birthdayData.age),
    NTH: ordinal(birthdayData.age).toUpperCase(),
    dd: pad(birthday.day),
    mm: pad(birthday.month + 1)
};

function fill(text, extra = {}) {
    return String(text == null ? "" : text).replace(/\{(\w+)\}/g, (match, key) => {
        if (key in extra) return extra[key];
        if (key in tokens) return tokens[key];
        return match;
    });
}

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
}

function restartAnimation(node, className) {
    node.classList.remove(className);
    void node.offsetWidth;
    node.classList.add(className);
}


/* ---------- Scenes: every screen's timed sequence can be cancelled ---------- */

let activeSceneId = 0;

function createScene() {
    const id = ++activeSceneId;
    return {
        get alive() { return id === activeSceneId; },
        // Resolves after ms — or never, if he has already moved on to another screen.
        wait(ms) {
            const duration = reduceMotion ? Math.min(ms, 250) : ms;
            return new Promise((resolve) => {
                setTimeout(() => { if (id === activeSceneId) resolve(); }, duration);
            });
        }
    };
}

async function revealSequence(scene, nodes, gaps) {
    for (let i = 0; i < nodes.length; i++) {
        await scene.wait(gaps[i] == null ? 1200 : gaps[i]);
        nodes[i].classList.add("is-shown");
    }
}


/* ---------- Typewriter ---------- */

const segmenter = (typeof Intl !== "undefined" && Intl.Segmenter)
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

// Splits text into visible characters so emojis like ❤️ are typed in one piece.
const graphemes = (text) => segmenter
    ? Array.from(segmenter.segment(text), (part) => part.segment)
    : Array.from(text);

async function typeInto(target, text, scene, { speed = 45, skip = null } = {}) {
    target.textContent = "";
    target.classList.add("is-typing");
    const characters = graphemes(text);
    let typed = "";
    for (const character of characters) {
        if (reduceMotion || (skip && skip.now)) {
            typed = text;
            break;
        }
        typed += character;
        target.textContent = typed;
        let pause = speed;
        if (character === "\n") pause = speed * 7;
        else if (/[.,!?…]/.test(character)) pause = speed * 4;
        await scene.wait(pause);
    }
    target.textContent = typed;
    target.classList.remove("is-typing");
}

// A line screen readers get in full, while the eyes get the typewriter.
function createTypeLine(container, text, style) {
    const line = el("p", "type-line" + (style ? ` type-line--${style}` : ""));
    const visible = el("span", "typed");
    visible.setAttribute("aria-hidden", "true");
    line.append(el("span", "sr-only", text), visible);
    container.append(line);
    return visible;
}

async function playLines(scene, container, lines, button, label, afterLines) {
    container.replaceChildren();
    container.classList.remove("is-clearing");
    button.textContent = fill(label);
    button.classList.remove("is-shown");

    await scene.wait(1000);
    for (const line of lines) {
        if (line.clearBefore && container.children.length) {
            container.classList.add("is-clearing");
            await scene.wait(900);
            container.replaceChildren();
            container.classList.remove("is-clearing");
            await scene.wait(400);
        }
        const text = fill(line.text);
        const target = createTypeLine(container, text, line.style);
        await typeInto(target, text, scene, { speed: line.speed || 55 });
        await scene.wait(line.pause == null ? 1200 : line.pause);
    }
    if (afterLines) await afterLines();
    button.classList.add("is-shown");
}


/* ---------- Navigation between screens (no page reloads) ---------- */

const screens = Object.fromEntries($$(".screen").map((screen) => [screen.id, screen]));
let currentScreen = null;
let navigating = false;

async function goTo(id) {
    const next = screens[id];
    if (!next || navigating || next === currentScreen) return;
    navigating = true;

    const scene = createScene();
    if (currentScreen) {
        currentScreen.classList.remove("is-active");
        await delay(reduceMotion ? 150 : 650);
    }

    document.body.classList.toggle("is-dark", next.hasAttribute("data-dark"));
    document.body.classList.remove("is-celebrating");
    next.scrollTop = 0;

    // Build the screen's content first, then fade it in.
    const enter = sceneHandlers[id];
    if (enter) enter(scene);

    next.classList.add("is-active");
    currentScreen = next;
    next.focus({ preventScroll: true });
    navigating = false;
}


/* ---------- 1. Welcome ---------- */

function enterWelcome(scene) {
    const copy = messages.welcome;
    const eyebrow = $("#welcomeEyebrow");
    const title = $("#welcomeTitle");
    const button = $("#beginBtn");
    const lines = $("#welcomeLines");

    eyebrow.textContent = fill(copy.eyebrow);
    title.textContent = fill(copy.title);
    button.textContent = fill(copy.button);
    lines.replaceChildren(...copy.lines.map((text) => el("p", "lead seq", fill(text))));

    const sequence = [eyebrow, title, $("#welcomeDivider"), ...$$(".seq", lines), button];
    sequence.forEach((node) => node.classList.remove("is-shown"));
    revealSequence(scene, sequence, [500, 700, 600, 1500, 1900, 2100, 1700]);
}


/* ---------- 2. Quiz ---------- */

let quizIndex = 0;

function enterQuiz(scene) {
    quizIndex = 0;
    showQuestion(scene, true);
}

function setQuizProgress(answered) {
    const total = quizQuestions.length;
    $("#quizLabel").textContent = fill(messages.quiz.progress, {
        current: Math.min(quizIndex + 1, total),
        total
    });
    $("#quizFill").style.width = `${(answered / total) * 100}%`;
    const bar = $("#quizBar");
    bar.setAttribute("aria-valuemax", String(total));
    bar.setAttribute("aria-valuenow", String(answered));
}

async function swapQuizBody(scene, build, instant) {
    const body = $("#quizBody");
    if (!instant) {
        body.classList.add("is-leaving");
        await scene.wait(450);
    }
    body.classList.remove("is-leaving");
    body.replaceChildren();
    build(body);
    body.classList.add("is-entering");
    void body.offsetWidth;
    body.classList.remove("is-entering");
}

async function showQuestion(scene, instant = false) {
    const question = quizQuestions[quizIndex];
    setQuizProgress(quizIndex);

    if (question.intro) {
        await swapQuizBody(scene, (body) => body.append(el("p", "quiz-intro", fill(question.intro))), instant);
        await scene.wait(question.introPause || 1800);
        instant = false;
    }

    await swapQuizBody(scene, (body) => buildQuestion(scene, body, question), instant);
    const heading = $(".quiz-question", $("#quizBody"));
    if (heading) heading.focus({ preventScroll: true });
}

function buildQuestion(scene, body, question) {
    const heading = el("h2", "quiz-question", fill(question.question));
    heading.id = "quizQuestion";
    heading.tabIndex = -1;

    const options = el("div", "quiz-options");
    options.setAttribute("role", "group");
    options.setAttribute("aria-labelledby", "quizQuestion");

    question.options.forEach((option) => {
        const button = el("button", "option");
        button.type = "button";
        const mark = el("span", "option__mark");
        mark.innerHTML = HEART_SVG;
        button.append(mark, el("span", "option__text", fill(option.text)));
        button.addEventListener("click", (event) => answerQuestion(scene, question, option, button, event));
        options.append(button);
    });

    const feedback = el("div", "quiz-feedback-slot");
    feedback.setAttribute("aria-live", "polite");

    body.append(heading, options, feedback, el("div", "quiz-actions"));
}

function answerQuestion(scene, question, option, button, event) {
    if (!scene.alive || button.disabled) return;

    const body = $("#quizBody");
    const slot = $(".quiz-feedback-slot", body);
    const actions = $(".quiz-actions", body);
    const reaction = fill(option.reaction || question.reaction || "");
    slot.replaceChildren();

    if (option.result === "wrong") {
        button.classList.add("is-wrong");
        button.disabled = true;
        restartAnimation($("#quizCard"), "is-shaking");
        if (reaction) slot.append(el("div", "quiz-feedback quiz-feedback--wrong", reaction));
        const firstOpen = $(".option:not(:disabled)", body);
        if (firstOpen) firstOpen.focus({ preventScroll: true });
        return;
    }

    $$(".option", body).forEach((other) => {
        other.disabled = true;
        if (other !== button) other.classList.add("is-dimmed");
    });
    button.classList.add("is-selected");
    setQuizProgress(quizIndex + 1);

    const point = pointFrom(event, button);
    burstHearts(point.x, point.y, option.hearts ? 22 : 10);
    if (option.hearts) floatHeartsUp(10);

    if (reaction) slot.append(el("div", "quiz-feedback", reaction));

    if (question.autoAdvance) {
        scene.wait(question.advanceDelay || 1200).then(() => finishQuiz(scene));
        return;
    }

    const isLast = quizIndex === quizQuestions.length - 1;
    const next = el("button", "btn btn--primary btn--compact", fill(isLast ? messages.quiz.finish : messages.quiz.next));
    next.type = "button";
    next.addEventListener("click", () => {
        next.disabled = true;
        if (isLast) {
            finishQuiz(scene);
        } else {
            quizIndex += 1;
            showQuestion(scene);
        }
    });
    actions.append(next);

    requestAnimationFrame(() => {
        next.focus({ preventScroll: true });
        actions.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    });
}

async function finishQuiz(scene) {
    setQuizProgress(quizQuestions.length);
    confetti.burst({ count: 90, y: window.innerHeight * 0.4, power: 10 });
    await scene.wait(1800);
    goTo("secret");
}


/* ---------- 3. Secret message ---------- */

function enterSecret(scene) {
    playLines(scene, $("#secretLines"), messages.secret.lines, $("#openSurpriseBtn"), messages.secret.button);
}


/* ---------- 4. Memories ---------- */

let memoryObserver = null;

function enterMemories() {
    const copy = messages.memories;
    $("#memoriesEyebrow").textContent = fill(copy.eyebrow);
    $("#memoriesTitle").textContent = fill(copy.title);
    $("#memoriesSubtitle").textContent = fill(copy.subtitle);
    $("#memoriesBack").textContent = fill(copy.back);
    $("#memoriesNext").textContent = fill(copy.next);

    const list = $("#memoryList");
    list.replaceChildren(...memories.map(buildMemory));

    if (memoryObserver) memoryObserver.disconnect();
    const cards = $$(".memory", list);

    if (reduceMotion || !("IntersectionObserver" in window)) {
        cards.forEach((card) => card.classList.add("is-visible"));
        return;
    }

    memoryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            memoryObserver.unobserve(entry.target);
        });
    }, { root: screens.memories, threshold: 0.18, rootMargin: "0px 0px -6% 0px" });

    cards.forEach((card) => memoryObserver.observe(card));
}

function buildMemory(memory, index) {
    const card = el("article", "memory");
    card.style.setProperty("--tilt", `${index % 2 ? 1.6 : -1.6}deg`);

    const frame = el("figure", "memory__frame");
    frame.append(el("span", "memory__num", pad(index + 1)));

    const photoIndex = memory.photo == null ? index : memory.photo;
    const src = birthdayData.photos[photoIndex];
    if (src) {
        const img = new Image();
        img.loading = "lazy";
        img.decoding = "async";
        img.alt = fill(memory.alt || memory.title);
        img.addEventListener("error", () => img.replaceWith(photoPlaceholder(src, index)), { once: true });
        img.src = src;
        frame.append(img);
    } else {
        frame.append(photoPlaceholder("", index));
    }

    const text = el("div", "memory__text");
    if (memory.date) text.append(el("p", "memory__date", fill(memory.date)));
    text.append(
        el("h3", "memory__title", fill(memory.title)),
        el("p", "memory__msg", fill(memory.message))
    );

    card.append(frame, text);
    return card;
}

function photoPlaceholder(src, index) {
    const box = el("div", "memory__placeholder");
    box.innerHTML = HEART_SVG;
    box.append(el("span", "", `Photo ${index + 1}`), el("small", "", src || "Add a photo in script.js"));
    return box;
}


/* ---------- 5. Our story ---------- */

let storyStep = 0;

function enterStory() {
    const copy = messages.story;
    $("#storyEyebrow").textContent = fill(copy.eyebrow);
    $("#storyTitle").textContent = fill(copy.title);
    $("#storySubtitle").textContent = fill(copy.subtitle);
    $("#storyBack").textContent = fill(copy.back);
    $("#storyNext").textContent = fill(copy.next);

    const list = $("#timeline");
    list.replaceChildren(...storyTimeline.map((item) => {
        let className = "tl-item";
        if (item.highlight) className += " tl-item--highlight";
        if (item.style === "soft") className += " tl-item--soft";
        const li = el("li", className);
        const content = el("div", "tl-body");
        if (item.label) content.append(el("p", "tl-label", fill(item.label)));
        content.append(el("p", "tl-text", fill(item.text)));
        li.append(el("span", "tl-dot"), content);
        return li;
    }));

    storyStep = 0;
    revealStoryStep(0);
}

function revealStoryStep(step) {
    const items = $$(".tl-item", $("#timeline"));
    items.forEach((item) => item.classList.remove("is-current"));
    if (step > 0) items[step - 1].classList.add("line-on");
    items[step].classList.add("is-shown", "is-current");

    const isLast = step === items.length - 1;
    $("#storyNext").textContent = fill(isLast ? messages.story.ready : messages.story.next);

    if (step > 0) {
        items[step].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }
}

function advanceStory() {
    if (storyStep < storyTimeline.length - 1) {
        storyStep += 1;
        revealStoryStep(storyStep);
    } else {
        goTo("reveal");
    }
}


/* ---------- 6. The 25th birthday reveal ---------- */

async function enterReveal(scene) {
    const copy = messages.reveal;
    const date = $("#rvDate");
    const words = $("#rvWords");
    const years = $("#rvYearsWrap");
    const today = $("#rvToday");
    const happy = $("#rvHappyWrap");
    const button = $("#revealBtn");

    date.replaceChildren(el("span", "gradient-text", `${tokens.dd} • ${tokens.mm}`));
    words.textContent = fill(copy.words);
    $("#rvNumber").textContent = String(birthdayData.age);
    $("#rvYears").textContent = fill(copy.years);
    today.textContent = fill(copy.today);
    $("#rvHappy").textContent = fill(copy.happy);
    $("#rvLove").textContent = fill(copy.love);
    button.textContent = fill(copy.button);

    [date, words, years, today, happy, button].forEach((node) => node.classList.remove("is-shown"));

    const show = (node) => node.classList.add("is-shown");
    const hide = (node) => node.classList.remove("is-shown");

    await scene.wait(1400);
    show(date);
    confetti.burst({ count: 36, power: 6, y: window.innerHeight * 0.45, colors: [PALETTE.gold, PALETTE.goldSoft, PALETTE.white] });
    await scene.wait(2800);
    hide(date);
    await scene.wait(1100);

    show(words);
    await scene.wait(2600);
    hide(words);
    await scene.wait(1100);

    show(years);
    await scene.wait(3200);
    hide(years);
    await scene.wait(1100);

    show(today);
    await scene.wait(3400);
    hide(today);
    await scene.wait(800);

    // Lights up — celebration!
    document.body.classList.remove("is-dark");
    document.body.classList.add("is-celebrating");
    show(happy);
    celebrate();
    await scene.wait(2800);
    show(button);
}

function celebrate() {
    confetti.cannons();
    setTimeout(() => confetti.rain(70), 700);
    launchBalloons(isCompact() ? 7 : 12);
    burstHearts(window.innerWidth / 2, window.innerHeight / 2, 26);
    floatHeartsUp(16);
}


/* ---------- 7. The letter ---------- */

let letterSkip = null;

async function enterLetter(scene) {
    const copy = messages.letter;
    const body = $("#letterBody");
    const sign = $("#letterSign");
    const hint = $("#letterHint");
    const oneMore = $("#oneMoreBtn");

    $("#letterTitleTop").textContent = fill(copy.titleTop);
    $("#letterTitleLove").textContent = fill(copy.titleLove);

    const paragraphs = copy.paragraphs.map((text) => fill(text));
    $("#letterSr").textContent = [...paragraphs, fill(copy.signoff), fill(copy.signature)].join("\n\n");

    body.replaceChildren();
    sign.replaceChildren(
        el("span", "letter__signoff", fill(copy.signoff)),
        el("span", "letter__name", fill(copy.signature))
    );
    sign.classList.remove("is-shown");
    hint.textContent = fill(copy.hint);
    hint.classList.remove("is-hidden");
    oneMore.textContent = fill(copy.oneMore);
    oneMore.classList.remove("is-shown");

    const skip = { now: false };
    letterSkip = skip;

    await scene.wait(1200);
    for (const text of paragraphs) {
        const paragraph = el("p");
        paragraph.setAttribute("aria-hidden", "true");
        body.append(paragraph);
        if (!skip.now) keepInView(paragraph);
        await typeInto(paragraph, text, scene, { speed: 34, skip });
        if (!skip.now) keepInView(paragraph);
        await scene.wait(skip.now ? 0 : 650);
    }

    letterSkip = null;
    hint.classList.add("is-hidden");
    sign.classList.add("is-shown");
    await scene.wait(900);
    const rect = sign.getBoundingClientRect();
    burstHearts(rect.right - 60, rect.top + rect.height / 2, 12);

    await scene.wait(skip.now ? 1500 : 2400);
    oneMore.classList.add("is-shown");
}

// Gently scrolls the letter so the line being typed stays on screen.
function keepInView(node) {
    const screen = screens.letter;
    const rect = node.getBoundingClientRect();
    const overflow = rect.bottom - (window.innerHeight - 90);
    if (overflow > 0) {
        screen.scrollBy({ top: overflow + 40, behavior: reduceMotion ? "auto" : "smooth" });
    }
}

function skipLetter() {
    if (letterSkip) letterSkip.now = true;
}


/* ---------- 8. One more thing ---------- */

function enterOneMore(scene) {
    const heart = $("#bigHeart");
    heart.classList.remove("is-shown");

    playLines(scene, $("#oneMoreLines"), messages.oneMore.lines, $("#oneMoreContinue"), messages.oneMore.button, async () => {
        await scene.wait(500);
        heart.classList.add("is-shown");
        await scene.wait(400);
        const rect = heart.getBoundingClientRect();
        burstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 30);
        floatHeartsUp(14);
        await scene.wait(1800);
    });
}


/* ---------- 9. Final screen ---------- */

function enterFinal(scene) {
    const copy = messages.final;
    const date = $("#finalDate");
    const lines = $("#finalLines");

    date.replaceChildren(
        el("span", "gradient-text", `${tokens.dd} • ${tokens.mm} • ${birthdayData.age}`),
        el("span", "", " ❤️")
    );
    lines.replaceChildren(...copy.lines.map((text, i) => {
        const isWish = i === copy.lines.length - 1;
        return el("p", "final-line seq" + (isWish ? " final-line--wish" : ""), fill(text));
    }));
    $("#finalMade").textContent = fill(copy.madeWith);
    $("#finalBy").textContent = fill(copy.by);
    $("#finalName").textContent = birthdayData.from;
    $("#finalLetterBtn").textContent = fill(copy.letterAgain);
    $("#restartBtn").textContent = fill(copy.restart);

    const sequence = [date, ...$$(".seq", lines), $("#finalSignature"), $("#finalActions")];
    sequence.forEach((node) => node.classList.remove("is-shown"));

    revealSequence(scene, sequence, [800, 1600, 1500, 1700, 2000, 1300]);
    scene.wait(900).then(() => {
        confetti.burst({ count: 70, y: window.innerHeight * 0.3, power: 9 });
        launchBalloons(isCompact() ? 4 : 6);
    });
}

const sceneHandlers = {
    welcome: enterWelcome,
    quiz: enterQuiz,
    secret: enterSecret,
    memories: enterMemories,
    story: enterStory,
    reveal: enterReveal,
    letter: enterLetter,
    oneMore: enterOneMore,
    final: enterFinal
};


/* ==========================================================================
   Effects
   ========================================================================== */

/* ---------- Hearts, sparkles & balloons ---------- */

const ambientLayer = $("#floaters");
const celebrateLayer = $("#celebrateLayer");
const fxLayer = $("#fxLayer");

function spawnHeart(layer, { fast = false, prefill = false } = {}) {
    const heart = el("span", "floater");
    heart.innerHTML = HEART_SVG;
    const duration = fast ? random(5, 8) : random(14, 22);
    heart.style.setProperty("--x", `${random(2, 95)}vw`);
    heart.style.setProperty("--size", `${fast ? random(14, 30) : random(9, 22)}px`);
    heart.style.setProperty("--dur", `${duration}s`);
    heart.style.setProperty("--delay", prefill ? `${-random(0, duration * 0.8)}s` : "0s");
    heart.style.setProperty("--drift", `${random(-80, 80)}px`);
    heart.style.setProperty("--rot", `${random(-30, 30)}deg`);
    heart.style.setProperty("--op", (fast ? random(0.55, 0.9) : random(0.16, 0.42)).toFixed(2));
    heart.style.setProperty("--c", pick([PALETTE.rose, PALETTE.pink, PALETTE.wine, PALETTE.gold, PALETTE.lilac]));
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
    layer.append(heart);
}

const BALLOON_COLORS = [
    ["#ff9cc0", "#b0175a"],
    ["#f6e2b0", "#b8893b"],
    ["#d6b0ff", "#5e2b8c"],
    ["#ff7a9c", "#7a0f33"],
    ["#ffd1e1", "#c2185b"]
];

function spawnBalloon(layer, { celebrate: party = false } = {}) {
    const balloon = el("span", "balloon");
    const [c1, c2] = pick(BALLOON_COLORS);
    balloon.style.setProperty("--x", `${random(3, 88)}vw`);
    balloon.style.setProperty("--w", `${party ? random(38, 62) : random(24, 40)}px`);
    balloon.style.setProperty("--c1", c1);
    balloon.style.setProperty("--c2", c2);
    balloon.style.setProperty("--dur", `${party ? random(7, 11) : random(18, 26)}s`);
    balloon.style.setProperty("--delay", `${party ? random(0, 1.6) : 0}s`);
    balloon.style.setProperty("--drift", `${random(-60, 60)}px`);
    balloon.style.setProperty("--op", (party ? random(0.85, 0.95) : random(0.3, 0.5)).toFixed(2));
    balloon.addEventListener("animationend", (event) => {
        if (event.animationName === "balloonUp") balloon.remove();
    });
    layer.append(balloon);
}

function launchBalloons(count) {
    if (reduceMotion) return;
    for (let i = 0; i < count; i++) spawnBalloon(celebrateLayer, { celebrate: true });
}

function floatHeartsUp(count) {
    if (reduceMotion) return;
    for (let i = 0; i < count; i++) {
        setTimeout(() => spawnHeart(celebrateLayer, { fast: true }), i * 140);
    }
}

function startAmbient() {
    if (reduceMotion) return;
    const compact = isCompact();
    for (let i = 0; i < (compact ? 5 : 8); i++) spawnHeart(ambientLayer, { prefill: true });

    setInterval(() => {
        if (!document.hidden && !reduceMotion) spawnHeart(ambientLayer);
    }, compact ? 2600 : 1800);

    setTimeout(() => spawnBalloon(ambientLayer), 5000);
    setInterval(() => {
        if (!document.hidden && !reduceMotion) spawnBalloon(ambientLayer);
    }, 15000);
}

/* Small hearts/sparkles that fly out from a point */
function spawnFx(x, y, { kind = "heart", size = 14, color = PALETTE.rose, dx = 0, dy = -60, duration = 900, rotate = 0, onDone } = {}) {
    if (typeof Element.prototype.animate !== "function") {
        if (onDone) onDone();
        return;
    }
    const node = el("span", "fx");
    if (kind === "heart") node.innerHTML = HEART_SVG;
    else node.textContent = "✦";
    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    node.style.fontSize = `${size}px`;
    node.style.color = color;
    fxLayer.append(node);

    const at = (px, py, scale, angle) =>
        `translate(${px}px, ${py}px) translate(-50%, -50%) scale(${scale}) rotate(${angle}deg)`;

    const animation = node.animate([
        { transform: at(x, y, 0.3, 0), opacity: 0 },
        { transform: at(x + dx * 0.25, y + dy * 0.25, 1, rotate * 0.3), opacity: 1, offset: 0.2 },
        { transform: at(x + dx, y + dy, 0.6, rotate), opacity: 0 }
    ], { duration, easing: "cubic-bezier(.2,.75,.3,1)", fill: "forwards" });

    animation.onfinish = () => {
        node.remove();
        if (onDone) onDone();
    };
}

function burstHearts(x, y, count = 12) {
    if (reduceMotion) return;
    const total = isCompact() ? Math.ceil(count * 0.7) : count;
    for (let i = 0; i < total; i++) {
        const angle = random(0, Math.PI * 2);
        const distance = random(40, 120);
        spawnFx(x, y, {
            kind: Math.random() < 0.7 ? "heart" : "spark",
            size: random(10, 20),
            color: pick(SPARKLE_COLORS),
            dx: Math.cos(angle) * distance,
            dy: Math.sin(angle) * distance - 40,
            duration: random(800, 1300),
            rotate: random(-40, 40)
        });
    }
}

// Where to burst from: the tap position, or the button's centre for keyboard presses.
function pointFrom(event, element) {
    if (event && event.detail > 0 && (event.clientX || event.clientY)) {
        return { x: event.clientX, y: event.clientY };
    }
    const rect = element.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

/* ---------- Cursor trail (desktop only) ---------- */

function initCursorTrail() {
    if (!finePointer || reduceMotion) return;
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;
    let alive = 0;

    window.addEventListener("pointermove", (event) => {
        if (event.pointerType !== "mouse" || reduceMotion) return;
        const now = performance.now();
        if (now - lastTime < 45 || alive > 22) return;
        if (Math.hypot(event.clientX - lastX, event.clientY - lastY) < 14) return;
        lastTime = now;
        lastX = event.clientX;
        lastY = event.clientY;
        alive += 1;
        spawnFx(event.clientX, event.clientY, {
            kind: Math.random() < 0.55 ? "heart" : "spark",
            size: random(8, 13),
            color: pick(SPARKLE_COLORS),
            dx: random(-16, 16),
            dy: -random(18, 40),
            duration: 1000,
            onDone: () => { alive -= 1; }
        });
    }, { passive: true });
}

/* ---------- Starry sky with glowing particles (canvas) ---------- */

const sky = (() => {
    const canvas = $("#skyCanvas");
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let stars = [];
    let motes = [];

    function makeGlow(rgb) {
        const sprite = document.createElement("canvas");
        sprite.width = sprite.height = 64;
        const g = sprite.getContext("2d");
        const gradient = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, `rgba(${rgb}, 0.9)`);
        gradient.addColorStop(0.35, `rgba(${rgb}, 0.35)`);
        gradient.addColorStop(1, `rgba(${rgb}, 0)`);
        g.fillStyle = gradient;
        g.fillRect(0, 0, 64, 64);
        return sprite;
    }

    const glows = [makeGlow("255,122,168"), makeGlow("233,201,127"), makeGlow("199,155,240"), makeGlow("255,217,230")];

    function newMote(anywhere) {
        const size = random(6, 24);
        return {
            x: random(0, width),
            y: anywhere ? random(0, height) : height + size * 2,
            size,
            vy: random(0.08, 0.28),
            vx: random(-0.1, 0.1),
            sprite: pick(glows),
            alpha: random(0.18, 0.5),
            phase: random(0, Math.PI * 2)
        };
    }

    function resize() {
        const widthChanged = window.innerWidth !== width;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Mobile browsers resize the height when the address bar moves — keep the same stars then.
        if (widthChanged || !stars.length) {
            const count = Math.round(Math.min(170, Math.max(60, (width * height) / 7000)));
            stars = Array.from({ length: count }, () => ({
                x: random(0, width),
                y: random(0, height),
                r: random(0.3, 1.3),
                phase: random(0, Math.PI * 2),
                speed: random(0.4, 1.6),
                sparkle: Math.random() < 0.08
            }));
            motes = Array.from({ length: width < 640 ? 12 : 22 }, () => newMote(true));
        }
        if (reduceMotion) draw(0);
    }

    function draw(time) {
        const t = time / 1000;
        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = "#fff4f8";
        ctx.strokeStyle = "#ffe9f1";
        ctx.lineWidth = 0.6;
        for (const star of stars) {
            const twinkle = 0.5 + 0.5 * Math.sin(t * star.speed + star.phase);
            ctx.globalAlpha = 0.15 + twinkle * 0.65;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fill();
            if (star.sparkle && twinkle > 0.75) {
                const length = star.r * 6 * twinkle;
                ctx.globalAlpha = (twinkle - 0.75) * 2.4;
                ctx.beginPath();
                ctx.moveTo(star.x - length, star.y);
                ctx.lineTo(star.x + length, star.y);
                ctx.moveTo(star.x, star.y - length);
                ctx.lineTo(star.x, star.y + length);
                ctx.stroke();
            }
        }

        for (let i = 0; i < motes.length; i++) {
            const mote = motes[i];
            if (!reduceMotion) {
                mote.y -= mote.vy;
                mote.x += mote.vx + Math.sin(t * 0.6 + mote.phase) * 0.15;
                if (mote.y < -mote.size * 2) motes[i] = newMote(false);
            }
            ctx.globalAlpha = mote.alpha * (0.7 + 0.3 * Math.sin(t * 1.3 + mote.phase));
            ctx.drawImage(mote.sprite, mote.x - mote.size, mote.y - mote.size, mote.size * 2, mote.size * 2);
        }
        ctx.globalAlpha = 1;
    }

    function loop(time) {
        draw(time);
        requestAnimationFrame(loop);
    }

    function start() {
        resize();
        let timer = 0;
        window.addEventListener("resize", () => {
            clearTimeout(timer);
            timer = setTimeout(resize, 200);
        });
        if (reduceMotion) draw(0);
        else requestAnimationFrame(loop);
    }

    return { start };
})();

/* ---------- Lightweight confetti ---------- */

const confetti = (() => {
    const canvas = $("#confettiCanvas");
    const ctx = canvas.getContext("2d");
    const defaultColors = [PALETTE.rose, PALETTE.pink, PALETTE.gold, PALETTE.goldSoft, PALETTE.white, PALETTE.wine, PALETTE.lilac];
    const MAX_PIECES = 420;
    let pieces = [];
    let running = false;
    let width = 0;
    let height = 0;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function scaled(count) {
        if (reduceMotion) return Math.min(count, 16);
        return Math.round(count * (width < 640 ? 0.6 : 1));
    }

    function addPiece(x, y, vx, vy, colors) {
        if (pieces.length >= MAX_PIECES) return;
        const roll = Math.random();
        pieces.push({
            x, y, vx, vy,
            size: random(6, 11),
            color: pick(colors || defaultColors),
            shape: roll < 0.2 ? "heart" : roll < 0.6 ? "rect" : "circle",
            rotation: random(0, Math.PI * 2),
            spin: random(-0.2, 0.2),
            flip: random(0, Math.PI * 2),
            flipSpeed: random(0.05, 0.14),
            sway: random(0, Math.PI * 2),
            life: 0,
            ttl: random(240, 380)
        });
    }

    function burst({ x = width / 2, y = height * 0.35, count = 80, angle = -Math.PI / 2, spread = Math.PI * 2, power = 9, colors } = {}) {
        for (let i = 0; i < scaled(count); i++) {
            const direction = angle + random(-spread / 2, spread / 2);
            const velocity = power * random(0.4, 1.1);
            addPiece(x, y, Math.cos(direction) * velocity, Math.sin(direction) * velocity, colors);
        }
        start();
    }

    function cannons() {
        burst({ x: 0, y: height * 0.9, angle: -Math.PI * 0.32, spread: 0.6, power: 17, count: 70 });
        burst({ x: width, y: height * 0.9, angle: -Math.PI * 0.68, spread: 0.6, power: 17, count: 70 });
    }

    function rain(count = 60) {
        for (let i = 0; i < scaled(count); i++) {
            addPiece(random(0, width), random(-height * 0.6, -10), random(-1, 1), random(1, 3));
        }
        start();
    }

    function drawHeart(size) {
        ctx.beginPath();
        ctx.moveTo(0, size * 0.5);
        ctx.bezierCurveTo(-size * 0.6, size * 0.1, -size * 0.6, -size * 0.5, 0, -size * 0.15);
        ctx.bezierCurveTo(size * 0.6, -size * 0.5, size * 0.6, size * 0.1, 0, size * 0.5);
        ctx.fill();
    }

    function tick() {
        ctx.clearRect(0, 0, width, height);
        pieces = pieces.filter((p) => p.life < p.ttl && p.y < height + 40);

        for (const p of pieces) {
            p.life += 1;
            p.vx *= 0.985;
            p.vy = Math.min(p.vy * 0.985 + 0.2, 3.6);
            p.sway += 0.04;
            p.x += p.vx + Math.sin(p.sway) * 0.7;
            p.y += p.vy;
            p.rotation += p.spin;
            p.flip += p.flipSpeed;

            ctx.save();
            ctx.globalAlpha = Math.min(1, (p.ttl - p.life) / 50);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.scale(1, Math.cos(p.flip));
            ctx.fillStyle = p.color;
            if (p.shape === "rect") {
                ctx.fillRect(-p.size / 2, -p.size * 0.3, p.size, p.size * 0.6);
            } else if (p.shape === "circle") {
                ctx.beginPath();
                ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
                ctx.fill();
            } else {
                drawHeart(p.size * 1.2);
            }
            ctx.restore();
        }

        if (pieces.length) {
            requestAnimationFrame(tick);
        } else {
            running = false;
            ctx.clearRect(0, 0, width, height);
        }
    }

    function start() {
        if (running) return;
        running = true;
        requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);

    return { burst, cannons, rain };
})();


/* ==========================================================================
   Music
   ========================================================================== */

const music = (() => {
    const wrap = $("#music");
    const toggleButton = $("#musicToggle");
    const muteButton = $("#muteToggle");
    let audio = null;
    let fadeTimer = 0;

    function ensureAudio() {
        if (audio) return audio;
        audio = new Audio();
        audio.loop = true;
        audio.preload = "auto";
        audio.addEventListener("play", update);
        audio.addEventListener("pause", update);
        audio.addEventListener("error", () => {
            wrap.classList.add("is-missing");
            toggleButton.title = `Add your song at ${birthdayData.music}`;
            update();
        });
        audio.src = birthdayData.music;
        return audio;
    }

    function fadeIn() {
        clearInterval(fadeTimer);
        const target = Math.max(0, Math.min(1, birthdayData.musicVolume));
        try { audio.volume = 0; } catch (error) { /* iOS controls volume itself */ }
        fadeTimer = setInterval(() => {
            try {
                audio.volume = Math.min(target, audio.volume + target / 30);
                if (audio.volume >= target) clearInterval(fadeTimer);
            } catch (error) {
                clearInterval(fadeTimer);
            }
        }, 60);
    }

    async function play() {
        if (!birthdayData.musicEnabled || !birthdayData.music) return;
        const track = ensureAudio();
        try {
            await track.play();
            fadeIn();
            wrap.classList.add("has-started");
        } catch (error) {
            // Blocked or missing file — the experience carries on without music.
        }
        update();
    }

    function toggle() {
        if (audio && !audio.paused) audio.pause();
        else play();
    }

    function toggleMute() {
        if (!audio) return;
        audio.muted = !audio.muted;
        update();
    }

    function update() {
        const playing = Boolean(audio && !audio.paused);
        const muted = Boolean(audio && audio.muted);
        wrap.classList.toggle("is-playing", playing && !muted);
        toggleButton.setAttribute("aria-pressed", String(playing));
        toggleButton.setAttribute("aria-label", playing ? "Pause music" : "Play music");
        muteButton.textContent = muted ? "🔇" : "🔊";
        muteButton.setAttribute("aria-pressed", String(muted));
        muteButton.setAttribute("aria-label", muted ? "Unmute music" : "Mute music");
    }

    function init() {
        if (!birthdayData.musicEnabled || !birthdayData.music) {
            wrap.hidden = true;
            return;
        }
        toggleButton.addEventListener("click", toggle);
        muteButton.addEventListener("click", toggleMute);
    }

    return { init, play };
})();


/* ==========================================================================
   Birthday date chip
   ========================================================================== */

function initDateChip() {
    const chip = $("#dateChip");
    const monthName = MONTHS[birthday.month].toUpperCase();
    $(".date-chip__date", chip).textContent = `${tokens.dd} ${monthName} ❤️`;
    chip.setAttribute("aria-label", `Birthday: ${tokens.dd} ${MONTHS[birthday.month]}`);

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let next = new Date(now.getFullYear(), birthday.month, birthday.day);
    if (next < today) next = new Date(now.getFullYear() + 1, birthday.month, birthday.day);
    const days = Math.round((next - today) / 86400000);

    // On any other day the experience still works — the chip just says how close it is.
    let note = "";
    if (days === 0) note = "Today is the day ✨";
    else if (days === 1) note = "Tomorrow ✨";
    else if (days <= 30) note = `In ${days} days`;
    $(".date-chip__note", chip).textContent = note;
}


/* ==========================================================================
   Start
   ========================================================================== */

function bindEvents() {
    $("#beginBtn").addEventListener("click", () => {
        music.play();
        goTo("quiz");
    });
    $("#openSurpriseBtn").addEventListener("click", () => goTo("memories"));
    $("#memoriesBack").addEventListener("click", () => goTo("secret"));
    $("#memoriesNext").addEventListener("click", () => goTo("story"));
    $("#storyBack").addEventListener("click", () => goTo("memories"));
    $("#storyNext").addEventListener("click", advanceStory);
    $("#timeline").addEventListener("click", advanceStory);
    $("#revealBtn").addEventListener("click", () => goTo("letter"));
    $("#oneMoreBtn").addEventListener("click", () => goTo("oneMore"));
    $("#oneMoreContinue").addEventListener("click", () => goTo("final"));
    $("#finalLetterBtn").addEventListener("click", () => goTo("letter"));
    $("#restartBtn").addEventListener("click", () => goTo("welcome"));

    const letterCard = $("#letterCard");
    letterCard.addEventListener("click", skipLetter);
    letterCard.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            skipLetter();
        }
    });

    // Every button press gets a little burst of hearts.
    document.addEventListener("click", (event) => {
        const button = event.target.closest(".btn");
        if (!button) return;
        const point = pointFrom(event, button);
        burstHearts(point.x, point.y, 10);
    });
}

function init() {
    document.title = fill(messages.pageTitle);
    initDateChip();
    music.init();
    bindEvents();
    sky.start();
    startAmbient();
    initCursorTrail();

    // Preview tip: open index.html#letter (or #quiz, #memories, #reveal...) to jump straight to a screen.
    const requested = window.location.hash.slice(1);
    goTo(screens[requested] ? requested : "welcome");
}

init();
