let num = 5;
let de_num = 0;
try {
    if (de_num == 0){
        throw "Divide by zero error";
    } else {
        let sol = num / de_num;
    }
} catch (e){
    console.log('Error : ' + e);
}

// try {
//     ab();
//
// } catch(e) {
//     console.log('Error : ' + e.name)
// }

// try {
//     eval("alert('ES6 Exception Handling)");
// } catch(e){
//     console.log("Error : " + e.name)
// }