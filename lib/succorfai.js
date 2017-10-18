function succOrFai(fail){
	var theDOM = $('<div id="result">\
					<div class="result-bg"></div>\
					<div class="result-show">\
					     <div>\
					     	<img src="images/4.png" id="result-pic" />\
					     </div>\
					     <div>\
					     	<p id="result-fail"></p>\
					     	<p id="result-in">申请已提交!</p>\
					     </div>\
					</div>\
				</div>');
	theDOM.appendTo($('body'));
    if(fail){
    	$('#result-in').text('申请提交失败!');
    	$('#result-fail').text(fail);
    	$('.result-show').css({
    		'color':'#ffb7b7'
    	});
    	$('#result-pic').attr('src','images/5.png');
    };
}
