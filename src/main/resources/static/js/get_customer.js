$(document).ready(function(){
    (function(){
        $.ajax({
            type : "GET",
            url : "/api/customer/retrieveinfos",
            success: function(response){
              $.each(response.customers, (i, customer) => {

                let deleteButton = '<button ' +
                                        'id=' +
                                        '\"' + 'btn_delete_' + customer.id + '\"'+
                                        ' type="button" class="btn btn-danger btn_delete" data-toggle="modal" data-target="#delete-modal"' +
                                        '>&times</button>';

                let get_More_Info_Btn = '<button' +
                                            ' id=' + '\"' + 'btn_id_' + customer.id + '\"' +
                                            ' type="button" class="btn btn-info btn_id">' + 
                                            customer.id +
                                            '</button>';
                
                let tr_id = 'tr_' + customer.id;
                let customerRow = '<tr id=\"' + tr_id + "\"" + '>' +
                          '<td>' + get_More_Info_Btn + '</td>' +
                          '<td class=\"td_prenom\">' + customer.prenom + '</td>' +
                           '<td class=\"td_nom\">' + customer.nom.toUpperCase() + '</td>' +
                          '<td class=\"td_ville\">' + customer.ville + '</td>' +
                          '<td class=\"td_age\">' + customer.age + '</td>' +
                          '<td class=\"td_pseudo\">' + customer.pseudo + '</td>' +
                          '<td class=\"td_password\">' + customer.password + '</td>' +
                          '<td>' + deleteButton + '</td>' +
                          '</tr>';                
                $('#customerTable tbody').append(customerRow);
              });
            },
            error : function(e) {
              alert("ERROR: ", e);
              console.log("ERROR: ", e);
            }
        });
    })();        

});