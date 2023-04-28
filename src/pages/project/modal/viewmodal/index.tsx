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
      <button onClick={abrirModal}>Abrir Modal</button>
      <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
        <h2>Título do Modal</h2>
        <p>Conteúdo do Modal</p>

        <a href="#" onClick={fecharModal}>Fechar</a>
      </Modal>
    </div>
  );
};

export default MeuComponente;
