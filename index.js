posLeft = 0
posTop = 0
bgH = 300

function expandMenu(){
    controls.style.bottom = "0px"
}

function changeColor(){
    title.style.color = textColor.value
    desc.style.color = textColor.value
}

function changeDesc(){
    desc.innerHTML = descText.value
}

function changeTitle(){
    title.innerHTML = titleText.value
}

function changeBG(){
    if(bgText.value == "horse"){
            background.style.backgroundImage = "url(img/bg1.jpg)"
        }else if(bgText.value == "night"){
            background.style.backgroundImage = "url(img/bg2.jpg)"
        }else if(bgText.value == "mountain"){
            background.style.backgroundImage = "url(img/bg3.jpg)"
        }else if(bgText.value.indexOf("epic") != -1){
            background.style.backgroundImage = "url(img/bg4.jpg)"
        }else{
            background.style.backgroundImage = "url("+bgText.value+")"
        }
}

function moveBG(keyCode){
    if (keyCode == 40){
            posTop -= 10
            background.style.backgroundPosition = posLeft+"px "+posTop+"px"
    }
    
    if (keyCode == 38){
            posTop += 10
            background.style.backgroundPosition = posLeft+"px "+posTop+"px"
    }
    
    if (keyCode == 37){
            posLeft += 10
            background.style.backgroundPosition = posLeft+"px "+posTop+"px"
    }
    
    if (keyCode == 39){
            posLeft -= 10
            background.style.backgroundPosition = posLeft+"px "+posTop+"px"
    }
    
    if (keyCode == 189){
            bgH -= 10
            background.style.height = bgH+"px"
    }
    
    if (keyCode == 187){
            bgH += 10
            background.style.height = bgH+"px"
    }
}



menu.addEventListener("click", function(){
    expandMenu()
})

bgText.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        changeBG()
    }
})

titleText.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        changeTitle()
    }
})

descText.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        changeDesc()
    }
})

textColor.addEventListener("change", function(){
    changeColor()
})

document.body.addEventListener("keydown", function(ev){
    moveBG(ev.keyCode)
})

add.addEventListener("click", function(){
    bgDiv = document.createElement("div")
    
    newBG = document.createElement("div")
    newT = document.createElement("div")
    newD = document.createElement("div")
    
    bgDiv.className = "col-lg-3 col-md-4 col-sm-6 col-12"
    
    newBG.className = "background"
    newT.className = "title"
    newD.className = "desc"
    
    newBG.style.cssText = background.style.cssText
    newT.style.cssText = title.style.cssText
    newD.style.cssText = desc.style.cssText
    
    newT.innerHTML = title.innerHTML
    newD.innerHTML = desc.innerHTML
    
    newBG.appendChild(newT)
    newBG.appendChild(newD)
    bgDiv.appendChild(newBG)
    display.appendChild(bgDiv)
    
})



