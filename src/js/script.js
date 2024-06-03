const button_submit = document.getElementById('button_submit')
const form = document.getElementById('form')



button_submit.addEventListener('click', () =>{
    
    const input_name = document.getElementById('input_name')
    const input_email = document.getElementById('email')
    const msn = document.getElementById('msn')
    const error_username = document.getElementById('username_error')
    const error_email = document.getElementById('email_error')
    const error_msn = document.getElementById('msn_error')

    const email = /@hotmail.com/
    const email1 = /@email.com/
    const email2 = /@aluno.ce.gov.br/
    const email3 = /@prof.ce.gov.br/
    const email4 = /@yahoo.com/
    const email5 = /@gmail.com/
    const email6 = /@outlook.com/

    const validation =  new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
   
    if(input_name.value == 0 || input_email.value == 0 || msn.value == 0) {
        if (input_name.value == 0 && input_email.value == 0 && msn.value == 0){

            input_name.setAttribute("required", "")
            input_email.setAttribute("required", "")
            msn.setAttribute("required", "")

            alert('Nenhum dos campos foram preenchidos!')

            error_username.textContent = "Esse campo não pode ser vazio"
            error_email.textContent = "Esse campo não pode ser vazio"
            error_msn.textContent = "Esse campo não pode ser vazio"

        }else if (input_name.value == 0) {

            input_name.setAttribute("required", "")

            error_username.textContent = "Esse campo não pode ser vazio"
            
            alert('O campo do nome não foi preenchido!')

        } else if (input_email.value == 0){

            input_email.setAttribute("required", "")

            error_email.textContent = "Esse campo não pode ser vazio"

            alert("O campo do email não foi preenchido!")
        } else if(msn.value == 0){

            msn.setAttribute("required", "")

            error_msn.textContent = "Esse campo não pode ser vazio"

            alert("O campo de mensagem não foi preenchido!")
        }}
    else{
        if (email.test(input_email.value) || email1.test(input_email.value) || email2.test(input_email.value) || email3.test(input_email.value) || email4.test(input_email.value) || email5.test(input_email.value) || email6.test(input_email.value)){
            alert("O formulário foi preenchido com sucesso!" +
                "\nNome: " + input_name.value +
                "\nEmail: " + input_email.value +
                "\nMensagem: " + msn.value)
        
            input_name.value = ""
            input_email.value = ""
            msn.value = ""

            error_username.textContent = ' '
            error_email.textContent = ' '
            error_msn.textContent = ' '

            input_name.removeAttribute("required")
            input_email.removeAttribute("required")
            msn.removeAttribute("required")
        }else{
            
            alert("Email Invalido! Adicione um '@' e após o '@' adicione um '.', assim como uma extensão valida!")

            error_email.textContent = "Extensão de email Inválida ou email inexistente!"
        }
    }
})


form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

})

