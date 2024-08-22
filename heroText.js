let heroText = document.getElementById('heroTextEffect')
const texts = ["IT Trainer", "Fullstack Developer", "Web Designer", "3D Artist", "Technischer Produktdesigner"]
let index = 0

let lastTime = 0
let contentText = ""
let letterIndex = 0
let state = 0
let delay = 50
let delayTime = 0
let setdelay = 0

function animateText(currentTime) {
    let deltaTime = currentTime - lastTime
    
    if(deltaTime > delay){

        lastTime = currentTime

        if(state == 0){
            if(letterIndex <= texts[index].length - 1 ){
                contentText += texts[index][letterIndex]
                heroText.innerHTML = contentText + "|"
                // console.log(index , letterIndex)
                letterIndex ++
            }
        }     
        
        if(state == 1){
            delayTime ++
            if(heroText.innerHTML == contentText){
                heroText.innerHTML = contentText + "|"
            }
            else{
                heroText.innerHTML = contentText   
            }

            if(delayTime >= setdelay){
                state = 2
                delayTime = 0
                setdelay = 3
                
            }
        }

        if(state == 2 ){
            delayTime ++
            if(heroText.innerHTML == contentText){
                heroText.innerHTML = contentText + "|"
            }
            else{
                heroText.innerHTML = contentText   
            }

            if(delayTime >= setdelay){
                contentText = ""
                state = 0
                delayTime = 0
                delay = 50
                
            }
        }

        
        if(letterIndex > texts[index].length -1 ){
            state = 1
            letterIndex = 0
            delay = 300
            setdelay = 2
            index ++
            if(index > texts.length - 1){
                index = 0 
            }
            
        }

    }
    
    
    

    requestAnimationFrame(animateText)
}


requestAnimationFrame(animateText)


