/***********************************************************************************
 * Exercise Daily challenge : 
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : 
 * Create an input type text that takes/shows only letters,
 * numbers and special characters won’t be accepted
 * @typeof {string | Array}
 * @typeof {function}
 * **********************************************************************************/ 

let story = document.getElementById('story');
let form  = document.getElementById('libform');
let errorMsg = document.getElementById('error');
let sentence = [];

/******************************************************************************
 * @function sentences
 * @description: create three different sentence
 * @returns {void}
 ******************************************************************************/
function sentences() {
    const text1 = form.elements.noun.value +" "+ form.elements.verb.value +" "+
    form.elements.adjective.value +" "+ form.elements.person.value +" at " + form.elements.place.value
   
    const text2 = form.elements.noun.value +" and "+ form.elements.person.value + " are "+ form.elements.verb.value +" "+
    form.elements.adjective.value + " At " + form.elements.place.value
   
    const text3 = " at " + form.elements.place.value + " " + form.elements.noun.value +" and "+ form.elements.person.value + " are "+ form.elements.verb.value +" "+
    form.elements.adjective.value

    sentence.push(text1)
    sentence.push(text2)
    sentence.push(text3)
}

// Add submit event to formular
(() => {
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        try { 
            Array.from(form.elements).forEach((input) => {
                if(input.type !== 'submit'){
                    if(input.value.trim() == ""){
                        throw `one or many item has empty value`
                    }else{
                        sentences();
                        const nbre =  Math.floor(Math.random() * 3)
                        story.innerHTML = sentence[nbre]
                        story.style = "background:pink; padding: 15px; font-weight: bold;"
                    }
                }
            });
        }
        catch(err) {
            errorMsg.innerHTML = err;
            errorMsg.style.color = 'red';
            console.log(err);
        }
    })
})();


