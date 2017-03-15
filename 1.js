$(function(){
    $('.num-input').on('click',function(){
        $('.input-tip').hide();
        $('.cursor').show();
    })
    $('.num-key-ul li').on('click',function(){//touchend
        var text=$('.num-input .text-num').text()+$(this).text();
        $('.num-key-box li').removeClass('visited');
        $('.delet-btn').find('img').attr('src','img/delet-icon.png');
        $('.ok-btn').find('img').attr('src','img/ok-icon.png');
        $(this).addClass('visited');
        $('.num-input .text-num').text(text);
        $('.input-tip').hide();
        $('.cursor').show();
    })
    $('.change-key li').on('click',function(){//touchend
        $('.num-key-box li').removeClass('visited');
        $(this).addClass('visited');
        if($(this).hasClass('delet-btn')){
            $(this).find('img').attr('src','img/delet-icon-a.png');
            $('.num-input  .text-num').text('');
            $('.cursor').hide();
            $('.input-tip').show();
        }
        if($(this).hasClass('ok-btn')){
            $(this).find('img').attr('src','img/ok-icon-a.png');
            search();
        }
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