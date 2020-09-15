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
      var name = $('input[name="name"]').val();
      var email = $('input[name="email"]').val();
      var phone = $('input[name="phone"]').val();
      var message = $('textarea[name="message"]').val();

    if(name ==''){
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
          text: "preencha seu telefone",
          type: "error",
          });
        return false;
      }
    if(message ==''){
      Swal({
          title:'Erro',
          text: "preencha sua mensagem",
          type: "error",
          });
        return false;
      }

      $.ajax({
        url:URL +'/submitContact',
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










//   Swal.fire({
//   title: 'Custom width, padding, background.',
//   width: 600,
//   padding: '3em',
//   background: '#fff url(/images/trees.png)',
//   backdrop: `
//     rgba(0,0,123,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `
// })
