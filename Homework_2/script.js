"use strict";
// Домашнее задание

// Задание 1: "Управление библиотекой книг"

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

// // Пример использования класса
// const book = new Book("BookName1", "Author1", 123);
// book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"
console.log("Задача №1");
class Book {
  constructor(title, autor, page) {
    this.title = title;
    this.autor = autor;
    this.page = page;
  }

  displayInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.autor}, Pages: ${this.page}.`
    );
  }
}
const book1 = new Book("Сказка о царе Салтане", "А.С. Пушкин", 23);
book1.displayInfo();
const book2 = new Book("Сказка о рыбаке и рыбке", "А.С. Пушкин", 10);
book2.displayInfo();
console.log(" ");

// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.

// // Пример использования класса
// const student = new Student("John Smith", 16, "10th grade");
// student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"
console.log("Задача №2");
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}.`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Ivan Ivanov", 15, "9th grade");
student2.displayInfo();
