// JavaScript source code
$(function () {

    $('#lcrboxslide').slider({
        cont: '.overview',
        prev: '.lcr_l',
        next: '.lcr_r',
        distance: 435,
        time: 1500,
        auto: true
    });
});
(function($){
    /*左右滚动*/
    var defaults={
        cont:'',
        prev:'.prev',
        next:'.next',
        time:1500,//滚动时间
        distance: null, //滚动距离
        auto: false,
	  autoDelay:"3500"
    };

    $.fn.slider=function(options){
        var o= $.extend({},defaults,options||{}),self=this;
        var jqCont=$(o.cont,self);
        var jqContWidth=jqCont.width();
        var dist= 0,maxDist=jqContWidth- o.distance;
		
		var setInt;             //自动滚动定时器变量
        clearInterval(setInt);  //先清理一次
		
        //向前滚动
        $(o.prev,self).bind('click',function(){
            if(dist>=0)return;
            dist+= o.distance;
            if(dist>=0)dist=0;
            jqCont.stop().animate({left:dist}, o.time);
        });
        //向后滚动
        $(o.next,self).bind('click',function(){
            if(Math.abs(dist)>=maxDist)return;
            dist+= -o.distance;
            if(Math.abs(dist)>=jqContWidth)dist=-maxDist;
            jqCont.stop().animate({left:dist}, o.time);
        });
		
		//自动滚动
        self.bind({
			'mouseenter': function() {
				clearInterval(setInt);  
			},
			'mouseleave':function(){
				setInt = setInterval(function () {
					$(o.next, self).trigger("click");
				},o.autoDelay);
			}	
		});
		if (o.auto) {
		  self.trigger("mouseleave");
        }	
    };
})(jQuery);
//图片滑动

