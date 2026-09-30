/* =========================================================
   FILTER X 5.1
   STABLE EDITION
   Complete JavaScript
   ========================================================= */


/* =========================================================
   1. LEVEL SYSTEM
   ========================================================= */

const L = {
    none: 0,
    "very low": 0,
    low: 1,
    "low-moderate": 1,
    moderate: 2,
    "moderate-high": 2.5,
    high: 3,
    "very high": 3,
    major: 3,
    extreme: 3,
    present: 2,
    mild: 1
};

const LEVEL_LABELS = {
    0: "None",
    1: "Low",
    2: "Moderate",
    3: "High",
    4: "Any"
};

const colors = [
    "#5b3fd9",
    "#8a5cf6",
    "#c65bd9",
    "#e0578a",
    "#e07b3c",
    "#3fae7a",
    "#3f8fd9",
    "#7a4fd9"
];

function lvl(value) {
    if (value === undefined || value === null || value === "") {
        return null;
    }

    const normalized = String(value)
        .trim()
        .toLowerCase();

    return L[normalized] ?? null;
}


/* =========================================================
   2. BOOK DATABASE
   ========================================================= */

const BASE_BOOKS = [

    {
        title: "It Ends With Us",
        author: "Colleen Hoover",
        isbn: "9781501110368",
        romance: "High",
        spice: "Moderate",
        violence: "Moderate-High",
        domesticViolence: "Major",
        cheating: "Major",
        extra: ["Marriage", "High emotional intensity"]
    },

    {
        title: "It Starts With Us",
        author: "Colleen Hoover",
        isbn: "9781668001226",
        romance: "High",
        spice: "Moderate",
        domesticViolence: "Low (threats only)",
        cheating: "No",
        extra: [
            "Divorce",
            "Parenthood",
            "Second Chance",
            "Fluffy moments"
        ]
    },

    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        isbn: "9781501161933",
        romance: "Present",
        profanity: "None",
        gore: "None",
        domesticViolence: "Present",
        cheating: "Present",
        extra: []
    },

    {
        title: "King of Wrath",
        author: "Ana Huang",
        isbn: "9781728289724",
        romance: "High",
        spice: "Moderate-High",
        gore: "None",
        violence: "Low",
        cheating: "No",
        extra: ["Profanity"]
    },

    {
        title: "King of Pride",
        author: "Ana Huang",
        isbn: "9781728289731",
        romance: "High",
        spice: "Moderate-High",
        cheating: "No",
        extra: ["Profanity"]
    },

    {
        title: "Twisted Hate",
        author: "Ana Huang",
        isbn: "9781728274881",
        romance: "High",
        spice: "High",
        gore: "None",
        violence: "Moderate",
        cheating: "No",
        extra: ["Profanity"]
    },

    {
        title: "Twisted Games",
        author: "Ana Huang",
        isbn: "9781728274874",
        spice: "High",
        violence: "Low",
        gore: "None",
        cheating: "No",
        extra: ["Dark Romance", "Profanity"]
    },

    {
        title: "Better Than the Movies",
        author: "Lynn Painter",
        isbn: "9781534467637",
        spice: "None",
        violence: "Low",
        gore: "None",
        cheating: "No",
        extra: [
            "Fluffy Romance",
            "Fake Dating",
            "Profanity"
        ]
    },

    {
        title: "You Deserve Each Other",
        author: "Sarah Hogle",
        isbn: "9780593085424",
        romance: "Present",
        spice: "Very Low",
        violence: "Low",
        gore: "None",
        cheating: "No",
        extra: []
    },

    {
        title: "The Wrong Bride",
        author: "Catharina Maura",
        isbn: "9781464227134",
        romance: "Present",
        spice: "Moderate",
        violence: "Low",
        gore: "None",
        cheating: "No",
        extra: [
            "Conflict",
            "Marriage",
            "Pregnancy"
        ]
    },

    {
        title: "Binding 13",
        author: "Chloe Walsh",
        isbn: "9780349439259",
        romance: "Present",
        spice: "Low",
        domesticViolence: "High",
        gore: "Low",
        cheating: "No",
        extra: ["Fluffy Romance"]
    },

    {
        title: "Keeping 13",
        author: "Chloe Walsh",
        isbn: "9781728299976",
        romance: "Present",
        spice: "Low",
        domesticViolence: "High",
        gore: "Low",
        cheating: "No",
        extra: ["Fluffy Romance"]
    },

    {
        title: "Rebirth of the Malicious Empress of Military Lineage",
        author: "Qian Shan Cha Ke",
        cover: "covers/rebirth-empress.jpg",
        romance: "Present",
        spice: "Low",
        violence: "Moderate",
        gore: "Moderate",
        cheating: "No",
        extra: [
            "Marriage",
            "Pregnancy"
        ]
    },

    {
        title: "Insatiable",
        author: "Leigh Rivers",
        isbn: "9780349448541",
        domesticViolence: "High",
        extra: [
            "Dark Romance",
            "High sexual abuse content"
        ]
    },

    {
        title: "Voracious",
        author: "Leigh Rivers",
        isbn: "9780349448558",
        spice: "High",
        gore: "High",
        violence: "High",
        extra: [
            "Profanity",
            "Sexual abuse",
            "Eye harm"
        ]
    },

    {
        title: "Twisted Love",
        author: "Ana Huang",
        isbn: "9781728274867",
        spice: "Moderate-High",
        violence: "Moderate",
        gore: "None",
        cheating: "No",
        extra: [
            "Dark Romance",
            "Profanity",
            "Selective amnesia"
        ]
    },

    {
        title: "Sunset Bridge",
        author: "Emilie Richards",
        isbn: "9780778312383",
        cheating: "No",
        extra: [
            "Fluffy Romance",
            "Girl friendships",
            "Pregnancy",
            "Divorce"
        ]
    },

    {
        title: "Twisted Lies",
        author: "Ana Huang",
        isbn: "9781728274898",
        spice: "High",
        violence: "Moderate",
        gore: "None",
        cheating: "No",
        extra: [
            "Romance",
            "Profanity"
        ]
    },

    {
        title: "King of Greed",
        author: "Ana Huang",
        isbn: "9780349436357",
        spice: "High",
        violence: "Low",
        cheating: "No",
        extra: [
            "Divorce",
            "Second Chance",
            "Profanity"
        ]
    },

    {
        title: "I Am Not Jessica Chen",
        author: "Ann Liang",
        isbn: "9781335523129",
        spice: "None",
        violence: "None",
        gore: "None",
        cheating: "No",
        extra: [
            "Sci-fi",
            "Fantasy",
            "Mild fluff romance",
            "Self discovery",
            "Self growth",
            "Highschool"
        ]
    },

    {
        title: "If You Could See the Sun",
        author: "Ann Liang",
        isbn: "9781335005984",
        spice: "None",
        violence: "Low",
        gore: "None",
        cheating: "No",
        extra: [
            "Fantasy",
            "Sci-fi",
            "Self growth",
            "Friendship",
            "Academic rivalry"
        ]
    },

    {
        title: "I Hope This Doesn't Find You",
        author: "Ann Liang",
        isbn: "9781338827170",
        violence: "Low",
        gore: "None",
        cheating: "No",
        extra: [
            "Academic rivalry",
            "Moderate fluffy romance",
            "Friendship",
            "Enemies to lovers",
            "Highschool",
            "Self discovery"
        ]
    },

    {
        title: "This Time It's Real",
        author: "Ann Liang",
        isbn: "9781338827118",
        spice: "Low",
        violence: "None",
        cheating: "No",
        extra: [
            "Fluffy Romance",
            "Fake dating",
            "Slow burn",
            "Highschool",
            "Friendship",
            "Self discovery"
        ]
    },

    {
        title: "Beautiful Fiend",
        author: "Lola King",
        isbn: "9781916837034",
        spice: "High",
        violence: "High",
        gore: "Moderate",
        extra: [
            "Dark Romance",
            "Knife play",
            "Gang rivalry",
            "Psychotic male lead"
        ]
    },

    {
        title: "God of Malice",
        author: "Rina Kent",
        isbn: "9781685450960",
        spice: "High",
        violence: "High",
        gore: "Low",
        extra: [
            "Dark Romance",
            "Secret society",
            "Psychotic male lead",
            "College",
            "Powerful families"
        ]
    },

    {
        title: "God of Pain",
        author: "Rina Kent",
        isbn: "9781685452001",
        spice: "High",
        violence: "High",
        gore: "Moderate",
        cheating: "No",
        extra: [
            "Dark Romance",
            "Powerful families",
            "Psychotic male lead",
            "College",
            "Ballet",
            "Kidnapping",
            "Family rivalry",
            "Mafia",
            "Bdsm",
            "Toxic relationship",
            "Childhood trauma",
            "Dubious consent"
        ]
    },

    {
        title: "God of Wrath",
        author: "Rina Kent",
        isbn: "9781685452063",
        spice: "High",
        violence: "High",
        gore: "Low",
        cheating: "No",
        extra: [
            "Dark Romance",
            "Mafia",
            "Stalking",
            "College",
            "Kink",
            "Enemies to lovers",
            "Dubious consent"
        ]
    },

    {
        title: "Purple Hibiscus",
        author: "Chimamanda Ngozi Adichie",
        isbn: "9781616202415",
        domesticViolence: "Present",
        violence: "Moderate-High",
        gore: "None",
        extra: [
            "Self discovery",
            "Religious fanaticism",
            "Post-colonial era"
        ]
    },

    {
        title: "All Your Perfects",
        author: "Colleen Hoover",
        isbn: "9781501193323",
        romance: "Present",
        cheating: "Present",
        gore: "None",
        extra: [
            "Marriage",
            "Heartbreak",
            "Miscarriage",
            "Infertility",
            "Slow burn"
        ]
    },

    {
        title: "Maybe Someday",
        author: "Colleen Hoover",
        isbn: "9781476753164",
        spice: "Low",
        cheating: "Present",
        gore: "None",
        extra: [
            "Heartbreak",
            "Forbidden love",
            "Chronic illness",
            "High emotional intensity"
        ]
    },

    {
        title: "Ugly Love",
        author: "Colleen Hoover",
        isbn: "9781476753188",
        romance: "Present",
        spice: "High",
        cheating: "Present",
        gore: "None",
        extra: [
            "Sexual abuse (low-moderate)",
            "High emotional intensity",
            "Friends with benefits",
            "Second Chance",
            "Child loss",
            "Pregnancy"
        ]
    },

    {
        title: "The Way I Am Now",
        author: "Amber Smith",
        isbn: "9781665947114",
        romance: "Present",
        violence: "Low",
        gore: "None",
        cheating: "No",
        extra: [
            "Sexual abuse",
            "Self discovery",
            "Substance abuse (low)",
            "Second Chance"
        ]
    },

    {
        title: "My Fault",
        author: "Mercedes Ron",
        isbn: "9781728291413",
        romance: "Present",
        spice: "Moderate",
        cheating: "No",
        extra: [
            "Enemies to lovers",
            "Family conflict",
            "Forbidden romance",
            "Step siblings",
            "Billionaire",
            "Illegal racing",
            "Trauma"
        ]
    },

    {
        title: "Your Fault",
        author: "Mercedes Ron",
        isbn: "9781728290768",
        romance: "Present",
        spice: "Moderate",
        violence: "Low",
        gore: "Low",
        cheating: "Present",
        extra: [
            "Age gap",
            "University",
            "Forbidden romance",
            "Family conflict",
            "Step siblings"
        ]
    },

    {
        title: "Our Fault",
        author: "Mercedes Ron",
        isbn: "9781728291437",
        romance: "Present",
        spice: "Moderate",
        violence: "Moderate",
        gore: "Low",
        cheating: "Present",
        extra: [
            "Angst",
            "Second Chance",
            "Pregnancy",
            "Forbidden romance",
            "Step siblings"
        ]
    },

    {
        title: "King of Sloth",
        author: "Ana Huang",
        isbn: "9780349436371",
        romance: "Present",
        spice: "Moderate",
        violence: "Low",
        gore: "None",
        cheating: "Mild",
        extra: [
            "Workaholic",
            "Workplace romance",
            "Billionaire",
            "Strong female lead"
        ]
    },

    {
        title: "To All the Boys I've Loved Before",
        author: "Jenny Han",
        isbn: "9781442426719",
        spice: "None",
        violence: "None",
        gore: "None",
        cheating: "No",
        extra: [
            "Fluffy Romance",
            "Coming of age",
            "Fake Dating",
            "Loss of parent",
            "Sisterhood",
            "Self confidence"
        ]
    },

    {
        title: "Taming 7",
        author: "Chloe Walsh",
        isbn: "9781464216053",
        violence: "Moderate",
        gore: "Low",
        extra: [
            "Fluffy Romance",
            "Trauma",
            "Sexual harassment",
            "Child abuse",
            "Friends to lovers",
            "Family dysfunction",
            "Mental health"
        ]
    },

    {
        title: "The Mindf*ck Series",
        author: "S.T. Abby",
        spice: "Moderate",
        violence: "Extreme",
        gore: "Extreme",
        cheating: "No",
        extra: [
            "Rape",
            "Murder",
            "Child abuse",
            "Torture",
            "Trauma revenge",
            "FBI",
            "Institutional corruption"
        ]
    },

    {
        title: "River's Call",
        author: "Melody Carlson",
        isbn: "9781426712678",
        spice: "None",
        violence: "Low",
        gore: "None",
        extra: [
            "Family conflict",
            "Growth",
            "Forgiveness",
            "Pregnancy",
            "Mother-daughter relationship",
            "1960s setting"
        ]
    },

    {
        title: "The Killing Woods",
        author: "Lucy Christopher",
        isbn: "9780545461009",
        romance: "None",
        spice: "Low",
        violence: "Moderate",
        gore: "Low",
        cheating: "No",
        extra: [
            "Murder",
            "Drug abuse",
            "High profanity",
            "Mystery",
            "Trauma",
            "Highschool"
        ]
    },

    {
        title: "The Cry of the Phoenix Which Reached the Ninth Heaven",
        author: "Xiao Yun",
        cover: "covers/cry-of-the-phoenix.jpg",
        romance: "High",
        spice: "Moderate",
        violence: "High",
        gore: "Moderate",
        domesticViolence: "Present",
        cheating: "Present",
        extra: [
            "Revenge",
            "Pregnancy",
            "Politics",
            "Ancient China",
            "Ruthless female lead",
            "Family betrayal"
        ]
    },

    {
        title: "Obsessing Over His Favourite",
        author: "Ava Selwyn",
        cover: "covers/obsessing-over-his-favourite.jpg",
        romance: "Present",
        gore: "None",
        violence: "Low",
        spice: "Moderate",
        cheating: "Present",
        extra: [
            "Possessive male lead",
            "Billionaire",
            "Love triangle",
            "Brother's best friend",
            "Amnesia",
            "She stops chasing him"
        ]
    },

    {
        title: "Addicted to His Favourite",
        author: "Ava Selwyn",
        cover: "covers/addicted-to-his-favourite.jpg",
        romance: "Present",
        spice: "High",
        gore: "None",
        violence: "Low",
        extra: [
            "Marriage",
            "Billionaire",
            "Possessive male lead",
            "Love triangle"
        ]
    },

    {
        title: "Forever His Favourite",
        author: "Ava Selwyn",
        cover: "covers/forever-his-favourite.jpg",
        spice: "High",
        gore: "None",
        violence: "Moderate",
        cheating: "No",
        extra: [
            "Love triangle",
            "Billionaire",
            "Possessive male lead",
            "Marriage",
            "She stops chasing him"
        ]
    }
];


/* =========================================================
   3. TAG CATEGORIES
   ========================================================= */

const CATEGORY_MAP = {

    /* GENRE */
    "Dark Romance": "genre",
    "Fluffy Romance": "genre",
    "Sci-fi": "genre",
    "Fantasy": "genre",
    "Mystery": "genre",

    /* TROPE */
    "Slow burn": "trope",
    "Enemies to lovers": "trope",
    "Fake Dating": "trope",
    "Fake dating": "trope",
    "Second Chance": "trope",
    "Forbidden love": "trope",
    "Forbidden romance": "trope",
    "Friends with benefits": "trope",
    "Friends to lovers": "trope",
    "Selective amnesia": "trope",
    "Psychotic male lead": "trope",
    "Workplace romance": "trope",
    "Possessive male lead": "trope",
    "Love triangle": "trope",
    "Brother's best friend": "trope",
    "Amnesia": "trope",
    "She stops chasing him": "trope",
    "Age gap": "trope",

    /* RELATIONSHIP */
    "Marriage": "relationship",
    "Pregnancy": "relationship",
    "Parenthood": "relationship",
    "Divorce": "relationship",
    "Friendship": "relationship",
    "Girl friendships": "relationship",
    "Family rivalry": "relationship",
    "Sisterhood": "relationship",
    "Family dysfunction": "relationship",
    "Mother-daughter relationship": "relationship",

    /* CONTENT */
    "Profanity": "content",
    "Knife play": "content",
    "Kidnapping": "content",
    "Stalking": "content",
    "Eye harm": "content",
    "Sexual abuse": "content",
    "Sexual abuse (low-moderate)": "content",
    "High sexual abuse content": "content",
    "Miscarriage": "content",
    "Infertility": "content",
    "Child loss": "content",
    "Religious fanaticism": "content",
    "Gang rivalry": "content",
    "Bdsm": "content",
    "Toxic relationship": "content",
    "Childhood trauma": "content",
    "Dubious consent": "content",
    "Kink": "content",
    "Loss of parent": "content",
    "Sexual harassment": "content",
    "Child abuse": "content",
    "Rape": "content",
    "Murder": "content",
    "Torture": "content",
    "Trauma revenge": "content",
    "Drug abuse": "content",
    "High profanity": "content",
    "Revenge": "content",
    "Family betrayal": "content",
    "Substance abuse (low)": "content",

    /* MOOD */
    "High emotional intensity": "mood",
    "Heartbreak": "mood",
    "Chronic illness": "mood",
    "Fluffy moments": "mood",
    "Self discovery": "mood",
    "Self growth": "mood",
    "Mild fluff romance": "mood",
    "Moderate fluffy romance": "mood",
    "Self confidence": "mood",
    "Growth": "mood",
    "Forgiveness": "mood",
    "Mental health": "mood",
    "Trauma": "mood",
    "Angst": "mood",

    /* OTHER */
    "College": "other",
    "Highschool": "other",
    "Ballet": "other",
    "Post-colonial era": "other",
    "Conflict": "other",
    "Mafia": "other",
    "Secret society": "other",
    "Academic rivalry": "other",
    "Powerful families": "other",
    "Romance": "other",
    "Workaholic": "other",
    "Strong female lead": "other",
    "Coming of age": "other",
    "FBI": "other",
    "Institutional corruption": "other",
    "University": "other",
    "1960s setting": "other",
    "Politics": "other",
    "Ancient China": "other",
    "Ruthless female lead": "other",
    "Billionaire": "other",
    "Illegal racing": "other",
    "Family conflict": "other",
    "Step siblings": "other"
};


/* Case-insensitive category lookup */

function categoryOf(tag) {

    if (!tag) return "other";

    const exact = CATEGORY_MAP[tag];

    if (exact) return exact;

    const found = Object.keys(CATEGORY_MAP).find(
        key => key.toLowerCase() === String(tag).toLowerCase()
    );

    return found ? CATEGORY_MAP[found] : "other";
}


/* =========================================================
   4. SAFE DOM HELPERS
   ========================================================= */

function $(id) {
    return document.getElementById(id);
}

function setText(id, value) {
    const el = $(id);
    if (el) el.textContent = value;
}

function setHTML(id, html) {
    const el = $(id);
    if (el) el.innerHTML = html;
}

function showElement(id, visible) {
    const el = $(id);
    if (el) el.style.display = visible ? "" : "none";
}


/* =========================================================
   5. PERSISTENCE
   ========================================================= */

function loadJSON(key, fallback) {

    try {

        const value = localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        const parsed = JSON.parse(value);

        return parsed ?? fallback;

    } catch (error) {

        console.warn("Filter X storage read failed:", key, error);

        return fallback;
    }
}


function saveJSON(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.warn("Filter X storage save failed:", key, error);
    }
}


function loadCustomBooks() {
    const data = loadJSON("filterx_custom_books", []);
    return Array.isArray(data) ? data : [];
}


function saveCustomBooks(list) {
    saveJSON("filterx_custom_books", list);
}


let books = BASE_BOOKS.concat(loadCustomBooks());


function bookKey(book) {

    return `${book.title}|${book.author || ""}`;
}


/* =========================================================
   6. PERSONAL BOOK DATA
   ========================================================= */

let personal = loadJSON("filterx_personal", {});

if (!personal || typeof personal !== "object") {
    personal = {};
}


function getPersonal(book) {

    const key = bookKey(book);

    return {
        favorite: false,
        bookmarked: false,
        status: "none",
        notes: "",
        ...(personal[key] || {})
    };
}


function setPersonal(book, patch) {

    const key = bookKey(book);

    personal[key] = {
        ...getPersonal(book),
        ...patch
    };

    saveJSON("filterx_personal", personal);
}


/* =========================================================
   7. RECENTLY VIEWED
   ========================================================= */

let recentViewed = loadJSON(
    "filterx_recent",
    []
);

if (!Array.isArray(recentViewed)) {
    recentViewed = [];
}


function markViewed(book) {

    const key = bookKey(book);

    recentViewed = [
        key,
        ...recentViewed.filter(item => item !== key)
    ].slice(0, 8);

    saveJSON(
        "filterx_recent",
        recentViewed
    );
}


/* =========================================================
   8. VIEW SWITCHING
   ========================================================= */

function showView(name) {

    document
        .querySelectorAll(".view")
        .forEach(view => {
            view.classList.remove("active");
        });

    const target = $(`view-${name}`);

    if (!target) {
        console.warn(`Filter X: view-${name} not found.`);
        return;
    }

    target.classList.add("active");

    document
        .querySelectorAll(".tab-btn[data-view]")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.view === name
            );
        });

    if (name === "home") {
        renderHome();
    }

    if (name === "browse") {
        render();
    }

    if (name === "library") {
        renderLibrary(currentLibTab);
    }
}


function goSearch() {

    const input = $("homeSearch");
    const q = $("q");

    if (q) {
        q.value = input ? input.value : "";
    }

    showView("browse");
}


/* =========================================================
   9. FILTER STATE
   ========================================================= */

const avoidDefs = [
    {
        key: "cheating",
        label: "💔 No Cheating"
    },
    {
        key: "domesticViolence",
        label: "🛡️ No Domestic Violence"
    },
    {
        key: "gore",
        label: "⚠️ No Gore"
    },
    {
        key: "sexualAbuse",
        label: "🚫 No Sexual Abuse"
    }
];


let avoidState = {};

avoidDefs.forEach(item => {
    avoidState[item.key] = false;
});


let avoidTags = new Set();


let includeTags = {
    genre: new Set(),
    trope: new Set(),
    relationship: new Set(),
    mood: new Set(),
    other: new Set()
};


/* =========================================================
   10. TAG HELPERS
   ========================================================= */

function normalizeTag(value) {

    return String(value || "")
        .trim()
        .toLowerCase();
}


function hasTag(book, wantedTag) {

    const target = normalizeTag(wantedTag);

    return (book.extra || []).some(
        tag => normalizeTag(tag) === target
    );
}


function allTagsByCategory(category) {

    const set = new Map();

    books.forEach(book => {

        (book.extra || []).forEach(tag => {

            if (categoryOf(tag) === category) {

                const key = normalizeTag(tag);

                if (!set.has(key)) {
                    set.set(key, tag);
                }
            }
        });
    });

    return [...set.values()].sort(
        (a, b) => a.localeCompare(b)
    );
}


/* =========================================================
   11. FACET CHIPS
   ========================================================= */

function buildFacetChips() {

    const avoidRow = $("avoidChips");

    if (avoidRow) {

        avoidRow.innerHTML = "";

        avoidDefs.forEach(def => {

            const chip = document.createElement("div");

            chip.className = "chip avoid";

            chip.textContent = def.label;

            chip.dataset.key = def.key;

            chip.classList.toggle(
                "active",
                !!avoidState[def.key]
            );

            chip.onclick = () => {

                avoidState[def.key] =
                    !avoidState[def.key];

                chip.classList.toggle(
                    "active",
                    avoidState[def.key]
                );

                render();
            };

            avoidRow.appendChild(chip);
        });
    }


    const contentRow = $("contentTagChips");

    if (contentRow) {

        contentRow.innerHTML = "";

        allTagsByCategory("content").forEach(tag => {

            const chip = document.createElement("div");

            chip.className = "chip avoid";

            chip.textContent = `🚫 ${tag}`;

            chip.classList.toggle(
                "active",
                [...avoidTags].some(
                    x => normalizeTag(x) === normalizeTag(tag)
                )
            );

            chip.onclick = () => {

                const existing = [...avoidTags].find(
                    x => normalizeTag(x) === normalizeTag(tag)
                );

                if (existing) {
                    avoidTags.delete(existing);
                } else {
                    avoidTags.add(tag);
                }

                buildFacetChips();
                render();
            };

            contentRow.appendChild(chip);
        });
    }


    const categoryElements = {
        genre: "genreChips",
        trope: "tropeChips",
        relationship: "relationshipChips",
        mood: "moodChips",
        other: "otherChips"
    };


    Object.entries(categoryElements).forEach(
        ([category, elementId]) => {

            const row = $(elementId);

            if (!row) return;

            row.innerHTML = "";

            allTagsByCategory(category).forEach(tag => {

                const chip =
                    document.createElement("div");

                chip.className = "chip";

                chip.textContent = tag;

                chip.classList.toggle(
                    "active",
                    [...includeTags[category]].some(
                        x =>
                            normalizeTag(x) ===
                            normalizeTag(tag)
                    )
                );

                chip.onclick = () => {

                    const existing =
                        [...includeTags[category]].find(
                            x =>
                                normalizeTag(x) ===
                                normalizeTag(tag)
                        );

                    if (existing) {
                        includeTags[category]
                            .delete(existing);
                    } else {
                        includeTags[category]
                            .add(tag);
                    }

                    buildFacetChips();
                    render();
                };

                row.appendChild(chip);
            });
        }
    );
}


/* =========================================================
   12. SLIDERS
   ========================================================= */

function onSliderChange(which) {

    const inputId =
        which === "spice"
            ? "spiceMax"
            : "violMax";

    const labelId =
        which === "spice"
            ? "spiceMaxLabel"
            : "violMaxLabel";

    const input = $(inputId);

    if (!input) return;

    const value = parseFloat(input.value);

    setText(
        labelId,
        LEVEL_LABELS[value] || "Any"
    );

    render();
}


/* =========================================================
   13. RESET FILTERS
   ========================================================= */

function resetFilters() {

    setText("q", "");

    const q = $("q");

    if (q) q.value = "";

    const spice = $("spiceMax");

    if (spice) spice.value = "4";

    setText(
        "spiceMaxLabel",
        "Any"
    );

    const violence = $("violMax");

    if (violence) violence.value = "4";

    setText(
        "violMaxLabel",
        "Any"
    );

    const sort = $("sortBy");

    if (sort) sort.value = "title-asc";


    avoidDefs.forEach(def => {
        avoidState[def.key] = false;
    });

    avoidTags.clear();

    Object.values(includeTags)
        .forEach(set => set.clear());

    buildFacetChips();

    render();
}


/* =========================================================
   14. SEXUAL ABUSE DETECTION
   ========================================================= */

function hasSexualAbuse(book) {

    return (book.extra || []).some(
        tag => /sexual abuse/i.test(tag)
    );
}


/* =========================================================
   15. FILTER ENGINE
   ========================================================= */

function passes(book) {

    const qElement = $("q");

    const q = qElement
        ? qElement.value.trim().toLowerCase()
        : "";


    if (
        q &&
        !String(book.title || "")
            .toLowerCase()
            .includes(q) &&
        !String(book.author || "")
            .toLowerCase()
            .includes(q)
    ) {
        return false;
    }


    const spiceInput = $("spiceMax");

    const spiceMax = spiceInput
        ? parseFloat(spiceInput.value)
        : 4;

    const bookSpice = lvl(book.spice);

    if (
        bookSpice !== null &&
        bookSpice > spiceMax
    ) {
        return false;
    }


    const violenceInput = $("violMax");

    const violenceMax = violenceInput
        ? parseFloat(violenceInput.value)
        : 4;

    const bookViolence = lvl(book.violence);

    if (
        bookViolence !== null &&
        bookViolence > violenceMax
    ) {
        return false;
    }


    /* No cheating */

    if (avoidState.cheating) {

        const cheating =
            String(book.cheating || "")
                .trim()
                .toLowerCase();

        if (
            cheating &&
            cheating !== "no" &&
            (
                cheating.includes("major") ||
                cheating.includes("present") ||
                cheating.includes("mild")
            )
        ) {
            return false;
        }
    }


    /* No domestic violence */

    if (avoidState.domesticViolence) {

        const dv =
            String(book.domesticViolence || "")
                .trim()
                .toLowerCase();

        if (
            dv &&
            (
                dv.includes("major") ||
                dv.includes("present") ||
                lvl(book.domesticViolence) >= 2
            )
        ) {
            return false;
        }
    }


    /* No gore */

    if (avoidState.gore) {

        const gore = lvl(book.gore);

        if (
            gore !== null &&
            gore >= 1
        ) {
            return false;
        }
    }


    /* No sexual abuse */

    if (
        avoidState.sexualAbuse &&
        hasSexualAbuse(book)
    ) {
        return false;
    }


    /* Avoid content tags */

    const excluded = [...avoidTags];

    if (
        excluded.some(
            tag => hasTag(book, tag)
        )
    ) {
        return false;
    }


    /* Include selected categories */

    for (
        const category of Object.keys(includeTags)
    ) {

        const wanted =
            includeTags[category];

        if (!wanted || wanted.size === 0) {
            continue;
        }

        const matches =
            [...wanted].some(
                tag => hasTag(book, tag)
            );

        if (!matches) {
            return false;
        }
    }


    return true;
}


/* =========================================================
   16. SORTING
   ========================================================= */

function sortBooks(list) {

    const sortElement = $("sortBy");

    const mode =
        sortElement
            ? sortElement.value
            : "title-asc";


    const cmp = {

        "title-asc": (a, b) =>
            a.title.localeCompare(b.title),

        "title-desc": (a, b) =>
            b.title.localeCompare(a.title),

        "spice-asc": (a, b) =>
            (lvl(a.spice) ?? -1) -
            (lvl(b.spice) ?? -1),

        "spice-desc": (a, b) =>
            (lvl(b.spice) ?? -1) -
            (lvl(a.spice) ?? -1),

        "violence-asc": (a, b) =>
            (lvl(a.violence) ?? -1) -
            (lvl(b.violence) ?? -1),

        "violence-desc": (a, b) =>
            (lvl(b.violence) ?? -1) -
            (lvl(a.violence) ?? -1)
    };


    return list
        .slice()
        .sort(
            cmp[mode] ||
            cmp["title-asc"]
        );
}


/* =========================================================
   17. COVER SYSTEM
   ========================================================= */

function openLibraryCoverUrl(isbn) {

    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}


const coverCache =
    loadJSON(
        "filterx_cover_cache",
        {}
    );


function saveCoverCache() {
    saveJSON(
        "filterx_cover_cache",
        coverCache
    );
}


async function fetchCoverFromGoogle(book) {

    const key = bookKey(book);

    if (
        Object.prototype.hasOwnProperty.call(
            coverCache,
            key
        )
    ) {
        return coverCache[key];
    }


    try {

        let query =
            `intitle:${book.title}`;

        if (
            book.author &&
            book.author !== "—"
        ) {
            query +=
                ` inauthor:${book.author}`;
        }


        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=1`
        );


        if (!response.ok) {
            throw new Error("Google Books request failed");
        }


        const data =
            await response.json();


        let imageLinks =
            data.items &&
            data.items[0] &&
            data.items[0].volumeInfo &&
            data.items[0].volumeInfo.imageLinks;


        if (!imageLinks) {

            const fallbackQuery =
                `${book.title} ${book.author || ""}`;


            const fallbackResponse =
                await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(fallbackQuery)}&maxResults=1`
                );


            if (fallbackResponse.ok) {

                const fallbackData =
                    await fallbackResponse.json();

                imageLinks =
                    fallbackData.items &&
                    fallbackData.items[0] &&
                    fallbackData.items[0].volumeInfo &&
                    fallbackData.items[0].volumeInfo.imageLinks;
            }
        }


        let url =
            imageLinks
                ? (
                    imageLinks.thumbnail ||
                    imageLinks.smallThumbnail ||
                    null
                )
                : null;


        if (url) {
            url = url.replace(
                /^http:/,
                "https:"
            );
        }


        coverCache[key] =
            url || null;

        saveCoverCache();

        return coverCache[key];

    } catch (error) {

        coverCache[key] = null;

        saveCoverCache();

        return null;
    }
}


function loadBookCover(book, onFound) {

    const tryGoogleFallback = () => {

        fetchCoverFromGoogle(book)
            .then(url => {

                if (url && typeof onFound === "function") {
                    onFound(url);
                }
            });
    };


    const tryIsbnThenGoogle = () => {

        if (!book.isbn) {
            tryGoogleFallback();
            return;
        }


        const probe = new Image();

        probe.onload = () => {

            if (probe.naturalWidth > 1) {

                onFound(
                    openLibraryCoverUrl(book.isbn)
                );

            } else {

                tryGoogleFallback();
            }
        };


        probe.onerror =
            tryGoogleFallback;


        probe.src =
            openLibraryCoverUrl(book.isbn);
    };


    if (book.cover) {

        const own = new Image();

        own.onload = () => {
            onFound(book.cover);
        };

        own.onerror =
            tryIsbnThenGoogle;

        own.src = book.cover;

        return;
    }


    tryIsbnThenGoogle();
}


function attachCover(coverElement, book) {

    if (!coverElement) return;


    loadBookCover(
        book,
        url => {

            const existing =
                coverElement.querySelector(
                    "img"
                );

            if (existing) {
                existing.remove();
            }


            const img =
                document.createElement("img");

            img.alt =
                `${book.title} cover`;

            img.style.opacity = "0";

            img.style.transition =
                "opacity .25s";


            img.onload = () => {
                img.style.opacity = "1";
            };


            img.onerror = () => {
                img.remove();
            };


            img.src = url;


            coverElement.insertBefore(
                img,
                coverElement.firstChild
            );
        }
    );
}


/* =========================================================
   18. CARD RENDERING
   ========================================================= */

function spiceFlames(value) {

    const level = lvl(value);

    if (level === null) {
        return `<span class="tag">🔥 —</span>`;
    }


    const count =
        Math.max(
            0,
            Math.min(
                3,
                Math.round(level)
            )
        );


    let output = "";

    for (let i = 0; i < 3; i++) {

        output +=
            i < count
                ? "🔥"
                : "🤍";
    }


    return `
        <span
            class="tag flamemeter ${count >= 2 ? "warn" : ""}"
            title="Spice: ${value}"
        >
            ${output}
        </span>
    `;
}


function tagChip(label, value, warnIfHigh) {

    if (!value) return "";

    const level = lvl(value);

    let cls = "tag";

    if (
        warnIfHigh &&
        level !== null &&
        level >= 2
    ) {
        cls += " warn";
    }


    return `
        <span class="${cls}">
            ${label}: ${value}
        </span>
    `;
}


/* =========================================================
   19. CHEATING DISPLAY
   ========================================================= */

function cheatingLabel(book) {

    if (!book.cheating) {
        return `<span class="tag">⚪ Cheating: Not rated</span>`;
    }


    if (/^no$/i.test(book.cheating)) {
        return `<span class="tag">🚫 No cheating</span>`;
    }


    return `
        <span class="tag warn">
            💔 Cheating: ${book.cheating}
        </span>
    `;
}


/* =========================================================
   20. CREATE BOOK CARD
   ========================================================= */

function createCard(book, compact) {

    const personalData =
        getPersonal(book);


    const card =
        document.createElement("div");


    card.className = "card";


    card.onclick = () => {
        openDetail(book);
    };


    const genreTags =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) === "genre"
            );


    card.innerHTML = `

        <div class="cover" data-cover>

            <div class="card-actions">

                <button
                    class="icon-btn ${personalData.favorite ? "on" : ""}"
                    data-fav
                    title="Favorite"
                    type="button"
                >
                    ${personalData.favorite ? "♥" : "♡"}
                </button>

                <button
                    class="icon-btn ${personalData.bookmarked ? "on" : ""}"
                    data-bm
                    title="Bookmark"
                    type="button"
                >
                    🔖
                </button>

            </div>

            <div class="t">${book.title}</div>

            <div class="a">${book.author || ""}</div>

        </div>

        ${
            compact
                ? ""
                : `

            <div class="card-body">

                <div class="card-sub">
                    ${
                        genreTags.join(" · ") ||
                        "Romance"
                    }
                </div>

                <div class="card-badges">

                    ${spiceFlames(book.spice)}

                    ${
                        book.violence
                            ? `
                                <span
                                    class="tag ${
                                        lvl(book.violence) >= 2
                                            ? "warn"
                                            : ""
                                    }"
                                >
                                    ⚠️ Violence
                                </span>
                            `
                            : ""
                    }

                    ${cheatingLabel(book)}

                </div>

            </div>
        `
        }
    `;


    const cover =
        card.querySelector(
            "[data-cover]"
        );


    if (cover) {

        const colorIndex =
            Math.abs(
                [...book.title]
                    .reduce(
                        (sum, char) =>
                            sum +
                            char.charCodeAt(0),
                        0
                    )
            ) % colors.length;


        cover.style.background =
            colors[colorIndex];


        attachCover(
            cover,
            book
        );
    }


    const favoriteButton =
        card.querySelector(
            "[data-fav]"
        );


    if (favoriteButton) {

        favoriteButton.onclick =
            event => {

                event.stopPropagation();

                setPersonal(
                    book,
                    {
                        favorite:
                            !getPersonal(book)
                                .favorite
                    }
                );

                refreshCurrentView();
            };
    }


    const bookmarkButton =
        card.querySelector(
            "[data-bm]"
        );


    if (bookmarkButton) {

        bookmarkButton.onclick =
            event => {

                event.stopPropagation();

                setPersonal(
                    book,
                    {
                        bookmarked:
                            !getPersonal(book)
                                .bookmarked
                    }
                );

                refreshCurrentView();
            };
    }


    return card;
}


/* =========================================================
   21. REFRESH CURRENT VIEW
   ========================================================= */

function refreshCurrentView() {

    const active =
        document.querySelector(
            ".view.active"
        );


    if (!active) return;


    if (active.id === "view-home") {
        renderHome();
    }

    else if (active.id === "view-browse") {
        render();
    }

    else if (active.id === "view-library") {
        renderLibrary(currentLibTab);
    }
}


/* =========================================================
   22. BROWSE
   ========================================================= */

function render() {

    const grid =
        $("grid");


    if (!grid) return;


    const filtered =
        books.filter(passes);


    const list =
        sortBooks(filtered);


    setText(
        "count",
        `${list.length} of ${books.length} books`
    );


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty">
                <span class="empty-icon">
                    🔍📚
                </span>

                No books match those filters.
                Try loosening one.
            </div>
        `;

        return;
    }


    list.forEach(book => {

        grid.appendChild(
            createCard(book, false)
        );
    });
}


/* =========================================================
   23. ROULETTE
   ========================================================= */

function rouletteBrowse() {

    const list =
        books.filter(passes);


    if (list.length === 0) {

        alert(
            "No books match your current filters — loosen them and try again!"
        );

        return;
    }


    const pick =
        list[
            Math.floor(
                Math.random() *
                list.length
            )
        ];


    openDetail(pick);
}


/* =========================================================
   24. BLIND DATE
   ========================================================= */

let blindPick = null;


function openBlindDate() {

    const filtered =
        books.filter(passes);


    const pool =
        filtered.length
            ? filtered
            : books;


    if (!pool.length) return;


    blindPick =
        pool[
            Math.floor(
                Math.random() *
                pool.length
            )
        ];


    const book =
        blindPick;


    const tropes =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) === "trope"
            );


    const relationships =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) === "relationship"
            );


    const mood =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) === "mood"
            );


    const genres =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) === "genre"
            );


    const warnings =
        contentWarnings(book);


    const body =
        $("blindBody");


    if (!body) return;


    body.innerHTML = `

        <div class="blind-cover">
            🙈
            <div class="blind-sub">
                Mystery Book
            </div>
        </div>

        <h3>
            Guess who this is…
        </h3>

        <div class="detail-row">
            <b>Spice</b>
            <span>
                ${spiceFlames(book.spice)}
            </span>
        </div>

        <div class="detail-row">
            <b>Genre</b>
            <span>
                ${genres.join(", ") || "—"}
            </span>
        </div>

        <div class="detail-row">
            <b>Tropes</b>
            <span>
                ${tropes.join(", ") || "—"}
            </span>
        </div>

        <div class="detail-row">
            <b>Relationship themes</b>
            <span>
                ${relationships.join(", ") || "—"}
            </span>
        </div>

        <div class="detail-row">
            <b>Mood</b>
            <span>
                ${mood.join(", ") || "—"}
            </span>
        </div>

        <h3 style="margin-top:12px;">
            Content warnings
        </h3>

        ${
            warnings.length
                ? `
                    <div class="card-badges">
                        ${warnings
                            .map(
                                warning =>
                                    `<span class="tag warn">${warning}</span>`
                            )
                            .join("")}
                    </div>
                `
                : `
                    <p class="detail-desc">
                        Nothing flagged.
                    </p>
                `
        }

        <button
            class="btn-solid"
            style="margin-top:16px;width:100%;"
            onclick="revealBlindDate()"
            type="button"
        >
            👀 Reveal the book
        </button>

        <button
            class="btn-outline small"
            style="margin-top:8px;width:100%;"
            onclick="openBlindDate()"
            type="button"
        >
            🔄 Try another
        </button>
    `;


    const modal =
        $("blindModal");


    if (modal) {
        modal.classList.add("open");
    }
}


function revealBlindDate() {

    if (!blindPick) return;

    closeBlindDate();

    openDetail(blindPick);
}


function closeBlindDate() {

    const modal =
        $("blindModal");

    if (modal) {
        modal.classList.remove("open");
    }
}


/* =========================================================
   25. THEME
   ========================================================= */

function applyTheme(theme) {

    const safeTheme =
        theme === "spicy"
            ? "spicy"
            : "light";


    document.documentElement
        .setAttribute(
            "data-theme",
            safeTheme
        );


    const toggle =
        $("themeToggle");


    if (toggle) {

        toggle.textContent =
            safeTheme === "spicy"
                ? "🌶️"
                : "🌙";
    }


    saveJSON(
        "filterx_theme",
        safeTheme
    );
}


function toggleTheme() {

    const current =
        document.documentElement
            .getAttribute(
                "data-theme"
            );


    applyTheme(
        current === "spicy"
            ? "light"
            : "spicy"
    );
}


/* =========================================================
   26. LOCAL DATE HELPERS
   ========================================================= */

function localDateKey(date = new Date()) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            date.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;
}


/* =========================================================
   27. READING STREAK
   ========================================================= */

function logStreakDay() {

    const days =
        loadJSON(
            "filterx_streak_days",
            []
        );


    const safeDays =
        Array.isArray(days)
            ? days
            : [];


    const today =
        localDateKey();


    if (!safeDays.includes(today)) {

        safeDays.push(today);

        saveJSON(
            "filterx_streak_days",
            safeDays
        );
    }
}


function computeStreak() {

    const saved =
        loadJSON(
            "filterx_streak_days",
            []
        );


    const days =
        new Set(
            Array.isArray(saved)
                ? saved
                : []
        );


    let streak = 0;

    const date =
        new Date();


    while (true) {

        const key =
            localDateKey(date);


        if (!days.has(key)) {
            break;
        }


        streak++;


        date.setDate(
            date.getDate() - 1
        );
    }


    return streak;
}


/* =========================================================
   28. SHARE CARD
   ========================================================= */

function wrapText(
    ctx,
    text,
    x,
    y,
    maxWidth,
    lineHeight
) {

    const words =
        String(text || "").split(" ");


    let line = "";

    let currentY = y;


    words.forEach(word => {

        const test =
            line +
            word +
            " ";


        if (
            ctx.measureText(test).width >
                maxWidth &&
            line
        ) {

            ctx.fillText(
                line,
                x,
                currentY
            );

            line =
                word + " ";

            currentY +=
                lineHeight;

        } else {

            line = test;
        }
    });


    ctx.fillText(
        line,
        x,
        currentY
    );


    return currentY +
        lineHeight;
}


function openShareCard(book) {

    if (!book) return;


    const canvas =
        document.createElement(
            "canvas"
        );


    canvas.width = 600;

    canvas.height = 750;


    const ctx =
        canvas.getContext("2d");


    if (!ctx) return;


    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            600,
            750
        );


    gradient.addColorStop(
        0,
        "#6d4ce8"
    );


    gradient.addColorStop(
        1,
        "#e0578a"
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        0,
        0,
        600,
        750
    );


    ctx.fillStyle =
        "#fff";


    ctx.font =
        "bold 32px Georgia, serif";


    let y =
        wrapText(
            ctx,
            book.title,
            40,
            90,
            520,
            40
        );


    ctx.font =
        "20px Georgia, serif";


    ctx.fillText(
        book.author || "",
        40,
        y + 20
    );


    y += 70;


    const level =
        lvl(book.spice);


    const count =
        level === null
            ? 0
            : Math.max(
                0,
                Math.min(
                    3,
                    Math.round(level)
                )
            );


    const flameString =
        level === null
            ? "—"
            : "🔥".repeat(count) +
              "🤍".repeat(3 - count);


    ctx.font =
        "22px Georgia, serif";


    ctx.fillText(
        `Spice: ${flameString}`,
        40,
        y
    );


    y += 44;


    const tropes =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) === "trope"
            );


    const genres =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) === "genre"
            );


    ctx.font =
        "18px Georgia, serif";


    y =
        wrapText(
            ctx,
            `Genre: ${genres.join(", ") || "—"}`,
            40,
            y,
            520,
            26
        ) + 14;


    y =
        wrapText(
            ctx,
            `Tropes: ${tropes.join(", ") || "—"}`,
            40,
            y,
            520,
            26
        ) + 14;


    const warnings =
        contentWarnings(book);


    y =
        wrapText(
            ctx,
            `Warnings: ${warnings.join(", ") || "None flagged"}`,
            40,
            y,
            520,
            26
        ) + 14;


    ctx.font =
        "italic 16px Georgia, serif";


    ctx.fillText(
        "📖 Filter X",
        40,
        710
    );


    const link =
        document.createElement("a");


    link.download =
        book.title.replace(
            /[^a-z0-9]+/gi,
            "_"
        ) +
        "_filterx.png";


    link.href =
        canvas.toDataURL(
            "image/png"
        );


    link.click();
}


/* =========================================================
   29. STATS
   ========================================================= */

const BADGES = [

    {
        id: "first",
        label: "📖 First finish",
        test: stats =>
            stats.finished >= 1
    },

    {
        id: "five",
        label: "🏅 5 books finished",
        test: stats =>
            stats.finished >= 5
    },

    {
        id: "spicy",
        label: "🌶️ Spice explorer",
        test: stats =>
            stats.avgSpice >= 2
    },

    {
        id: "brave",
        label: "🛡️ Content-aware reader",
        test: stats =>
            stats.finished >= 3
    },

    {
        id: "variety",
        label: "🎭 Trope collector",
        test: stats =>
            stats.tropeCount >= 5
    }
];


function computeStats() {

    const finishedBooks =
        books.filter(
            book =>
                getPersonal(book).status ===
                "finished"
        );


    const finished =
        finishedBooks.length;


    const spiceValues =
        finishedBooks
            .map(
                book =>
                    lvl(book.spice)
            )
            .filter(
                value =>
                    value !== null
            );


    const avgSpice =
        spiceValues.length
            ? spiceValues.reduce(
                (sum, value) =>
                    sum + value,
                0
            ) / spiceValues.length
            : 0;


    const tropeSet =
        new Set();


    finishedBooks.forEach(book => {

        (book.extra || [])
            .forEach(tag => {

                if (
                    categoryOf(tag) ===
                    "trope"
                ) {
                    tropeSet.add(tag);
                }
            });
    });


    const tropeCounts = {};


    finishedBooks.forEach(book => {

        (book.extra || [])
            .forEach(tag => {

                if (
                    categoryOf(tag) ===
                    "trope"
                ) {

                    tropeCounts[tag] =
                        (tropeCounts[tag] || 0) +
                        1;
                }
            });
    });


    const favouriteTrope =
        Object.entries(
            tropeCounts
        )
        .sort(
            (a, b) =>
                b[1] - a[1]
        )[0];


    return {

        finished,

        avgSpice,

        tropeCount:
            tropeSet.size,

        favTrope:
            favouriteTrope
                ? favouriteTrope[0]
                : "—"
    };
}


function renderStats() {

    const element =
        $("statsBar");


    if (!element) return;


    const stats =
        computeStats();


    const earned =
        BADGES.filter(
            badge =>
                badge.test(stats)
        );


    const streak =
        computeStreak();


    element.innerHTML = `

        <div class="stat-card">
            <b>${stats.finished}</b>
            <span>Finished</span>
        </div>

        <div class="stat-card">
            <b>
                ${
                    stats.avgSpice
                        ? stats.avgSpice.toFixed(1)
                        : "—"
                }
            </b>
            <span>Avg spice</span>
        </div>

        <div class="stat-card">
            <b>${stats.favTrope}</b>
            <span>Top trope</span>
        </div>

        <div class="stat-card">
            <b>
                ${
                    streak > 0
                        ? streak + "🔥"
                        : "0"
                }
            </b>
            <span>Day streak</span>
        </div>

        <div class="badges-row">

            ${
                earned.length
                    ? earned
                        .map(
                            badge =>
                                `<span class="tag badge">${badge.label}</span>`
                        )
                        .join("")
                    : `
                        <span class="tag">
                            Finish a book to earn badges
                        </span>
                    `
            }

        </div>
    `;
}


/* =========================================================
   30. QUIZ
   ========================================================= */

/*
   IMPORTANT:
   The original quiz contained:
   - Grumpy/Sunshine
   - Forced proximity
   - Fated mates

   Those tags did not exist in the database,
   which could cause a zero-result filter.

   The revised quiz only uses tags that actually
   exist in the current database.
*/

const QUIZ_QUESTIONS = [

    {
        q: "Pick a red flag 🚩",

        opts: [

            {
                label: "Enemies who can't stop staring",
                tag: "Enemies to lovers"
            },

            {
                label: "Childhood best friends",
                tag: "Friends to lovers"
            },

            {
                label: "Fake dating",
                tag: "Fake Dating"
            },

            {
                label: "A second chance",
                tag: "Second Chance"
            }
        ]
    },

    {
        q: "How spicy do you like it? 🔥",

        opts: [

            {
                label: "Closed door",
                spiceMax: 0
            },

            {
                label: "A little steam",
                spiceMax: 1
            },

            {
                label: "Bring the heat",
                spiceMax: 2
            },

            {
                label: "No limits",
                spiceMax: 4
            }
        ]
    },

    {
        q: "Pick a vibe",

        opts: [

            {
                label: "Dark & intense",
                tag: "Dark Romance"
            },

            {
                label: "Fluffy & fun",
                tag: "Fluffy Romance"
            },

            {
                label: "Slow burn",
                tag: "Slow burn"
            },

            {
                label: "Mystery",
                tag: "Mystery"
            }
        ]
    }
];


let quizStep = 0;

let quizAnswers = [];


function maybeShowQuiz() {

    if (
        loadJSON(
            "filterx_quiz_done",
            false
        )
    ) {
        return;
    }


    const modal =
        $("quizModal");


    if (!modal) return;


    quizStep = 0;

    quizAnswers = [];


    renderQuizStep();


    modal.classList.add("open");
}


function renderQuizStep() {

    const body =
        $("quizBody");


    if (!body) return;


    if (
        quizStep >=
        QUIZ_QUESTIONS.length
    ) {

        quizAnswers.forEach(answer => {

            if (answer.tag) {

                const category =
                    categoryOf(
                        answer.tag
                    );


                if (
                    includeTags[category]
                ) {

                    includeTags[category]
                        .add(answer.tag);
                }
            }


            if (
                answer.spiceMax !==
                undefined
            ) {

                const spice =
                    $("spiceMax");


                if (spice) {
                    spice.value =
                        answer.spiceMax;
                }
            }
        });


        onSliderChange("spice");


        buildFacetChips();


        body.innerHTML = `

            <h3>
                You're all set! 🎉
            </h3>

            <p class="detail-desc">
                We've set up some filters
                based on your picks.
            </p>

            <button
                class="btn-solid"
                style="width:100%;margin-top:12px;"
                onclick="finishQuiz()"
                type="button"
            >
                Show me books
            </button>
        `;


        return;
    }


    const question =
        QUIZ_QUESTIONS[
            quizStep
        ];


    body.innerHTML = `

        <h3>
            ${question.q}
        </h3>

        <div class="quiz-opts">

            ${question.opts
                .map(
                    (option, index) => `
                        <button
                            class="btn-outline quiz-opt"
                            onclick="answerQuiz(${index})"
                            type="button"
                        >
                            ${option.label}
                        </button>
                    `
                )
                .join("")}

        </div>
    `;
}


function answerQuiz(index) {

    const question =
        QUIZ_QUESTIONS[
            quizStep
        ];


    if (
        !question ||
        !question.opts[index]
    ) {
        return;
    }


    quizAnswers.push(
        question.opts[index]
    );


    quizStep++;


    renderQuizStep();
}


function finishQuiz() {

    saveJSON(
        "filterx_quiz_done",
        true
    );


    closeQuiz(false);


    buildFacetChips();


    showView("browse");
}


function closeQuiz(markDone = true) {

    if (markDone) {

        saveJSON(
            "filterx_quiz_done",
            true
        );
    }


    const modal =
        $("quizModal");


    if (modal) {
        modal.classList.remove("open");
    }
}


/* =========================================================
   31. CONFETTI
   ========================================================= */

function fireConfetti() {

    const wrap =
        document.createElement("div");


    wrap.className =
        "confetti-wrap";


    const emojis = [
        "🎉",
        "✨",
        "📚",
        "💜",
        "🎊"
    ];


    for (
        let i = 0;
        i < 24;
        i++
    ) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti-piece";


        piece.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.animationDelay =
            Math.random() * 0.4 +
            "s";


        piece.style.fontSize =
            14 +
            Math.random() * 14 +
            "px";


        wrap.appendChild(
            piece
        );
    }


    document.body.appendChild(
        wrap
    );


    setTimeout(
        () => wrap.remove(),
        2200
    );
}


/* =========================================================
   32. QUICK CHIPS
   ========================================================= */

const QUICK_CHIPS = [
    "Dark Romance",
    "Fluffy Romance",
    "Slow burn",
    "No spice"
];


function buildQuickChips() {

    const row =
        $("quickChips");


    if (!row) return;


    row.innerHTML = "";


    QUICK_CHIPS.forEach(label => {

        const chip =
            document.createElement("div");


        chip.className =
            "chip";


        chip.textContent =
            label;


        chip.onclick = () => {

            resetFilters();


            if (
                label === "No spice"
            ) {

                const spice =
                    $("spiceMax");


                if (spice) {
                    spice.value = "0";
                }


                setText(
                    "spiceMaxLabel",
                    "None"
                );


            } else {

                const category =
                    categoryOf(label);


                if (
                    includeTags[category]
                ) {

                    includeTags[category]
                        .add(label);
                }


                buildFacetChips();
            }


            showView("browse");


            render();
        };


        row.appendChild(
            chip
        );
    });
}


/* =========================================================
   33. SHUFFLE
   ========================================================= */

function shuffledCopy(
    array,
    seed
) {

    const result =
        array.slice();


    let currentSeed =
        seed;


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        currentSeed =
            (
                currentSeed * 9301 +
                49297
            ) % 233280;


        const j =
            Math.floor(
                (
                    currentSeed /
                    233280
                ) *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];
    }


    return result;
}


/* =========================================================
   34. HOME STRIPS
   ========================================================= */

function fillStrip(
    elementId,
    list,
    emptyMessage
) {

    const element =
        $(elementId);


    if (!element) return;


    element.innerHTML = "";


    if (
        list.length === 0 &&
        emptyMessage
    ) {

        element.innerHTML = `
            <div class="empty-note">
                ${emptyMessage}
            </div>
        `;

        return;
    }


    list.forEach(book => {

        element.appendChild(
            createCard(
                book,
                true
            )
        );
    });
}


/* =========================================================
   35. HOME
   ========================================================= */

function renderHome() {

    const hour =
        new Date().getHours();


    const greeting =
        hour < 12
            ? "Good morning"
            : hour < 18
                ? "Good afternoon"
                : "Good evening";


    setText(
        "greetingText",
        `👋 ${greeting}! Ready to find your next book?`
    );


    buildQuickChips();


    const readingBooks =
        books.filter(
            book =>
                getPersonal(book)
                    .status ===
                "reading"
        );


    showElement(
        "continueSection",
        readingBooks.length > 0
    );


    fillStrip(
        "continueGrid",
        readingBooks
    );


    fillStrip(
        "recommendedGrid",
        shuffledCopy(
            books,
            7
        ).slice(0, 4)
    );


    fillStrip(
        "trendingGrid",
        shuffledCopy(
            books,
            42
        ).slice(0, 4)
    );


    fillStrip(
        "recentAddedGrid",
        books
            .slice(-4)
            .reverse()
    );


    const recentBooks =
        recentViewed
            .map(
                key =>
                    books.find(
                        book =>
                            bookKey(book) ===
                            key
                    )
            )
            .filter(Boolean);


    showElement(
        "recentViewedSection",
        recentBooks.length > 0
    );


    fillStrip(
        "recentViewedGrid",
        recentBooks
    );
}


/* =========================================================
   36. LIBRARY
   ========================================================= */

let currentLibTab =
    "favorites";


function showLibraryTab(tab) {

    currentLibTab =
        tab;


    document
        .querySelectorAll(
            "#libraryTabs .tab-btn"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lib === tab
            );
        });


    renderLibrary(tab);
}


function renderLibrary(tab) {

    renderStats();


    const grid =
        $("libraryGrid");


    if (!grid) return;


    let list = [];


    if (
        tab === "favorites"
    ) {

        list =
            books.filter(
                book =>
                    getPersonal(book)
                        .favorite
            );

    } else if (
        tab === "bookmarks"
    ) {

        list =
            books.filter(
                book =>
                    getPersonal(book)
                        .bookmarked
            );

    } else {

        list =
            books.filter(
                book =>
                    getPersonal(book)
                        .status === tab
            );
    }


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty">
                <span class="empty-icon">
                    📌
                </span>

                Nothing here yet —
                open a book's details
                to add it.
            </div>
        `;

        return;
    }


    list.forEach(book => {

        grid.appendChild(
            createCard(
                book,
                false
            )
        );
    });
}


/* =========================================================
   37. DETAIL SNAPSHOT
   ========================================================= */

function buildSnapshot(book) {

    const genres =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) ===
                    "genre"
            );


    const tropes =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) ===
                    "trope"
            );


    const relationships =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) ===
                    "relationship"
            );


    const parts = [];


    parts.push(
        `A ${
            genres.length
                ? genres.join("/")
                    .toLowerCase()
                : "romance"
        } story` +
        (
            tropes.length
                ? ` built around ${
                    tropes
                        .join(", ")
                        .toLowerCase()
                }`
                : ""
        )
    );


    if (
        relationships.length
    ) {

        parts.push(
            `touching on ${
                relationships
                    .join(", ")
                    .toLowerCase()
            }`
        );
    }


    return (
        parts.join(", ") +
        "."
    );
}


/* =========================================================
   38. CONTENT WARNINGS
   ========================================================= */

function contentWarnings(book) {

    const warnings = [];


    [
        "violence",
        "domesticViolence",
        "cheating",
        "gore"
    ].forEach(field => {

        const value =
            book[field];


        if (
            value &&
            !/^no$/i.test(
                String(value)
            )
        ) {

            warnings.push(
                `${field.replace(
                    /([A-Z])/g,
                    " $1"
                )}: ${value}`
            );
        }
    });


    (book.extra || [])
        .filter(
            tag =>
                categoryOf(tag) ===
                "content"
        )
        .forEach(tag => {

            warnings.push(tag);
        });


    return [
        ...new Set(warnings)
    ];
}


/* =========================================================
   39. DETAIL MODAL
   ========================================================= */

let currentDetailBook =
    null;


function openDetail(book) {

    if (!book) return;


    currentDetailBook =
        book;


    markViewed(book);


    const personalData =
        getPersonal(book);


    const tropes =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) ===
                    "trope"
            );


    const relationships =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) ===
                    "relationship"
            );


    const mood =
        (book.extra || [])
            .filter(
                tag =>
                    categoryOf(tag) ===
                    "mood"
            );


    const warnings =
        contentWarnings(book);


    const body =
        $("detailBody");


    if (!body) return;


    body.innerHTML = `

        <div
            class="detail-cover"
            data-detail-cover
        >
            <span class="detail-cover-placeholder">
                ${book.title}
            </span>
        </div>

        <h3>
            ${book.title}
        </h3>

        <div class="detail-row">
            <b>Author</b>
            <span>
                ${book.author || "—"}
            </span>
        </div>

        ${
            book.isbn
                ? `
                    <div class="detail-row">
                        <b>ISBN</b>
                        <span>
                            ${book.isbn}
                        </span>
                    </div>
                `
                : ""
        }

        <p class="detail-desc">
            ${buildSnapshot(book)}
        </p>


        <div class="status-row">

            <button
                class="icon-btn ${
                    personalData.favorite
                        ? "on"
                        : ""
                }"
                id="detailFav"
                style="width:auto;padding:6px 12px;border-radius:8px;"
                type="button"
            >
                ${
                    personalData.favorite
                        ? "♥ Favorited"
                        : "♡ Favorite"
                }
            </button>


            <button
                class="icon-btn ${
                    personalData.bookmarked
                        ? "on"
                        : ""
                }"
                id="detailBm"
                style="width:auto;padding:6px 12px;border-radius:8px;"
                type="button"
            >
                ${
                    personalData.bookmarked
                        ? "🔖 Bookmarked"
                        : "🔖 Bookmark"
                }
            </button>


            <select
                id="detailStatus"
            >

                <option
                    value="none"
                    ${
                        personalData.status ===
                        "none"
                            ? "selected"
                            : ""
                    }
                >
                    Not on a list
                </option>

                <option
                    value="want"
                    ${
                        personalData.status ===
                        "want"
                            ? "selected"
                            : ""
                    }
                >
                    📌 Want to Read
                </option>

                <option
                    value="reading"
                    ${
                        personalData.status ===
                        "reading"
                            ? "selected"
                            : ""
                    }
                >
                    📖 Reading
                </option>

                <option
                    value="finished"
                    ${
                        personalData.status ===
                        "finished"
                            ? "selected"
                            : ""
                    }
                >
                    ✅ Finished
                </option>

            </select>

        </div>


        <div class="detail-row">
            <b>Spice</b>

            <span>
                ${spiceFlames(book.spice)}

                <span class="detail-spice-word">
                    ${book.spice || "—"}
                </span>
            </span>
        </div>


        <div class="detail-row">
            <b>Emotional intensity</b>

            <span>
                ${mood.join(", ") || "—"}
            </span>
        </div>


        <div class="detail-row">
            <b>Tropes</b>

            <span>
                ${tropes.join(", ") || "—"}
            </span>
        </div>


        <div class="detail-row">
            <b>Relationship themes</b>

            <span>
                ${
                    relationships.join(", ") ||
                    "—"
                }
            </span>
        </div>


        <h3 style="margin-top:16px;">
            Content warnings
        </h3>


        ${
            warnings.length
                ? `
                    <div class="card-badges">
                        ${warnings
                            .map(
                                warning =>
                                    `<span class="tag warn">${warning}</span>`
                            )
                            .join("")}
                    </div>
                `
                : `
                    <p class="detail-desc">
                        Nothing flagged.
                    </p>
                `
        }


        <h3 style="margin-top:16px;">
            📝 My notes
            <span class="spoiler-hint">
                (private, spoilers ok)
            </span>
        </h3>


        <textarea
            id="detailNotes"
            class="notes-box"
            placeholder="Thoughts, spoilers…"
        >${personalData.notes || ""}</textarea>


        <button
            class="btn-outline small"
            style="margin-top:12px;width:100%;"
            onclick="openShareCard(currentDetailBook)"
            type="button"
        >
            🖼️ Share this book
        </button>
    `;


    const modal =
        $("detailModal");


    if (modal) {
        modal.classList.add("open");
    }


    const cover =
        document.querySelector(
            "[data-detail-cover]"
        );


    if (cover) {

        const colorIndex =
            Math.abs(
                [...book.title]
                    .reduce(
                        (sum, char) =>
                            sum +
                            char.charCodeAt(0),
                        0
                    )
            ) % colors.length;


        cover.style.background =
            colors[colorIndex];


        attachCover(
            cover,
            book
        );
    }


    const favoriteButton =
        $("detailFav");


    if (favoriteButton) {

        favoriteButton.onclick = () => {

            setPersonal(
                book,
                {
                    favorite:
                        !getPersonal(book)
                            .favorite
                }
            );


            openDetail(book);

            refreshCurrentView();
        };
    }


    const bookmarkButton =
        $("detailBm");


    if (bookmarkButton) {

        bookmarkButton.onclick = () => {

            setPersonal(
                book,
                {
                    bookmarked:
                        !getPersonal(book)
                            .bookmarked
                }
            );


            openDetail(book);

            refreshCurrentView();
        };
    }


    const status =
        $("detailStatus");


    if (status) {

        status.onchange =
            event => {

                const previous =
                    getPersonal(book)
                        .status;


                const next =
                    event.target.value;


                setPersonal(
                    book,
                    {
                        status: next
                    }
                );


                if (
                    next === "finished" &&
                    previous !== "finished"
                ) {

                    fireConfetti();

                    logStreakDay();
                }


                refreshCurrentView();
            };
    }


    const notes =
        $("detailNotes");


    if (notes) {

        notes.onblur =
            event => {

                setPersonal(
                    book,
                    {
                        notes:
                            event.target.value
                    }
                );
            };
    }
}


function closeDetail() {

    const modal =
        $("detailModal");


    if (modal) {
        modal.classList.remove("open");
    }
}


/* =========================================================
   40. ADD BOOK
   ========================================================= */

function openAddForm() {

    const modal =
        $("addModal");


    if (modal) {
        modal.classList.add("open");
    }
}


function closeAddForm() {

    const modal =
        $("addModal");


    if (modal) {
        modal.classList.remove("open");
    }


    const form =
        $("addForm");


    if (form) {
        form.reset();
    }
}


function submitAddForm(event) {

    event.preventDefault();


    const value =
        id => {

            const element =
                $(id);

            return element
                ? element.value.trim()
                : "";
        };


    const newBook = {

        title:
            value("f_title"),

        author:
            value("f_author") ||
            "—",

        cover:
            value("f_cover") ||
            undefined,

        romance:
            value("f_romance") ||
            undefined,

        spice:
            value("f_spice") ||
            undefined,

        violence:
            value("f_violence") ||
            undefined,

        gore:
            value("f_gore") ||
            undefined,

        domesticViolence:
            value("f_dv") ||
            undefined,

        cheating:
            value("f_cheating") ||
            undefined,

        extra:
            value("f_extra")
                ? value("f_extra")
                    .split(",")
                    .map(
                        tag =>
                            tag.trim()
                    )
                    .filter(Boolean)
                : []
    };


    if (!newBook.title) {

        alert(
            "Please enter a book title."
        );

        return;
    }


    const custom =
        loadCustomBooks();


    const duplicate =
        books.some(
            book =>
                normalizeTag(book.title) ===
                    normalizeTag(newBook.title) &&
                normalizeTag(book.author) ===
                    normalizeTag(newBook.author)
        );


    if (duplicate) {

        alert(
            "That book is already in Filter X."
        );

        return;
    }


    custom.push(
        newBook
    );


    saveCustomBooks(
        custom
    );


    books =
        BASE_BOOKS.concat(
            custom
        );


    closeAddForm();

    buildFacetChips();

    refreshCurrentView();
}


/* =========================================================
   41. FILTER PRESETS
   ========================================================= */

function loadPresets() {

    const presets =
        loadJSON(
            "filterx_presets",
            {}
        );


    return (
        presets &&
        typeof presets === "object" &&
        !Array.isArray(presets)
    )
        ? presets
        : {};
}


function savePresets(
    presets
) {

    saveJSON(
        "filterx_presets",
        presets
    );
}


function currentFilterState() {

    const include =
        {};


    Object.entries(
        includeTags
    ).forEach(
        ([category, set]) => {

            include[category] =
                [...set];
        }
    );


    return {

        q:
            $("q")
                ? $("q").value
                : "",

        spiceMax:
            $("spiceMax")
                ? $("spiceMax").value
                : "4",

        violMax:
            $("violMax")
                ? $("violMax").value
                : "4",

        sortBy:
            $("sortBy")
                ? $("sortBy").value
                : "title-asc",

        avoid:
            { ...avoidState },

        avoidTags:
            [...avoidTags],

        includeTags:
            include
    };
}


function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


function refreshPresetSelect() {

    const select =
        $("presetSelect");


    if (!select) return;


    const presets =
        loadPresets();


    select.innerHTML =
        "";


    const defaultOption =
        document.createElement(
            "option"
        );


    defaultOption.value =
        "";


    defaultOption.textContent =
        "Load saved…";


    select.appendChild(
        defaultOption
    );


    Object.keys(
        presets
    ).forEach(name => {

        const option =
            document.createElement(
                "option"
            );


        option.value =
            name;


        option.textContent =
            name;


        select.appendChild(
            option
        );
    });
}


function saveFilterPreset() {

    const name =
        prompt(
            "Name this filter set:"
        );


    if (!name || !name.trim()) {
        return;
    }


    const cleanName =
        name.trim();


    const presets =
        loadPresets();


    presets[cleanName] =
        currentFilterState();


    savePresets(
        presets
    );


    refreshPresetSelect();


    const select =
        $("presetSelect");


    if (select) {
        select.value =
            cleanName;
    }
}


function loadFilterPreset() {

    const select =
        $("presetSelect");


    if (!select) return;


    const name =
        select.value;


    if (!name) return;


    const presets =
        loadPresets();


    const preset =
        presets[name];


    if (!preset) return;


    const q =
        $("q");


    if (q) {
        q.value =
            preset.q || "";
    }


    const spice =
        $("spiceMax");


    if (spice) {
        spice.value =
            preset.spiceMax ?? "4";
    }


    setText(
        "spiceMaxLabel",
        LEVEL_LABELS[
            parseFloat(
                preset.spiceMax ?? 4
            )
        ] || "Any"
    );


    const violence =
        $("violMax");


    if (violence) {
        violence.value =
            preset.violMax ?? "4";
    }


    setText(
        "violMaxLabel",
        LEVEL_LABELS[
            parseFloat(
                preset.violMax ?? 4
            )
        ] || "Any"
    );


    const sort =
        $("sortBy");


    if (sort) {
        sort.value =
            preset.sortBy ||
            "title-asc";
    }


    avoidState = {
        cheating: false,
        domesticViolence: false,
        gore: false,
        sexualAbuse: false,
        ...(preset.avoid || {})
    };


    avoidTags =
        new Set(
            preset.avoidTags ||
            []
        );


    includeTags = {

        genre:
            new Set(
                preset.includeTags?.genre ||
                []
            ),

        trope:
            new Set(
                preset.includeTags?.trope ||
                []
            ),

        relationship:
            new Set(
                preset.includeTags?.relationship ||
                []
            ),

        mood:
            new Set(
                preset.includeTags?.mood ||
                []
            ),

        other:
            new Set(
                preset.includeTags?.other ||
                []
            )
    };


    buildFacetChips();

    render();
}


/* =========================================================
   42. DEFAULT PROFILE
   ========================================================= */

function saveDefaultProfile() {

    saveJSON(
        "filterx_default_profile",
        currentFilterState()
    );


    alert(
        "Saved! Your spice and warning thresholds will now load automatically."
    );
}


function applyDefaultProfile() {

    const profile =
        loadJSON(
            "filterx_default_profile",
            null
        );


    if (!profile) return;


    const spice =
        $("spiceMax");


    if (spice) {

        spice.value =
            profile.spiceMax ??
            "4";
    }


    setText(
        "spiceMaxLabel",
        LEVEL_LABELS[
            parseFloat(
                profile.spiceMax ??
                4
            )
        ] || "Any"
    );


    const violence =
        $("violMax");


    if (violence) {

        violence.value =
            profile.violMax ??
            "4";
    }


    setText(
        "violMaxLabel",
        LEVEL_LABELS[
            parseFloat(
                profile.violMax ??
                4
            )
        ] || "Any"
    );


    avoidState = {

        cheating: false,

        domesticViolence: false,

        gore: false,

        sexualAbuse: false,

        ...(profile.avoid || {})
    };


    avoidTags =
        new Set(
            profile.avoidTags ||
            []
        );


    includeTags = {

        genre:
            new Set(
                profile.includeTags?.genre ||
                []
            ),

        trope:
            new Set(
                profile.includeTags?.trope ||
                []
            ),

        relationship:
            new Set(
                profile.includeTags?.relationship ||
                []
            ),

        mood:
            new Set(
                profile.includeTags?.mood ||
                []
            ),

        other:
            new Set(
                profile.includeTags?.other ||
                []
            )
    };
}


/* =========================================================
   43. MODAL / KEYBOARD SAFETY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        closeDetail();

        closeBlindDate();

        closeAddForm();

        closeQuiz(false);
    }
);


/* Close modal when clicking outside modal content */

[
    "detailModal",
    "blindModal",
    "addModal",
    "quizModal"
].forEach(id => {

    const modal = $(id);

    if (!modal) return;


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                if (
                    id ===
                    "detailModal"
                ) {
                    closeDetail();
                }

                if (
                    id ===
                    "blindModal"
                ) {
                    closeBlindDate();
                }

                if (
                    id ===
                    "addModal"
                ) {
                    closeAddForm();
                }

                if (
                    id ===
                    "quizModal"
                ) {
                    closeQuiz(false);
                }
            }
        }
    );
});


/* =========================================================
   44. INITIALIZATION
   ========================================================= */

function initFilterX() {

    /* Theme */

    applyTheme(
        loadJSON(
            "filterx_theme",
            "light"
        )
    );


    /* Default filters */

    applyDefaultProfile();


    /* Build filter UI */

    buildFacetChips();


    /* Presets */

    refreshPresetSelect();


    /* Home */

    renderHome();


    /* Quiz */

    maybeShowQuiz();
}


/* =========================================================
   45. START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initFilterX
    );

} else {

    initFilterX();
    
}


/* =========================================================
   FILTER X 5.1 — END
   ========================================================= */