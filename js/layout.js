//宣告window的東西不要放fonction裡面
var $win = $(window);

$(function(){
	//alert("123");

	//取消連結虛線
    $("a").focus(function(){
         $(this).blur();
     }); 
    $("button").focus(function(){
         $(this).blur();
     }); 

    //手機選單offcanvas
  	$('[data-toggle="offcanvas"]').click(function () {
    	$('.row-offcanvas').toggleClass('active');
  	});
});