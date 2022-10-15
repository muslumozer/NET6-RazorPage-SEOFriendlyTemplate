// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var pageUrl = window.location.href.substr(window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/')) - 1);
var menuList = document.querySelectorAll("#navbarNavDropdown > ul > li > a");
menuList.forEach(element => {
    if (element.href.substr(window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/')) - 1) == pageUrl) {
        $(element).addClass('active');
    }
});

const displayB = (bActive) => {
    $(bActive).removeClass("d-none");
    $(bActive).addClass("d-block");
}

const displayN = (nActive) => {
    $(nActive).removeClass("d-block");
    $(nActive).addClass("d-none");
}

/*components*/
var fileSizeDropdown_index = 2;
$('.file-size-dropdown-item').click(function (event) {
    $(".dropdown-button-choice").html($(this).text());
    fileSizeDropdown_index = $(this).closest('li').index();
});


const progressbar = () => {
    $(".progress-bar").css('width', '0%');
    $(".progress").css('display', "flex");
    setTimeout(function () {
        $(".progress-bar").css('width', '10%');
        setTimeout(function () {
            $(".progress-bar").css('width', '25%');
            setTimeout(function () {
                $(".progress-bar").css('width', '40%');
                setTimeout(function () {
                    $(".progress-bar").css('width', '60%');
                    setTimeout(function () {
                        $(".progress-bar").css('width', '80%');
                        setTimeout(function () {
                            $(".progress-bar").css('width', '100%');
                            setTimeout(function () {
                                $(".progress").css('display', "none");
                                displayB(".answer-alert");
                            }, 3000);
                        }, 7000);
                    }, 7000);
                }, 5000);
            }, 3000);
        }, 2000);
    }, 1000);
}


const resultShowProgressBar = () => {

    displayN(".answer-alert");
    displayB(".resultProgressBar");

    progressbar();

};

$('#calculate').click(() => {
    displayN(".inputValidation");
    displayN(".resultDiv");
    displayB(".resultLoading");
});

$('#reset').click(() => {
    displayN(".resultDiv");
    displayN(".resultProgressBar");
    displayN(".inputValidation");
    displayN(".resultLoading");
    $(".choice-input").val("");;
});
/*components*/
