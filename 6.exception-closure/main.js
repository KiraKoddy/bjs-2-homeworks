// задача 1

function parseCount(number) {
    let parse = Number.parseInt(number, 10);
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");
    }
    return parse;

}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (Error) {
        return Error;
    }
}

// задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ( a + b < c || a + c < b || b + c < a) {
        throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const P = this.getPerimeter() / 2;
        let area = parseFloat((Math.sqrt(P * (P - this.a) * (P - this.b) * (P - this.c))).toFixed(3));
        return area;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b ,c);
    } catch {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}