$(document).ready(function() {
    $("#add_new_customer").submit(function(evt) {
        evt.preventDefault();

        let formData = {
            prenom : $("#prenom").val(),
            nom :  $("#nom").val(),
            ville: $("#ville").val(),
            age: $("#age").val(),
            pseudo: $("#pseudo").val(),
            password: $("#password").val()
        }

        $.ajax({
            url: '/api/customer/create',
            type: 'POST',
            contentType : "application/json",
            data: JSON.stringify(formData),
            dataType : 'json',
            async: false,
            cache: false,
            success: function (response) {
                let customer = response.customers[0];
                let customerString = "{ prenom: " + customer.prenom + " , nom: " + customer.nom +", ville: " + customer.ville +",age: " + customer.age  +", pseudo: "+ customer.pseudo +",password :" + customer.password +" }"
                let successAlert = '<div class="alert alert-success alert-dismissible">' + 
                                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                        '<strong>' + response.message + '</strong> Customer\'s Info = ' + customerString;
                                    '</div>'
                $("#response").append(successAlert);
                $("#response").css({"display": "block"});

                resetUploadForm();
            },
            error: function (response) {

                let errorAlert = '<div class="alert alert-danger alert-dismissible">' + 
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<strong>' + response.message + '</strong>' + ' ,Error: ' + message.error + 
                                '</div>'
                $("#response").append(errorAlert);
                $("#response").css({"display": "block"});

                resetUploadForm();
            }
        });
    });

    function resetUploadForm(){
        $("#prenom").val("");
        $("#nom").val("");
        $("#ville").val("");
        $("#age").val("");
        $("#pseudo").val("");
        $("#password").val("");
    }

});
