/**
*
*Script do layout
*
*@author code universe
*
**/

(function($, URL,Helpers){

	var hamburguer = function(){
		$('body').on('click','.hamburguer', function(){
			$('.links').toggle();
		})
	}

	$( document ).ready(function(){
		hamburguer();
	})
})($,URL,Helpers)