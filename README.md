# Modal Component

## Description

Le composant Modal permet d'afficher une fenêtre modale dans l'application. Elle est utilisée pour afficher des informations contextuelles ou des messages à l'utilisateur. Ce composant prend en charge l'ouverture et la fermeture de la modale, ainsi que la possibilité de fermer la modale en cliquant sur l'overlay (zone autour de la modale).

## Prérequis

- Node.js (version >= 18.20.3)
- React (version >= 18.3.1)
- Un éditeur de texte recommandé : Visual Studio Code
- `prop-types` pour la validation des props.

## Installation

1. Installez les dépendances via npm ou yarn :

    ```bash
    npm install
    ```

2. Importez et utilisez le composant `Modal` dans votre projet :

    ```jsx
    import Modal from './Modal';
    ```

## Props

Le composant Modal prend les propriétés suivantes :

- **isOpen** (booléen, requis) : Indique si la modale doit être affichée. Si `false`, la modale ne sera pas rendue.
- **onClose** (fonction, requis) : Fonction appelée pour fermer la modale. Elle doit être passée depuis le composant parent.
- **children** (React node, requis) : Le contenu à afficher à l'intérieur de la modale. Cela peut être n'importe quel élément React, comme du texte ou des composants enfants.
- **className** (chaîne de caractères, optionnel) : Permet d'ajouter une classe CSS personnalisée à l'overlay de la modale pour la personnalisation du style.
- **closeOnOverlayClick** (booléen, optionnel, valeur par défaut : `false`) : Contrôle si la modale se ferme ou non lorsque l'utilisateur clique sur l'overlay. Par défaut, il est false, ce qui signifie que la modale ne se ferme pas sur le clic de l'overlay.
    -Si **closeOnOverlayClick** est false, l'utilisateur devra explicitement fermer la modale avec le bouton "Close".
    -Si **closeOnOverlayClick** est true, cliquer n'importe où sur l'overlay autour de la modale fermera automatiquement la fenêtre modale.

## Exemple d'utilisation

Voici un exemple d'utilisation du composant Modal dans un autre composant React :

```jsx
import React, { useState } from 'react';
import Modal from '@lelotgh/react_modal_component';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} closeOnOverlayClick={true}>
                <h2>Your title !</h2>
                <div>Your element.</div>
            </Modal>
        </div>
    );
}

export default App;
```

Détails d'implémentation

- La modale utilise un mécanisme de propagation des événements pour empêcher de fermer la modale lorsqu'on clique à l'intérieur de son contenu. Cette logique est gérée par la fonction handleModalClick.
- Si l'option **closeOnOverlayClick** est activée, un clic sur l'overlay fermera la modale en appelant la fonction onClose.
- Le PropTypes est utilisé pour valider les types des props. Cela permet de garantir que le composant reçoit les bonnes données et aide à éviter les erreurs.
- La fonction `handleModalClick` utilise `e.stopPropagation()` pour éviter que le clic à l'intérieur de la modale ne soit propagé vers l'overlay, ce qui pourrait entraîner une fermeture involontaire de la modale si `closeOnOverlayClick` était activé.

Validation des props
La validation des props est effectuée à l'aide de PropTypes, ce qui permet de s'assurer que les bonnes valeurs sont passées au composant :

```jsx
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // La prop 'isOpen' doit être un booléen et est obligatoire
    onClose: PropTypes.func.isRequired, // La prop 'onClose' doit être une fonction et est obligatoire
    children: PropTypes.node.isRequired, // La prop 'children' peut être n'importe quel contenu React
    className: PropTypes.string, // La prop 'className' permet de personnaliser les styles si nécessaire
    closeOnOverlayClick: PropTypes.bool, // Permet de contrôler la fermeture de la modal en cliquant sur l'overlay
};
```
Structure et style

- La modale est composée de deux éléments principaux :
    - Overlay : Le fond qui recouvre le reste de l'interface et qui rend l'interaction avec la modale plus visible. Il capture également les clics pour déterminer si la modale doit être fermée.
    - Content : La zone où le contenu de la modale est affiché. Elle est généralement utilisée pour afficher des informations ou des formulaires.
- Le CSS de la modale est flexible et peut être personnalisé en fonction des besoins via le className passé en prop. Par exemple :

```jsx
<Modal isOpen={isOpen} onClose={onClose} className="custom-modal">
    <h2>Modal Title</h2>
    <div>Modal content goes here.</div>
</Modal>
```

### Accessibilité

Le composant Modal utilise les attributs `aria-labelledby` et `aria-describedby` pour améliorer l'accessibilité. 
- `aria-labelledby="modal-title"` : Cette propriété permet de lier le titre de la modale à un élément de la page.
- `aria-describedby="modal-description"` : Elle permet de lier le contenu de la modale à un élément de description.

Cela permet aux utilisateurs de lecteurs d'écran de mieux comprendre le contenu de la modale.


Conclusion

Le composant Modal est un composant réutilisable pour afficher des modales dans votre application React. Il offre une gestion simple de l'ouverture, de la fermeture et de l'interaction avec l'utilisateur, tout en étant flexible grâce aux props comme closeOnOverlayClick et className. Ce composant est particulièrement utile pour afficher des messages de confirmation, des erreurs ou des informations contextuelles sans perturber le flux de travail de l'utilisateur.