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
      alert('teste')
      var nome = $('input[name="nome"]').val();
      var email = $('input[name="email"]').val();
      var senha = $('input[name="senha"]').val();
      var identidade = $('input[name="identidade"]').val();
      console.log(nome + ', ' + email + ', ' + senha);
      $.ajax({
        url:URL +'/submitform',
        type: 'POST',
        dataType:'JSON',
        data: form.serialize(),
        complete: function(response){
          if (response.responseJSON.result) {
            swal({
                title:'Enviado!',
                text: 'Aguarde o nosso retorno',
                type: 'sucess',
            }).then(function(){
              window.location.reload();
              return true
            })
          }else {
            swal({
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

