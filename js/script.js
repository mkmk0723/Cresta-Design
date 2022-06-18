// toggle-btn
$(".toggle-btn").click(function(){
	$(this).toggleClass('open');
	$(".menu").toggleClass("open");
    $('body').toggleClass('noscroll'); 
});
$(".menu a").click(function() {
	$(".toggle-btn").removeClass('open');
	$(".menu").removeClass('open');
    $('body').removeClass('noscroll'); 

});

