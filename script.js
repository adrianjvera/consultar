 function consultar(){
      var cedula=document.getElementById('cedula').value;
      var expediente=document.getElementById('expediente').value;
      cedula=parseInt(cedula);
      expediente=parseInt(expediente);

      var url="http://servicios.uneg.edu.ve/pregradoweb/inscripcion/sce110_pdf.php?PHPSESSID=e663143104c420bea1d3323d2a8ac542&apb_cedula=V"+cedula+"&apb_exp="+expediente+"";
        alert(url);
      var a = document.createElement("a");
      a.target = "_blank";
      a.href =url;
      a.click();
}