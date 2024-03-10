const { LogoText, Shape, SVG } = require("./lib/shapes");

describe("LogoText class", () => {
  test("Property this.text is set by constructor", () => {
    const logoText = new LogoText("ABC", "red");
    expect(logoText.text).toEqual("ABC");
  });

  test("Property this.fontColor is set by constructor", () => {
    const logoText = new LogoText("ABC", "red");
    expect(logoText.fontColor).toEqual("red");
  });

  test("Method render() returns a string", () => {
    const logoText = new LogoText("ABC", "red");
    expect(typeof logoText.render()).toEqual("string");
    expect(logoText.render()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>'
    );
  });
});

describe("Shape class", () => {
  test("Property this.shape is set by constructor", () => {
    const shape = new Shape("square", "red");
    expect(shape.shape).toEqual("square");
  });

  test("Property this.shapeColor is set by constructor", () => {
    const shape = new Shape("square", "red");
    expect(shape.shapeColor).toEqual("red");
  });

  test("Method render() returns a string", () => {
    const shape = new Shape("square", "red");
    expect(typeof shape.render()).toEqual("string");
    expect(shape.render()).toEqual(
      '<rect x="90" y="40" width="120" height="120" fill="red" />'
    );
  });
});

describe("SVG class", () => {
    test("Property this.logoText is set by constructor", () => {
      const logoText = new LogoText("ABC", "red");
      const shape = new Shape("square", "red");
      const svg = new SVG(logoText.render(), shape.render());
      expect(svg.logoText).toEqual(
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>'
      );
    });

    test("Property this.shapeClass is set by constructor", () => {
      const logoText = new LogoText("ABC", "red");
      const shape = new Shape("square", "red");
      const svg = new SVG(logoText.render(), shape.render());
      expect(svg.shapeClass).toEqual(
        '<rect x="90" y="40" width="120" height="120" fill="red" />'
      );
    });

    test("Method render() returns a string", () => {
      const logoText = new LogoText("ABC", "red");
      const shape = new Shape("square", "red");
      const svg = new SVG(logoText.render(), shape.render());
      expect(typeof svg.render()).toEqual("string");
      expect(svg.render()).toEqual(
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>'
      );
    });
});