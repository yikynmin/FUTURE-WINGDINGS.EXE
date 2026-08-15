let typedText = "";
let textarea;
let deerGif;
let contactWindow;

let deerX = 0;
let deerY = 0;

let fullscreenButton;


// =====================================================
// INTRO
// =====================================================

const INTRO_TEXT_ENG = `

F̶̘̮͍Ũ̶̟̱T̶̪̞̳Ṷ̶̦̀̀̂Ŕ̸̝̝̔E̸̟͇̓̽̐

W҉̤̗I҉͓̭̝N̸͙̪̗G̶̗̮͗D̴̯̥Î̴̪̝N̷͙͕Ğ̶͍S҉̖̱̦


This is a near-future speculation.
How might we disrupt the surveillance and collection of text?
If we imagine a form of reading that humans can understand but computers cannot as a possible direction for reading in the future, could a typeface made up of symbols, like Wingdings, be repurposed for a new function and use?
Could this give rise to Wingdings Neue?

What will the future Wingdings be like?

`;


const INTRO_TEXT_KOR = `

F̶̘̮͍Ũ̶̟̱T̶̪̞̳Ṷ̶̦̀̀̂Ŕ̸̝̝̔E̸̟͇̓̽̐

W҉̤̗I҉͓̭̝N̸͙̪̗G̶̗̮͗D̴̯̥Î̴̪̝N̷͙͕Ğ̶͍S҉̖̱̦


이것은 근미래적인 상상이다.
텍스트의 검열과 수집을 어떻게 교란할 수 있을까?
사람은 읽을 수 있지만 컴퓨터는 읽을 수 없는 읽기를 미래적 읽기의 지향점이라고 상정한다면, 윙딩과 같은 기호로 이루어진 타입 한 벌이 새로운 목적과 용도로 쓰일 수 있지 않을까?
그래서 뉴-윙딩스(Wingdings Neue)가 나오지 않을까?

미래의 윙딩어는 어떻게 될것인가?

`;


let introLanguage = "ENG";

let introOpen = false;
let introduceLink;

let engButton;
let korButton;

function getIntroText() {

  if (
    introLanguage === "KOR"
  ) {

    return INTRO_TEXT_KOR;

  }

  return INTRO_TEXT_ENG;
}


// =====================================================
// COLORS
// =====================================================

let bgColor = "#dee2e6";
let textColor = "#0000ff";


// =====================================================
// COLOR RHYTHM
// =====================================================

let colorRhythm = "STILL";

let rhythmCurrentBG;
let rhythmCurrentText;

let rhythmStartBG;
let rhythmStartText;

let rhythmTargetBG;
let rhythmTargetText;

let rhythmStartTime = 0;


const RHYTHM_OPTIONS = {

  STILL: {
    interval: 0,
    fade: 0
  },

  CLASSIC: {
    interval: 3200,
    fade: 2200
  },

  WALTZ: {
    interval: 1800,
    fade: 1100
  },

  DISCO: {
    interval: 850,
    fade: 420
  }

};


// =====================================================
// TYPE
// =====================================================

let textAlignment = "CENTER";

let typeWeight = "BOLD";

let typeSizeName = "L";


const TYPE_SIZE_OPTIONS = {

  S: 60,
  M: 80,
  L: 110,
  XL: 150

};


let currentFont =
  "Helvetica Neue";


// =====================================================
// GLITCH
// =====================================================

let glitchPaused = false;

let glitchSpeedName = "NORMAL";

let glitchSpeed = 0.5;


const SPEED_OPTIONS = [

  {
    label: "SLOWER",
    value: 0.2
  },

  {
    label: "SLOW",
    value: 0.4
  },

  {
    label: "NORMAL",
    value: 0.7
  },

  {
    label: "FAST",
    value: 3.2
  }

];


// =====================================================
// FONT
// =====================================================

const UI_FONT =
  '"Pixel Times", serif';


const FONT_OPTIONS = [

  {
    label: "HELVETICA",
    font: "Helvetica Neue"
  },

  {
    label: "ARIAL",
    font: "Arial"
  },

  {
    label: "FUTURA",
    font: "Futura"
  },

  {
    label: "TIMES",
    font: "Times New Roman"
  },

  {
    label: "MENLO",
    font: "Menlo"
  },

  {
    label: "COURIER",
    font: "Courier New"
  },

  {
    label: "WINGDINGS",
    font: "Wingdings"
  }

];


// =====================================================
// LAYOUT
// =====================================================

const SIDEBAR_W = 220;

const PANEL_X = 15;
const PANEL_RIGHT = 204;

const PANEL_WIDTH =
  PANEL_RIGHT -
  PANEL_X;


// CONTACT / LANGUAGE ALIGNMENT

const CONTACT_RIGHT = 24;
const CONTACT_TOP = 24;
const CONTACT_W = 230;


// =====================================================
// UI SIZE
// =====================================================

const BUTTON_H = 21;

const BUTTON_GAP = 2;

const SECTION_GAP = 18;

const SECTION_TITLE_H = 7;

const TITLE_TO_LINE = 3;

const LINE_TO_CONTENT = 4;


// =====================================================
// FIXED POSITIONS
// =====================================================

const TITLE_Y = 20;
const INTRO_Y = 60;


// COLOR

const COLOR_Y = 100;

const COLOR_LINE_Y =
  COLOR_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const COLOR_CONTENT_Y =
  COLOR_LINE_Y +
  LINE_TO_CONTENT;


// COLOR RHYTHM

const RHYTHM_Y =
  COLOR_CONTENT_Y +
  BUTTON_H * 3 +
  BUTTON_GAP * 2 +
  SECTION_GAP;

const RHYTHM_LINE_Y =
  RHYTHM_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const RHYTHM_CONTENT_Y =
  RHYTHM_LINE_Y +
  LINE_TO_CONTENT;


// TYPE

const TYPE_Y =
  RHYTHM_CONTENT_Y +
  BUTTON_H +
  SECTION_GAP;

const TYPE_LINE_Y =
  TYPE_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const TYPE_CONTENT_Y =
  TYPE_LINE_Y +
  LINE_TO_CONTENT;


// TYPE WEIGHT

const TYPE_SECOND_ROW_Y =
  TYPE_CONTENT_Y +
  BUTTON_H +
  BUTTON_GAP;


// TYPE SIZE

const TYPE_SIZE_ROW_Y =
  TYPE_SECOND_ROW_Y +
  BUTTON_H +
  BUTTON_GAP;


// FONT

const FONT_Y =
  TYPE_SIZE_ROW_Y +
  BUTTON_H +
  SECTION_GAP;

const FONT_LINE_Y =
  FONT_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const FONT_CONTENT_Y =
  FONT_LINE_Y +
  LINE_TO_CONTENT;

const FONT_ROWS = 4;


// SPEED

const SPEED_Y =
  FONT_CONTENT_Y +
  FONT_ROWS * BUTTON_H +
  (FONT_ROWS - 1) * BUTTON_GAP +
  SECTION_GAP;

const SPEED_LINE_Y =
  SPEED_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const SPEED_CONTENT_Y =
  SPEED_LINE_Y +
  LINE_TO_CONTENT;


// OCR

const OCR_BUTTON_H = 36;
const OCR_CONTROL_W = 36;
const OCR_PANEL_GAP = 2;
const OCR_PANEL_H = 110;

const OCR_Y =
  SPEED_CONTENT_Y +
  BUTTON_H * 2 +
  BUTTON_GAP +
  SECTION_GAP;

const OCR_LINE_Y =
  OCR_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const OCR_CONTENT_Y =
  OCR_LINE_Y +
  LINE_TO_CONTENT;

const OCR_PANEL_Y =
  OCR_CONTENT_Y +
  OCR_BUTTON_H +
  OCR_PANEL_GAP;


// VIEW / FULLSCREEN

const VIEW_Y =
  OCR_PANEL_Y +
  OCR_PANEL_H +
  SECTION_GAP;

const VIEW_LINE_Y =
  VIEW_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const VIEW_CONTENT_Y =
  VIEW_LINE_Y +
  LINE_TO_CONTENT;


// =====================================================
// CANVAS
// =====================================================

const CANVAS_PADDING_X = 56;
const CANVAS_PADDING_Y = 56;

const MIN_TEXT_SIZE = 28;

const LINE_HEIGHT_RATIO = 0.95;


// =====================================================
// UI ELEMENTS
// =====================================================

let titleEl;

let sectionLabels = [];

let bgRandomButton;
let txtRandomButton;
let randomAllButton;

let rhythmButtons = {};

let alignButtons = {};
let weightButtons = {};
let sizeButtons = {};

let fontButtons = [];

let speedButtons = {};

let pauseButton;
let scanTextButton;
let ocrPanel;
let ocrReadabilityEl;
let ocrTextEl;
let ocrWorker;
let ocrReady = false;
let ocrRunning = false;
let ocrCurrentLangKey = "eng";

// =====================================================
// ASCII
// =====================================================

const ASCII_SIMPLE = [

  "*", "#", "%", "@",
  "/", "\\",
  "+", "-", "=",
  "~", "^"

];


const ASCII_SYMBOL = [

  "○", "●", "♥",
  "❥", "❦",
  "⣎", "⡇",
  "ꉺ", "ლ",
  "༽", "இ",
  "•", "◞",
  "༎", "ຶ",
  "ৣ", "ৢ",
  "؞", "ؖ"

];


const ASCII_GLITCH = [

  "(̸̢̛̼̞̭͋ͅ)",

  "ʅ͡͡͡͡͡͡͡͡͡͡͡(̸̢̛̼̞̭͋ͅ)",

  "○ ҉⃝ ⃝͢",

  ")̵̳̗̊( ̟̞̝̜̙̘̗̖҉̵̴̨̧̢̡̼̻̺̹̳̲̱̰̯̮̭̬̫̪̩̦̥",

  ")̸͚̰͛̔̾̀̿͒͂:̴͓̞̑̌̂̆̊͋̀:̸͎̟̯̂̓̌ ҉ ͡ ͞ ͞ ͞ ҉",

  " ҉ ͞ ͞ ⃝͞ ͘ ͞ ͡⃝ ⃝҉҈҉҈҉҈҉҈҉"

];


// =====================================================
// STATES
// =====================================================

let charStates = [];

let introCharStates = [];
let introLayoutCache = {
  source: "",
  maxWidth: -1,
  lines: []
};
function loadPixelTimesUI() {

  const style =
    document.createElement(
      "style"
    );

  style.textContent = `

    @font-face {
      font-family: "Pixel Times";
      src: url("Pixel Times.ttf") format("truetype");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "Pixel Times";
      src: url("Pixel Times Bold.ttf") format("truetype");
      font-weight: 700;
      font-style: normal;
    }

  `;

  document.head.appendChild(
    style
  );
}

// =====================================================
// SETUP
// =====================================================
function setup() {

  loadPixelTimesUI();

  createCanvas(
    windowWidth,
    windowHeight
  );


  pixelDensity(2);

  frameRate(30);


  rhythmCurrentBG =
    color(bgColor);

  rhythmCurrentText =
    color(textColor);

  rhythmStartBG =
    color(bgColor);

  rhythmStartText =
    color(textColor);

  rhythmTargetBG =
    color(bgColor);

  rhythmTargetText =
    color(textColor);


  createTextarea();

  createInterface();

  syncIntroStates();

  updateInterface();
  
  updateLanguageButtons();
  
  createDeerGif();

  createContactWindow();
  initOCR();
}

async function ensureTesseractLoaded() {

  if (
    typeof Tesseract !== "undefined"
  ) {
    return;
  }


  await new Promise(
    function (resolve, reject) {

      const existing =
        document.querySelector(
          'script[data-wingdings-ocr="true"]'
        );


      if (
        existing
      ) {

        if (
          typeof Tesseract !==
          "undefined"
        ) {

          resolve();

          return;
        }


        existing.addEventListener(
          "load",
          resolve,
          { once: true }
        );

        existing.addEventListener(
          "error",
          reject,
          { once: true }
        );

        return;
      }


      const script =
        document.createElement(
          "script"
        );


      script.src =
        "https://cdn.jsdelivr.net/npm/tesseract.js@7/dist/tesseract.min.js";

      script.async = true;

      script.dataset.wingdingsOcr =
        "true";


      script.onload =
        resolve;

      script.onerror =
        reject;


      document.head.appendChild(
        script
      );
    }
  );
}


// =====================================================
// OCR LANGUAGE
// typedText 자체를 보고 필요한 OCR 모델만 선택한다.
// =====================================================

function detectOCRLanguages(
  source
) {

  const text =
    String(
      source || ""
    );


  const hasKorean =
    /[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(
      text
    );


  const hasKana =
    /[\u3040-\u30FF]/.test(
      text
    );


  const hasHan =
    /[\u3400-\u4DBF\u4E00-\u9FFF]/.test(
      text
    );


  const hasLatin =
    /[A-Za-z]/.test(
      text
    );


  // 한국어 + 일본어가 동시에 있으면 세 모델을 모두 사용.
  if (
    hasKorean &&
    (
      hasKana ||
      hasHan
    )
  ) {

    return [
      "kor",
      "jpn",
      "eng"
    ];
  }


  // 한글이 있으면 한국어 모델을 우선.
  if (
    hasKorean
  ) {

    return hasLatin
      ? [
          "kor",
          "eng"
        ]
      : [
          "kor"
        ];
  }


  // 히라가나/가타카나 또는 한자가 있으면 일본어 모델을 우선.
  if (
    hasKana ||
    hasHan
  ) {

    return hasLatin
      ? [
          "jpn",
          "eng"
        ]
      : [
          "jpn"
        ];
  }


  return [
    "eng"
  ];
}


function getOCRLanguageKey(
  languages
) {

  return languages.join(
    "+"
  );
}


async function applyOCRParameters() {

  await ocrWorker.setParameters({

    tessedit_pageseg_mode:
      "6",

    preserve_interword_spaces:
      "1"
  });
}


async function ensureOCRLanguage(
  source
) {

  const languages =
    detectOCRLanguages(
      source
    );


  const nextKey =
    getOCRLanguageKey(
      languages
    );


  if (
    nextKey ===
    ocrCurrentLangKey
  ) {

    return languages;
  }


  ocrTextEl.html(
    "LOADING " +
    nextKey.toUpperCase() +
    "..."
  );


  await ocrWorker.reinitialize(
    languages
  );


  await applyOCRParameters();


  ocrCurrentLangKey =
    nextKey;


  return languages;
}


// =====================================================
// OCR INIT
// =====================================================

async function initOCR() {

  try {

    if (
      ocrTextEl
    ) {

      ocrTextEl.html(
        "LOADING OCR..."
      );
    }


    await ensureTesseractLoaded();


    ocrWorker =
      await Tesseract.createWorker(
        "eng"
      );


    ocrCurrentLangKey =
      "eng";


    await applyOCRParameters();


    ocrReady = true;


    if (
      ocrTextEl
    ) {

      ocrTextEl.html(
        "READY TO SCAN"
      );
    }

  } catch (error) {

    console.error(
      "OCR INIT ERROR:",
      error
    );


    ocrReady = false;


    if (
      ocrTextEl
    ) {

      ocrTextEl.html(
        "[OCR LOAD ERROR]"
      );
    }
  }
}


// =====================================================
// READABILITY
// =====================================================

function normalizeOCRText(
  text
) {

  return String(
    text || ""
  )
    .normalize(
      "NFKC"
    )
    .toUpperCase()
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}


function levenshteinDistance(
  a,
  b
) {

  if (
    a === b
  ) {
    return 0;
  }


  if (
    a.length === 0
  ) {
    return b.length;
  }


  if (
    b.length === 0
  ) {
    return a.length;
  }


  let previous =
    new Array(
      b.length + 1
    );

  let current =
    new Array(
      b.length + 1
    );


  for (
    let j = 0;
    j <= b.length;
    j++
  ) {

    previous[j] =
      j;
  }


  for (
    let i = 1;
    i <= a.length;
    i++
  ) {

    current[0] =
      i;


    for (
      let j = 1;
      j <= b.length;
      j++
    ) {

      const cost =
        a[i - 1] ===
        b[j - 1]
          ? 0
          : 1;


      current[j] =
        Math.min(

          previous[j] +
          1,

          current[j - 1] +
          1,

          previous[j - 1] +
          cost
        );
    }


    const swap =
      previous;

    previous =
      current;

    current =
      swap;
  }


  return previous[
    b.length
  ];
}


function calculateReadability(
  original,
  recognized
) {

  const a =
    normalizeOCRText(
      original
    );

  const b =
    normalizeOCRText(
      recognized
    );


  if (
    a.length === 0 ||
    b.length === 0
  ) {
    return 0;
  }


  const distance =
    levenshteinDistance(
      a,
      b
    );


  const maxLength =
    Math.max(
      a.length,
      b.length
    );


  const score =
    1 -
    distance /
    maxLength;


  return Math.max(
    0,
    Math.min(
      100,
      Math.round(
        score *
        100
      )
    )
  );
}


function setOCRReadability(
  value
) {

  if (
    !ocrReadabilityEl
  ) {
    return;
  }


  ocrReadabilityEl
    .elt
    .innerHTML =
      "<span>READABILITY</span>" +
      "<span>" +
      value +
      "%</span>";
}


// =====================================================
// OCR CROP
// 실제 타이포 영역만 잘라낸다.
// =====================================================

function getOCRTextBounds() {

  const size =
    getAdaptiveTextSize();


  textFont(
    currentFont
  );

  applyTypeWeight();

  textSize(
    size
  );


  const contentWidth =
    getContentWidth();


  const contentLeft =
    SIDEBAR_W +
    CANVAS_PADDING_X;


  const contentCenter =
    SIDEBAR_W +
    (
      width -
      SIDEBAR_W
    ) /
    2;


  const lines =
    wrapTextToWidth(
      typedText,
      contentWidth
    );


  const lineHeight =
    size *
    LINE_HEIGHT_RATIO;


  const totalHeight =
    lines.length *
    lineHeight;


  const startY =
    height /
    2 -
    totalHeight /
    2 +
    lineHeight /
    2;


  let minX =
    width;

  let maxX =
    SIDEBAR_W;

  let minY =
    height;

  let maxY =
    0;


  for (
    let row = 0;
    row < lines.length;
    row++
  ) {

    const line =
      lines[row];


    const lineWidth =
      Math.max(
        1,
        textWidth(
          line
        )
      );


    let x;


    if (
      textAlignment ===
      "LEFT"
    ) {

      x =
        contentLeft;

    } else {

      x =
        contentCenter -
        lineWidth /
        2;
    }


    const y =
      startY +
      row *
      lineHeight;


    minX =
      Math.min(
        minX,
        x
      );

    maxX =
      Math.max(
        maxX,
        x +
        lineWidth
      );

    minY =
      Math.min(
        minY,
        y -
        lineHeight *
        0.75
      );

    maxY =
      Math.max(
        maxY,
        y +
        lineHeight *
        0.75
      );
  }


  const padX =
    Math.max(
      28,
      size *
      0.4
    );

  const padY =
    Math.max(
      24,
      size *
      0.35
    );


  minX =
    Math.max(
      SIDEBAR_W +
      2,
      minX -
      padX
    );

  maxX =
    Math.min(
      width -
      2,
      maxX +
      padX
    );

  minY =
    Math.max(
      2,
      minY -
      padY
    );

  maxY =
    Math.min(
      height -
      2,
      maxY +
      padY
    );


  return {

    x:
      minX,

    y:
      minY,

    w:
      Math.max(
        1,
        maxX -
        minX
      ),

    h:
      Math.max(
        1,
        maxY -
        minY
      )
  };
}


// =====================================================
// OCR IMAGE PREPROCESS
// pixelDensity 보정 + 색상 제거 + 흑백 변환
// =====================================================

function buildOCRCanvas() {

  const sourceCanvas =
    document.querySelector(
      "canvas"
    );


  const bounds =
    getOCRTextBounds();


  const scaleX =
    sourceCanvas.width /
    width;

  const scaleY =
    sourceCanvas.height /
    height;


  const sx =
    bounds.x *
    scaleX;

  const sy =
    bounds.y *
    scaleY;

  const sw =
    bounds.w *
    scaleX;

  const sh =
    bounds.h *
    scaleY;


  // CJK 획을 살리기 위해 OCR 입력을 충분히 크게 만든다.
  const targetScale =
    3;


  const target =
    document.createElement(
      "canvas"
    );


  target.width =
    Math.max(
      1,
      Math.round(
        bounds.w *
        targetScale
      )
    );

  target.height =
    Math.max(
      1,
      Math.round(
        bounds.h *
        targetScale
      )
    );


  const ctx =
    target.getContext(
      "2d",
      {
        willReadFrequently:
          true
      }
    );


  ctx.imageSmoothingEnabled =
    true;


  ctx.fillStyle =
    "#FFFFFF";

  ctx.fillRect(
    0,
    0,
    target.width,
    target.height
  );


  ctx.drawImage(
    sourceCanvas,

    sx,
    sy,
    sw,
    sh,

    0,
    0,
    target.width,
    target.height
  );


  // p5 Web Editor의 infinite-loop detector가
  // 대형 pixel for-loop를 오탐하므로 픽셀 순회는 하지 않는다.
  // Canvas filter로 OCR용 고대비 흑백 이미지를 다시 만든다.

  const filtered =
    document.createElement(
      "canvas"
    );


  filtered.width =
    target.width;

  filtered.height =
    target.height;


  const filteredCtx =
    filtered.getContext(
      "2d"
    );


  filteredCtx.fillStyle =
    "#FFFFFF";

  filteredCtx.fillRect(
    0,
    0,
    filtered.width,
    filtered.height
  );


  // 현재 BG/TXT의 밝기를 비교해서
  // 밝은 글자/어두운 배경이면 OCR에 유리하도록 반전.
  const bg =
    color(
      bgColor
    );

  const fg =
    color(
      textColor
    );


  const bgLum =
    0.2126 * red(bg) +
    0.7152 * green(bg) +
    0.0722 * blue(bg);


  const fgLum =
    0.2126 * red(fg) +
    0.7152 * green(fg) +
    0.0722 * blue(fg);


  if (
    fgLum >
    bgLum
  ) {

    filteredCtx.filter =
      "grayscale(1) invert(1) contrast(300%)";

  } else {

    filteredCtx.filter =
      "grayscale(1) contrast(300%)";
  }


  filteredCtx.drawImage(
    target,
    0,
    0
  );


  filteredCtx.filter =
    "none";


  return filtered;
}


// =====================================================
// OCR SCAN
// =====================================================

async function scanTextOCR() {

  if (
    ocrRunning
  ) {
    return;
  }


  if (
    typedText.trim().length ===
    0
  ) {

    setOCRReadability(
      0
    );

    ocrTextEl.html(
      "[NO TEXT]"
    );

    return;
  }


  if (
    !ocrReady ||
    !ocrWorker
  ) {

    ocrTextEl.html(
      "OCR IS LOADING..."
    );

    return;
  }


  ocrRunning =
    true;


  scanTextButton.html(
    "SCANNING..."
  );


  try {

    // typedText에 한글/일본어가 있으면 해당 모델로 자동 전환.
    await ensureOCRLanguage(
      typedText
    );


    ocrTextEl.html(
      "READING..."
    );


    // 현재 프레임이 그려진 뒤 캡처.
    await new Promise(
      function (resolve) {

        requestAnimationFrame(
          resolve
        );
      }
    );


    const ocrCanvas =
      buildOCRCanvas();


    const result =
      await ocrWorker.recognize(
        ocrCanvas
      );


    const machineText =
      String(
        result.data.text ||
        ""
      )
        .trim();


    const readability =
      calculateReadability(
        typedText,
        machineText
      );


    setOCRReadability(
      readability
    );


    ocrTextEl.html(
      machineText ||
      "[UNREADABLE]"
    );


    ocrTextEl
      .elt
      .scrollTop =
        0;

  } catch (error) {

    console.error(
      "OCR ERROR:",
      error
    );


    ocrReadabilityEl
      .elt
      .innerHTML =
        "<span>READABILITY</span>" +
        "<span>--%</span>";


    ocrTextEl.html(
      "[OCR ERROR]"
    );

  } finally {

    scanTextButton.html(
      "SCAN TEXT"
    );


    ocrRunning =
      false;


    restoreTyping();
  }
}

// =====================================================
// TEXTAREA
// =====================================================

function createTextarea() {

  textarea =
    document.createElement(
      "textarea"
    );


  textarea.autocomplete = "off";
  textarea.autocorrect = "off";
  textarea.autocapitalize = "off";
  textarea.spellcheck = false;


  textarea.style.position = "fixed";

  textarea.style.left = "0";
  textarea.style.top = "0";

  textarea.style.width = "100vw";
  textarea.style.height = "100vh";

  textarea.style.margin = "0";
  textarea.style.padding = "0";

  textarea.style.border = "none";
  textarea.style.outline = "none";

  textarea.style.resize = "none";
  textarea.style.overflow = "hidden";

  textarea.style.background = "transparent";

  textarea.style.color = "transparent";
  textarea.style.caretColor = "transparent";

  textarea.style.opacity = "0.001";

  textarea.style.zIndex = "10";


  document.body.appendChild(
    textarea
  );


  textarea.addEventListener(
    "input",

    function () {

      typedText =
        textarea.value;

      syncCharStates();
    }
  );


  textarea.addEventListener(
    "keydown",

    function (e) {

      if (
        e.key === "Escape"
      ) {

        textarea.value = "";

        typedText = "";

        charStates = [];

        e.preventDefault();
      }
    }
  );


  textarea.focus();
}


// =====================================================
// INTERFACE
// =====================================================

function createInterface() {

// =====================================================
// TITLE / HOME
// =====================================================

titleEl =
  createDiv(
    "F҈͉͙͆͋̋͆̿Ŭ̵̱̦̙̙͉͗̌͊T̷̙̗͇̔̋͂̀̓ͅỤ̴͇̰̇̇̈́R̶̲̭̋͆E̵̠̮̠͌̉̓̏ W̴̬̲͑̌̒I̴͉͙͐̇͗N̸̳̱̥͙͇͊̏́̎G̷̖͕̟̰̓̂͐̍̑D̶͙̤̏̀Ī̶̮͕͈̲̊́N̴̝̘͎͍̰̽̊̾G̶̰̤̰̈́̏͗͒S̴̠̪͔̉͌͆͐.҉̦͇́̒͒̋E̷͚͎͔̐̆͂X̷̙̩̯̮̄̀E̵͍̤̦͙̾̈"
  );


titleEl.position(
  PANEL_X,
  TITLE_Y
);


titleEl.style(
  "position",
  "fixed"
);

titleEl.style(
  "width",
  PANEL_WIDTH + "px"
);

titleEl.style(
  "font-family",
  UI_FONT
);

titleEl.style(
  "font-size",
  "18px"
);

titleEl.style(
  "font-weight",
  "800"
);

titleEl.style(
  "line-height",
  "0.9"
);

titleEl.style(
  "letter-spacing",
  "-0.75px"
);

titleEl.style(
  "z-index",
  "100"
);

titleEl.style(
  "cursor",
  "pointer"
);

titleEl.style(
  "user-select",
  "none"
);


titleEl.mousePressed(
  function () {

    introOpen =
      false;


    introduceLink.html(
      "INTRODUCE →"
    );

    
    updateLanguageButtons();



    if (
      deerGif
    ) {
      deerGif.hide();
    }


    if (
      contactWindow
    ) {
      contactWindow.hide();
    }


    restoreTyping();
  }
);

  // =====================================================
  // INTRODUCE
  // =====================================================

  introduceLink =
    createDiv(
      "INTRODUCE →"
    );


  introduceLink.position(
    PANEL_X,
    INTRO_Y
  );


  introduceLink.style(
    "position",
    "fixed"
  );

  applyBitmapUI(
  introduceLink
);

  introduceLink.style(
    "font-size",
    "9px"
  );

  introduceLink.style(
    "font-weight",
    "700"
  );

  introduceLink.style(
    "letter-spacing",
    "0.2px"
  );

  introduceLink.style(
    "cursor",
    "pointer"
  );

  introduceLink.style(
    "z-index",
    "100"
  );

  introduceLink.style(
    "user-select",
    "none"
  );


  introduceLink.mousePressed(
  function () {

    introOpen =
      !introOpen;

    introduceLink.html(
      introOpen
        ? "INTRODUCE ×"
        : "INTRODUCE →"
      
    );


    
    updateLanguageButtons();

if (
      introOpen
    ) {

      spawnDeer();

      if (
        deerGif
      ) {
        deerGif.show();
      }

      if (
        contactWindow
      ) {
        contactWindow.show();
      }

    } else {

      if (
        deerGif
      ) {
        deerGif.hide();
      }

      if (
        contactWindow
      ) {
        contactWindow.hide();
      }
    }


    restoreTyping();
  }
);

  // =====================================================
// INTRO LANGUAGE
// =====================================================

engButton =
  createButton(
    "ENG"
  );

korButton =
  createButton(
    "KOR"
  );


let langW =
  42;

let langH =
  21;


styleButton(
  engButton,
  langW,
  langH
);

styleButton(
  korButton,
  langW,
  langH
);


// CONTACT WINDOW의 왼쪽 모서리에 정확히 맞춤

korButton.style(
  "top",
  CONTACT_TOP + "px"
);

korButton.style(
  "right",
  (CONTACT_RIGHT + CONTACT_W + 6) + "px"
);

korButton.style(
  "left",
  "auto"
);


engButton.style(
  "top",
  CONTACT_TOP + "px"
);

engButton.style(
  "right",
  (
    CONTACT_RIGHT +
    CONTACT_W + 
    langW +
    BUTTON_GAP + 10
  ) + "px"
);

engButton.style(
  "left",
  "auto"
);


engButton.mousePressed(
  function () {

    introLanguage =
      "ENG";

    syncIntroStates();

    updateLanguageButtons();

    restoreTyping();
  }
);


korButton.mousePressed(
  function () {

    introLanguage =
      "KOR";

    syncIntroStates();

    updateLanguageButtons();

    restoreTyping();
  }
);

  
// =====================================================
// CONTACT WINDOW
// =====================================================

function createContactWindow() {

  contactWindow =
    createDiv("");


  contactWindow.style(
    "position",
    "fixed"
  );

  contactWindow.style(
    "right",
    CONTACT_RIGHT + "px"
  );

  contactWindow.style(
    "top",
    CONTACT_TOP + "px"
  );

  contactWindow.style(
    "width",
    CONTACT_W + "px"
  );

  contactWindow.style(
    "padding",
    "4px"
  );

  contactWindow.style(
    "background",
    "#BEBEBE"
  );

  contactWindow.style(
    "border",
    "2px outset #CCCCCC"
  );

  contactWindow.style(
    "box-sizing",
    "border-box"
  );

  contactWindow.style(
    "font-family",
    UI_FONT
  );

  contactWindow.style(
    "font-size",
    "9px"
  );

  contactWindow.style(
    "z-index",
    "300"
  );


  // ===================================================
  // TITLE BAR
  // ===================================================

  let bar =
    createDiv(
      "KYEONGMIN YI / LINKS"
    );

  bar.parent(
    contactWindow
  );

  bar.style(
    "height",
    "21px"
  );

  bar.style(
    "padding",
    "0 5px"
  );

  bar.style(
    "display",
    "flex"
  );

  bar.style(
    "align-items",
    "center"
  );

  bar.style(
    "box-sizing",
    "border-box"
  );

  bar.style(
    "background",
    "#FFFFFF"
  );

  bar.style(
    "border",
    "2px inset #CCCCCC"
  );

  bar.style(
    "color",
    "#111111"
  );

  bar.style(
    "font-weight",
    "700"
  );


  // ===================================================
  // INSTAGRAM
  // ===================================================

  let instagram =
    createA(
      "https://instagram.com/yikynmin",
      "INSTAGRAM ↗",
      "_blank"
    );

  instagram.parent(
    contactWindow
  );

  styleContactLink(
    instagram
  );


  // ===================================================
  // WEBSITE
  // ===================================================

  let website =
    createA(
"https://blog.naver.com/clearblue0613",
      "NAVER BLOG ↗",
      "_blank"
    );

  website.parent(
    contactWindow
  );

  styleContactLink(
    website
  );


  // ===================================================
  // EMAIL
  // ===================================================

  let email =
    createA(
"mailto:yikyeongmin@gmail.com",
      "EMAIL ↗"
    );

  email.parent(
    contactWindow
  );

  styleContactLink(
    email
  );


  contactWindow.hide();
}

// =====================================================
// CONTACT LINK STYLE
// =====================================================

function styleContactLink(
  link
) {

  link.style(
    "display",
    "flex"
  );

  link.style(
    "align-items",
    "center"
  );

  link.style(
    "height",
    "21px"
  );

  link.style(
    "margin-top",
    "3px"
  );

  link.style(
    "padding",
    "0 5px"
  );

  link.style(
    "box-sizing",
    "border-box"
  );

  link.style(
    "background",
    "#BEBEBE"
  );

  link.style(
    "border",
    "2px outset #CCCCCC"
  );

  link.style(
    "color",
    "#111111"
  );

  applyBitmapUI(
  link
);

  link.style(
    "font-size",
    "8px"
  );

  link.style(
    "font-weight",
    "700"
  );

  link.style(
    "text-decoration",
    "none"
  );

  link.style(
    "cursor",
    "pointer"
  );


  // 누르는 순간 현재 버튼들과 같은 inset 효과

  link.elt.addEventListener(
    "mousedown",
    function () {

      link.style(
        "border",
        "2px inset #CCCCCC"
      );

      link.style(
        "background",
        "#FFFFFF"
      );
    }
  );


  link.elt.addEventListener(
    "mouseup",
    function () {

      link.style(
        "border",
        "2px outset #CCCCCC"
      );

      link.style(
        "background",
        "#BEBEBE"
      );
    }
  );


  link.elt.addEventListener(
    "mouseleave",
    function () {

      link.style(
        "border",
        "2px outset #CCCCCC"
      );

      link.style(
        "background",
        "#BEBEBE"
      );
    }
  );
}

  // =====================================================
  // COLOR
  // =====================================================


  // =====================================================
  // COLOR
  // =====================================================

  createSectionLabel(
    "COLOR",
    COLOR_Y
  );


  bgRandomButton =
    createButton(
      "BG"
    );


  createWideButton(
    bgRandomButton,
    COLOR_CONTENT_Y
  );
styleMomentaryButton(
  bgRandomButton
);

addMomentaryPressStyle(
  bgRandomButton
);

  bgRandomButton.mousePressed(
    function () {

      bgColor =
        randomHexColor();

      syncRhythmBase();

      updateInterface();

      restoreTyping();
    }
  );


  txtRandomButton =
    createButton(
      "TXT"
    );


  createWideButton(
    txtRandomButton,
    COLOR_CONTENT_Y +
    BUTTON_H +
    BUTTON_GAP
  );

styleMomentaryButton(
  txtRandomButton
);

addMomentaryPressStyle(
  txtRandomButton
);
  txtRandomButton.mousePressed(
    function () {

      textColor =
        randomContrastingColor(
          bgColor
        );

      syncRhythmBase();

      updateInterface();

      restoreTyping();
    }
  );


  randomAllButton =
    createButton(
      "ALL"
    );


  createWideButton(
    randomAllButton,
    COLOR_CONTENT_Y +
    (
      BUTTON_H +
      BUTTON_GAP
    ) * 2
  );


styleMomentaryButton(
  randomAllButton
);

addMomentaryPressStyle(
  randomAllButton
);
  randomAllButton.mousePressed(
    function () {

      randomizeBothColors();

      updateInterface();

      restoreTyping();
    }
  );


  // =====================================================
  // COLOR RHYTHM
  // =====================================================

  createSectionLabel(
    "COLOR RHYTHM",
    RHYTHM_Y
  );

  createRhythmButtons();

  // =====================================================
  // TYPE
  // =====================================================

  createSectionLabel(
    "TYPE",
    TYPE_Y
  );

  createAlignButtons();

  createWeightButtons();

  createSizeButtons();


  // =====================================================
  // FONT
  // =====================================================

  createSectionLabel(
    "FONT",
    FONT_Y
  );

  createFontButtons();


  // =====================================================
  // SPEED
  // =====================================================

  createSectionLabel(
    "SPEED",
    SPEED_Y
  );

  createSpeedButtons();


  // =====================================================
  // OCR
  // =====================================================

  createSectionLabel(
    "OCR",
    OCR_Y
  );


  const scanW =
    PANEL_WIDTH -
    OCR_CONTROL_W -
    BUTTON_GAP;


  // LEFT : PLAY / PAUSE

  pauseButton =
    createButton(
      ""
    );

  pauseButton.position(
    PANEL_X,
    OCR_CONTENT_Y
  );

  styleButton(
    pauseButton,
    OCR_CONTROL_W,
    OCR_BUTTON_H
  );

  setTransportIcon(
    pauseButton,
    glitchPaused
  );

  pauseButton.mousePressed(
    function () {

      glitchPaused =
        !glitchPaused;

      setTransportIcon(
        pauseButton,
        glitchPaused
      );

      updateInterface();

      restoreTyping();
    }
  );


  // RIGHT : SCAN TEXT

  scanTextButton =
    createButton(
      "SCAN TEXT"
    );

  scanTextButton.position(
    PANEL_X +
    OCR_CONTROL_W +
    BUTTON_GAP,
    OCR_CONTENT_Y
  );

  styleButton(
    scanTextButton,
    scanW,
    OCR_BUTTON_H
  );

  styleMomentaryButton(
    scanTextButton
  );

  addMomentaryPressStyle(
    scanTextButton
  );

  scanTextButton.mousePressed(
  function () {

    scanTextOCR();

  }
);
createOCRPanel();

  // =====================================================
  // VIEW
  // =====================================================

  createSectionLabel(
    "VIEW",
    VIEW_Y
  );


  fullscreenButton =
    createButton(
      "FULLSCREEN"
    );


  createWideButton(
    fullscreenButton,
    VIEW_CONTENT_Y
  );


  styleMomentaryButton(
    fullscreenButton
  );

  addMomentaryPressStyle(
    fullscreenButton
  );


  fullscreenButton.mousePressed(
    function () {

      fullscreen(
        !fullscreen()
      );

      restoreTyping();
    }
  );
}


// =====================================================
// INTRO LANGUAGE BUTTON STATE
// =====================================================

function updateLanguageButtons() {

  if (
    !engButton ||
    !korButton
  ) {
    return;
  }


  styleButtonState(
    engButton,
    introLanguage === "ENG"
  );

  styleButtonState(
    korButton,
    introLanguage === "KOR"
  );


  if (
    introOpen
  ) {

    engButton.show();
    korButton.show();

  } else {

    engButton.hide();
    korButton.hide();
  }
}


// =====================================================
// SECTION LABEL
// =====================================================

function createSectionLabel(
  label,
  y
) {

  let el =
    createDiv(
      label
    );


  sectionLabels.push(
    el
  );


  el.position(
    PANEL_X,
    y
  );


  el.style(
    "position",
    "fixed"
  );

  applyBitmapUI(
  el
);

  el.style(
    "font-size",
    "9px"
  );

  el.style(
    "font-weight",
    "700"
  );

  el.style(
    "letter-spacing",
    "0.5px"
  );

  el.style(
    "z-index",
    "100"
  );

  el.style(
    "pointer-events",
    "none"
  );


  return el;
}


// =====================================================
// BUTTON BASIC STYLE
// =====================================================

function styleButton(
  button,
  w,
  h
) {
  
  button.style(
    "position",
    "fixed"
  );

  button.style(
    "width",
    w + "px"
  );

  button.style(
    "height",
    h + "px"
  );

  button.style(
    "padding",
    "0 0px"
  );
  
button.style(
  "padding-top",
  "2px"
);
  button.style(
    "margin",
    "0"
  );

  button.style(
    "border-radius",
    "0"
  );

  applyBitmapUI(
  button
);

  button.style(
    "font-size",
    "8px"
  );

  button.style(
    "font-weight",
    "700"
  );

  button.style(
    "cursor",
    "pointer"
  );

  button.style(
    "z-index",
    "100"
  );
  
}


// =====================================================
// TRANSPORT ICON
// =====================================================

function setTransportIcon(
  button,
  paused
) {

  if (
    !button
  ) {
    return;
  }


  if (
    paused
  ) {

    // stopped → show PLAY triangle

    button.elt.innerHTML =
      '<span style="' +
      'display:block;' +
      'width:0;' +
      'height:0;' +
      'border-top:6px solid transparent;' +
      'border-bottom:6px solid transparent;' +
      'border-left:10px solid #111111;' +
      'margin-left:2px;' +
      '"></span>';

  } else {

    // running → show PAUSE bars

    button.elt.innerHTML =
      '<span style="' +
      'display:flex;' +
      'gap:4px;' +
      'align-items:center;' +
      'justify-content:center;' +
      '">' +
      '<span style="' +
      'display:block;' +
      'width:4px;' +
      'height:13px;' +
      'background:#111111;' +
      '"></span>' +
      '<span style="' +
      'display:block;' +
      'width:4px;' +
      'height:13px;' +
      'background:#111111;' +
      '"></span>' +
      '</span>';
  }


  button.style(
    "display",
    "flex"
  );

  button.style(
    "align-items",
    "center"
  );

  button.style(
    "justify-content",
    "center"
  );
}


// =====================================================
// OCR RESULT PANEL
// =====================================================

function createOCRPanel() {

  ocrPanel =
    createDiv(
      ""
    );

  ocrPanel.position(
    PANEL_X,
    OCR_PANEL_Y
  );

  ocrPanel.style(
    "position",
    "fixed"
  );

  ocrPanel.style(
    "width",
    PANEL_WIDTH + "px"
  );

  ocrPanel.style(
    "height",
    OCR_PANEL_H + "px"
  );

  ocrPanel.style(
    "box-sizing",
    "border-box"
  );

  ocrPanel.style(
    "padding",
    "4px"
  );

  ocrPanel.style(
    "background",
    "#BEBEBE"
  );

  ocrPanel.style(
    "border",
    "3px outset #CCCCCC"
  );

  ocrPanel.style(
    "z-index",
    "100"
  );


  // READABILITY BAR

  ocrReadabilityEl =
    createDiv(
      "READABILITY"
    );

  ocrReadabilityEl.parent(
    ocrPanel
  );

  ocrReadabilityEl.style(
    "height",
    "24px"
  );

  ocrReadabilityEl.style(
    "box-sizing",
    "border-box"
  );

  ocrReadabilityEl.style(
    "padding",
    "2px 5px 0 5px"
  );

  ocrReadabilityEl.style(
    "display",
    "flex"
  );

  ocrReadabilityEl.style(
    "align-items",
    "center"
  );

  ocrReadabilityEl.style(
    "justify-content",
    "space-between"
  );

  ocrReadabilityEl.style(
    "background",
    "#FFFFFF"
  );

  ocrReadabilityEl.style(
    "border",
    "2px inset #CCCCCC"
  );

  ocrReadabilityEl.style(
    "color",
    "#111111"
  );

  ocrReadabilityEl.style(
    "font-family",
    UI_FONT
  );

  ocrReadabilityEl.style(
    "font-size",
    "8px"
  );

  ocrReadabilityEl.style(
    "font-weight",
    "700"
  );

  ocrReadabilityEl.elt.innerHTML =
    '<span>READABILITY</span><span>--%</span>';


  // MACHINE READ AREA

  ocrTextEl =
    createDiv(
      "NO SCAN YET"
    );

  ocrTextEl.parent(
    ocrPanel
  );

  ocrTextEl.style(
    "height",
    "74px"
  );

  ocrTextEl.style(
    "margin-top",
    "3px"
  );

  ocrTextEl.style(
    "box-sizing",
    "border-box"
  );

  ocrTextEl.style(
    "padding",
    "6px 6px"
  );

  ocrTextEl.style(
    "background",
    "#FFFFFF"
  );

  ocrTextEl.style(
    "border",
    "2px inset #CCCCCC"
  );

  ocrTextEl.style(
    "color",
    "#111111"
  );

  ocrTextEl.style(
    "font-family",
    UI_FONT
  );

  ocrTextEl.style(
    "font-size",
    "8px"
  );

  ocrTextEl.style(
    "font-weight",
    "700"
  );

  ocrTextEl.style(
    "line-height",
    "1.25"
  );

  ocrTextEl.style(
    "white-space",
    "pre-wrap"
  );

  ocrTextEl.style(
    "word-break",
    "break-word"
  );

  ocrTextEl.style(
    "overflow-y",
    "auto"
  );

  ocrTextEl.style(
    "overflow-x",
    "hidden"
  );
}


// =====================================================
// WIDE BUTTON
// =====================================================

function createWideButton(
  button,
  y
) {

  button.position(
    PANEL_X,
    y
  );


  styleButton(
    button,
    PANEL_WIDTH,
    BUTTON_H
  );
}


// =====================================================
// RHYTHM BUTTONS
// =====================================================

function createRhythmButtons() {

  let labels = [
    "STILL",
    "CLASSIC",
    "WALTZ",
    "DISCO"
  ];


  let w =
    (
      PANEL_WIDTH -
      BUTTON_GAP * 3
    ) / 4;


  for (
    let i = 0;
    i < labels.length;
    i++
  ) {

    let name =
      labels[i];


    let button =
      createButton(
        name
      );


    button.position(
      PANEL_X +
      i *
      (
        w +
        BUTTON_GAP
      ),
      RHYTHM_CONTENT_Y
    );


    styleButton(
      button,
      w,
      BUTTON_H
    );


    rhythmButtons[
      name
    ] = button;


    button.mousePressed(
      function () {

        setColorRhythm(
          name
        );

        updateInterface();

        restoreTyping();
      }
    );
  }
}


// =====================================================
// ALIGN BUTTONS
// =====================================================

function createAlignButtons() {

  let w =
    (
      PANEL_WIDTH -
      BUTTON_GAP
    ) / 2;


  let leftButton =
    createButton(
      "LEFT"
    );


  leftButton.position(
    PANEL_X,
    TYPE_CONTENT_Y
  );


  styleButton(
    leftButton,
    w,
    BUTTON_H
  );


  alignButtons.LEFT =
    leftButton;


  leftButton.mousePressed(
    function () {

      textAlignment =
        "LEFT";

      updateInterface();

      restoreTyping();
    }
  );


  let centerButton =
    createButton(
      "CENTER"
    );


  centerButton.position(
    PANEL_X +
    w +
    BUTTON_GAP,
    TYPE_CONTENT_Y
  );


  styleButton(
    centerButton,
    w,
    BUTTON_H
  );


  alignButtons.CENTER =
    centerButton;


  centerButton.mousePressed(
    function () {

      textAlignment =
        "CENTER";

      updateInterface();

      restoreTyping();
    }
  );
}


// =====================================================
// WEIGHT BUTTONS
// =====================================================

function createWeightButtons() {

  let w =
    (
      PANEL_WIDTH -
      BUTTON_GAP
    ) / 2;


  let lightButton =
    createButton(
      "LIGHT"
    );


  lightButton.position(
    PANEL_X,
    TYPE_SECOND_ROW_Y
  );


  styleButton(
    lightButton,
    w,
    BUTTON_H
  );


  weightButtons.LIGHT =
    lightButton;


  lightButton.mousePressed(
    function () {

      typeWeight =
        "LIGHT";

      updateInterface();

      restoreTyping();
    }
  );


  let boldButton =
    createButton(
      "BOLD"
    );


  boldButton.position(
    PANEL_X +
    w +
    BUTTON_GAP,
    TYPE_SECOND_ROW_Y
  );


  styleButton(
    boldButton,
    w,
    BUTTON_H
  );


  weightButtons.BOLD =
    boldButton;


  boldButton.mousePressed(
    function () {

      typeWeight =
        "BOLD";

      updateInterface();

      restoreTyping();
    }
  );
}


// =====================================================
// SIZE BUTTONS
// =====================================================

function createSizeButtons() {

  let labels = [
    "S",
    "M",
    "L",
    "XL"
  ];


  let w =
    (
      PANEL_WIDTH -
      BUTTON_GAP * 3
    ) / 4;


  for (
    let i = 0;
    i < labels.length;
    i++
  ) {

    let name =
      labels[i];


    let button =
      createButton(
        name
      );


    button.position(
      PANEL_X +
      i *
      (
        w +
        BUTTON_GAP
      ),
      TYPE_SIZE_ROW_Y
    );


    styleButton(
      button,
      w,
      BUTTON_H
    );


    sizeButtons[
      name
    ] = button;


    button.mousePressed(
      function () {

        typeSizeName =
          name;

        updateInterface();

        restoreTyping();
      }
    );
  }
}


// =====================================================
// FONT BUTTONS
// =====================================================

function createFontButtons() {

  fontButtons = [];


  let columnWidth =
    (
      PANEL_WIDTH -
      BUTTON_GAP
    ) / 2;


  for (
    let i = 0;
    i < FONT_OPTIONS.length;
    i++
  ) {

    let option =
      FONT_OPTIONS[i];


    let col =
      i % 2;


    let row =
      floor(
        i / 2
      );


    let x =
      PANEL_X +
      col *
      (
        columnWidth +
        BUTTON_GAP
      );


    let y =
      FONT_CONTENT_Y +
      row *
      (
        BUTTON_H +
        BUTTON_GAP
      );


    let button =
      createButton(
        option.label
      );


    button.position(
      x,
      y
    );


    styleButton(
      button,
      columnWidth,
      BUTTON_H
    );


    button.mousePressed(
      function () {

        currentFont =
          option.font;

        updateInterface();

        restoreTyping();
      }
    );


    fontButtons.push({

      button:
        button,

      font:
        option.font

    });
  }
}


// =====================================================
// SPEED BUTTONS
// =====================================================

function createSpeedButtons() {

  let w =
    (
      PANEL_WIDTH -
      BUTTON_GAP
    ) / 2;


  for (
    let i = 0;
    i < SPEED_OPTIONS.length;
    i++
  ) {

    let option =
      SPEED_OPTIONS[i];


    let col =
      i % 2;


    let row =
      floor(
        i / 2
      );


    let x =
      PANEL_X +
      col *
      (
        w +
        BUTTON_GAP
      );


    let y =
      SPEED_CONTENT_Y +
      row *
      (
        BUTTON_H +
        BUTTON_GAP
      );


    let button =
      createButton(
        option.label
      );


    button.position(
      x,
      y
    );


    styleButton(
      button,
      w,
      BUTTON_H
    );


    speedButtons[
      option.label
    ] = button;


    button.mousePressed(
      function () {

        glitchSpeedName =
          option.label;

        glitchSpeed =
          option.value;

        updateInterface();

        restoreTyping();
      }
    );
  }
}


// =====================================================
// RESTORE TYPING
// =====================================================

function restoreTyping() {

  setTimeout(
    function () {

      textarea.focus();

    },
    50
  );
}

// =====================================================
// DEER GIF
// =====================================================

function createDeerGif() {

  deerGif =
    createImg(
      "deer.gif",
      "deer gif"
    );

  deerGif.style(
    "position",
    "fixed"
  );

  deerGif.style(
    "width",
    "120px"
  );

  deerGif.style(
    "height",
    "auto"
  );

  deerGif.style(
    "z-index",
    "90"
  );
  deerGif.mousePressed(
  function () {

    spawnDeer();
  }
);

  deerGif.style(
  "pointer-events",
  "auto"
);

deerGif.style(
  "cursor",
  "pointer"
);

  deerGif.hide();
}

// =====================================================
// RANDOM DEER SPAWN
// =====================================================

function spawnDeer() {

  if (!deerGif) {
    return;
  }


  let deerSize =
    constrain(
      (width - SIDEBAR_W) * 0.2,
      120,
      320
    );


  let minX =
    SIDEBAR_W + 30;

  let maxX =
    width -
    deerSize -
    30;


  let minY =
    30;

  let maxY =
    height -
    deerSize -
    180;


  deerX =
    random(
      minX,
      max(
        minX,
        maxX
      )
    );


  deerY =
    random(
      minY,
      max(
        minY,
        maxY
      )
    );


  deerGif.style(
    "width",
    deerSize + "px"
  );


  deerGif.position(
    deerX,
    deerY
  );
}
// =====================================================
// CONTACT WINDOW
// =====================================================

function createContactWindow() {

  contactWindow =
    createDiv("");


  contactWindow.style(
    "position",
    "fixed"
  );

  contactWindow.style(
    "right",
    CONTACT_RIGHT + "px"
  );

  contactWindow.style(
    "top",
    CONTACT_TOP + "px"
  );

  contactWindow.style(
    "width",
    CONTACT_W + "px"
  );

  contactWindow.style(
    "padding",
    "4px"
  );

  contactWindow.style(
    "background",
    "#BEBEBE"
  );

  contactWindow.style(
    "border",
    "2px outset #CCCCCC"
  );

  contactWindow.style(
    "box-sizing",
    "border-box"
  );

  contactWindow.style(
    "font-family",
    UI_FONT
  );

  contactWindow.style(
    "font-size",
    "9px"
  );

  contactWindow.style(
    "z-index",
    "300"
  );


  // TITLE BAR

  let bar =
    createDiv(
      "KYEONGMIN YI / LINKS"
    );

  bar.parent(
    contactWindow
  );

  bar.style(
    "height",
    "21px"
  );

  bar.style(
    "padding",
    "0 5px"
  );

  bar.style(
    "display",
    "flex"
  );

  bar.style(
    "align-items",
    "center"
  );

  bar.style(
    "box-sizing",
    "border-box"
  );

  bar.style(
    "background",
    "#FFFFFF"
  );

  bar.style(
    "border",
    "2px inset #CCCCCC"
  );

  bar.style(
    "color",
    "#111111"
  );

  bar.style(
    "font-weight",
    "700"
  );


  // INSTAGRAM

  let instagram =
    createA(
      "https://instagram.com/yikymin",
      "INSTAGRAM ↗",
      "_blank"
    );

  instagram.parent(
    contactWindow
  );

  styleContactLink(
    instagram
  );


  // WEBSITE

  let website =
    createA(
      "https://blog.naver.com/clearblue0613",
      "NAVER BLOG ↗",
      "_blank"
    );

  website.parent(
    contactWindow
  );

  styleContactLink(
    website
  );


  // EMAIL

  let email =
    createA(
      "mailto:yikynmin@gmail.com",
      "EMAIL ↗"
    );

  email.parent(
    contactWindow
  );

  styleContactLink(
    email
  );


  contactWindow.hide();
}


// =====================================================
// CONTACT LINK STYLE
// =====================================================

function styleContactLink(
  link
) {

  link.style(
    "display",
    "flex"
  );

  link.style(
    "align-items",
    "center"
  );

  link.style(
    "height",
    "21px"
  );

  link.style(
    "margin-top",
    "3px"
  );

  link.style(
    "padding",
    "0 5px"
  );

  link.style(
    "box-sizing",
    "border-box"
  );

  link.style(
    "background",
    "#BEBEBE"
  );

  link.style(
    "border",
    "2px outset #CCCCCC"
  );

  link.style(
    "color",
    "#111111"
  );

  link.style(
    "font-family",
    UI_FONT
  );

  link.style(
    "font-size",
    "8px"
  );

  link.style(
    "font-weight",
    "700"
  );

  link.style(
    "text-decoration",
    "none"
  );

  link.style(
    "cursor",
    "pointer"
  );


  link.elt.addEventListener(
    "mousedown",
    function () {

      link.style(
        "border",
        "2px inset #CCCCCC"
      );

      link.style(
        "background",
        "#FFFFFF"
      );
    }
  );


  link.elt.addEventListener(
    "mouseup",
    function () {

      link.style(
        "border",
        "2px outset #CCCCCC"
      );

      link.style(
        "background",
        "#BEBEBE"
      );
    }
  );


  link.elt.addEventListener(
    "mouseleave",
    function () {

      link.style(
        "border",
        "2px outset #CCCCCC"
      );

      link.style(
        "background",
        "#BEBEBE"
      );
    }
  );
}

// =====================================================
// BUTTON STATE
// 모든 버튼 = SYSTEM UI
// =====================================================

function styleButtonState(
  button,
  selected
) {

  if (
    !button
  ) {

    return;
  }


  button.style(
    "border",
    selected
      ? "2px inset #CCCCCC"
      : "2px outset #CCCCCC"
  );


  button.style(
    "background",
    selected
      ? "#FFFFFF"
      : "#BEBEBE"
  );


  button.style(
    "color",
    "#111111"
  );


  button.style(
    "font-weight",
    "700"
  );
}

// =====================================================
// MOMENTARY BUTTON DEFAULT
// =====================================================

function styleMomentaryButton(
  button
) {

  button.style(
    "border",
    "2px outset #CCCCCC"
  );

  button.style(
    "background",
    "#BEBEBE"
  );

  button.style(
    "color",
    "#111111"
  );
}


// =====================================================
// MOMENTARY PRESS
// =====================================================

function addMomentaryPressStyle(
  button
) {

  button.elt.addEventListener(
    "mousedown",
    function () {

      button.style(
        "border",
        "2px inset #CCCCCC"
      );

      button.style(
        "background",
        "#FFFFFF"
      );

      button.style(
        "color",
        "#111111"
      );
    }
  );


  button.elt.addEventListener(
    "mouseup",
    function () {

      button.style(
        "border",
        "2px outset #CCCCCC"
      );

      button.style(
        "background",
        "#BEBEBE"
      );

      button.style(
        "color",
        "#111111"
      );
    }
  );


  button.elt.addEventListener(
    "mouseleave",
    function () {

      button.style(
        "border",
        "2px outset #CCCCCC"
      );

      button.style(
        "background",
        "#BEBEBE"
      );

      button.style(
        "color",
        "#111111"
      );
    }
  );
}

// =====================================================
// SIZE BUTTON STATE
// =====================================================

function styleSizeButtonState(
  button,
  selected
) {

  if (
    !button
  ) {

    return;
  }


  button.style(
    "border",
    selected
      ? "2px inset #CCCCCC"
      : "2px outset #CCCCCC"
  );


  button.style(
    "background",
    selected
      ? "#FFFFFF"
      : "#BEBEBE"
  );


  button.style(
    "color",
    "#111111"
  );


  button.style(
    "font-weight",
    "700"
  );
}

// =====================================================
// UPDATE INTERFACE
// =====================================================

function updateInterface() {

  // TITLE

  if (
    titleEl
  ) {

    titleEl.style(
      "color",
      textColor
    );
  }


  // INTRODUCE

  if (
    introduceLink
  ) {

    introduceLink.style(
      "color",
      textColor
    );
  }

  // SECTION LABELS


  // SECTION LABELS

  for (
    let label
    of sectionLabels
  ) {

    label.style(
      "color",
      textColor
    );
  }

  // RHYTHM

  for (
    let key
    in rhythmButtons
  ) {

    styleButtonState(
      rhythmButtons[key],
      colorRhythm === key
    );
  }


  // ALIGN

  for (
    let key
    in alignButtons
  ) {

    styleButtonState(
      alignButtons[key],
      textAlignment === key
    );
  }


  // WEIGHT

  for (
    let key
    in weightButtons
  ) {

    styleButtonState(
      weightButtons[key],
      typeWeight === key
    );
  }


  // SIZE

  for (
    let key
    in sizeButtons
  ) {

    styleButtonState(
  sizeButtons[key],
  typeSizeName === key
);
  }


  // FONT

  for (
    let item
    of fontButtons
  ) {

    styleButtonState(
      item.button,
      currentFont === item.font
    );
  }


  // SPEED

  for (
    let key
    in speedButtons
  ) {

    styleButtonState(
      speedButtons[key],
      glitchSpeedName === key
    );
  }


  // PAUSE

  styleButtonState(
    pauseButton,
    glitchPaused
  );
}


// =====================================================
// RANDOM COLOR
// =====================================================

function randomHexColor() {

  let value =
    floor(
      random(
        0x000000,
        0xFFFFFF
      )
    );


  return (
    "#" +
    value
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}


// =====================================================
// COLOR DISTANCE
// =====================================================

function colorDistance(
  a,
  b
) {

  let ca =
    color(a);

  let cb =
    color(b);


  let dr =
    red(ca) -
    red(cb);

  let dg =
    green(ca) -
    green(cb);

  let db =
    blue(ca) -
    blue(cb);


  return sqrt(
    dr * dr +
    dg * dg +
    db * db
  );
}


// =====================================================
// BRIGHTNESS
// =====================================================

function perceivedBrightness(
  hex
) {

  let c =
    color(hex);


  return (

    red(c) *
    0.299 +

    green(c) *
    0.587 +

    blue(c) *
    0.114

  );
}


// =====================================================
// CONTRAST RANDOM
// =====================================================

function randomContrastingColor(
  base
) {

  let result =
    randomHexColor();


  let tries = 0;


  while (

    (
      colorDistance(
        base,
        result
      ) < 170

      ||

      abs(
        perceivedBrightness(
          base
        ) -
        perceivedBrightness(
          result
        )
      ) < 65
    )

    &&

    tries < 100

  ) {

    result =
      randomHexColor();

    tries++;
  }


  return result;
}


// =====================================================
// RANDOM ALL
// =====================================================

function randomizeBothColors() {

  bgColor =
    randomHexColor();


  textColor =
    randomContrastingColor(
      bgColor
    );


  syncRhythmBase();
}


// =====================================================
// SET RHYTHM
// =====================================================

function setColorRhythm(
  name
) {

  colorRhythm =
    name;


  if (
    name === "STILL"
  ) {

    bgColor =
      colorToHex(
        rhythmCurrentBG
      );


    textColor =
      colorToHex(
        rhythmCurrentText
      );

  } else {

    rhythmCurrentBG =
      color(
        bgColor
      );


    rhythmCurrentText =
      color(
        textColor
      );


    generateRhythmTarget();
  }
}


// =====================================================
// RHYTHM BASE
// =====================================================

function syncRhythmBase() {

  rhythmCurrentBG =
    color(bgColor);

  rhythmCurrentText =
    color(textColor);


  rhythmStartBG =
    color(bgColor);

  rhythmStartText =
    color(textColor);


  if (
    colorRhythm !==
    "STILL"
  ) {

    generateRhythmTarget();
  }
}


// =====================================================
// RHYTHM TARGET
// =====================================================

function generateRhythmTarget() {

  rhythmStartBG =
    color(
      rhythmCurrentBG
    );


  rhythmStartText =
    color(
      rhythmCurrentText
    );


  let newBG =
    randomHexColor();


  let newText =
    randomContrastingColor(
      newBG
    );


  rhythmTargetBG =
    color(
      newBG
    );


  rhythmTargetText =
    color(
      newText
    );


  rhythmStartTime =
    millis();
}


// =====================================================
// UPDATE COLOR RHYTHM
// =====================================================

function updateColorRhythm() {

  if (
    colorRhythm ===
    "STILL"
  ) {

    return;
  }


  let setting =
    RHYTHM_OPTIONS[
      colorRhythm
    ];


  let elapsed =
    millis() -
    rhythmStartTime;


  let t =
    constrain(
      elapsed /
      setting.fade,
      0,
      1
    );


  t =
    t *
    t *
    (
      3 -
      2 * t
    );


  rhythmCurrentBG =
    lerpColor(
      rhythmStartBG,
      rhythmTargetBG,
      t
    );


  rhythmCurrentText =
    lerpColor(
      rhythmStartText,
      rhythmTargetText,
      t
    );


  bgColor =
    colorToHex(
      rhythmCurrentBG
    );


  textColor =
    colorToHex(
      rhythmCurrentText
    );


  if (
    elapsed >=
    setting.interval
  ) {

    generateRhythmTarget();
  }
}


// =====================================================
// COLOR → HEX
// =====================================================

function colorToHex(
  c
) {

  let r =
    round(
      red(c)
    )
      .toString(16)
      .padStart(2, "0");


  let g =
    round(
      green(c)
    )
      .toString(16)
      .padStart(2, "0");


  let b =
    round(
      blue(c)
    )
      .toString(16)
      .padStart(2, "0");


  return (
    "#" +
    r +
    g +
    b
  ).toUpperCase();
}


// =====================================================
// INTRO STATES
// =====================================================

function createIntroCharState() {

  return {

    timer:
      floor(
        random(
          5,
          60
        )
      ),

    glitching:
      false,

    glitchLife:
      0,

    glitchChar:
      ""

  };
}


function syncIntroStates() {

  introCharStates = [];


  let source =
    getIntroText();


  for (
    let i = 0;
    i < source.length;
    i++
  ) {

    introCharStates.push(
      createIntroCharState()
    );
  }
}


// =====================================================
// INTRO GLITCH
// =====================================================

function updateIntroGlitch() {

  for (
    let state
    of introCharStates
  ) {

    if (
      state.glitching
    ) {

      state.glitchLife--;


      if (
        frameCount % 5 === 0
      ) {

        state.glitchChar =
          getRandomASCII(
            random()
          );
      }


      if (
        state.glitchLife <= 0
      ) {

        state.glitching =
          false;


        state.timer =
          floor(
            random(
              180,
              520
            )
          );
      }


      continue;
    }


    state.timer--;


    if (
      state.timer <= 0
    ) {

      if (
        random() < 0.22
      ) {

        state.glitching =
          true;


        state.glitchLife =
          floor(
            random(
              20,
              30
            )
          );


        state.glitchChar =
          getRandomASCII(
            random()
          );

      } else {

        state.timer =
          floor(
            random(
              120,
              320
            )
          );
      }
    }
  }
}


// =====================================================
// DRAW
// =====================================================

function draw() {

  updateColorRhythm();


  if (
    colorRhythm !==
    "STILL"
  ) {

    updateInterface();
  }


  background(
    bgColor
  );


  drawStructure();


  // =====================================================
  // INTRO
  // =====================================================

  if (
    introOpen
  ) {

    updateIntroGlitch();

    drawIntro();

    return;
  }


  // =====================================================
  // MAIN CANVAS
  // =====================================================

  if (
    typedText.length === 0
  ) {

    drawPlaceholder();

    return;
  }


  if (
    !glitchPaused
  ) {

    updateGlitch();
  }


  drawTypedText();
}


// =====================================================
// STRUCTURE
// =====================================================

function drawStructure() {

  push();


  // SIDEBAR

  noStroke();

  fill(
    bgColor
  );

  rect(
    0,
    0,
    SIDEBAR_W,
    height
  );


  // MAIN DIVIDER

  stroke(
    textColor
  );

  strokeWeight(
    1.25
  );

  line(
    SIDEBAR_W,
    0,
    SIDEBAR_W,
    height
  );


  // CATEGORY LINES

  stroke(
    textColor
  );

  strokeWeight(
    1.1
  );


  drawSectionLine(
    COLOR_LINE_Y
  );

  drawSectionLine(
    RHYTHM_LINE_Y
  );

  drawSectionLine(
    TYPE_LINE_Y
  );

  drawSectionLine(
    FONT_LINE_Y
  );

  drawSectionLine(
    SPEED_LINE_Y
  );

  drawSectionLine(
    OCR_LINE_Y
  );

  drawSectionLine(
    VIEW_LINE_Y
  );


  // FOOTER

  noStroke();

  fill(
    textColor
  );

  textFont(
    "Helvetica Neue"
  );

  textStyle(
    NORMAL
  );

  textSize(
    9
  );

  textAlign(
    LEFT,
    BOTTOM
  );


  text(
    "© 2026 Kyeongmin Yi",
    PANEL_X,
    height - 12
  );


  pop();
}


// =====================================================
// SECTION LINE
// =====================================================

function drawSectionLine(
  y
) {

  line(
    PANEL_X,
    y,
    PANEL_RIGHT,
    y
  );
}


// =====================================================
// INTRO WRAP
// =====================================================

function wrapIntroText(
  source,
  maxWidth
) {

  let result = [];


  let paragraphs =
    source
      .trim()
      .split(
        "\n"
      );


  textFont(
    "Pixel Times"
  );

  textStyle(
    NORMAL
  );

  textSize(
    14
  );


  for (
    let paragraph
    of paragraphs
  ) {

    if (
      paragraph.trim() === ""
    ) {

      result.push("");

      continue;
    }


    let words =
      paragraph.split(
        " "
      );


    let current = "";


    for (
      let word
      of words
    ) {

      let candidate =
        current === ""
          ? word
          : current +
            " " +
            word;


      if (
        textWidth(
          candidate
        ) > maxWidth

        &&

        current !== ""
      ) {

        result.push(
          current
        );


        current =
          word;

      } else {

        current =
          candidate;
      }
    }


    if (
      current !== ""
    ) {

      result.push(
        current
      );
    }
  }


  return result;
}


function drawIntro() {

  push();


  let source =
    getIntroText();


  if (
    introCharStates.length !==
    source.length
  ) {

    syncIntroStates();
  }


  let left =
    SIDEBAR_W +
    50;


  let maxWidth =
    min(
      600,
      width -
      left -
      70
    );


  textFont(
    "Pixel Times"
  );

  textStyle(
    NORMAL
  );

  textSize(
    14
  );


  let lineHeight =
    22;


  let lines;

if (
  introLayoutCache.source !==
  source ||

  introLayoutCache.maxWidth !==
  maxWidth
) {

  introLayoutCache.source =
    source;

  introLayoutCache.maxWidth =
    maxWidth;

  introLayoutCache.lines =
    wrapIntroText(
      source,
      maxWidth
    );
}


lines =
  introLayoutCache.lines;


  textFont(
    "Pixel Times"
  );

  textStyle(
    NORMAL
  );

  textSize(
    14
  );

  textAlign(
    LEFT,
    TOP
  );

  fill(
    textColor
  );

  noStroke();


  let y =
    55;

  let stateIndex =
    0;


  lines.forEach(
    function (line) {

      if (
        line === ""
      ) {

        y +=
          lineHeight;

        return;
      }


      let cursorX =
        left;


      Array.from(line).forEach(
        function (original) {

          let state =
            introCharStates[
              stateIndex
            ];


          let display =
            original;


          if (
            state &&
            state.glitching &&
            original !== " "
          ) {

            display =
              state.glitchChar;
          }


          text(
            display,
            cursorX,
            y
          );


          cursorX +=
            textWidth(
              original
            );


          stateIndex++;
        }
      );


      y +=
        lineHeight;
    }
  );


  pop();

// =====================================================
// BOTTOM WELCOME
// ようこそ + KAOMOJI
// =====================================================

let welcomeLeft =
  SIDEBAR_W + 35;

let welcomeRight =
  width - 45;

let welcomeWidth =
  welcomeRight -
  welcomeLeft;

let welcomeY =
  height - 20;


let yokoText =
  "ようこそ";

let kaoText =
  "(ˆ⩌⩊⩌ˆ)੭";


// =====================================================
// SIZE
// =====================================================

let yokoSize =
  constrain(
    welcomeWidth * 0.3,
    70,
    200
  );

let kaoSize =
  yokoSize * 0.4;


// =====================================================
// WIDTH MEASURE
// =====================================================

textFont(
  "Times New Roman"
);

textStyle(
  BOLD
);

textSize(
  yokoSize
);

let yokoW =
  textWidth(
    yokoText
  );


textFont(
  "Courier New"
);

textStyle(
  NORMAL
);

textSize(
  kaoSize
);

let kaoW =
  textWidth(
    kaoText
  );


let welcomeGap =
  yokoSize * 0.2;

let naturalWidth =
  yokoW +
  welcomeGap +
  kaoW;

let targetWidth =
  welcomeWidth;

let scaleFactor =
  targetWidth /
  naturalWidth;

scaleFactor =
  constrain(
    scaleFactor,
    0.55,
    1.35
  );

yokoSize *=
  scaleFactor;

kaoSize *=
  scaleFactor;

welcomeGap *=
  scaleFactor;


// =====================================================
// FINAL WIDTH RECALC
// =====================================================

textFont(
  "Times New Roman"
);

textStyle(
  NORMAL
);

textSize(
  yokoSize
);

yokoW =
  textWidth(
    yokoText
  );


let kaoX =
  welcomeLeft +
  yokoW +
  welcomeGap;


// =====================================================
// SHADOW
// =====================================================

let shadowOffsetX = 7;
let shadowOffsetY = 7;

let shadowColor =
  color(0);

shadowColor.setAlpha(
  90
);


// ようこそ shadow

textFont(
  "Times New Roman"
);

textStyle(
  NORMAL
);

textSize(
  yokoSize
);

textAlign(
  LEFT,
  BOTTOM
);

fill(
  shadowColor
);

noStroke();

text(
  yokoText,
  welcomeLeft +
  shadowOffsetX,
  welcomeY +
  shadowOffsetY
);


// kaomoji shadow

textFont(
  "Courier New"
);

textStyle(
  NORMAL
);

textSize(
  kaoSize
);

textAlign(
  LEFT,
  BOTTOM
);

fill(
  shadowColor
);

text(
  kaoText,
  kaoX +
  shadowOffsetX,
  welcomeY +
  shadowOffsetY
);


// =====================================================
// MAIN TEXT
// =====================================================

// ようこそ

textFont(
  "Times New Roman"
);

textStyle(
  NORMAL
);

textSize(
  yokoSize
);

textAlign(
  LEFT,
  BOTTOM
);

fill(
  textColor
);

noStroke();

text(
  yokoText,
  welcomeLeft,
  welcomeY
);


// kaomoji

textFont(
  "Courier New"
);

textStyle(
  BOLD
);

textSize(
  kaoSize
);

textAlign(
  LEFT,
  BOTTOM
);

fill(
  textColor
);

text(
  kaoText,
  kaoX,
  welcomeY
);
}


// =====================================================
// PLACEHOLDER
// =====================================================

function drawPlaceholder() {

  push();


  textFont(
    "Helvetica Neue"
  );

  textStyle(
    NORMAL
  );

  textSize(
    10
  );

  textAlign(
    CENTER,
    CENTER
  );

  noStroke();


  let c =
    color(
      textColor
    );


  c.setAlpha(
    110
  );


  fill(
    c
  );


  let centerX =
    SIDEBAR_W +
    (
      width -
      SIDEBAR_W
    ) / 2;


  text(
    "CLICK & TYPE",
    centerX,
    height / 2
  );


  pop();
}


// =====================================================
// CONTENT WIDTH
// =====================================================

function getContentWidth() {

  return max(

    100,

    width -
    SIDEBAR_W -
    CANVAS_PADDING_X * 2

  );
}


// =====================================================
// TYPE WEIGHT
// =====================================================

function applyTypeWeight() {

  if (
    typeWeight ===
    "BOLD"
  ) {

    textStyle(
      BOLD
    );

  } else {

    textStyle(
      NORMAL
    );
  }
}


// =====================================================
// ADAPTIVE TEXT SIZE
//
// 선택한 사이즈 유지
// → 오른쪽 끝에서 먼저 줄바꿈
// → 세로 공간 부족할 때만 단계적으로 축소
// =====================================================

function getAdaptiveTextSize() {

  let baseSize =
    TYPE_SIZE_OPTIONS[
      typeSizeName
    ];


  let sizeSteps = [
    150,
    110,
    80,
    60,
    44,
    32
  ];


  sizeSteps =
    sizeSteps.filter(
      function (size) {

        return (
          size <=
          baseSize
        );
      }
    );


  if (
    !sizeSteps.includes(
      baseSize
    )
  ) {

    sizeSteps.unshift(
      baseSize
    );
  }


  textFont(
    currentFont
  );


  applyTypeWeight();


  let contentWidth =
    getContentWidth();


  let availableHeight =
    height -
    CANVAS_PADDING_Y * 2;


  for (
    let i = 0;
    i < sizeSteps.length;
    i++
  ) {

    let testSize =
      sizeSteps[i];


    textSize(
      testSize
    );


    let lines =
      wrapTextToWidth(
        typedText,
        contentWidth
      );


    let lineHeight =
      testSize *
      LINE_HEIGHT_RATIO;


    let totalHeight =
      lines.length *
      lineHeight;


    if (
      totalHeight <=
      availableHeight
    ) {

      return testSize;
    }
  }


  return 32;
}


// =====================================================
// WRAP TEXT
// =====================================================

function wrapTextToWidth(
  source,
  maxWidth
) {

  let result = [];


  let paragraphs =
    source.split(
      "\n"
    );


  for (
    let paragraph
    of paragraphs
  ) {

    if (
      paragraph.length === 0
    ) {

      result.push("");

      continue;
    }


    let current = "";


    for (
      let i = 0;
      i < paragraph.length;
      i++
    ) {

      let c =
        paragraph[i];


      let candidate =
        current + c;


      if (
        textWidth(
          candidate
        ) > maxWidth

        &&

        current.length > 0
      ) {

        let spaceIndex =
          current.lastIndexOf(
            " "
          );


        if (
          spaceIndex > 0
        ) {

          let first =
            current.slice(
              0,
              spaceIndex
            );


          let rest =
            current.slice(
              spaceIndex + 1
            );


          result.push(
            first
          );


          current =
            rest + c;

        } else {

          result.push(
            current
          );


          current =
            c;
        }

      } else {

        current =
          candidate;
      }
    }


    if (
      current.length > 0
    ) {

      result.push(
        current
      );
    }
  }


  return result;
}


// =====================================================
// DRAW TYPO
// =====================================================

function drawTypedText() {

  let size =
    getAdaptiveTextSize();


  textFont(
    currentFont
  );


  applyTypeWeight();


  textSize(
    size
  );


  let contentWidth =
    getContentWidth();


  let contentLeft =
    SIDEBAR_W +
    CANVAS_PADDING_X;


  let contentCenter =
    SIDEBAR_W +
    (
      width -
      SIDEBAR_W
    ) / 2;


  let lines =
    wrapTextToWidth(
      typedText,
      contentWidth
    );


  let lineHeight =
    size *
    LINE_HEIGHT_RATIO;


  let totalHeight =
    lines.length *
    lineHeight;


  let startY =
    height / 2 -
    totalHeight / 2 +
    lineHeight / 2;


  let stateIndex = 0;


  for (
    let row = 0;
    row < lines.length;
    row++
  ) {

    let line =
      lines[row];


    let cursorX;


    if (
      textAlignment ===
      "LEFT"
    ) {

      cursorX =
        contentLeft;

    } else {

      let lineWidth =
        textWidth(
          line
        );


      cursorX =
        contentCenter -
        lineWidth / 2;
    }


    let y =
      startY +
      row *
      lineHeight;


    for (
      let i = 0;
      i < line.length;
      i++
    ) {

      let original =
        line[i];


      let state =
        charStates[
          stateIndex
        ];


      let display =
        original;


      if (
        state &&
        state.glitching &&
        original !== " "
      ) {

        display =
          state.glitchChar;
      }


      fill(
        textColor
      );

      noStroke();


      textAlign(
        LEFT,
        CENTER
      );


      text(
        display,
        cursorX,
        y
      );


      cursorX +=
        textWidth(
          original
        );


      stateIndex++;
    }


    stateIndex++;
  }
}


// =====================================================
// MAIN CHARACTER STATE
// =====================================================

function createCharState() {

  return {

    timer:
      random(
        5,
        20
      ),

    glitching:
      false,

    glitchLife:
      0,

    glitchChar:
      "",

    glitchChanges:
      0,

    glitchChangeTimer:
      0

  };
}


// =====================================================
// SYNC MAIN STATES
// =====================================================

function syncCharStates() {

  while (
    charStates.length <
    typedText.length
  ) {

    charStates.push(
      createCharState()
    );
  }


  if (
    charStates.length >
    typedText.length
  ) {

    charStates =
      charStates.slice(
        0,
        typedText.length
      );
  }
}


// =====================================================
// ASCII PICKER
// =====================================================

function getRandomASCII(
  intensity = 0
) {

  let pool;


  if (
    intensity < 0.35
  ) {

    pool =
      ASCII_SIMPLE;

  } else if (
    intensity < 0.7
  ) {

    pool =
      ASCII_SIMPLE.concat(
        ASCII_SYMBOL
      );

  } else {

    pool =
      ASCII_SIMPLE.concat(
        ASCII_SYMBOL,
        ASCII_GLITCH
      );
  }


  return random(
    pool
  );
}


// =====================================================
// UPDATE MAIN GLITCH
// =====================================================

function updateGlitch() {

  for (
    let state
    of charStates
  ) {

    // ===================================================
    // CURRENTLY GLITCHING
    // ===================================================

    if (
      state.glitching
    ) {

      state.glitchLife -=
        0.45;


      state.glitchChangeTimer--;


      // 깨진 문자 → 다른 깨진 문자
      if (
        state.glitchChanges > 0 &&
        state.glitchChangeTimer <= 0
      ) {

        state.glitchChar =
          getRandomASCII(
            random()
          );


        state.glitchChanges--;


        // 다음 변화까지 잠깐 유지
        state.glitchChangeTimer =
          floor(
            random(
              4,
              8
            )
          );
      }


      // 원래 문자로 복귀
      if (
        state.glitchLife <= 0
      ) {

        state.glitching =
          false;


        state.timer =
          random(
            10,
            24
          );
      }


      continue;
    }


    // ===================================================
    // WAITING
    // ===================================================

    state.timer -=
      glitchSpeed;


    if (
      state.timer <= 0
    ) {

      if (
        random() < 0.48
      ) {

        // 글리치 시작
        state.glitching =
          true;


        // 전체 글리치 유지시간
        state.glitchLife =
          random(
            7,
            14
          );


        // 첫 번째 깨진 문자
        state.glitchChar =
          getRandomASCII(
            random()
          );


        // 이후 1~2회 다른 깨진 문자로 변화
        state.glitchChanges =
          floor(
            random(
              1,
              3
            )
          );


        // 첫 변화까지 대기
        state.glitchChangeTimer =
          floor(
            random(
              3,
              7
            )
          );

      } else {

        state.timer =
          random(
            6,
            15
          );
      }
    }
  }
}
// =====================================================
// RESIZE
// =====================================================

function windowResized() {

  resizeCanvas(
    windowWidth,
    windowHeight
  );
}
  updateLanguageButtons();

function applyBitmapUI(el) {

  if (!el) return;

  el.style(
    "font-family",
    UI_FONT
  );
}