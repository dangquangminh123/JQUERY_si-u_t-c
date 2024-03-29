$(document).ready(function () {
    $('.list-thumb .thumb-item').click(function () {
        let picture_src = $(this).find('img').attr('src');
        $('.show-picture img').attr('src', picture_src);
        $('.list-thumb .thumb-item').removeClass('active');
        $(this).addClass('active');
    });

    // 2. Xử lý nhấp vào next prev
    $('.slider-nav .next-btn').click(function () {
        if ($('.list-thumb .thumb-item:last-child').hasClass('active')) {
            $('.list-thumb .thumb-item:first-child').next().click();
        } else {
            $('.list-thumb .thumb-item.active').next().click();
        }
    });

    $('.slider-nav .prev-btn').click(function () {
        if ($('.list-thumb .thumb-item:first-child').hasClass('active')) {
            $('.list-thumb .thumb-item:last-child').click();
        } else {
            $('.list-thumb .thumb-item.active').prev().click();
        }
    });
    // Active phần tử đầu tiên
    $('.list-thumb .thumb-item:first-child').click();
});