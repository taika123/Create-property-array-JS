// var DepthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// //flat = làm phẳng mảng
// var flatArray = DepthArray.reduce(function(flat, depthItem){
//     return flat.concat(depthItem);
// },[])
// console.log(flatArray);


//lay ra cac khoa hoc va dua vao 1 mang moi

// var topics = [
//     {
//         topic: "Frond-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             }
//         ]
//     },
//     {
//         topic: "Back-End",
//         courses: [
//             {
//                 id: 3,
//                 title: "PHP"
//             },
//             {
//                 id: 4,
//                 title: "NodeJS"
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function(courses, topic){
//     return courses.concat(topic.courses);
// },[])

// var htmls = newCourses.map(function(course){
//     return `
//         <div>
//             <h2> ${course.title} </h2>
//             <p> ID: ${course.id} </p>
//         </div>   
//     `;
// });



// console.log(htmls.join(''))
// // console.log(newCourses)

// Array.prototype.reduce2 = function (callback, result){
//     var i = 0;
//     if(arguments.length < 2){
//         i = 1;
//         result = this[0]
//     }
//     for(; i < this.length; i++){
//         result = callback(result, this[i], i , this)
//     }
//     return result
// }

// var numbers = [1, 2, 3, 4, 5];

// var result = numbers.reduce2(function(total, number, index, array){
//     console.log(total, number, index, array)
//     return total + number
// },5)
// console.log(result)


//Create function forEach

// Array.prototype.forEach2 = function (callback, index){
    
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this)
//         }
//     }
// }

// var courses =  [
//     'Javascript',
//     'PHP',
//     'Java'
// ];

// courses.forEach2(function(course, index, arr){
//     console.log(course, index, arr)
// })



// Create function filter 

// Array.prototype.filter2 = function (callback){
//     var output = [];
//     for( var i in this){
//         if(this.hasOwnProperty(i)){
//            result = callback(this[i], i, this)
//            if(result){
//                output.push(this[i])
//            }
//         }
//     }
//     return output;
// }

// var courses = [
//         {
//             name: "Javascript",
//             coin: 250
//         },
//         {
//             name: "PHP",
//             coin: 100
//         },
//         {
//             name: "Ruby",
//             coin: 0
//         },
// ]

// var course = courses.filter2(function(course, index, arr){
//     return course.coin > 50
// })
// console.log(course)



//Creater some Function

// Array.prototype.some2 = function (callback){
//     for(var i in this){
//         if(this.hasOwnProperty(i)){
//             if(callback (this[i], i, this)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// var courses = [
//             {
//                 name: "Javascript",
//                 coin: 250,
//                 isFinish:true
//             },
//             {
//                 name: "PHP",
//                 coin: 100,
//                 isFinish:false
//             },
//             {
//                 name: "Ruby",
//                 coin: 0,
//                 isFinish:false
//             },
// ]

// var course = courses.some2(function(course, index, arr){
//     return course.isFinish;
// })
// console.log(course)



//Create every method function
//every : true or false
Array.prototype.every2 = function (callback){
    var output = true;
    for (var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], i, this)
            if(!result){
                output = false;
                break;
            }
        }
    }
    return output;
}

var courses = [
    {
        name: "Javascript",
        coin: 250,
        isFinish:true
    },
    {
        name: "PHP",
        coin: 100,
        isFinish:false
    },
    {
        name: "Ruby",
        coin: 0,
        isFinish:false
    },
]

var course = courses.every2(function(course, i, arr){
    return course.isFinish;
})
console.log(course)