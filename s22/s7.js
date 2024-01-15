let a=+prompt(" nhap so dau tien vao :");
let b=+prompt(" nhap so thu hai vao : ");
let c=+prompt(" nhap so cuoi cung vao : ");
let delta= b*b-4*a*c;
let d= Math.sqrt(delta);
    
if( delta < 0 ){
    console.log(" phuong trinh vo nghiem ");
}else if(delta == 0  ){
    let x = -b/2*a;
    console.log(" dap an la : " , +x);  
}else if( delta > 0 ){
    let x1= (-b + d )/2*a;
    let x2= (-b - d )/2*a;
    console.log(" dap an phuong trinh la : ", +x1 , +x2);
}