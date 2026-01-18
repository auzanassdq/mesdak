function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
}

function mixColor(color1, color2, weight) {
  return {
    r: color1.r * (1 - weight) + color2.r * weight,
    g: color1.g * (1 - weight) + color2.g * weight,
    b: color1.b * (1 - weight) + color2.b * weight
  };
}

function generatePalette(hexColor, name) {
  const baseRgb = hexToRgb(hexColor);
  const white = { r: 255, g: 255, b: 255 };
  const black = { r: 0, g: 0, b: 0 };
  
  const palette = {};
  
  palette[50] = mixColor(white, baseRgb, 0.1);
  palette[100] = mixColor(white, baseRgb, 0.2);
  palette[200] = mixColor(white, baseRgb, 0.4);
  palette[300] = mixColor(white, baseRgb, 0.6);
  palette[400] = mixColor(white, baseRgb, 0.8);
  palette[500] = baseRgb;
  palette[600] = mixColor(baseRgb, black, 0.2);
  palette[700] = mixColor(baseRgb, black, 0.4);
  palette[800] = mixColor(baseRgb, black, 0.6);
  palette[900] = mixColor(baseRgb, black, 0.8);
  palette[950] = mixColor(baseRgb, black, 0.9);
  
  console.log(`/* Palette for ${name} (${hexColor}) */`);
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(key => {
    console.log(`  --primary-${key}: ${rgbToHex(palette[key].r, palette[key].g, palette[key].b)};`);
  });
  
  console.log(`  --primary: ${hexColor};`);
  console.log(`  --primary-dark: ${rgbToHex(palette[700].r, palette[700].g, palette[700].b)};`);
  console.log(`  --primary-light: ${rgbToHex(palette[300].r, palette[300].g, palette[300].b)};`);
  console.log("");
}

generatePalette('#DE641B', 'latin-america');
