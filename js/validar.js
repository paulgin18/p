$(function() {

    $("#contactForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error txtAlturas or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var rbtSexo = $("input#rbtSexo").val();
            var txtEdad = $("input#txtEdad").val();
            var txtPeso = $("input#txtPeso").val();
            var txtAltura = $("input#txtAltura").val();
            $.ajax({
                url: "././mail/contact_me.html",
                type: "POST",
                data: {
                    rbtSexo: rbtSexo,
                    txtPeso: txtPeso,
                    txtEdad: txtEdad,
                    txtAltura: txtAltura
                },
                cache: false,
                success: function() {
                    // Enable button & show success txtAltura
                    $("#btnSubmit").attr("disabled", false);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your "+txtEdad+" has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail txtAltura
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Error:,4 los datos");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#rbtSexo').focus(function() {
    $('#success').html('');
});
