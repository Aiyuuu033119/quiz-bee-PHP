$(document).ready(function () {
    
    var storedScores = JSON.parse(localStorage.getItem("Scores"));

    if (storedScores != null) {
        storedScores.sort(function (a, b) {
            return b.score - a.score;
        })

        var html = ''
        var name = '';

        storedScores.forEach((element, index) => {
            
            name = element.user;

            if (index <= 3) {
                html += '<li style="list-style:none; font-size: 30px;  text-align:center">' + name.replace(/%20/g,' ') + ' - ' + element.score + '%</li>';
                return false;
            }
        });

        $('.list').html(html);
    } else {
        var html = ''

        html += '<li style="list-style:none; font-size: 30px; text-align:center">No User Yet</li>';

        $('.list').html(html);
    }


    $('.play-btn').on('click', function () {
        window.location.href = "../index.html";
    });
});