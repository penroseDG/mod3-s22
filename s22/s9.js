let a=+prompt(" nhap so thang vao di cu :");
let b=+prompt(" nhap so nam vao di cu : ");

if( b > 1000 && b <= 3000 ){
  switch (a) {
    case 1,3,5,7,8,10,12: 
        console.log(" thang co 31 ngay  ");
        break;
    case 4,6, 9 , 11 : 
        console.log(" thang co 30 ngay  ");
        break;
    case 2: 
    if(b % 4 ==0 && b %100 !=0 ){
        console.log(" thang nay co 29 ngay ");
    }else {
        console.log(" thang co 28 ngay  ");
    }
     break; 
    default:
        console.log(" ko duoc dau cu nhap lai di ");
        break;
  }
}