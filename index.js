$(document).ready(function () {

    $(".save").click(function () {
        //console.log("Save button'una klik edildi");

        showMessage("Save was successful");
    });

    $(".update").click(function () {
        //console.log("Update button'una klik edildi");

        showMessage("Update was successful");
    });

    $(".delete").click(function () {
        //console.log("Delete button'una klik edildi");

        showMessage("Deletion was successful");
    });

    function showMessage(data) {
        $(".message").html(data).slideDown(1000).delay(1000).slideUp(1000);
    };

});