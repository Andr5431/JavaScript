const a = ['a', 'b', 'c'];
const b = [1, 2, 3];
const rez = a.concat(b);
document.write(rez + '<br>')

const rez2 = a.push(1, 2, 3)
document.write(a + '<br>')

const c = [1, 2, 3];
const rez3 = c.reverse()
document.write(rez3 + '<br>')

const d = [1, 2, 3];
const rez4 = d.push(4, 5, 6)
document.write(d + '<br>')

const e = [1, 2, 3];
const rez5 = e.unshift(4, 5, 6)
document.write(e + '<br>')

const f = ['js', 'css', 'jq']
document.write(f[0] + '<br>')

const g = [1, 2, 3, 4, 5]
document.write(g.slice(0, 3) + '<br>')

const h = [1, 2, 3, 4, 5]
const rez6 = h.splice(1, 2)
document.write(h + '<br>')

const i = [1, 2, 3, 4, 5]
const rez7 = i.splice(2, 0, 10)
document.write(i + '<br>')

const j = [3, 4, 1, 2, 7]
document.write(j.sort() + '<br>')

const k = ['Привіт', 'світ', '!']
document.write(k.join(" ") + '<br>')

const l = ['Привіт ', 'світ', '!']
const rez8 = l.splice(0, 1, 'Поки')
document.write(l + '<br>')

const arr = [1, 2, 3, 4, 5];
const arrr = new Array(1,2,3,4,5);
document.write(arr + '<br>');
document.write(arrr + '<br>');

var arrrr = {
    ['блакитний', 'червоний', 'зелений'],
    ['blue', 'red', 'green'],
};
alert(arrrr[1] [1]);










