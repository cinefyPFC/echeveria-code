function onClickEditar() {
  console.log('Editou');
  document.getElementById('Editar').style.display = 'none';
  document.getElementById('Cancelar').style.display = 'initial';

  document.getElementById('initialinputapelido').style.display = 'initial';
  document.getElementById('initialinputemail').style.display = 'initial';
  document.getElementById('initialinputdtnascimento').style.display = 'initial';
  document.getElementById('initialinputsenha').style.display = 'initial';
  document.getElementById('initialinputfilme').style.display = 'initial';
  document.getElementById('initialinputserie').style.display = 'initial';
  document.getElementById('initialinputdocumentario').style.display = 'initial';

  document.getElementById('hiddeninfoapelido').style.display = 'none';
  document.getElementById('hiddeninfoemail').style.display = 'none';
  document.getElementById('hiddeninfodtnascimento').style.display = 'none';
  document.getElementById('hiddeninfosenha').style.display = 'none';
  document.getElementById('hiddeninfofilme').style.display = 'none';
  document.getElementById('hiddeninfoserie').style.display = 'none';
  document.getElementById('hiddeninfodocumentario').style.display = 'none';
}
export default onClickEditar;
