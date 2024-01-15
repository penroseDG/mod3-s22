let a=+prompt(" nhap so may chon vaoo di cu : ");
let b=+prompt(" nhap so may chon vao di cu : ");
let x= -b/a;
if( a!= 0 && b != 0) {
    console.log(" dap an la : ", +x);
}else if ( a == 0){
    console.log(" phuong trinh vo nghiem ");
}else if ( b == 0 ){
    console.log(" x = 0");
}