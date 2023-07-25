let emailError = document.querySelector('#emailError')
let emailInput = document.querySelector('#emailInput')
let modal = document.querySelector('#modal')
let submitEvent = document.querySelector('#subscribe')
let dismiss = document.querySelector('#dismiss')
let submittedEmail = document.querySelector('.email')

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

function validation(email){
    const regEx = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    return regEx.test(email)
}

submitEvent.addEventListener('click', (e) =>{
    e.preventDefault()
    let inputValue = emailInput.value.trim()

    if(validation(inputValue)){
        openModal()
        submittedEmail.textContent = inputValue

        emailInput.textContent = ''

        removeInvalidAlert()
    }
    else{
        addInvalidAlert()
    }
})

dismiss.addEventListener('click', function(){
    closeModal()
})