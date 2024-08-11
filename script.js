let userName=document.querySelector(".name-div");
console.log(userName);
let mail=document.querySelector(".mail-div");
console.log(mail);
let password=document.querySelector(".pass-div");
console.log(password);
let btn=document.querySelector(".btn");
console.log(btn);
let form=document.querySelector("#smpl-form")
console.log(form);
let userList= document.querySelector(".user-list");
console.log(userList);

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    let obj={
        name:userName.value,
        mail:mail.value,
        password:password.value,

    };
    console.log(obj);
    console.log(userName.value)

    let Name=obj.name;
let Email=obj.mail;
let Password=obj.password;

userList.innerHTML+=`
            <div class="default-list">
            Name=${Name}
            <br>
            Email=${Email}
            <br>
            Password=${Password}
            <br>
            </div>`


});


