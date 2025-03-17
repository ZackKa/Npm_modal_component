declare module '@lelotgh/react_modal_component' {
    import * as React from 'react';
  
    // Déclaration des props que ton composant Modal accepte
    export interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      // Ajoute d'autres props si nécessaire
    }
  
    // Déclaration de Modal comme étant un composant fonctionnel
    const Modal: React.FC<ModalProps>;
  
    export default Modal;
  }
  