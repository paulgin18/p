
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
			var imc=txtPeso/Math.pow(txtAltura,2);
			imc= Math.round(imc*100)/100.
			var s="", p="", por=0, color="";
			
			
			
			$("#divResul").show();
			if(txtEdad<60){
				if (imc<16){
					color="style='color: #d9534f'";
				}else if(imc<17){
						color="style='color: #f2b968'";
				}else if(imc<18.5){
						color="style='color: #73c9e3'";
				}else if(imc<25){
					color="style='color: #5cb85c'";
				}else if(imc<30){
					color="style='color: #337ab7'";
				}else if(imc<35){
					color="style='color: #73c9e3'";
				}else if(imc<40){
					color="style='color: #f2b968'";
				}else if(imc>=40){
					color="style='color: #d9534f'";
				}
				
				s="<div class='form-group col-xs-8' style='color: #d9534f'>Delgadez Grado III</div><div class='form-group col-xs-4' style='color: #d9534f'><16</div> <br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#f2b968'>Delgadez Grado II</div><div class='form-group col-xs-4' style='color: #f2b968'>16 a <17</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#73c9e3'>Delgadez Grado I</div><div class='form-group col-xs-4' style='color: #73c9e3'>17 a <18.5</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#5cb85c'>Normal</div><div class='form-group col-xs-4' style='color: #5cb85c'>18.5 a <25</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#337ab7'>Sobrepeso (Preobeso)</div><div class='form-group col-xs-4' style='color: #337ab7'>25 a <30</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#73c9e3'>Obesidad Grado I</div><div class='form-group col-xs-4' style='color: #73c9e3'>30 a <35</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#f2b968'>Obesidad Grado II</div><div class='form-group col-xs-4' style='color: #f2b968'>35 a <40</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#d9534f'>Obesidad Grado III</div><div class='form-group col-xs-4' style='color: #d9534f'>>=40</div><br/>" ;
				
				p="<div class='container'>"+
					'<div class="progress">'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width:16%"></div>'+
					'<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style="width:1%"></div>'+
					'<div class="progress-bar progress-bar-info progress-bar-striped active" style="width:1.5%"></div>'+
					'<div class="progress-bar progress-bar-success progress-bar-striped active" style="width:6.5%"></div>'+
					'<div class="progress-bar progress-bar" role="progressbar active" style="width:5%"></div>'+
					'<div class="progress-bar progress-bar-info progress-bar-striped active" style="width:5%"></div>'+
					'<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style="width:5%"></div>'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width:60%"></div>'+
					'</div>'+
				
'<div id="pgTexto" style="height:10px;width:100%;position:absolute; font-size:9px; color:#5cb85c">'+
'<center><img class="img-responsive" width="10" height="10" src="img/trian.jpg" alt="">Ideal</center></div></div>';
	//height: 10px; width: 314px; position:0px ; font-size: 10px; left: 100px;
	por='-25%';
			}else{
				s="<div class='form-group col-xs-7' style='color:#d9534f'>Delgadez</div><div class='form-group col-xs-5' style='color:#d9534f'><23.0</div><br/>";
				s=s+"<div class='form-group col-xs-7' style='color:#5cb85c'>Normal</div><div class='form-group col-xs-5' style='color:#5cb85c'>>23 a <28</div><br/>";
				s=s+"<div class='form-group col-xs-7' style='color:#f2b968'>Sobrepeso</div><div class='form-group col-xs-5' style='color:#f2b968'>>=28 a <32</div><br/>";
				s=s+"<div class='form-group col-xs-7' style='color:#d9534f'>Obesidad</div><div class='form-group col-xs-5' style='color:#d9534f'>>=32</div><br/>";
				
				p="<div class='container'>"+
					'<div class="progress">'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width:23%"></div>'+
					'<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style="width:4%"></div>'+
					'<div class="progress-bar progress-bar-warning progress-bar-striped active" style="width:5%"></div>'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" style="width:68%"></div>'+
					'</div>'+
				
'<div id="pgTexto" style="height:10px;width:100%;position:absolute; font-size:9px; color:#5cb85c">'+
'<center><img class="img-responsive" width="10" height="10" src="img/trian.jpg" alt="">Ideal</center></div></div>';
	//height: 10px; width: 314px; position:0px ; font-size: 10px; left: 100px;
	por='-22.1px';	
				if(imc<=23){
						color="style='color: #d9534f'";
				}else if(imc<28){
						color="style='color: #5cb85c'";
				}else if(imc<32){
					color="style='color: #f2b968'";
				}else if(imc>=32){
					color="style='color: #d9534f'";
				}
			}
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
					//$('html,body').animate({scrollTop: $('resul').offset().top()}, 'slow');
					$('#divResul').html("<div class=''><center><h3>RESULTADO</h3></center>"+
					"<center><h2 "+color+">"+imc+"</h2></center><hr/>"+
					p+
					'</div><br/>');
                    $('#success').html("<div class='alert alert-success' id='resul' name='resul'>");
                    //$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                      //  .append("</button>");
					      
                    $('#success > .alert-success').append(
					"<script type='text/javascript'>$('#pgTexto').animate({left: '"+por+"'}, 'slow');</script><strong>"+s+"</strong>");
                    $('#success > .alert-success')
                        .append('</div><div id="re"></div>');
						$("#divView").attr("tabindex",-1).focus();
                    //clear all fields
                    //$('#contactForm').trigger("reset");
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
