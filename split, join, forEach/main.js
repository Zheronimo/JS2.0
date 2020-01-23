//  Task 1 с помощью forEach переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.

const a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
    let a1_res = [];
    a1.forEach(element => {
        a1_res.push(element * 2);
    });
    console.log(a1_res);
}
t1();

// Task 2 с помощью forEach переберите массив и создайте новый массив a2_res куда добавьте элементы данного массива деленные на 2. Действия должны запускаться при вызове функции t2

const a2 = [2, 3, 4, 5, 10, 11, 12];

function t2() {
    let a2_res = [];
    a2.forEach(elem => a2_res.push(elem / 2));
    console.log(a2_res);
}
t2();

// Task 3 с помощью forEach переберите массив и создайте новый массив a3_res куда добавьте элементы данного массива являющиеся числом. Запускаться решение должно при вызове функции t3.

const a3 = [2, "hello", 3, "hi", 4, "Mazai"];

function t3() {
    let a3_res = [];
    a3.forEach(elem => {
        if (typeof elem === 'number') {
            a3_res.push(elem);
        }
    });
    console.log(a3_res);
}
t3();

// Task 4 На странице созданы 3 span.task-4 c атрибутом data. С помощью forEach переберите их и добавьте атрибуты в массив a4_res Запускаться решение должно при вызове функции t4.


function t4() {
    const span = document.querySelectorAll('.task4');
    a4_res = [];
    span.forEach(elem => {
        a4_res.push(elem.getAttribute('data'));
    });
    console.log(a4_res);
}
t4();

// Task 5 На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите их и добавьте событие клик. Напишите функцию t5, которая будет запускаться при клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.

const allP = document.querySelectorAll('.task5');
console.log(allP);
a5_res = [];

function t5() {
    a5_res.push(this.getAttribute('data'));
    console.log(a5_res);
}
allP.forEach(elem => {
    elem.onclick = t5;
});