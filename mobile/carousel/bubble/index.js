$('.app').append(
    '<div id="scroll-dom">' +
    '<ul>' +
    '<li><div></div><em>3连包洗衣香皂<br/>低至33元</em></li>' +
    '<li><div></div><em>ELC文具全场<br/>满300减100</em></li>' +
    '<li><div></div><em>Mothercare<br/>半价起抢</em></li>' +
    '<li><div></div><em>熊本熊拉拉裤<br/>满99减30</em></li>' +
    '<li><div></div><em>完达山4段<br/>第2件半价</em></li>' +
    '</ul>' +
    '</div>');

var scrollCom = $("#scroll-dom");

function autoScroll() {
    scrollCom.find("li").eq(3).css({
        opacity: 0
    });
    scrollCom.find("ul:first").animate({
        marginTop: "-1.2rem"
    }, 1000, function () {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
        $(this).find("li").eq(2).animate({
            opacity: 1
        }, 1000);
    }).find("li:first").animate({
        opacity: 0
    }, 500);
}
setInterval(autoScroll, 3000);