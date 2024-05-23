const button_submit = document.getElementById('button_submit')
const form = document.getElementById('form')



button_submit.addEventListener('click', () =>{
    
    const input_name = document.getElementById('input_name')
    const input_email = document.getElementById('email')
    const msn = document.getElementById('msn')

    const validation =  new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
   
    if(input_name.value == 0 || input_email.value == 0 || msn.value == 0) {
        if (input_name.value == 0 && input_email.value == 0 && msn.value == 0){

            input_name.setAttribute("required", "")
            input_email.setAttribute("required", "")
            msn.setAttribute("required", "")

            alert('Nenhum dos campos foram preenchidos!')

        }else if (input_name.value == 0) {

            input_name.setAttribute("required", "")
            alert('O campo do nome não foi preenchido!')

        } else if (input_email.value == 0){

            input_email.setAttribute("required", "")
            alert("O campo do email não foi preenchido!")
        } else if(msn.value == 0){

            msn.setAttribute("required", "")
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
        
            input_name.removeAttribute("required")
            input_email.removeAttribute("required")
            msn.removeAttribute("required")
        }else{
            alert("Email Invalido! Adicione um '@' e após o '@' adicione um '.', assim como um conteúdo antes do '.' e após o '.'")
        }
    }
})


form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

})

