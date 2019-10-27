$(document).ready(function () {
    $("#scrapeBtn").on("click", function () {
        $("#clickedArticles").text("");
        $.ajax({
            method: "GET",
            url: "/scrape"
        }).then(() => {
            $.ajax({
                method: "GET",
                url: "/articles"
            }).then(() => window.location.href = window.location.origin + "/articles")
        })
    })

    $(".save").on("click", (e) => {
        const id = $(e.target).data("id")
        $.put("/save", {
            id: id
        }, () => console.log("saved"))
    })

    $.put = function (url, data, callback, type) {

        if ($.isFunction(data)) {
            type = type || callback,
                callback = data,
                data = {}
        }

        return $.ajax({
            url: url,
            type: 'PUT',
            success: callback,
            data: data,
            contentType: type
        });
    }

});



// articles();


// function articles() {
// $.ajax({
//     method: "GET",
//     url:"/articles",
// }).then(function)

//                      }