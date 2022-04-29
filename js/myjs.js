var html="";
var i=0;
var k;
var lista;
var s="";

$(document).ready(function(){
	
		$("#t").keydown(function(event){
		k=event.which;
		
		if(k==13)
			
			{
				lista=$("#t").val();
				
				
					if($("#t").val().length>30) 
						
						{
							$("#k1").html("Το όριο των χαρακτήρων πρέπει να είναι μέχρι 30");
							$("#k1").css("display","block");
							$("#t").val("");
							
							
						}
					
					else 
						
						{
							
							$("#k1").css("display","none");
							s="<div id=lists"+i+" class=list>";
							s+="<p id=p"+i+" class=l>"+i+":"+lista+"<button id=but"+i+" class=bts><span class='glyphicon glyphicon-ok'></span></button><button id=bt"+i+" class=bts><span class='glyphicon glyphicon-remove'></span></button></p>";
							s+="</div>";
							$("#result").append(s);
							
							$("#but"+i).click(function(){
								$(this).parent().css("background-color","green");
								});
							$("#bt"+i).click(function(){
								$(this).parent().remove();
								});
							
							$("#t").val("");
							i++;
							
						}
				
			}
			
	});
});








	