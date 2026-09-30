const L = {none:0, low:1, "low-moderate":1, moderate:2, "moderate-high":2.5, high:3, "very high":3, major:3, extreme:3};
const LEVEL_LABELS = {0:"None",1:"Low",2:"Moderate",3:"High",4:"Any"};
const colors = ["#5b3fd9","#8a5cf6","#c65bd9","#e0578a","#e07b3c","#3fae7a","#3f8fd9","#7a4fd9"];
function lvl(s){ if(!s) return null; return L[s.toLowerCase()] ?? null; }

const BASE_BOOKS = [
 {title:"It Ends With Us", author:"Colleen Hoover", isbn:"9781501110368", romance:"High", spice:"Moderate", violence:"Moderate-High", domesticViolence:"Major", cheating:"Major", extra:["Marriage","High emotional intensity"]},
 {title:"It Starts With Us", author:"Colleen Hoover", isbn:"9781668001226", romance:"High", spice:"Moderate", domesticViolence:"Low (threats only)", cheating:"No", extra:["Divorce","Parenthood","Second Chance","Fluffy moments"]},
 {title:"The Seven Husbands of Evelyn Hugo", author:"Taylor Jenkins Reid", isbn:"9781501161933", romance:"Present", profanity:"None", gore:"None", domesticViolence:"Present", cheating:"Present", extra:[]},
 {title:"King of Wrath", author:"Ana Huang", isbn:"9781728289724", romance:"High", spice:"Moderate-High", gore:"None", violence:"Low", cheating:"No", extra:["Profanity"]},
 {title:"King of Pride", author:"Ana Huang", isbn:"9781728289731", romance:"High", spice:"Moderate-High", cheating:"No", extra:["Profanity"]},
 {title:"Twisted Hate", author:"Ana Huang", isbn:"9781728274881", romance:"High", spice:"High", gore:"None", violence:"Moderate", cheating:"No", extra:["Profanity"]},
 {title:"Twisted Games", author:"Ana Huang", isbn:"9781728274874", spice:"High", violence:"Low", gore:"None", cheating:"No", extra:["Dark Romance","Profanity"]},
 {title:"Better Than the Movies", author:"Lynn Painter", isbn:"9781534467637", spice:"None", violence:"Low", gore:"None", cheating:"No", extra:["Fluffy Romance","Fake Dating","Profanity"]},
 {title:"You Deserve Each Other", author:"Sarah Hogle", isbn:"9780593085424", romance:"Present", spice:"Very Low", violence:"Low", gore:"None", cheating:"No", extra:[]},
 {title:"The Wrong Bride", author:"Catharina Maura", isbn:"9781464227134", romance:"Present", spice:"Moderate", violence:"Low", gore:"None", cheating:"No", extra:["Conflict","Marriage","Pregnancy"]},
 {title:"Binding 13", author:"Chloe Walsh", isbn:"9780349439259", romance:"Present", spice:"Low", domesticViolence:"High", gore:"Low", cheating:"No", extra:["Fluffy Romance"]},
 {title:"Keeping 13", author:"Chloe Walsh", isbn:"9781728299976", romance:"Present", spice:"Low", domesticViolence:"High", gore:"Low", cheating:"No", extra:["Fluffy Romance"]},
 {title:"Rebirth of the Malicious Empress of Military Lineage", author:"Qian Shan Cha Ke", cover:"covers/rebirth-empress.jpg", romance:"Present", spice:"Low", violence:"Moderate", gore:"Moderate", cheating:"No", extra:["Marriage","Pregnancy"]},
 {title:"Insatiable", author:"Leigh Rivers", isbn:"9780349448541", domesticViolence:"High", extra:["Dark Romance","High sexual abuse content"]},
 {title:"Voracious", author:"Leigh Rivers", isbn:"9780349448558", spice:"High", gore:"High", violence:"High", extra:["Profanity","Sexual abuse","Eye harm"]},
 {title:"Twisted Love", author:"Ana Huang", isbn:"9781728274867", spice:"Moderate-High", violence:"Moderate", gore:"None", cheating:"No", extra:["Dark Romance","Profanity","Selective amnesia"]},
 {title:"Sunset Bridge", author:"Emilie Richards", isbn:"9780778312383", cheating:"No", extra:["Fluffy Romance","Girl friendships","Pregnancy","Divorce"]},
 {title:"Twisted Lies", author:"Ana Huang", isbn:"9781728274898", spice:"High", violence:"Moderate", gore:"None", cheating:"No", extra:["Romance","Profanity"]},
 {title:"King of Greed", author:"Ana Huang", isbn:"9780349436357", spice:"High", violence:"Low", cheating:"No", extra:["Divorce","Second Chance","Profanity"]},
 {title:"I Am Not Jessica Chen", author:"Ann Liang", isbn:"9781335523129", spice:"None", violence:"None", gore:"None", cheating:"No", extra:["Sci-fi","Fantasy","Mild fluff romance","Self discovery","Self growth","Highschool"]},
 {title:"If You Could See the Sun", author:"Ann Liang", isbn:"9781335005984", spice:"None", violence:"Low", gore:"None", cheating:"No", extra:["Fantasy","Sci-fi","Self growth","Friendship","Academic rivalry"]},
 {title:"I Hope This Doesn't Find You", author:"Ann Liang", isbn:"9781338827170", violence:"Low", gore:"None", cheating:"No", extra:["Academic rivalry","Moderate fluffy romance","Friendship","Enemies to lovers","Highschool","Self discovery"]},
 {title:"This Time It's Real", author:"Ann Liang", isbn:"9781338827118", spice:"Low", violence:"None", cheating:"No", extra:["Fluffy Romance","Fake dating","Slow burn","Highschool","Friendship","Self discovery"]},
 {title:"Beautiful Fiend", author:"Lola King", isbn:"9781916837034", spice:"High", violence:"High", gore:"Moderate", extra:["Dark Romance","Knife play","Gang rivalry","Psychotic male lead"]},
 {title:"God of Malice", author:"Rina Kent", isbn:"9781685450960", spice:"High", violence:"High", gore:"Low", extra:["Dark Romance","Secret society","Psychotic male lead","College","Powerful families"]},
 {title:"God of Pain", author:"Rina Kent", isbn:"9781685452001", spice:"High", violence:"High", gore:"Moderate", cheating:"No", extra:["Dark Romance","Powerful families","Psychotic male lead","College","Ballet","Kidnapping","Family rivalry","Mafia","Bdsm","Toxic relationship","Childhood trauma","Dubious consent"]},
 {title:"God of Wrath", author:"Rina Kent", isbn:"9781685452063", spice:"High", violence:"High", gore:"Low", cheating:"No", extra:["Dark Romance","Mafia","Stalking","College","Kink","Enemies to lovers","Dubious consent"]},
 {title:"Purple Hibiscus", author:"Chimamanda Ngozi Adichie", isbn:"9781616202415", domesticViolence:"Present", violence:"Moderate-High", gore:"None", extra:["Self discovery","Religious fanaticism","Post-colonial era"]},
 {title:"All Your Perfects", author:"Colleen Hoover", isbn:"9781501193323", romance:"Present", cheating:"Present", gore:"None", extra:["Marriage","Heartbreak","Miscarriage","Infertility","Slow burn"]},
 {title:"Maybe Someday", author:"Colleen Hoover", isbn:"9781476753164", spice:"Low", cheating:"Present", gore:"None", extra:["Heartbreak","Forbidden love","Chronic illness","High emotional intensity"]},
 {title:"Ugly Love", author:"Colleen Hoover", isbn:"9781476753188", romance:"Present", spice:"High", cheating:"Present", gore:"None", extra:["Sexual abuse (low-moderate)","High emotional intensity","Friends with benefits","Second Chance","Child loss","Pregnancy"]},
 {title:"The Way I Am Now", author:"Amber Smith", isbn:"9781665947114", romance:"Present", violence:"Low", gore:"None", cheating:"No", extra:["Sexual abuse","Self discovery","Substance abuse (low)","Second Chance"]},
 {title:"My Fault", author:"Mercedes Ron", isbn:"9781728291413", romance:"Present", spice:"Moderate", cheating:"No", extra:["Enemies to lovers","Family conflict","Forbidden romance","Step siblings","Billionaire","Illegal racing","Trauma"]},
 {title:"Your Fault", author:"Mercedes Ron", isbn:"9781728290768", romance:"Present", spice:"Moderate", violence:"Low", gore:"Low", cheating:"Present", extra:["Age gap","University","Forbidden romance","Family conflict","Step siblings"]},
 {title:"Our Fault", author:"Mercedes Ron", isbn:"9781728291437", romance:"Present", spice:"Moderate", violence:"Moderate", gore:"Low", cheating:"Present", extra:["Angst","Second Chance","Pregnancy","Forbidden romance","Step siblings"]},
 {title:"King of Sloth", author:"Ana Huang", isbn:"9780349436371", romance:"Present", spice:"Moderate", violence:"Low", gore:"None", cheating:"Mild", extra:["Workaholic","Workplace romance","Billionaire","Strong female lead"]},
 {title:"To All the Boys I've Loved Before", author:"Jenny Han", isbn:"9781442426719", spice:"None", violence:"None", gore:"None", cheating:"No", extra:["Fluffy Romance","Coming of age","Fake Dating","Loss of parent","Sisterhood","Self confidence"]},
 {title:"Taming 7", author:"Chloe Walsh", isbn:"9781464216053", violence:"Moderate", gore:"Low", extra:["Fluffy Romance","Trauma","Sexual harassment","Child abuse","Friends to lovers","Family dysfunction","Mental health"]},
 {title:"The Mindf*ck Series", author:"S.T. Abby", spice:"Moderate", violence:"Extreme", gore:"Extreme", cheating:"No", extra:["Rape","Murder","Child abuse","Torture","Trauma revenge","FBI","Institutional corruption"]},
 {title:"River's Call", author:"Melody Carlson", isbn:"9781426712678", spice:"None", violence:"Low", gore:"None", extra:["Family conflict","Growth","Forgiveness","Pregnancy","Mother-daughter relationship","1960s setting"]},
 {title:"The Killing Woods", author:"Lucy Christopher", isbn:"9780545461009", romance:"None", spice:"Low", violence:"Moderate", gore:"Low", cheating:"No", extra:["Murder","Drug abuse","High profanity","Mystery","Trauma","Highschool"]},
 {title:"The Cry of the Phoenix Which Reached the Ninth Heaven", author:"Xiao Yun", cover:"covers/cry-of-the-phoenix.jpg", romance:"High", spice:"Moderate", violence:"High", gore:"Moderate", domesticViolence:"Present", cheating:"Present", extra:["Revenge","Pregnancy","Politics","Ancient China","Ruthless female lead","Family betrayal"]},
 {title:"Obsessing Over His Favourite", author:"Ava Selwyn", cover:"covers/obsessing-over-his-favourite.jpg", romance:"Present", gore:"None", violence:"Low", spice:"Moderate", cheating:"Present", extra:["Possessive male lead","Billionaire","Love triangle","Brother's best friend","Amnesia","She stops chasing him"]},
 {title:"Addicted to His Favourite", author:"Ava Selwyn", cover:"covers/addicted-to-his-favourite.jpg", romance:"Present", spice:"High", gore:"None", violence:"Low", extra:["Marriage","Billionaire","Possessive male lead","Love triangle"]},
 {title:"Forever His Favourite", author:"Ava Selwyn", cover:"covers/forever-his-favourite.jpg", spice:"High", gore:"None", violence:"Moderate", cheating:"No", extra:["Love triangle","Billionaire","Possessive male lead","Marriage","She stops chasing him"]},
];

// ---------- tag categorization ----------
const CATEGORY_MAP = {
  "Dark Romance":"genre", "Fluffy Romance":"genre", "Sci-fi":"genre", "Fantasy":"genre",
  "Slow burn":"trope", "Enemies to lovers":"trope", "Fake Dating":"trope", "Fake dating":"trope",
  "Second Chance":"trope", "Forbidden love":"trope", "Friends with benefits":"trope",
  "Selective amnesia":"trope", "Psychotic male lead":"trope",
  "Marriage":"relationship", "Pregnancy":"relationship", "Parenthood":"relationship",
  "Divorce":"relationship", "Friendship":"relationship", "Girl friendships":"relationship", "Family rivalry":"relationship",
  "Profanity":"content", "Knife play":"content", "Kidnapping":"content", "Stalking":"content",
  "Eye harm":"content", "Sexual abuse":"content", "Sexual abuse (low-moderate)":"content",
  "High sexual abuse content":"content", "Miscarriage":"content", "Infertility":"content",
  "Child loss":"content", "Religious fanaticism":"content", "Gang rivalry":"content",
  "High emotional intensity":"mood", "Heartbreak":"mood", "Chronic illness":"mood",
  "Fluffy moments":"mood", "Self discovery":"mood", "Self growth":"mood",
  "Mild fluff romance":"mood", "Moderate fluffy romance":"mood",
  "College":"other", "Highschool":"other", "Ballet":"other", "Post-colonial era":"other",
  "Conflict":"other", "Mafia":"other", "Secret society":"other", "Academic rivalry":"other",
  "Powerful families":"other", "Romance":"other",
  "Bdsm":"content", "Toxic relationship":"content", "Childhood trauma":"content", "Dubious consent":"content",
  "Kink":"content", "Loss of parent":"content", "Sexual harassment":"content", "Child abuse":"content",
  "Rape":"content", "Murder":"content", "Torture":"content", "Trauma revenge":"content",
  "Drug abuse":"content", "High profanity":"content", "Revenge":"content", "Family betrayal":"content",
  "Substance abuse (low)":"content",
  "Workplace romance":"trope", "Friends to lovers":"trope", "Possessive male lead":"trope",
  "Love triangle":"trope", "Brother's best friend":"trope", "Amnesia":"trope",
  "She stops chasing him":"trope", "Age gap":"trope",
  "Sisterhood":"relationship", "Family dysfunction":"relationship", "Mother-daughter relationship":"relationship",
  "Self confidence":"mood", "Growth":"mood", "Forgiveness":"mood", "Mental health":"mood",
  "Mystery":"genre",
  "Workaholic":"other", "Strong female lead":"other", "Coming of age":"other", "FBI":"other",
  "Institutional corruption":"other", "University":"other", "1960s setting":"other",
  "Politics":"other", "Ancient China":"other", "Ruthless female lead":"other",
};
function categoryOf(tag){ return CATEGORY_MAP[tag] || "other"; }

// ---------- persistence ----------
function loadJSON(key, fallback){ try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; }catch(e){ return fallback; } }
function saveJSON(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

function loadCustomBooks(){ return loadJSON("filterx_custom_books", []); }
function saveCustomBooks(list){ saveJSON("filterx_custom_books", list); }
let books = BASE_BOOKS.concat(loadCustomBooks());

function bookKey(b){ return b.title + "|" + (b.author||""); }

let personal = loadJSON("filterx_personal", {});
function getPersonal(b){ return personal[bookKey(b)] || {favorite:false, bookmarked:false, status:"none"}; }
function setPersonal(b, patch){
  const key = bookKey(b);
  personal[key] = Object.assign(getPersonal(b), patch);
  saveJSON("filterx_personal", personal);
}

let recentViewed = loadJSON("filterx_recent", []); // array of bookKeys, most recent first
function markViewed(b){
  const key = bookKey(b);
  recentViewed = [key, ...recentViewed.filter(k=>k!==key)].slice(0,8);
  saveJSON("filterx_recent", recentViewed);
}

function loadPresets(){ return loadJSON("filterx_presets", {}); }
function savePresets(obj){ saveJSON("filterx_presets", obj); }

// ---------- view switching ----------
function showView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById("view-"+name).classList.add("active");
  document.querySelectorAll(".tab-btn[data-view]").forEach(b=>b.classList.toggle("active", b.dataset.view===name));
  if(name==="home") renderHome();
  if(name==="browse") render();
  if(name==="library") renderLibrary(currentLibTab);
}
function goSearch(){
  document.getElementById("q").value = document.getElementById("homeSearch").value;
  showView("browse");
}

// ---------- filter state ----------
const avoidDefs = [
  {key:"cheating", label:"💔 No Cheating"},
  {key:"domesticViolence", label:"🛡️ No Domestic Violence"},
  {key:"gore", label:"⚠️ No Gore"},
  {key:"sexualAbuse", label:"🚫 No Sexual Abuse"},
];
let avoidState = {}; avoidDefs.forEach(a=>avoidState[a.key]=false);
let avoidTags = new Set();      // content-category tags to hide
let includeTags = { genre:new Set(), trope:new Set(), relationship:new Set(), mood:new Set(), other:new Set() };

function allTagsByCategory(cat){
  const set = new Set();
  books.forEach(b=>(b.extra||[]).forEach(t=>{ if(categoryOf(t)===cat) set.add(t); }));
  return [...set].sort();
}

function buildFacetChips(){
  const chipRow = document.getElementById("avoidChips");
  chipRow.innerHTML = "";
  avoidDefs.forEach(a=>{
    const c = document.createElement("div");
    c.className = "chip avoid"; c.textContent = a.label; c.dataset.key = a.key;
    c.classList.toggle("active", avoidState[a.key]);
    c.onclick = ()=>{ avoidState[a.key] = !avoidState[a.key]; c.classList.toggle("active"); render(); };
    chipRow.appendChild(c);
  });

  const contentRow = document.getElementById("contentTagChips");
  contentRow.innerHTML = "";
  allTagsByCategory("content").forEach(tag=>{
    const c = document.createElement("div");
    c.className = "chip avoid"; c.textContent = "🚫 " + tag;
    c.classList.toggle("active", avoidTags.has(tag));
    c.onclick = ()=>{ avoidTags.has(tag) ? avoidTags.delete(tag) : avoidTags.add(tag); c.classList.toggle("active"); render(); };
    contentRow.appendChild(c);
  });

  const catToEl = {genre:"genreChips", trope:"tropeChips", relationship:"relationshipChips", mood:"moodChips", other:"otherChips"};
  Object.entries(catToEl).forEach(([cat, elId])=>{
    const row = document.getElementById(elId);
    row.innerHTML = "";
    allTagsByCategory(cat).forEach(tag=>{
      const c = document.createElement("div");
      c.className = "chip"; c.textContent = tag;
      c.classList.toggle("active", includeTags[cat].has(tag));
      c.onclick = ()=>{ includeTags[cat].has(tag) ? includeTags[cat].delete(tag) : includeTags[cat].add(tag); c.classList.toggle("active"); render(); };
      row.appendChild(c);
    });
  });
}

function onSliderChange(which){
  const val = document.getElementById(which==="spice"?"spiceMax":"violMax").value;
  document.getElementById(which==="spice"?"spiceMaxLabel":"violMaxLabel").textContent = LEVEL_LABELS[val];
  render();
}

function resetFilters(){
  document.getElementById("q").value="";
  document.getElementById("spiceMax").value="4"; document.getElementById("spiceMaxLabel").textContent="Any";
  document.getElementById("violMax").value="4"; document.getElementById("violMaxLabel").textContent="Any";
  document.getElementById("sortBy").value="title-asc";
  avoidDefs.forEach(a=>avoidState[a.key]=false);
  avoidTags.clear();
  Object.values(includeTags).forEach(s=>s.clear());
  buildFacetChips();
  render();
}

function hasSexualAbuse(b){ return (b.extra||[]).some(e=>/sexual abuse/i.test(e)); }

function passes(b){
  const q = document.getElementById("q").value.trim().toLowerCase();
  if(q && !(b.title.toLowerCase().includes(q) || (b.author||"").toLowerCase().includes(q))) return false;

  const spiceMax = parseFloat(document.getElementById("spiceMax").value);
  const vSpice = lvl(b.spice);
  if(vSpice !== null && vSpice > spiceMax) return false;

  const violMax = parseFloat(document.getElementById("violMax").value);
  const vViol = lvl(b.violence);
  if(vViol !== null && vViol > violMax) return false;

  if(avoidState.cheating){
    if(lvl(b.cheating) !== null && lvl(b.cheating) >= 2) return false;
    if(/major|present/i.test(b.cheating||"")) return false;
  }
  if(avoidState.domesticViolence){
    const dv = lvl(b.domesticViolence);
    if(dv!==null && dv>=2) return false;
    if(/present/i.test(b.domesticViolence||"")) return false;
  }
  if(avoidState.gore){
    const g = lvl(b.gore);
    if(g!==null && g>=1) return false;
  }
  if(avoidState.sexualAbuse && hasSexualAbuse(b)) return false;

  const tags = b.extra || [];
  if([...avoidTags].some(t=>tags.includes(t))) return false;

  for(const cat of Object.keys(includeTags)){
    const wanted = includeTags[cat];
    if(wanted.size === 0) continue;
    if(![...wanted].some(t=>tags.includes(t))) return false;
  }

  return true;
}

function sortBooks(list){
  const mode = document.getElementById("sortBy").value;
  const cmp = {
    "title-asc": (a,b)=>a.title.localeCompare(b.title),
    "title-desc": (a,b)=>b.title.localeCompare(a.title),
    "spice-asc": (a,b)=>(lvl(a.spice)??-1)-(lvl(b.spice)??-1),
    "spice-desc": (a,b)=>(lvl(b.spice)??-1)-(lvl(a.spice)??-1),
    "violence-asc": (a,b)=>(lvl(a.violence)??-1)-(lvl(b.violence)??-1),
    "violence-desc": (a,b)=>(lvl(b.violence)??-1)-(lvl(a.violence)??-1),
  };
  return list.slice().sort(cmp[mode] || cmp["title-asc"]);
}

// ---------- covers ----------
function openLibraryCoverUrl(isbn){ return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`; }
const coverCache = loadJSON("filterx_cover_cache", {});
function saveCoverCache(){ saveJSON("filterx_cover_cache", coverCache); }

async function fetchCoverFromGoogle(book){
  const key = bookKey(book);
  if(coverCache[key] !== undefined) return coverCache[key];
  try{
    let q = `intitle:${book.title}`;
    if(book.author && book.author !== "—") q += ` inauthor:${book.author}`;
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=1`);
    if(!res.ok) throw new Error("bad response");
    const data = await res.json();
    let img = data.items && data.items[0] && data.items[0].volumeInfo.imageLinks;
    if(!img){
      const res2 = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(book.title+" "+(book.author!=="—"?book.author:""))}&maxResults=1`);
      const data2 = await res2.json();
      img = data2.items && data2.items[0] && data2.items[0].volumeInfo.imageLinks;
    }
    let url = img ? (img.thumbnail || img.smallThumbnail) : null;
    if(url) url = url.replace(/^http:/, "https:");
    coverCache[key] = url || null;
    saveCoverCache();
    return coverCache[key];
  }catch(e){
    coverCache[key] = null;
    saveCoverCache();
    return null;
  }
}

function loadBookCover(book, onFound){
  function tryGoogleFallback(){ fetchCoverFromGoogle(book).then(url=>{ if(url) onFound(url); }); }
  function tryIsbnThenGoogle(){
    if(!book.isbn){ tryGoogleFallback(); return; }
    const probe = new Image();
    probe.onload = ()=>{ probe.naturalWidth > 1 ? onFound(openLibraryCoverUrl(book.isbn)) : tryGoogleFallback(); };
    probe.onerror = tryGoogleFallback;
    probe.src = openLibraryCoverUrl(book.isbn);
  }
  if(book.cover){
    const own = new Image();
    own.onload = ()=> onFound(book.cover);
    own.onerror = tryIsbnThenGoogle;
    own.src = book.cover;
    return;
  }
  tryIsbnThenGoogle();
}

function attachCover(coverEl, book){
  loadBookCover(book, url=>{
    const img = document.createElement("img");
    img.alt = ""; img.style.opacity = "0"; img.style.transition = "opacity .25s";
    img.onload = ()=>{ img.style.opacity = "1"; };
    img.onerror = ()=>{ img.remove(); };
    img.src = url;
    coverEl.insertBefore(img, coverEl.firstChild);
  });
}

// ---------- card rendering (shared by Home / Browse / Library) ----------
function spiceFlames(value){
  const l = lvl(value);
  if(l===null) return `<span class="tag">🔥 —</span>`;
  const count = Math.max(0, Math.min(3, Math.round(l)));
  let s = "";
  for(let i=0;i<3;i++) s += i<count ? "🔥" : "🤍";
  return `<span class="tag flamemeter ${count>=2?'warn':''}" title="Spice: ${value}">${s}</span>`;
}
function tagChip(label, value, warnIfHigh){
  if(!value) return "";
  const l = lvl(value);
  let cls = "tag";
  if(warnIfHigh && l!==null && l>=2) cls += " warn";
  return `<span class="${cls}">${label}: ${value}</span>`;
}

function createCard(b, compact){
  const p = getPersonal(b);
  const card = document.createElement("div");
  card.className = "card";
  card.onclick = ()=>openDetail(b);
  const genreTags = (b.extra||[]).filter(t=>categoryOf(t)==="genre");
  card.innerHTML = `
    <div class="cover" data-cover>
      <div class="card-actions">
        <button class="icon-btn ${p.favorite?'on':''}" data-fav title="Favorite">${p.favorite?'♥':'♡'}</button>
        <button class="icon-btn ${p.bookmarked?'on':''}" data-bm title="Bookmark">🔖</button>
      </div>
      <div class="t">${b.title}</div>
      <div class="a">${b.author||""}</div>
    </div>
    ${compact ? "" : `
    <div class="card-body">
      <div class="card-sub">${genreTags.join(" · ") || "Romance"}</div>
      <div class="card-badges">
        ${spiceFlames(b.spice)}
        ${b.violence ? `<span class="tag ${lvl(b.violence)>=2?'warn':''}">⚠️ Violence</span>` : ""}
        ${(!b.cheating || /^no$/i.test(b.cheating)) ? `<span class="tag">🚫 No cheating</span>` : `<span class="tag warn">Cheating</span>`}
      </div>
    </div>`}
  `;
  const colorIdx = Math.abs([...b.title].reduce((s,c)=>s+c.charCodeAt(0),0)) % colors.length;
  card.querySelector("[data-cover]").style.background = colors[colorIdx];
  attachCover(card.querySelector("[data-cover]"), b);
  card.querySelector("[data-fav]").onclick = (e)=>{ e.stopPropagation(); setPersonal(b,{favorite:!getPersonal(b).favorite}); refreshCurrentView(); };
  card.querySelector("[data-bm]").onclick = (e)=>{ e.stopPropagation(); setPersonal(b,{bookmarked:!getPersonal(b).bookmarked}); refreshCurrentView(); };
  return card;
}

function refreshCurrentView(){
  const active = document.querySelector(".view.active").id;
  if(active==="view-home") renderHome();
  if(active==="view-browse") render();
  if(active==="view-library") renderLibrary(currentLibTab);
}

// ---------- Browse ----------
function render(){
  const grid = document.getElementById("grid");
  const list = sortBooks(books.filter(passes));
  document.getElementById("count").textContent = `${list.length} of ${books.length} books`;
  grid.innerHTML = "";
  if(list.length===0){
    grid.innerHTML = `<div class="empty"><span class="empty-icon">🔍📚</span>No books match those filters. Try loosening one.</div>`;
    return;
  }
  list.forEach(b=>grid.appendChild(createCard(b, false)));
}

// ---------- Filter Roulette ----------
function rouletteBrowse(){
  const list = books.filter(passes);
  if(list.length===0){ alert("No books match your current filters — loosen them and try again!"); return; }
  const pick = list[Math.floor(Math.random()*list.length)];
  openDetail(pick);
}

// ---------- Blind Date mode ----------
let blindPick = null;
function openBlindDate(){
  const pool = books.filter(passes).length ? books.filter(passes) : books;
  blindPick = pool[Math.floor(Math.random()*pool.length)];
  const b = blindPick;
  const tropes = (b.extra||[]).filter(t=>categoryOf(t)==="trope");
  const rel = (b.extra||[]).filter(t=>categoryOf(t)==="relationship");
  const mood = (b.extra||[]).filter(t=>categoryOf(t)==="mood");
  const genre = (b.extra||[]).filter(t=>categoryOf(t)==="genre");
  const warnings = contentWarnings(b);
  document.getElementById("blindBody").innerHTML = `
    <div class="blind-cover">🙈<div class="blind-sub">Mystery Book</div></div>
    <h3>Guess who this is…</h3>
    <div class="detail-row"><b>Spice</b><span>${spiceFlames(b.spice)}</span></div>
    <div class="detail-row"><b>Genre</b><span>${genre.join(", ")||"—"}</span></div>
    <div class="detail-row"><b>Tropes</b><span>${tropes.join(", ")||"—"}</span></div>
    <div class="detail-row"><b>Relationship themes</b><span>${rel.join(", ")||"—"}</span></div>
    <div class="detail-row"><b>Mood</b><span>${mood.join(", ")||"—"}</span></div>
    <h3 style="margin-top:12px;">Content warnings</h3>
    ${warnings.length ? `<div class="card-badges">${warnings.map(w=>`<span class="tag warn">${w}</span>`).join("")}</div>` : `<p class="detail-desc">Nothing flagged.</p>`}
    <button class="btn-solid" style="margin-top:16px;width:100%;" onclick="revealBlindDate()">👀 Reveal the book</button>
    <button class="btn-outline small" style="margin-top:8px;width:100%;" onclick="openBlindDate()">🔄 Try another</button>
  `;
  document.getElementById("blindModal").classList.add("open");
}
function revealBlindDate(){
  if(!blindPick) return;
  closeBlindDate();
  openDetail(blindPick);
}
function closeBlindDate(){ document.getElementById("blindModal").classList.remove("open"); }

// ---------- theme ----------
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  document.getElementById("themeToggle").textContent = t==="spicy" ? "🌶️" : "🌙";
  saveJSON("filterx_theme", t);
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme")==="spicy" ? "light" : "spicy";
  applyTheme(cur);
}

// ---------- reading streak ----------
function logStreakDay(){
  const days = loadJSON("filterx_streak_days", []);
  const today = new Date().toISOString().slice(0,10);
  if(!days.includes(today)){ days.push(today); saveJSON("filterx_streak_days", days); }
}
function computeStreak(){
  const days = new Set(loadJSON("filterx_streak_days", []));
  let streak = 0;
  let d = new Date();
  while(true){
    const key = d.toISOString().slice(0,10);
    if(days.has(key)){ streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

// ---------- shareable stat card ----------
function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(" ");
  let line = "", cy = y;
  words.forEach(w=>{
    const test = line + w + " ";
    if(ctx.measureText(test).width > maxWidth && line){
      ctx.fillText(line, x, cy); line = w + " "; cy += lineHeight;
    } else line = test;
  });
  ctx.fillText(line, x, cy);
  return cy + lineHeight;
}
function openShareCard(b){
  if(!b) return;
  const canvas = document.createElement("canvas");
  canvas.width = 600; canvas.height = 750;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createLinearGradient(0,0,600,750);
  grad.addColorStop(0,"#6d4ce8"); grad.addColorStop(1,"#e0578a");
  ctx.fillStyle = grad; ctx.fillRect(0,0,600,750);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 32px Georgia, serif";
  let y = wrapText(ctx, b.title, 40, 90, 520, 40);
  ctx.font = "20px Georgia, serif";
  ctx.fillText(b.author||"", 40, y+20);
  y += 70;
  const l = lvl(b.spice);
  const flameStr = l===null ? "—" : "🔥".repeat(Math.max(0,Math.min(3,Math.round(l)))) + "🤍".repeat(3-Math.max(0,Math.min(3,Math.round(l))));
  ctx.font = "22px Georgia, serif";
  ctx.fillText("Spice: " + flameStr, 40, y); y += 44;
  const tropes = (b.extra||[]).filter(t=>categoryOf(t)==="trope");
  const genre = (b.extra||[]).filter(t=>categoryOf(t)==="genre");
  ctx.font = "18px Georgia, serif";
  y = wrapText(ctx, "Genre: " + (genre.join(", ")||"—"), 40, y, 520, 26) + 14;
  y = wrapText(ctx, "Tropes: " + (tropes.join(", ")||"—"), 40, y, 520, 26) + 14;
  const warnings = contentWarnings(b);
  y = wrapText(ctx, "Warnings: " + (warnings.join(", ")||"None flagged"), 40, y, 520, 26) + 14;
  ctx.font = "italic 16px Georgia, serif";
  ctx.fillText("📖 filtered with Filter X", 40, 710);
  const link = document.createElement("a");
  link.download = b.title.replace(/[^a-z0-9]+/gi,"_") + "_filterx.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// ---------- stats & badges ----------
const BADGES = [
  {id:"first", label:"📖 First finish", test:s=>s.finished>=1},
  {id:"five", label:"🏅 5 books finished", test:s=>s.finished>=5},
  {id:"spicy", label:"🌶️ Spice explorer", test:s=>s.avgSpice>=2},
  {id:"brave", label:"🛡️ Content-aware reader", test:s=>s.finished>=3},
  {id:"variety", label:"🎭 Trope collector", test:s=>s.tropeCount>=5},
];
function computeStats(){
  const finishedBooks = books.filter(b=>getPersonal(b).status==="finished");
  const finished = finishedBooks.length;
  const spiceVals = finishedBooks.map(b=>lvl(b.spice)).filter(v=>v!==null);
  const avgSpice = spiceVals.length ? spiceVals.reduce((a,c)=>a+c,0)/spiceVals.length : 0;
  const tropeSet = new Set();
  finishedBooks.forEach(b=>(b.extra||[]).forEach(t=>{ if(categoryOf(t)==="trope") tropeSet.add(t); }));
  const tropeCounts = {};
  finishedBooks.forEach(b=>(b.extra||[]).forEach(t=>{ if(categoryOf(t)==="trope") tropeCounts[t]=(tropeCounts[t]||0)+1; }));
  const favTrope = Object.entries(tropeCounts).sort((a,b)=>b[1]-a[1])[0];
  return {finished, avgSpice, tropeCount:tropeSet.size, favTrope: favTrope ? favTrope[0] : "—"};
}
function renderStats(){
  const s = computeStats();
  const earned = BADGES.filter(b=>b.test(s));
  const el = document.getElementById("statsBar");
  if(!el) return;
  const streak = computeStreak();
  el.innerHTML = `
    <div class="stat-card"><b>${s.finished}</b><span>Finished</span></div>
    <div class="stat-card"><b>${s.avgSpice? s.avgSpice.toFixed(1):"—"}</b><span>Avg spice</span></div>
    <div class="stat-card"><b>${s.favTrope}</b><span>Top trope</span></div>
    <div class="stat-card"><b>${streak>0?streak+"🔥":"0"}</b><span>Day streak</span></div>
    <div class="badges-row">${earned.length ? earned.map(b=>`<span class="tag badge">${b.label}</span>`).join("") : `<span class="tag">Finish a book to earn badges</span>`}</div>
  `;
}

// ---------- trope quiz (first visit) ----------
const QUIZ_QUESTIONS = [
  {q:"Pick a red flag 🚩", opts:[
    {label:"Grumpy billionaire", tag:"Grumpy/Sunshine"},
    {label:"Enemies who can't stop staring", tag:"Enemies to lovers"},
    {label:"Childhood best friend", tag:"Friends to lovers"},
    {label:"One bed, no choice", tag:"Forced proximity"}
  ]},
  {q:"How spicy do you like it? 🔥", opts:[
    {label:"Closed door", spiceMax:0},
    {label:"A little steam", spiceMax:1},
    {label:"Bring the heat", spiceMax:2},
    {label:"No limits", spiceMax:4}
  ]},
  {q:"Pick a vibe", opts:[
    {label:"Dark & intense", tag:"Dark Romance"},
    {label:"Fluffy & fun", tag:"Fluffy Romance"},
    {label:"Slow burn", tag:"Slow burn"},
    {label:"Fast & fated", tag:"Fated mates"}
  ]}
];
let quizStep = 0, quizAnswers = [];
function maybeShowQuiz(){
  if(loadJSON("filterx_quiz_done", false)) return;
  quizStep = 0; quizAnswers = [];
  renderQuizStep();
  document.getElementById("quizModal").classList.add("open");
}
function renderQuizStep(){
  const body = document.getElementById("quizBody");
  if(quizStep >= QUIZ_QUESTIONS.length){
    quizAnswers.forEach(a=>{
      if(a.tag){ const cat = categoryOf(a.tag); includeTags[cat] && includeTags[cat].add(a.tag); }
      if(a.spiceMax!==undefined){ document.getElementById("spiceMax").value = a.spiceMax; onSliderChange("spice"); }
    });
    buildFacetChips();
    body.innerHTML = `<h3>You're all set! 🎉</h3><p class="detail-desc">We've set up some filters based on your picks.</p><button class="btn-solid" style="width:100%;margin-top:12px;" onclick="finishQuiz()">Show me books</button>`;
    return;
  }
  const step = QUIZ_QUESTIONS[quizStep];
  body.innerHTML = `<h3>${step.q}</h3><div class="quiz-opts">${step.opts.map((o,i)=>`<button class="btn-outline quiz-opt" onclick="answerQuiz(${i})">${o.label}</button>`).join("")}</div>`;
}
function answerQuiz(i){
  quizAnswers.push(QUIZ_QUESTIONS[quizStep].opts[i]);
  quizStep++;
  renderQuizStep();
}
function finishQuiz(){
  saveJSON("filterx_quiz_done", true);
  closeQuiz();
  showView("browse");
}
function closeQuiz(){
  saveJSON("filterx_quiz_done", true);
  document.getElementById("quizModal").classList.remove("open");
}

// ---------- celebration ----------
function fireConfetti(){
  const wrap = document.createElement("div");
  wrap.className = "confetti-wrap";
  const emojis = ["🎉","✨","📚","💜","🎊"];
  for(let i=0;i<24;i++){
    const p = document.createElement("span");
    p.className = "confetti-piece";
    p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    p.style.left = Math.random()*100 + "vw";
    p.style.animationDelay = (Math.random()*0.4)+"s";
    p.style.fontSize = (14+Math.random()*14)+"px";
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  setTimeout(()=>wrap.remove(), 2200);
}

// ---------- Home ----------
const QUICK_CHIPS = ["Dark Romance","Fluffy Romance","Slow burn","No spice"];
function buildQuickChips(){
  const row = document.getElementById("quickChips");
  row.innerHTML = "";
  QUICK_CHIPS.forEach(label=>{
    const c = document.createElement("div");
    c.className = "chip"; c.textContent = label;
    c.onclick = ()=>{
      resetFilters();
      if(label==="No spice"){ document.getElementById("spiceMax").value="0"; document.getElementById("spiceMaxLabel").textContent="None"; }
      else { includeTags.genre.has(label) ? null : includeTags.genre.add(label); if(categoryOf(label)!=="genre"){ includeTags[categoryOf(label)].add(label); } buildFacetChips(); }
      showView("browse");
      render();
    };
    row.appendChild(c);
  });
}

function shuffledCopy(arr, seed){
  const a = arr.slice();
  let s = seed;
  for(let i=a.length-1;i>0;i--){
    s = (s*9301+49297)%233280;
    const j = Math.floor((s/233280)*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function fillStrip(elId, list, msgIfEmpty){
  const el = document.getElementById(elId);
  el.innerHTML = "";
  if(list.length===0 && msgIfEmpty){ el.innerHTML = `<div class="empty-note">${msgIfEmpty}</div>`; return; }
  list.forEach(b=>el.appendChild(createCard(b, true)));
}

function renderHome(){
  const hour = new Date().getHours();
  const greet = hour<12 ? "Good morning" : hour<18 ? "Good afternoon" : "Good evening";
  document.getElementById("greetingText").textContent = `👋 ${greet}! Ready to find your next book?`;

  buildQuickChips();

  const readingBooks = books.filter(b=>getPersonal(b).status==="reading");
  document.getElementById("continueSection").style.display = readingBooks.length ? "block" : "none";
  fillStrip("continueGrid", readingBooks);

  fillStrip("recommendedGrid", shuffledCopy(books, 7).slice(0,4));
  fillStrip("trendingGrid", shuffledCopy(books, 42).slice(0,4));
  fillStrip("recentAddedGrid", books.slice(-4).reverse());

  const recentBooks = recentViewed.map(key=>books.find(b=>bookKey(b)===key)).filter(Boolean);
  document.getElementById("recentViewedSection").style.display = recentBooks.length ? "block" : "none";
  fillStrip("recentViewedGrid", recentBooks);
}

// ---------- Library ----------
let currentLibTab = "favorites";
function showLibraryTab(tab){
  currentLibTab = tab;
  document.querySelectorAll("#libraryTabs .tab-btn").forEach(b=>b.classList.toggle("active", b.dataset.lib===tab));
  renderLibrary(tab);
}
function renderLibrary(tab){
  renderStats();
  const grid = document.getElementById("libraryGrid");
  let list = [];
  if(tab==="favorites") list = books.filter(b=>getPersonal(b).favorite);
  else if(tab==="bookmarks") list = books.filter(b=>getPersonal(b).bookmarked);
  else list = books.filter(b=>getPersonal(b).status===tab);
  grid.innerHTML = "";
  if(list.length===0){ grid.innerHTML = `<div class="empty"><span class="empty-icon">📌</span>Nothing here yet — open a book's details to add it.</div>`; return; }
  list.forEach(b=>grid.appendChild(createCard(b, false)));
}

// ---------- detail modal ----------
function buildSnapshot(b){
  const genre = (b.extra||[]).filter(t=>categoryOf(t)==="genre");
  const tropes = (b.extra||[]).filter(t=>categoryOf(t)==="trope");
  const rel = (b.extra||[]).filter(t=>categoryOf(t)==="relationship");
  const parts = [];
  parts.push(`A ${genre.length?genre.join("/").toLowerCase():"romance"} story` + (tropes.length?` built around ${tropes.join(", ").toLowerCase()}`:""));
  if(rel.length) parts.push(`touching on ${rel.join(", ").toLowerCase()}`);
  return parts.join(", ") + ".";
}
function contentWarnings(b){
  const warns = [];
  ["violence","domesticViolence","cheating","gore"].forEach(f=>{
    if(b[f] && !/^no$/i.test(b[f])) warns.push(`${f.replace(/([A-Z])/g," $1")}: ${b[f]}`);
  });
  (b.extra||[]).filter(t=>categoryOf(t)==="content").forEach(t=>warns.push(t));
  return warns;
}

function openDetail(b){
  markViewed(b);
  const p = getPersonal(b);
  const tropes = (b.extra||[]).filter(t=>categoryOf(t)==="trope");
  const rel = (b.extra||[]).filter(t=>categoryOf(t)==="relationship");
  const mood = (b.extra||[]).filter(t=>categoryOf(t)==="mood");
  const warnings = contentWarnings(b);

  document.getElementById("detailBody").innerHTML = `
    <div class="detail-cover" data-detail-cover>${b.title}</div>
    <h3>${b.title}</h3>
    <div class="detail-row"><b>Author</b><span>${b.author||"—"}</span></div>
    <p class="detail-desc">${buildSnapshot(b)}</p>

    <div class="status-row">
      <button class="icon-btn ${p.favorite?'on':''}" id="detailFav" style="width:auto;padding:6px 12px;border-radius:8px;">${p.favorite?'♥ Favorited':'♡ Favorite'}</button>
      <button class="icon-btn ${p.bookmarked?'on':''}" id="detailBm" style="width:auto;padding:6px 12px;border-radius:8px;">${p.bookmarked?'🔖 Bookmarked':'🔖 Bookmark'}</button>
      <select id="detailStatus">
        <option value="none" ${p.status==='none'?'selected':''}>Not on a list</option>
        <option value="want" ${p.status==='want'?'selected':''}>📌 Want to Read</option>
        <option value="reading" ${p.status==='reading'?'selected':''}>📖 Reading</option>
        <option value="finished" ${p.status==='finished'?'selected':''}>✅ Finished</option>
      </select>
    </div>

    <div class="detail-row"><b>Spice</b><span>${spiceFlames(b.spice)} <span class="detail-spice-word">${b.spice||"—"}</span></span></div>
    <div class="detail-row"><b>Emotional intensity</b><span>${mood.join(", ")||"—"}</span></div>
    <div class="detail-row"><b>Tropes</b><span>${tropes.join(", ")||"—"}</span></div>
    <div class="detail-row"><b>Relationship themes</b><span>${rel.join(", ")||"—"}</span></div>

    <h3 style="margin-top:16px;">Content warnings</h3>
    ${warnings.length ? `<div class="card-badges">${warnings.map(w=>`<span class="tag warn">${w}</span>`).join("")}</div>` : `<p class="detail-desc">Nothing flagged.</p>`}

    <h3 style="margin-top:16px;">📝 My notes <span class="spoiler-hint">(private, spoilers ok)</span></h3>
    <textarea id="detailNotes" class="notes-box" placeholder="Thoughts, quotes, spoilers…">${p.notes||""}</textarea>

    <button class="btn-outline small" style="margin-top:12px;width:100%;" onclick="openShareCard(currentDetailBook)">🖼️ Share this book</button>
  `;
  currentDetailBook = b;
  document.getElementById("detailModal").classList.add("open");
  attachCover(document.querySelector("[data-detail-cover]"), b);
  const colorIdx = Math.abs([...b.title].reduce((s,c)=>s+c.charCodeAt(0),0)) % colors.length;
  document.querySelector("[data-detail-cover]").style.background = colors[colorIdx];

  document.getElementById("detailFav").onclick = ()=>{ setPersonal(b,{favorite:!getPersonal(b).favorite}); openDetail(b); refreshCurrentView(); };
  document.getElementById("detailBm").onclick = ()=>{ setPersonal(b,{bookmarked:!getPersonal(b).bookmarked}); openDetail(b); refreshCurrentView(); };
  document.getElementById("detailStatus").onchange = (e)=>{
    setPersonal(b,{status:e.target.value});
    refreshCurrentView();
    if(e.target.value==="finished"){ fireConfetti(); logStreakDay(); }
  };
  document.getElementById("detailNotes").onblur = (e)=>{ setPersonal(b,{notes:e.target.value}); };
}
let currentDetailBook = null;
function closeDetail(){ document.getElementById("detailModal").classList.remove("open"); }

// ---------- add book form ----------
function openAddForm(){ document.getElementById("addModal").classList.add("open"); }
function closeAddForm(){ document.getElementById("addModal").classList.remove("open"); document.getElementById("addForm").reset(); }
function submitAddForm(e){
  e.preventDefault();
  const val = id => document.getElementById(id).value.trim();
  const newBook = {
    title: val("f_title"), author: val("f_author") || "—",
    cover: val("f_cover") || undefined,
    romance: val("f_romance") || undefined, spice: val("f_spice") || undefined,
    violence: val("f_violence") || undefined, gore: val("f_gore") || undefined,
    domesticViolence: val("f_dv") || undefined, cheating: val("f_cheating") || undefined,
    extra: val("f_extra") ? val("f_extra").split(",").map(s=>s.trim()).filter(Boolean) : [],
  };
  const custom = loadCustomBooks();
  custom.push(newBook);
  saveCustomBooks(custom);
  books = BASE_BOOKS.concat(custom);
  closeAddForm();
  buildFacetChips();
  refreshCurrentView();
}

// ---------- saved filter presets ----------
function currentFilterState(){
  return {
    q: document.getElementById("q").value,
    spiceMax: document.getElementById("spiceMax").value,
    violMax: document.getElementById("violMax").value,
    sortBy: document.getElementById("sortBy").value,
    avoid: {...avoidState},
    avoidTags: [...avoidTags],
    includeTags: Object.fromEntries(Object.entries(includeTags).map(([k,v])=>[k,[...v]])),
  };
}
function refreshPresetSelect(){
  const sel = document.getElementById("presetSelect");
  const presets = loadPresets();
  sel.innerHTML = `<option value="">Load saved…</option>` +
    Object.keys(presets).map(name=>`<option value="${name}">${name}</option>`).join("");
}
function saveFilterPreset(){
  const name = prompt("Name this filter set:");
  if(!name) return;
  const presets = loadPresets();
  presets[name] = currentFilterState();
  savePresets(presets);
  refreshPresetSelect();
}
function loadFilterPreset(){
  const name = document.getElementById("presetSelect").value;
  if(!name) return;
  const p = loadPresets()[name];
  if(!p) return;
  document.getElementById("q").value = p.q;
  document.getElementById("spiceMax").value = p.spiceMax;
  document.getElementById("spiceMaxLabel").textContent = LEVEL_LABELS[p.spiceMax];
  document.getElementById("violMax").value = p.violMax;
  document.getElementById("violMaxLabel").textContent = LEVEL_LABELS[p.violMax];
  document.getElementById("sortBy").value = p.sortBy;
  avoidState = {...p.avoid};
  avoidTags = new Set(p.avoidTags||[]);
  includeTags = Object.fromEntries(Object.entries(p.includeTags||{}).map(([k,v])=>[k,new Set(v)]));
  buildFacetChips();
  render();
}

// ---------- default spice/warning profile ----------
function saveDefaultProfile(){
  saveJSON("filterx_default_profile", currentFilterState());
  alert("Saved! Your spice and warning thresholds will now load automatically every visit.");
}
function applyDefaultProfile(){
  const p = loadJSON("filterx_default_profile", null);
  if(!p) return;
  document.getElementById("spiceMax").value = p.spiceMax;
  document.getElementById("spiceMaxLabel").textContent = LEVEL_LABELS[p.spiceMax];
  document.getElementById("violMax").value = p.violMax;
  document.getElementById("violMaxLabel").textContent = LEVEL_LABELS[p.violMax];
  avoidState = {...p.avoid};
  avoidTags = new Set(p.avoidTags||[]);
  includeTags = Object.fromEntries(Object.entries(p.includeTags||{}).map(([k,v])=>[k,new Set(v)]));
}

// ---------- init ----------
applyTheme(loadJSON("filterx_theme","light"));
buildFacetChips();
applyDefaultProfile();
buildFacetChips();
refreshPresetSelect();
renderHome();
maybeShowQuiz();