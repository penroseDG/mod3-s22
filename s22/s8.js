let a = +prompt(" nhap so vao di cu : ");
let b = +prompt(" nhap so vao di cu : ");
let c = prompt(" nhap phep tinh vao day : ");
console.log(c);

if (c === '+') {
    console.log(`${a} + ${b} = ${a +b}`);
} else if (c === '-') {
    console.log(a + "-" + b + "=" + (a - b));
} else if (c === '*') {
    console.log(a + "*" + b + "=" + (a * b));
} else if (c === '/') {
    console.log(a + "/" + b + "=" + (a / b));
} else {
    console.log(" khong hop le vui long nhap lai : heheh ");
}