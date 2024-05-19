const button_submit = document.getElementById('button_submit')
const form = document.getElementById('form')


button_submit.addEventListener('click', () =>{
    const input_name = document.getElementById('input_name')
    const email = document.getElementById('email')
    const msn = document.getElementById('msn')

    if(input_name.value == 0 || email.value == 0 || msn.value == 0) {
        if (input_name.value == 0 && email.value == 0 && msn.value == 0){

            input_name.setAttribute("required", "")
            email.setAttribute("required", "")
            msn.setAttribute("required", "")

        }else if (input_name.value == 0) {

            input_name.setAttribute("required", "")

        } else if (email.value == 0){

            email.setAttribute("required", "")

        } else if( msn.value == 0){

            msn.setAttribute("required", "")

        }
    } else{
        
        alert("O formulário foi preenchido com sucesso!" +
            "\n Nome: " + input_name.value +
            "\nEmail: " + email.value +
            "\nMensagem: " + msn.value)

        input_name.value = ""
        email.value = ""
        msn.value = ""

        input_name.removeAttribute("required")
        email.removeAttribute("required")
        msn.removeAttribute("required")
    }
})

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()
})