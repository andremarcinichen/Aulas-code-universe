  /**
*
*Script do layout
*
*@author code universe
*
**/

(function($, URL,Helpers){
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
