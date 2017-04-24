
$(function() {
	$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
	
    $("#contactForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
  
        },
        submitSuccess: function($form, event) {
            
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            
            var rbtSexo = $("input#rbtSexo").val();
            var txtEdad = $("input#txtEdad").val();
            var txtPeso = $("input#txtPeso").val();
            var txtAltura = $("input#txtAltura").val();
			var imc=txtPeso/Math.pow(txtAltura,2);
			imc= Math.round(imc*100)/100;
			var s="", p="", por=0, color="", texto="";
			var pp=0;
if(imc>=50&& imc<=100){
	pp=(48*imc/50)-50;
}else if(imc>100){
	pp=47.5;
}else{
	
	pp=(-imc+49.99)*(-1);
}
			$("#divResul").show();
			if(txtEdad<60){
				if (imc<16){
					color="style='color: #d9534f'";
					texto="Delgadez Grado III";
					$("#divR1").show();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<17){
						color="style='color: #f2b968'";
						texto="Delgadez Grado II";
						$("#divR1").show();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<18.5){
						color="style='color: #73c9e3'";
						texto="Delgadez Grado I";
						$("#divR1").show();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<25){
					color="style='color: #5cb85c'";
					texto="Normal";
					$("#divR1").hide();
	$("#divR2").show();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<30){
					color="style='color: #337ab7'";
					texto="Sobrepeso";
					$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").show();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<35){
					color="style='color: #73c9e3'";
					texto="Obesidad Grado I";
					$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").show();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<40){
					color="style='color: #f2b968'";
					texto="Obesidad Grado II";
					$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").show();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc>=40){
					color="style='color: #d9534f'";
					texto="Obesidad Grado III";
					$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").show();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}
				
				s="<div class='form-group col-xs-8' style='color: #d9534f'>Delgadez Grado III</div><div class='form-group col-xs-4' style='color: #d9534f'><16</div> <br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#f2b968'>Delgadez Grado II</div><div class='form-group col-xs-4' style='color: #f2b968'>16 a <17</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#73c9e3'>Delgadez Grado I</div><div class='form-group col-xs-4' style='color: #73c9e3'>17 a <18.5</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#5cb85c'>Normal</div><div class='form-group col-xs-4' style='color: #5cb85c'>18.5 a <25</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#337ab7'>Sobrepeso (Preobeso)</div><div class='form-group col-xs-4' style='color: #337ab7'>25 a <30</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#73c9e3'>Obesidad Grado I</div><div class='form-group col-xs-4' style='color: #73c9e3'>30 a <35</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#f2b968'>Obesidad Grado II</div><div class='form-group col-xs-4' style='color: #f2b968'>35 a <40</div><br/>" ;
				s=s+"<div class='form-group col-xs-8' style='color:#d9534f'>Obesidad Grado III</div><div class='form-group col-xs-4' style='color: #d9534f'>>=40</div><br/>" ;
				
				p="<div class=''>"+
					'<div class="progress">'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width:14.9%"></div>'+
					'<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style="width:1.2%"></div>'+
					'<div class="progress-bar progress-bar-info progress-bar-striped active" style="width:1.5%"></div>'+
					'<div class="progress-bar progress-bar-success progress-bar-striped active" style="width:6.9%"></div>'+
					'<div class="progress-bar progress-bar" role="progressbar active" style="width:5%"></div>'+
					'<div class="progress-bar progress-bar-info progress-bar-striped active" style="width:5%"></div>'+
					'<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style="width:5.3%"></div>'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width:60.2%"></div>'+
				'</div>'+
				
'<div id="pgTexto" style="height:10px;width:100%;position:absolute; font-size:9px; color:#5cb85c">'+
'<center><img class="img-responsive" width="10" height="10" src="img/trian.jpg" alt="">Usted</center></div></div>';
	//height: 10px; width: 314px; position:0px ; font-size: 10px; left: 100px;
	por=pp+'%';
	//por='-48%';
			}else{
				s="<div class='form-group col-xs-7' style='color:#d9534f'>Delgadez</div><div class='form-group col-xs-5' style='color:#d9534f'><23.0</div><br/>";
				s=s+"<div class='form-group col-xs-7' style='color:#5cb85c'>Normal</div><div class='form-group col-xs-5' style='color:#5cb85c'>>23 a <28</div><br/>";
				s=s+"<div class='form-group col-xs-7' style='color:#f2b968'>Sobrepeso</div><div class='form-group col-xs-5' style='color:#f2b968'>>=28 a <32</div><br/>";
				s=s+"<div class='form-group col-xs-7' style='color:#d9534f'>Obesidad</div><div class='form-group col-xs-5' style='color:#d9534f'>>=32</div><br/>";
				
				p="<div class=''>"+
					'<div class="progress">'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width:22.5%"></div>'+
					'<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style="width:5.2%"></div>'+
					'<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar"style="width:4.2%"></div>'+
					'<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar"  style="width:68.1%"></div>'+
				'</div>'+
				
'<div id="pgTexto" style="height:10px;width:100%;position:absolute; font-size:9px; color:#5cb85c">'+
'<center><img class="img-responsive" width="10" height="10" src="img/trian.jpg" alt="">Usted</center></div></div>';
	//height: 10px; width: 314px; position:0px ; font-size: 10px; left: 100px;
	por=pp+'%';
	
				if(imc<=23){
						color="style='color: #d9534f'";
						texto="Delgadez";
						$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").show();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<28){
						color="style='color: #5cb85c'";
						texto="Normal";
						$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").show();
	$("#divR7").hide();
	$("#divR8").hide();
				}else if(imc<32){
					color="style='color: #f2b968'";
					texto="Sobrepeso";
					$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").show();
	$("#divR8").hide();
				}else if(imc>=32){
					color="style='color: #d9534f'";
					texto="Obesidad";
					$("#divR1").hide();
	$("#divR2").hide();
	$("#divR3").hide();
	$("#divR4").hide();
	$("#divR5").hide();
	$("#divR6").hide();
	$("#divR7").hide();
	$("#divR8").show();
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
                    
                    $("#btnSubmit").attr("disabled", false);
					
					$('#divResul').html("<div class=''><center><h3>RESULTADO</h3></center>"+
					"<center><h2 "+color+">"+imc+"<font size=4>(" +texto+")</font></h2><br/></center>"+
					'<center><h4>Recomendaciones<input type="button" class="btn-primary" data-toggle="modal" value="Click" data-target="#myModal"></h5></center><hr/>'+
					p+
					'</div><br/>');
                    $('#success').html("<div class='alert alert-success' id='resul' name='resul'>");
                          
                    $('#success > .alert-success').append(
					"<script type='text/javascript'>$('#pgTexto').animate({left: '"+por+"'}, 'slow');</script><strong>"+s+"</strong>");
                    $('#success > .alert-success').append('</div><div id="re"></div>');
						$("#divView").attr("tabindex",-1).focus();
						$("#msj").html('<center style="color: #fd0404">ACUDE A TU ESTABLECIMIENTO DE SALUD PARA MAYOR INFORMACION</center>');
                    
                },
                error: function() {
                    
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                      .append("</button>");
                    $('#success > .alert-danger').append("<strong>Error:,4 los datos");
                    $('#success > .alert-danger').append('</div>');
                    
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


$('#rbtSexo').focus(function() {
    $('#success').html('');
});
