class LogoText {
    constructor(text, fontColor) {
      this.text = text;
      this.fontColor = fontColor;
    }
    render() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
    }
  }
  
  class Shape {
    constructor(shape, shapeColor) {
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
    render() {
      if (this.shape === "square") {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
      } else if (this.shape === "circle") {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
      } else if (this.shape === "triangle") {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
      }
    }
  }
  
  class SVG {
    constructor(logoText, shapeClass) {
      this.logoText = logoText;
      this.shapeClass = shapeClass;
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeClass}${this.logoText}</svg>`;
    }
  }
  
  module.exports = { LogoText, Shape, SVG };