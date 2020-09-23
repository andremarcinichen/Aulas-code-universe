/**
*
*Script do layout
*
*@author code universe
*
**/
(function($, URL,Helpers){
  var form = $('form[name="formcontact"]');
  var submitform = function(){
    $('body').on('click', '#btnSubmitContact', function(){
      var nome = $('input[name="nome"]').val();
      var email = $('input[name="email"]').val();
      var senha = $('input[name="senha"]').val();
      // var identidade = $('input[name="identidade"]').val();
      console.log(nome + ', ' + email + ', ' + senha); 
      // até aqui ta ok
      $.ajax({
        url: URL + '/submitform',
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
    submitform();
  });
})($,URL,Helpers)

