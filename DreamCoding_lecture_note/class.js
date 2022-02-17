"use strict";
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

//  자바스크립트는 클래스가 추가된 지 얼마되지 않았음
//  클래스 도입 전은 바로 오브젝트를 만들 수 있었다.
// 프로토타입 기반으로 해서..

//////////////////////////////////////
// 1. Class declarations
// 클래스 생성 -> constructor
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0; // 해시태그 이용해서 private으로 쓸 수 있음.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //오버라이트 포함 원래 상속된 것도 불러옴.
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`; // toString 오버라이드해서 더 자세하게 불러올 수 있음
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // T : Rectangle의 생성자
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T : T의 생성자
console.log(triangle instanceof Shape); // T : S의 상속을 받았기 때문
console.log(triangle instanceof Object); // T : 모두 옵젝의 상속을 받기 때문
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
