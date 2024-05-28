const button_submit = document.getElementById('button_submit')
const form = document.getElementById('form')

button_submit.addEventListener('click', () =>{
    
    const input_name = document.getElementById('input_name')
    const input_email = document.getElementById('email')
    const msn = document.getElementById('msn')
    const div_username = document.getElementById('div_username')
    const div_email = document.getElementById('div_email')
    const div_msn = document.getElementById('div_msn')

    const validation =  new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    const email = /@hotmail.com/
    const email1 = /@email.com/
    const email2 = /@aluno.ce.gov.br/
    const email3 = /@prof.ce.gov.br/
    const email4 = /@yahoo.com/
    const email5 = /@gmail.com/
    const email6 = /@outlook.com/

    if(input_name.value == 0 || input_email.value == 0 || msn.value == 0) {
        if (input_name.value == 0 && input_email.value == 0 && msn.value == 0){

            input_email.setAttribute("required","")
            input_name.setAttribute("required", "")
            msn.setAttribute("required","")

            
            $('.error').animate({
            opacity: "toggle",
            }, "slow");


            alert('Nenhum dos campos foram preenchidos!')

        }else if (input_name.value == 0) {

            input_name.setAttribute("required","")

            $('#error_username').animate({
                opacity: "toggle",
                }, "slow");

            alert('O campo do nome não foi preenchido!')

        } else if (input_email.value == 0){

            input_email.setAttribute("required","")

            $('#error_email').animate({
                opacity: "toggle",
                }, "slow");

            alert("O campo do email não foi preenchido!")

        } else if(msn.value == 0){
            msn.setAttribute("required","")

            $('#error_msn').animate({
                opacity: "toggle",
                }, "slow");

            alert("O campo de mensagem não foi preenchido!")
        }}
    else{
        if (validation.test(input_email.value)){
            if(email.test(input_email.value) || email1.test(input_email.value) || email2.test(input_email.value) || email3.test(input_email.value) || email4.test(input_email.value) || email5.test(input_email.value) || email6.test(input_email.value)){
                alert("O formulário foi preenchido com sucesso!" +
                    "\nNome: " + input_name.value +
                    "\nEmail: " + input_email.value +
                    "\nMensagem: " + msn.value)
            
                input_name.value = ""
                input_email.value = ""
                msn.value = ""
                
                input_name.classList.remove('error')
                input_email.classList.remove('error')
                msn.classList.remove('error')

                input_email.removeAttribute('required')
                input_name.removeAttribute('required')
                msn.removeAttribute('required')

                $('.error').animate({
                    opacity: "toggle",
                    }, "slow");
            }else{
                alert("Extensão de email inválida!")
            }
        }else{
            alert("Email Invalido! Adicione um '@' e após o '@' adicione um '.', assim como um conteúdo antes do '.' e após o '.'")
        }
    }
})


form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

})

