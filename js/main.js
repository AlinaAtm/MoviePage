

$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");




function hide1() {
	$('#select_language').addClass('hide');
};

function hide2() {
	$('#select_subtitles').addClass('hide');
};

function hide3() {
	$('#select_quality').addClass('hide');
};

$('#language_btn').click(function() {
	$('#select_language').toggleClass('hide');
	$('#hint_language').toggleClass('hide');
});

$('#language_btn').hover(function() {
	$('#hint_language').toggleClass('hide');
});

$('#subtitles_btn').hover(function() {
	$('#hint_sub').toggleClass('hide');
});


$('#subtitles_btn').click(function() {
	$('#select_subtitles').toggleClass('hide');
	$('#hint_sub').toggleClass('hide');
});

$('#quality_btn').click(function() {
	$('#select_quality').toggleClass('hide');
	$('#hint_q').toggleClass('hide');
});

$('#quality_btn').hover(function() {
	$('#hint_q').toggleClass('hide');
});


$('#fullscreen_btn').click(function() {
	$('#fullscreen').toggleClass('hide');
});


$('#fullscreen_btn').hover(function() {
	$('#hint_f').toggleClass('hide');
});

$('#bar_play_btn').hover(function() {
	$('#hint_p').toggleClass('hide');
});

$('#sound_btn').hover(function() {
	$('#hint_s').toggleClass('hide');
});

$('#wl_btn').hover(function() {
	$('#hint_wl').toggleClass('hide');
});

$('#fav_btn').hover(function() {
	$('#hint_fav').toggleClass('hide');
});




