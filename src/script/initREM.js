const RATIO = 14 / 1980;
const SCREENWIDTH = window.screen.width;
let REM = RATIO * SCREENWIDTH
document.documentElement.style.fontSize = `${REM}px`