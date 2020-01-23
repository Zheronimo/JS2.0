const out = document.querySelector('.out');
let dok = '';
const btn = document.querySelector('.btn');

let a1 = {
    3: 'hello',
    'one': 'hi'
};

//tesk 1

// for (let key in a1) {
//     dok += `${key} : ${a1[key]}<br>`;
// }
// out.innerHTML = dok;

// tesl 2 +3
// let a2 = {
//     3: 'hello',
//     'one': 'hi',
//     'testt': 'vodoley',
//     'ivan': 'ivanov'
// };
// for (let key in a2) {
//     // if (a2[key].length > 4) {
//     //     dok += a2[key] + ' ';
//     // }
//     if (key.length > 4) {
//         dok += key + " ";
//     }
// }
// out.innerHTML = dok;

let a7 = {};
btn.onclick = () => {
    a7[document.querySelector('.u7-key__input').value] = document.querySelector('.u7-value__input').value;
    for (let key in a7) {
        dok += `${key} : ${a7[key]} `;
    }
    out.innerHTML = dok;
}