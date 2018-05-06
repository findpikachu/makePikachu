let cssText = `
#pikachu-wrapper{
    background: #fbf117;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}
.pikachu {
    height: 165px;
    width: 100%;
    position: relative;

}
.eye {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background: #323232;
    border: 2px solid black;
    position: absolute;

}
.eye.left {
    transform: translateX(-130px);
    left: 50%;
}
.eye.right {
    transform: translateX(130px);
    right: 50%;
}
.eye::after {
    content: '';
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: white;
    border: 2px solid black;
    position: absolute;
    left: 5px;
}
.nose {
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    border: 12px solid black;
    border-color: black transparent transparent transparent;
    border-radius: 11px;
    top: 30px;
    transform: translateX(-50%);
}
.upperLip {
    width: 80px;
    height: 25px;
    border: 2px solid black;

    position: absolute;
    top:50px;
    background: #fbf117;
    z-index: 1;
}
.upperLip.left {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);
    right: 50%;
}
.upperLip.right {
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
    left: 50%;
}

.lowerLip {
    width: 100px;
    height: 1000px;
    background: #a30000;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 400px/1000px;
    overflow: hidden;
}
.lowerLip::after {
    content: "";
    display: block;
    background-color: #ff0056;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -20px;
    border-radius: 50%;
}

.lowerLip-wrapper {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 65px;
    transform: translateX(-50%);
    overflow: hidden;
}

.fossette {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: red;
    border: 2px solid black;
    position: absolute;
    top: 70px;
}

.fossette.left {

    left: 50%;
    transform: translateX(-200px);
}
.fossette.right {
    right: 50%;
    transform: translateX(200px);
}
`

let cssDiv = document.querySelector("#css")
let style = document.querySelector("#styles")
let offset = 0
let speed = 100

let id = setTimeout(function run(){
    offset += 1
    cssDiv.innerHTML = Prism.highlight( cssText.substring(0,offset), Prism.languages.css);
    cssDiv.scrollTop = css.scrollHeight
    style.innerHTML =  cssText.substring(0,offset)
    if (offset < cssText.length) {
        setTimeout(run,speed)
    }
},speed)

$("#speed-buttons").on("click","button",(e) => {

    let button = $(e.currentTarget)
    button.addClass("active").siblings(".active").removeClass("active")
    let speedStr = button.attr("data-speed")
    speed = {
        "slow":1000,
        "normal": 100,
        "fast": 10,
    }[speedStr]

})
