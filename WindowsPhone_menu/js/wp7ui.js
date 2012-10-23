 //Version 1 - Windows phone style UI written by Martin Sansom, Ian Ovenden and Chris Storey from Sparkstone Technology
 
 $(document).ready(function() {
	
	var stackamount = $('ul.wp7_menu li').length;	
	var lisingle = $('ul.wp7_menu li').width();

	//## square the element	
    $('ul.wp7_menu li').css({'height': lisingle + 'px'});
	
	//## tall element
	var gutter = parseInt(jQuery("ul.wp7_menu li").css("margin-left"));
    $('ul.wp7_menu li.tall').css({'height': ((lisingle*2)+(gutter)) + 'px'});
	
	//## element after tall
	//$('ul.wp7_menu li').each(function() {
	//		if ($(this).prev().hasClass('tall'))
	//		{
	//			$(this).css({'margin-top': '-'+((lisingle)+(gutter)) + 'px'});
		//	}
	//	});
	
	function buildMenu() {
		$('ul.wp7_menu li').each(function(i, el) {
			window.setTimeout(function(){
			$(el).removeClass('skew');
				}, 50 * i);
		});
    };
	
	
	$(window).resize(function () { 
	var lisingle = $('ul.wp7_menu li').width();

	//## square the element	
    $('ul.wp7_menu li').css({'height': lisingle + 'px'});
	
	//## tall element
	var gutter = parseInt(jQuery("ul.wp7_menu li").css("margin-left"));
    $('ul.wp7_menu li.tall').css({'height': ((lisingle*2)+(gutter)) + 'px'});
	});
	
	//## element after tall
	//$('ul.wp7_menu li').each(function() {
	//		if ($(this).prev().hasClass('tall'))
	//		{
		//		$(this).css({'margin-top': '-'+((lisingle)+(gutter)) + 'px'});
		//	}
	//	});
	
	//## start animate all tiles except active tile
	function menuanimate(url) {
		var j=0;
        $('ul.wp7_menu li').each(function(i, el) {
			if (!$(el).hasClass('active'))
			{
				window.setTimeout(
					function(){
						$(el).addClass('skew');
					}
				, 50*j);
				j++;
			}				
		});
		
		window.setTimeout(function(){
			
			window.setTimeout(function(){
				location.href=url;
			},700);
			
			$('.active').addClass('skew');
		},600+(stackamount*5));
		
    };
	
	//## end animate all tiles except active tile	
	var xStart;
    $("ul.wp7_menu li a").bind({
        "click": function(e) {
			e.preventDefault();
			$('ul.wp7_menu li').removeClass('active')
        	$(this).parent().addClass('active');
			menuanimate($(this).attr('href'));
			return false;
        },
        "mousedown": function(e) {
            e.preventDefault();
        }
    });
	
	//## delay before initial build		
	window.setTimeout(function(){
		buildMenu();
	},500);
			
 });	