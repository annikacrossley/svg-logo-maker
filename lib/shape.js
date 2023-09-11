class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    setShapeColor(newShapeColor) {
        this.shapeColor = newShapeColor;
    }
    setText(newText) {
        this.text = newText;
    }
    setTextColor(newTextColor) {
        this.textColor = newTextColor;
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
}

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `
        <svg version="1.1"
            width="300" height="300"
            xmlns="http://www.w3.org/2000/svg">

        <rect width="200px" height="200px" x="50" y="25" fill="${this.shapeColor}" />
            
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,10 280,210 130,210" fill="${this.shapeColor}" />

        <text x="200" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
}

module.exports = {
    Circle, Square, Triangle
};