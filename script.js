function consultar(){
      var cedula=document.getElementById('cedula').value
      var expediente=document.getElementById('expediente').value
      cedula=parseInt(cedula)
      expediente=parseInt(expediente)

      var url="http://servicios.uneg.edu.ve/pregradoweb/inscripcion/sce110_pdf.php?PHPSESSID=3e0627800ff2fa33ed5494557fe7ff12&apb_cedula=V"+cedula+"&apb_exp="+expediente+""
      var a = document.createElement("a")
      a.target = "_blank"
      a.href =url
      a.click()
}