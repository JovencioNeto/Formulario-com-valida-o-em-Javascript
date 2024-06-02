const button_submit = document.getElementById('button_submit')
const form = document.getElementById('form')



button_submit.addEventListener('click', () =>{
    
    const input_name = document.getElementById('input_name')
    const input_email = document.getElementById('email')
    const msn = document.getElementById('msn')
    const error_username = document.getElementById('error_username')
    const error_email = document.getElementById('error_email')
    const error_msn = document.getElementById('error_msn')

    const validation =  new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
   
    if(input_name.value == 0 || input_email.value == 0 || msn.value == 0) {
        if (input_name.value == 0 && input_email.value == 0 && msn.value == 0){

            input_name.setAttribute("required", "")
            input_email.setAttribute("required", "")
            msn.setAttribute("required", "")

            error_username.innerText = '<- ERROR'
            error_email.innerText = '<- ERROR'
            error_msn.innerText = '<- ERROR'

            error_username.classList.add('error')
            error_email.classList.add('error')
            error_msn.classList.add('error')
            alert('Nenhum dos campos foram preenchidos!')

        }else if (input_name.value == 0) {

            input_name.setAttribute("required", "")
            error_username.innerText = '<- ERROR'
            error_username.classList.add('error')
            alert('O campo do nome não foi preenchido!')

        } else if (input_email.value == 0){

            input_email.setAttribute("required", "")
            error_email.innerText = '<- ERROR'
            error_email.classList.add('error')
            alert("O campo do email não foi preenchido!")
        } else if(msn.value == 0){

            msn.setAttribute("required", "")
            error_msn.innerText = '<- ERROR'
            error_msn.classList.add('error')
            alert("O campo de mensagem não foi preenchido!")
        }}
    else{
        if (validation.test(input_email.value)){
            alert("O formulário foi preenchido com sucesso!" +
                "\nNome: " + input_name.value +
                "\nEmail: " + input_email.value +
                "\nMensagem: " + msn.value)
        
            input_name.value = ""
            input_email.value = ""
            msn.value = ""

            error_username.innerText = ' '
            error_email.innerText = ' '
            error_msn.innerText = ' '

            error_username.classList.remove('error')
            error_email.classList.remove('error')
            error_msn.classList.remove('error')
            

            input_name.removeAttribute("required")
            input_email.removeAttribute("required")
            msn.removeAttribute("required")
        }else{
            error_email.innerText = '<- ERROR'
            error_email.classList.add('error')
            alert("Email Invalido! Adicione um '@' e após o '@' adicione um '.', assim como um conteúdo antes do '.' e após o '.'")
        }
    }
})


form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

})

