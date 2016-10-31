class Color {

    static PINK = Symbol.for("PINK");
    static PURPLE = Symbol.for("PURPLE");
    static BLUE = Symbol.for("BLUE");
    static YELLOW = Symbol.for("YELLOW");
    static RED = Symbol.for("RED");
    static GREEN = Symbol.for("GREEN");
    static BROWN = Symbol.for("BROWN");

    static color_values = false;

    constructor(color) {
        console.debug("Color");
        if(!Color.color_values){
            Color.setupColorValues();
        }
        const key = Symbol.keyFor(color);
        if(Color[key]) {
            this.value = Color.color_values[color];
        } else {
            throw "Invalid Color";
        }
        this.color = key;
    }

    static setupColorValues() {
        Color.color_values = {};
        Color.color_values[Color.PINK] = 100;
        Color.color_values[Color.PURPLE] = 200;
        Color.color_values[Color.BLUE] = 300;
        Color.color_values[Color.YELLOW] = 350;
        Color.color_values[Color.RED] = 400;
        Color.color_values[Color.GREEN] = 450;
        Color.color_values[Color.BROWN] = 200;
    }

    getColor() {
        return this.color;
    }

    getValue() {
        return this.value;
    }
}

export default Color;