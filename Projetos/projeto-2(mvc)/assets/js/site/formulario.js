/**
*
*Script do layout
*
*@author code universe
*
**/

(function($, URL,Helpers){
  var form = $('form[name="formcontact"]');
  var submitContact = function(){
    $('body').on('click', '#btnSubmitContact', function(){
      var nome = $('input[name="nome"]').val();
      var email = $('input[name="email"]').val();
      var senha = $('input[name="senha"]').val();
      var identidade = $('textarea[name="identidade"]').val();

console.log($nome,$email,$senha);


    if(nome ==''){
      Swal({
          title:'Erro',
          text: "preencha seu nome",
          type: "error",
          });
        return false;
      }
    if(email ==''){
      Swal({
          title:'Erro',
          text: "preencha seu email",
          type: "error",
          });
        return false;
      }
    if(phone ==''){
      Swal({
          title:'Erro',
          text: "preencha sua senha",
          type: "error",
          });
        return false;
      }
    // if(message ==''){
    //   Swal({
    //       title:'Erro',
    //       text: "preencha sua identidade",
    //       type: "error",
    //       });
    //     return false;
    //   }

      $.ajax({
        url:URL +'/submitform',
        type: 'POST',
        dataType:'JSON',
        data: form.serialize(),
        complete: function(response){
          if (response.responseJSON.result) {
            Swal({
                title:'Enviado!',
                text: 'Aguarde o nosso retorno',
                type: 'sucess',
            }).then(function(){
              window.location.reload();
              return true
            })
          }else {
            Swal({
              title: 'Erro!',
              text: 'Ocorreu um erro',
              type: 'error',
            })
            return false;
          }
        }
      })

    });
  }

  $(document).ready(function(){
    submitContact();
  });
})($,URL,Helpers)

