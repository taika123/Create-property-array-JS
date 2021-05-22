
// function calcAverage(math, physics, chemistry){
//     var average =  (math + physics + chemistry) /3;//tinh diem trung binh
//     return average;//tra ve bien average
// }
// function classType(average){//lay bien average diem turng binh mon hoc
    
//     var type;
//     if(average >= 8.5){
//         type = "gioi";
//     }else if(average >=6.5){
//         type = "kha";
//     }else if(average >=5.0){
//         type="trung binh";
//     }else{
//         type = "yeu";
//     }
//     return type;
// }

// function student (){
//     var name = "Cao";
//     var math = 10;
//     var physics = 10;
//     var chemistry = 10;

//     var average = calcAverage(math, physics, chemistry);
//     var type = classType(average);
//     console.log("Sing vien :"  + name + "\n" + "diem trung binh :"+ average + "\n" + "xep loai :" + type);
    
// }
// student ();



// function calcSalary(){
//     var hours = 42 ; 
//     var pay = 10;
//     var totalsalary;

//     if(hours <= 40){
//         totalsalary = hours * pay;
//     }else{
//         totalsalary = hours * pay + (hours - 40) * pay * 1.5;
//     }
//     console.log(totalsalary);
// }
// calcSalary();


function store(){
    var name = "Coa";
    var tutol = 10;
    var price = 1100;
    var sum ;
    if(tutol >= 100){
        sum = 100* price + (tutol-100) * price *0.92;
    }else if(tutol = 50 && tutol < 100){
        sum = 50 * price + (tutol - 50)* price * 0.88
    }else {
        sum = tutol * price;
    }
    console.log ("ten nv : " + name +"\n"+ "tong tien : " + sum);
}
store ();