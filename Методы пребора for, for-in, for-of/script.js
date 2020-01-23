const a1 = [5, 7, 9, 11, 13, 15];
const out = document.querySelector(".out");
const btn = document.querySelector(".btn");

/* TASK1 */
function t1() {
  let a1_res = "";
  for (let i = 0; i < a1.length; i++) {
    a1_res += a1[i] + " ";
  }
  out.textContent = a1_res;
}
// t1();

/* TASK2 */

function t2() {
  let a2_res = "";
  for (let i = 0; i < a1.length; i++) {
    a2_res += `${i} - ${a1[i]} <br>`;
  }
  out.innerHTML = a2_res;
}
// t2();

/* TASK3 */
function t3() {
  let a3 = document.getElementsByClassName("u-3");

  for (let i = 0; i < a3.length; i++) {
    a3[i].textContent = 3;
  }
}
// btn.onclick = t3;

/* TASK4 */
function t4() {
  let a3 = document.querySelectorAll(".u-3");

  for (let i = 0; i < a3.length; i++) {
    a3[i].textContent = 4;
  }
}
// btn.onclick = t4;

/* TASK5 */
function t5() {
  let div = document.createElement("div");
  document.body.append(div);
  let a5 = document.getElementsByClassName("u-3");
  //   a5.push(div);
  console.log(a5);
}
// t5();

/* TASK6 */
function t6() {
  let div = document.createElement("div");
  document.body.append(div);
  let a6 = document.querySelectorAll(".u-3");
  //   a6.push(div);
  console.log(a6);
}
// t6();

/* TASK7 */
let a7 = [[1, 2], [3, 4], [5, 6]];
function t7() {
  for (let item of a7) {
    console.log(item);
  }
}
t7();
