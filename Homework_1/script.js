/*1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода.*/

// const arr = [1, 5, 7, 9];
// const min = Math.min(...arr);
// console.log(`Минимальное число из ${arr} равно ${min}`);
// console.log("");

/*2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую.*/

// function createCounter() {
//   let count = 0;

//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     getCount() {
//       return count;
//     },
//   };
// }

// const counter = createCounter();
// console.log(counter);

// counter.increment();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());
// console.log("");

/*3) Дополнительное задание, выполняем только если проходили работу с DOM.
Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве.

Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);*/

const rootElement = document.querySelector(".root");

const targetRoot = findElementByClass(rootElement, "main");
console.log(targetRoot);

const targetParagraph = findElementByClass(rootElement, "my-class");
console.log(targetParagraph);

const targetNestedDiv = findElementByClass(rootElement, "nested-div");
console.log(targetNestedDiv);

const targetThirdDiv = findElementByClass(rootElement, "third-div");
console.log(targetThirdDiv);

function findElementByClass(rootElement, className) {
  if (rootElement.classList && rootElement.classList.contains(className)) {
    return rootElement;
  }

  const children = rootElement.children;
  for (let i = 0; i < children.length; i++) {
    const foundElement = findElementByClass(children[i], className);
    if (foundElement) {
      return foundElement;
    }
  }
  return null;
}
