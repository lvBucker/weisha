var theCommonFn = {	
	//提示弹窗
	alertWin: function(word,color){
		var word = word || '' ;
		var color = color || '#666666';
		if($('#alertWin').length==0){
			var alertWinDOM = $('<div id="alertWin">'+ word +'</div>');
			alertWinDOM.appendTo($('body'));
			$('#alertWin').css({
				'width': '50%',
				'height': '0.5rem',
				'line-height': '0.5rem',
				'text-align': 'center',
				'border-radius': '0.1rem',
				'background': color,
				'color': '#FFFFFF',
				'position': 'fixed',
				'top': '0',
				'bottom': '0',
				'left': '0',
				'right': '0',
				'margin': 'auto',
				'z-index': '999'
	//			'display': 'none'
			});
			$.fn.idSet = setTimeout(function(){
				$('#alertWin').hide(1000);
			},3000)
		}else{
			$.fn.idSet&&clearTimeout($.fn.idSet);
			
			$('#alertWin').show().text(word).css({
				'background': color,
			});
			$.fn.idSet = setTimeout(function(){
				$('#alertWin').hide(1000);
			},3000);
		}
	},
	//等待
	waiting: function (hide){
		if($('.waiting').length == 0){
			var waitDOM = $('<div class="waiting"></div>');
			waitDOM.appendTo($('body'));
			$('.waiting').css({
				'height': '100%',
				'width': '100%',
				'position': 'fixed',
				'top': '0',
				'bottom': '0',
				'left': '0',
				'right': '0',
				'margin': 'auto',
				'background': 'url(http://7xt3r1.com2.z0.glb.clouddn.com//165670/img/Fsc4kob-WplPjelKF-ECob2WP6U9.gif) no-repeat center center/1rem 1rem',
				'z-index': '999',
			});
			
		}else{
			$('.waiting').show();
		};
		hide&&$('.waiting').hide()	
	},

	//延迟
	// delay:function(){
	// 	setTimeout(function () {
 //       $("#result-error").hide();
 //    }, 6000);
	// },

//关闭失败窗口
	delay:function(seconds){
		setTimeout(function () {
       $("#result-error").hide();
    }, seconds);
	},

	//关闭成功窗口
	delay2:function(seconds){
		setTimeout(function () {
       $("#result-success").hide();
    }, seconds);
	},


//关闭成功窗口  //windowPrompts=1时，代表选择了result-success页面
	waitAndClosePrompts:function(windowPrompts,seconds){
		if(windowPrompts == '1'){
		setTimeout(function () {
       $("#result-success").hide();
    }, seconds);
	}
	},

	//url携带信息
	urlHandle: function(theUrl){
		var obj = {};
		var arr1= theUrl.slice(theUrl.lastIndexOf('?')+1).split('&');
		for(var i=0;i<arr1.length;i++){
			var arr2 = arr1[i].split('=');
			obj[arr2[0]] = arr2[1]
		}
		return obj
	},
	timeAgo: function (time){
		var now = new Date().getTime();
	    var times = now-(Number(time));
		var scs = times/1000,
		    mins = scs/60,
		    hours = mins/60,
		    days = hours/24;
		if(scs<=60){
			return '1分钟前'
		}else if(scs>60&&mins<60){
			return parseInt(mins)+'分钟前'
		}else if(mins>=60&&hours<24){
			return parseInt(hours) + '小时前'
		}else{
			return parseInt(days) + '天前'
		}
	},
	windowPrompts: function(){
		theCommonFn.alertWin("弹窗提示");
		console.log("bbb");
		var bh = $("body").height(); 
                    var bw = $("body").width(); 
                    $("#fullbg").css({ 
                       height:bh, 
                       width:bw, 
                      display:"block" 
                    }); 
                    $("#dialog").show(); 
	},
	 closeBg:function(){
	 	$("#fullbg,#dialog").hide(); 
	 }

}
