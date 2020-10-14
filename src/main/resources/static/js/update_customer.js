$(document).ready(function(){
    $("#update_customer_form").submit(function(evt) {
        evt.preventDefault();
        try {
            let customerId = $("#customer_id").val();

            let formData = {
                prenom : $("#customer_prenom").val(),
                nom :  $("#customer_nom").val(),
                ville: $("#customer_ville").val(),
                age: $("#customer_age").val()
                pseudo: $("#customer_pseudo").val(),
                password: $("#customer_password").val()
            }
            
            $.ajax({
                url: '/api/customer/updatebyid/' + customerId + "/",
                type: 'PUT',
                contentType : "application/json",
                data: JSON.stringify(formData),
                dataType : 'json',
                async: false,
                cache: false,
                success: function (response) {
                    let customer = response.customers[0];
                    let customerString = "{prenom:" + customer.prenom +
                                                " ,nom:" + customer.nom +
                                                ", ville:" + customer.ville +
                                                ", age:" + customer.age  +
                                                 ",pseudo:" + customer.pseudo  +
                                                 ",password:" + customer.password  + "}"
                    let successAlert = '<div class="alert alert-success alert-dismissible">' + 
                                            '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                            '<strong>' + response.message + '</strong> Customer\'s Info = ' + customerString;
                                        '</div>'

                    $("#tr_" + customerId + " td.td_prenom").text(customer.prenom.toUpperCase());
                    $("#tr_" + customerId + " td.td_nom").text(customer.nom.toUpperCase());
                    $("#tr_" + customerId + " td.td_ville").text(customer.ville.toUpperCase());
                    $("#tr_" + customerId + " td.td_age").text(customer.age.toUpperCase());
                    $("#tr_" + customerId + " td.td_pseudo").text(customer.pseudo.toUpperCase());
                    $("#tr_" + customerId + " td.td_password").text(customer.password.toUpperCase());

                    $("#response").empty();
                    $("#response").append(successAlert);
                    $("#response").css({"display": "block"});
                },

                error: function (response) {
                    let errorAlert = '<div class="alert alert-danger alert-dismissible">' + 
                                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                        '<strong>' + response.message + '</strong>' + ' ,Error: ' + message.error + 
                                    '</div>';

                    $("#response").empty();                                    
                    $("#response").append(errorAlert);
                    $("#response").css({"display": "block"});
                }
            });
        } catch(error){
            console.log(error);
            alert(error);
        }
    });

    $(document).on("click", "table button.btn_id", function(){
        let id_of_button = (event.srcElement.id);
        let customerId = id_of_button.split("_")[2];
  
        $.ajax({
            url: '/api/customer/findone/' + customerId,
            type: 'GET',
            success: function(response) {
                let customer = response.customers[0];                
                $("#customer_id").val(customer.id);
                $("#customer_prenom").val(customer.prenom);
                $("#customer_nom").val(customer.nom);
                $("#customer_ville").val(customer.ville);
                $("#customer_age").val(customer.age);
                $("#customer_pseudo").val(customer.pseudo);
                $("#customer_password").val(customer.password);
                $("#div_customer_updating").css({"display": "block"});
            },
            error: function(error){
                console.log(error);
                alert("Error -> " + error);
            }
        });        
    });
});