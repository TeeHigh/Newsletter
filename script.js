let emailError = document.querySelector('#emailError')
let emailInput = document.querySelector('#emailInput')
let modal = document.querySelector('#modal')
let submitEvent = document.querySelector('#subscribe')
let dismiss = document.querySelector('#dismiss')
let userEmail = document.querySelector('.email')
let inputValue = emailInput.value
let validated = false 


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

let newFunc = function(){

    if(inputValue == 0){
        validated = false
        addInvalidAlert()
    }

}

emailInput.addEventListener('input', function(){
    removeInvalidAlert()
})

submitEvent.addEventListener('click', () =>{
    newFunc()
    console.log(validated)
    if(validated){
        openModal()
    }
})