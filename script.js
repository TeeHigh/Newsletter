let emailError = document.querySelector('#emailError')
let emailInput = document.querySelector('#emailInput')
let modal = document.querySelector('#modal')
let submitEvent = document.querySelector('#subscribe')
let submittedEmail = document.querySelector('.email')
let dismiss = document.querySelector('#dismiss')

let validated = true 


function addInvalidAlert(){
    emailError.classList.remove('hidden')
    emailError.classList.add('flex')

    emailInput.classList.remove('focus:border-black')
    emailInput.classList.add('errorState')

    emailInput.focus()
}
function removeInvalidAlert(){
    emailError.classList.add('hidden')
    emailError.classList.remove('flex')

    emailInput.classList.add('focus:border-black')
    emailInput.classList.remove('errorState')
}

function openModal(){
    modal.classList.remove('hidden')
    modal.classList.add('flex')
}
function closeModal(){
    modal.classList.add('hidden')
    modal.classList.remove('flex')
}



// emailInput.addEventListener('input', function(){
//     console.log(validated)
    
//     removeInvalidAlert()
// })

// submitEvent.addEventListener('click', (e) =>{
//     e.preventDefault()

//     function newFunc(){
//         if(inputValue == ''){
//             validated = false
//             addInvalidAlert()
//         }
//         else{
//             validated = true
//             removeInvalidAlert()
//             console.log(validated)
//         }
//     }

//     newFunc()
//     console.log(validated)
//     if(validated){
//         openModal()
        
//     }
    
// })

// dismiss.addEventListener('click', function(){
//     closeModal()
// })

// console.log(inputValue)

function validation(email){
    // const regEx = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4]$/)
    const regEx = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    return regEx.test(email)
}

submitEvent.addEventListener('click', (e) =>{
    e.preventDefault()
    const inputValue = emailInput.value.trim()

    if(validation(inputValue)){
        openModal()
        submittedEmail.value = ''

        removeInvalidAlert()
    }
    else{
        addInvalidAlert()
    }
})

dismiss.addEventListener('click', function(){
    closeModal()
})