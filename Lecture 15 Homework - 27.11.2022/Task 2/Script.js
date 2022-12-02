var accordionContentArr;
var i;

function expand(number) {

    accordionContentArr = document.querySelectorAll(".accordionItem > .accordionContent");

    for(i = 0; i < accordionContentArr.length; i++) {
        accordionContentArr[i].setAttribute("style", "display: none");
    }

    accordionContentArr[number].setAttribute("style", "display: block");
    
}
