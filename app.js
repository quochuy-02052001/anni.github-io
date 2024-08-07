var progress = document.querySelector(".progress");
var percent = document.querySelector(".percent");
var textBox = document.querySelector(".textBox");
var button = document.querySelector(".button");
var textBtn = document.querySelector(".textBtn");
var heartBox = document.querySelector(".heartBox");
var cursor = document.querySelector(".buttonCLick img"); 
var heartItem1 = document.querySelector(".heartItem.item1")
var heartItem2 = document.querySelector(".heartItem.item2")
var heartItem3 = document.querySelector(".heartItem.item3")
var count = 0;
var percentWidth = 0;
var heartLeft = -3.2;
var progressLoad = setInterval(progressInterva,100)

button.addEventListener("click", function(){
    button.style.transform = "scale(0.8)";
    setTimeout(()=>{
        button.style.transform = "scale(1)";
    },200)
    let timeout = setInterval(()=>{
        var letters = document.createElement("div");
        letters.className = "letters"
        letters.innerHTML = '<img src="../image/letters.png" alt="">';
        document.querySelector("body").prepend(letters)
        let left = Math.floor(Math.random() * 100);
        let rotate = Math.floor(Math.random() * 360);
        letters.style.left = left + "%";
        letters.style.top = "-10%";
        letters.style.transform = `rotate(${rotate}deg)`;
        setTimeout(()=>{
            letters.style.top = "100%";
        },1000)
        setTimeout(()=>{
            letters.remove()
        },11000)
        document.querySelectorAll(".letters").forEach((item)=>{
            item.addEventListener("click", function(){
                clearInterval(timeout)
                $(".wrapperLetterForm").fadeIn()
                funcTimeoutLetter();
                
            })
        })
    },500)
})

function progressInterva(){
    if(count == 100 && percentWidth == 100){
        clearInterval(progressLoad)
        percent.textContent = "Happy Anni";
        percent.style.letterSpacing = "1px";
        textBox.style.transform = "scale(1.3)"
        heartItem3.style.animation = "1s heartScale forwards"
        setTimeout(()=>{
            textBox.style.transform = "scale(0)"
        },400)
        setTimeout(()=>{
            textBox.style.opacity = "0"
        },600)
        setTimeout(()=>{
            button.style.transform= "scale(1)";
        },800);
        setTimeout(()=>{
            button.style.background = "rgb(244,118,121)"
            button.style.width = "130px";
            button.style.borderRadius = "20px"
        },1500)
        setTimeout(()=>{
            button.style.height = "40px";
        },2000)
        setTimeout(()=>{
            textBtn.textContent = "Click nè!"
            textBtn.style.color = "#fff"
        },2500)
        setTimeout(()=>{
            cursor.style.opacity = "1";
        },3000)
    }
    else{
        if(count == 10){
            heartItem1.style.animation = "1s heartScale forwards"
        }
        if(count ==46){
            percent.style.color= "#fff"
        }
        if(count == 60){
            heartItem2.style.animation = "1s heartScale forwards"
        }
        count += 1;
        percentWidth += 1;
        heartLeft += 0.968;
        progress.style.width = percentWidth + '%'
        percent.innerText = count + '%'
        heartBox.style.left = heartLeft + '%'
    }
}


// .textLetter text h2
let indexText = 0;
let textLetter = document.querySelector('.textLetter h2');
const textLetterH2 = "Gửi Bà Xã!";
let timoutTextLetter;

function textCharLetter(){
    if (indexText < textLetterH2.length) {
        textLetter.textContent += textLetterH2[indexText];
        indexText++;
        setTimeout(indexText, 100);
    }
    else{
        clearInterval(timoutTextLetter);
        setTimeout(()=>{
            funcTimeoutLetterContent()
        },500)
    }
}
function funcTimeoutLetter(){
    indexText = 0; // Reset indexText
    textLetter.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetter);
    timoutTextLetter =  setInterval(()=>{
            textCharLetter();
        }, 200)
}

// chữ của thư bạn muốn gửi
let indexTextContent = 0;
let textLetterContent = document.querySelector('.contentLetter');
const textLetterP = "Hôm nay là Anni lần thứ 2 của mình gòi á. Anh chúc bà xã lúc nào cũng dzui dzẻ, hạnh phúc nghen. Cùng anh cố gắng thiệt nhìu trong tương lai nha. Anh Yêu Em❤️";
let timoutTextLetterContent;
function textCharLetterContent(){
    if (indexTextContent < textLetterP.length) {
        textLetterContent.textContent += textLetterP[indexTextContent];
        indexTextContent++;
        setTimeout(indexTextContent, 100);
    }
    else{
        clearInterval(timoutTextLetterContent)

    }
}
function funcTimeoutLetterContent(){
    indexTextContent = 0; // Reset indexTextContent
    textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetterContent);
    timoutTextLetterContent =  setInterval(()=>{
        textCharLetterContent();
        }, 100)
}

 document.querySelector(".fa-xmark").addEventListener("click", function(){
        indexTextContent = 0; // Reset indexTextContent
        textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
        clearInterval(timoutTextLetterContent)
        $(".wrapperLetterForm").fadeOut()
    })