
const startBtn = $("#start");
const endBtn = $("#end");
const nextBtn = $("#next");
const prevBtn = $("#prev");
const links = $(".pagination .links");


for (let cnt = 1; cnt <= links.attr("data-count"); ++cnt) {
    $(`<li><a href="#">${cnt}</a></li>`).appendTo(links);
}

const link = $(".pagination .links>li>a");
let current = 0;

const activeLink = (target) => {

    link.removeClass("active");
    target.addClass("active");

    current = target.text() - 1;

    if (target.text() == 1) {
        startBtn.attr("disabled", "disabled");
        prevBtn.attr("disabled", "disabled");
    }
    else {
        startBtn.removeAttr("disabled");
        prevBtn.removeAttr("disabled");
    }

    if (target.text() == link.length) {
        endBtn.attr("disabled", "disabled");
        nextBtn.attr("disabled", "disabled");
    }
    else {
        endBtn.removeAttr("disabled");
        nextBtn.removeAttr("disabled");
    }

}

activeLink(link.eq(current));

link.click(e => activeLink($(e.currentTarget)));
startBtn.click(() => activeLink(link.eq(0)));
endBtn.click(() => activeLink(link.eq(link.length - 1)));
nextBtn.click(() => activeLink(link.eq(current + 1)));
prevBtn.click(() => activeLink(link.eq(current - 1)))

