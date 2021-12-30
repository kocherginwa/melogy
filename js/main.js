$(document).ready(function () {
    // console.log("Site is ready for manipulation");
    $(".home-image path").on('click', function () {
        console.log($(this).attr("floor"));
    });
});
