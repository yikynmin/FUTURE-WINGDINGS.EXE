let typedText = "";
let textarea;
let thanksLink;
let deerGif;
let contactWindow;

let deerX = 0;
let deerY = 0;

// =====================================================
// INTRO
// =====================================================

const INTRO_TEXT = `

F̶̘̮͍Ũ̶̟̱T̶̪̞̳Ṷ̶̦̀̀̂Ŕ̸̝̝̔E̸̟͇̓̽̐

W҉̤̗I҉͓̭̝N̸͙̪̗G̶̗̮͗D̴̯̥Î̴̪̝N̷͙͕Ğ̶͍S҉̖̱̦


What will the future Wingdings be like?

`;

let introOpen = false;
let introduceLink;


// =====================================================
// COLORS
// =====================================================

let bgColor = "#0000FF";
let textColor = "#FFFFFF";


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
  "'Helvetica Neue', Helvetica, Arial, sans-serif";


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


// =====================================================
// UI SIZE
// =====================================================

const BUTTON_H = 21;

const BUTTON_GAP = 3;

const SECTION_GAP = 15;

const SECTION_TITLE_H = 10;

const TITLE_TO_LINE = 6;

const LINE_TO_CONTENT = 7;


// =====================================================
// FIXED POSITIONS
// =====================================================

const TITLE_Y = 16;
const INTRO_Y = 62;
const THANKS_Y = 75;


// COLOR

const COLOR_Y = 106;

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


// GLITCH

const GLITCH_Y =
  FONT_CONTENT_Y +
  FONT_ROWS * BUTTON_H +
  (FONT_ROWS - 1) * BUTTON_GAP +
  SECTION_GAP;

const GLITCH_LINE_Y =
  GLITCH_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const GLITCH_CONTENT_Y =
  GLITCH_LINE_Y +
  LINE_TO_CONTENT;


// SPEED

const SPEED_Y =
  GLITCH_CONTENT_Y +
  BUTTON_H +
  SECTION_GAP;

const SPEED_LINE_Y =
  SPEED_Y +
  SECTION_TITLE_H +
  TITLE_TO_LINE;

const SPEED_CONTENT_Y =
  SPEED_LINE_Y +
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


// =====================================================
// SETUP
// =====================================================

function setup() {

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
  
  createDeerGif();

  createContactWindow();
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
  "17px"
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
  "-0.65px"
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

  introduceLink.style(
    "font-family",
    UI_FONT
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
    "24px"
  );

  contactWindow.style(
    "top",
    "24px"
  );

  contactWindow.style(
    "width",
    "230px"
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
  // THANKS TO
  // =====================================================

  thanksLink =
    createA(
      "https://youtu.be/AET7tdoF93o?si=Kv7-CuiYMnxFkCEj&t=1201",
      "THANKS TO... ↗",
      "_blank"
    );


  thanksLink.attribute(
    "rel",
    "noopener noreferrer"
  );


  thanksLink.position(
    PANEL_X,
    THANKS_Y
  );


  thanksLink.style(
    "position",
    "fixed"
  );

  thanksLink.style(
    "font-family",
    UI_FONT
  );

  thanksLink.style(
    "font-size",
    "9px"
  );

  thanksLink.style(
    "font-weight",
    "700"
  );

  thanksLink.style(
    "letter-spacing",
    "0.2px"
  );

  thanksLink.style(
    "text-decoration",
    "none"
  );

  thanksLink.style(
    "cursor",
    "pointer"
  );

  thanksLink.style(
    "z-index",
    "1000"
  );

  thanksLink.style(
    "user-select",
    "none"
  );


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
  // GLITCH
  // =====================================================

  createSectionLabel(
    "GLITCH",
    GLITCH_Y
  );


  pauseButton =
    createButton(
      "PAUSE"
    );


  createWideButton(
    pauseButton,
    GLITCH_CONTENT_Y
  );


  pauseButton.mousePressed(
    function () {

      glitchPaused =
        !glitchPaused;


      pauseButton.html(

        glitchPaused
          ? "RESUME"
          : "PAUSE"

      );


      updateInterface();

      restoreTyping();
    }
  );


  // =====================================================
  // SPEED
  // =====================================================

  createSectionLabel(
    "SPEED",
    SPEED_Y
  );

  createSpeedButtons();
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

  el.style(
    "font-family",
    UI_FONT
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
    "0.3px"
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
    "0 4px"
  );

  button.style(
    "margin",
    "0"
  );

  button.style(
    "border-radius",
    "0"
  );

  button.style(
    "font-family",
    UI_FONT
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
    "24px"
  );

  contactWindow.style(
    "top",
    "24px"
  );

  contactWindow.style(
    "width",
    "230px"
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


  // THANKS TO

  if (
    thanksLink
  ) {

    thanksLink.elt.style.setProperty(
      "color",
      textColor,
      "important"
    );


    thanksLink.elt.style.setProperty(
      "text-decoration",
      "none",
      "important"
    );
  }


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


  for (
    let i = 0;
    i < INTRO_TEXT.length;
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
    GLITCH_LINE_Y
  );

  drawSectionLine(
    SPEED_LINE_Y
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
    "Helvetica Neue"
  );

  textStyle(
    NORMAL
  );

  textSize(
    20
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


// =====================================================
// DRAW INTRO
// =====================================================

function drawIntro() {

  push();


  let left =
    SIDEBAR_W +
    50;


  let maxWidth =
    min(
      760,
      width -
      left -
      70
    );


  // BODY

  textFont(
    "Helvetica Neue"
  );

  textStyle(
    BOLD
  );

  textSize(
    10
  );


  let lineHeight =
    26;


  let lines =
    wrapIntroText(
      INTRO_TEXT,
      maxWidth
    );


  let y =
    55;


  let stateIndex =
    0;


  for (
    let row = 0;
    row < lines.length;
    row++
  ) {

    let line =
      lines[row];


    if (
      line === ""
    ) {

      y +=
        lineHeight;

      stateIndex++;

      continue;
    }


    let cursorX =
      left;


    for (
      let i = 0;
      i < line.length;
      i++
    ) {

      let original =
        line[i];


      let state =
        introCharStates[
          stateIndex %
          introCharStates.length
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
        TOP
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


    y +=
      lineHeight;
  }


  pop();

// =====================================================
// BOTTOM WELCOME
// ようこそ + KAOMOJI
// =====================================================

let welcomeLeft =
  SIDEBAR_W + 45;

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
    welcomeWidth * 0.145,
    70,
    175
  );

let kaoSize =
  yokoSize * 0.52;


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
  yokoSize * 0.16;

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
    0.65,
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
