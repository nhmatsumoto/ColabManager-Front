import React, { useState } from 'react';
import { Modal } from '../../../../components/modal';


const MeuComponente: React.FC = () => {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div>
      <button onClick={abrirModal}>
        teste
      </button>
      <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
        <h2>TESTE Título  Modal</h2>
        <p>Conteúdo Modal</p>

        <a href="#" onClick={fecharModal}>Fechar</a>
      </Modal>
    </div>
  );
};

export default MeuComponente;
