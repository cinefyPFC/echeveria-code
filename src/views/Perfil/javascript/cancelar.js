function onClickCancelar() {
  document.getElementById('Editar').style.display = 'initial';
  document.getElementById('Cancelar').style.display = 'none ';
  document.getElementById('initialinputapelido').style.display = 'none';
  document.getElementById('initialinputemail').style.display = 'none';
  document.getElementById('initialinputdtnascimento').style.display = 'none';
  document.getElementById('initialinputsenha').style.display = 'none';
  document.getElementById('hiddeninfoapelido').style.display = 'initial';
  document.getElementById('hiddeninfoemail').style.display = 'initial';
  document.getElementById('hiddeninfodtnascimento').style.display = 'initial';
  document.getElementById('hiddeninfosenha').style.display = 'initial';
}
export default onClickCancelar;
