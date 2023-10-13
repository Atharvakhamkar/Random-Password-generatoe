 const passwordBox = document.getElementById("Password");
 const length =12;

 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerCase = "abcdefghijklmnopqrstuvwxyz";
 const  number = "1234567890";
 const special_sym = "@#$%^&*()_+|{}<>/-=!"
 const allChar = upperCase + lowerCase+number+ special_sym;



 function Gen_pass()
 {

    let Password = "";
    Password += upperCase[Math.floor(Math.random()*upperCase.length)];
    Password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password += number[Math.floor(Math.random()*number.length)];
    Password += special_sym[Math.floor(Math.random()*special_sym.length)];

    while (length>Password.length)
    {

        Password += allChar[Math.floor(Math.random()* allChar.length)];
    }

    passwordBox.value = Password;
    console.log("i'm clicked")
 }

 function copyPassword()
 {
    passwordBox.select();
    document.execCommand("copy");
 }