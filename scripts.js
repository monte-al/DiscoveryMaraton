const Modal = {
  //Abrir modal
  //Adicionar a class active ao modal
   open() {

    document
      .querySelector('.modal-overlay')
      .classList
      .add('active')
  },
  //Fechar o modal
  //Remover a class active do modal
  close() {
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}