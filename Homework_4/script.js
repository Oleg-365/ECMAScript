"use strict";

/* Домашнее задание

Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.*/

console.log("Задача_1");

async function getUserData(userId) {
  let response = null;
  try {
    response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (response.status !== 200) {
      throw Error(response.status);
    }
    return await response.json();
  } catch (err) {
    throw Error(`User with ID: ${userId} not found`);
  }
}

async function main() {
  const userId = 2; // Заменить на нужный ID
  try {
    const result = await getUserData(userId);
    console.log(`Successfully fetched user data: `, result);
  } catch (err) {
    console.error(`Failed to fetch user data: ${err.message}`);
  }
}

main();

/* Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *

// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });
saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке. */

console.log("Задача_2");
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

async function saveUserData(user) {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      console.log("User data saved successfully");
      response.json();
    })

    .catch((error) => {
      console.log(error.message);
    });
}

saveUserData(user);

console.log("Задача_3");

/* Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'" */

function changeStyleDelayed(element, time, color = "yellow") {
  const myElement = document.getElementById(element);
  setTimeout(() => changeStyle(myElement, color), time);
}

function changeStyle(element, color) {
  element.style.backgroundColor = color;
}

changeStyleDelayed("myElement", 2000);
