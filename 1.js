$(function(){
	$('body').on('click', function(){
	})
    $('.num-input').on('click',function(e){
        $(this).addClass('active');
    })
    $('.num-key-ul li').on('mousedown',function(e){
        var text=$('.num-input.active .text-num').text()+$(this).text();
        $(this).addClass('visited');
        $('.num-input.active .text-num').text(text);
    })
    $('.num-key-ul li').on('mouseup',function(e){
    	$('.num-key-ul li').removeClass('visited');
    });
	$('.change-key li').on('mousedown',function(e){
        $(this).addClass('visited');
        if($(this).hasClass('delet-btn')){
            $('.num-input.active .text-num').text('');
        }
        if($(this).hasClass('ok-btn')){
            search();
        }
    })
    $('.change-key li').on('mouseup',function(e){
        $('.change-key li').removeClass('visited');
    })
    //查询状态切换
    $('.search-btn-box button').on('click',function(){
        $('.search-btn-box button').removeClass('visited');
        $(this).addClass('visited');
    })
    //使用积分
    $('.using-point-btn').on('click',function(){
        $('#using_point_modal').modal('show');
    })
    $('#using_point_modal .cancel-btn').on('click',function(){
        $('#using_point_modal').modal('hide');
    })
    //使用优惠券
    $('.using-coupon-btn').on('click',function(){
        $('#using_coupon_modal').modal('show');
    })
    $('#using_coupon_modal .cancel-btn').on('click',function(){
        $('#using_coupon_modal').modal('hide');
    })

    //选择优惠券
    $('.coupon-list').on('click',function(){
        //选中
        $(this).find('.coupon-dot img').attr('src','img/coupon-top-dot-check.png');
        $(this).find('.coupon-top').css('background-color','#ef8f52');
        $(this).find('.coupon-top img').attr('src','img/list-coupon-icon-check.png');
        $(this).find('.coupon-bottom').css('color','#ef8f52');
        //未选中
        $(this).find('.coupon-dot img').attr('src','img/coupon-top-dot.png');
        $(this).find('.coupon-top').css('background-color','#51A6FF');
        $(this).find('.coupon-top img').attr('src','img/list-coupon-icon.png');
        $(this).find('.coupon-bottom').css('color','#51A6FF');
    })
})
function search(){

}