function onClickCancelar() {
  document.getElementById('Editar').style.display = 'initial';
  document.getElementById('Cancelar').style.display = 'none ';
  document.getElementById('initialinputapelido').style.display = 'none';
  document.getElementById('initialinputemail').style.display = 'none';
  document.getElementById('initialinputdtnascimento').style.display = 'none';
  document.getElementById('initialinputsenha').style.display = 'none';
  document.getElementById('initialinputfilme').style.display = 'none';
  document.getElementById('initialinputserie').style.display = 'none';
  document.getElementById('initialinputdocumentario').style.display = 'none';
  document.getElementById('hiddeninfoapelido').style.display = 'initial';
  document.getElementById('hiddeninfoemail').style.display = 'initial';
  document.getElementById('hiddeninfodtnascimento').style.display = 'initial';
  document.getElementById('hiddeninfosenha').style.display = 'initial';
  document.getElementById('hiddeninfofilme').style.display = 'initial';
  document.getElementById('hiddeninfoserie').style.display = 'initial';
  document.getElementById('hiddeninfodocumentario').style.display = 'initial';
}
export default onClickCancelar;
