## Introduction

L'objectif des exercices est de réaliser une petite application ecommerce pour vélos.

L'application comprend 3 pages :
- Page de listage des vélos
- Page des détails du panier
- Page de listage des commandes passées.

A la fin, l'application disposera d'un store avec les états suivants :
- bikes
- cart
- orders
- wallet

Pourquoi un état **wallet** ? C'est directement lié au fonctionnement de l'application :

On dispose d'un portefeuille qui nous permet d'acheter les produits présents dans la boutique en ligne.
Quand l'on ajoute des articles au panier, sur la page de détails du panier, il sera possible de commander seulement si notre portefeuille dispose des fonds suffisants.
Bien entendu, ce portefeuille diminue à chaque commande passée.


## Exercice 1 : La pages des vélos.

Pour que la page des vélos, il nous faut mettre en place dans le store, un module pour la gestion des vélos de l'application.

- Dans le dossier `store/modules`, se trouve un fichier [bikes.js](./src/store/modules/bikes.js), faites en sorte de déplacer la liste des vélos du composant [BikeList](./src/components/bikes/BikesList.vue) dans l'état de ce module.
- Ajouter un `Getters` à ce module, qui permet d'accéder à cette liste de vélos depuis les composants.
- Mettez à jour le [BikeList](./src/components/bikes/BikesList.vue) afin qu'il appelle le Getter et affiche les vélos.

## Exercice 2 : L'ajout de vélo au panier.

Avant de pouvoir commander, il nous faut ajouter des vélos au panier !

- [ ] En prenant exemple sur le module [bikes](./src/store/modules/bikes.js), créer un nouveau module nommé `cart`.
- [ ] Attention ! Pensez à ajouter ce module au store dans le fichier [index.js](./src/store/index.js) du store, prenez exemple sur l'ajout du module `bikes` qui était déjà déclaré dans le `store`.
- [ ] Ajoutez l'état suivant à ce module :
```javascript
cart: {
  products: [
    // Exemple format d'un object ajouté :
    // {
    //     bike: Object, (= un objet velo du module bikes)
    //     quantity: Number,
    // }
  ],
},
```
- [ ] Ajoutez les 3 Getters suivants :
  - [ ] cartProducts : renvoi les produits du panier.
  - [ ] cartProductsCount : renvoi la taille de la liste des produits du panier.
  - [ ] cartTotalPrice : renvoi le prix total du panier.
- [ ] Une fois les Getters définis, les ajouter dans le composant [CartView](./src/views/CartView.vue) et mettre à jour le template pour utiliser les Getters.
- [ ] Idem dans le composant [TheHeader](./src/components/TheHeader.vue), ajouter le Getter `cartProductsCount` et l'utiliser afin que le compteur dans le lien du panier soit mis à jour.
- [ ] Maintenant, il faut créer des mutations afin de pouvoir ajouter et supprimer des vélos.
  - [ ] addBikeToCart : Ajoute un vélo au panier. Le payload est le dit vélo.
Pour gagner du temps, voici le code à mettre dans cette mutation :
```javascript
let alreadyInCart = false;
state.cart.products.forEach(cartProduct => {
    if (cartProduct.bike === bike) {
        cartProduct.quantity++;
        alreadyInCart = true;
    }
});

if (!alreadyInCart) {
    state.cart.products.push({bike, quantity: 1});
}
```
  - [ ] removeBikeFromCart : Supprime un vélo au panier. Le payload est le dit vélo.
Code à mettre dans cette mutation : 
```javascript
state.cart.products = state.cart.products.filter(cartProduct => cartProduct.bike !== bike);
```
- [ ] Mettez à jour le composant [BikesListItem](./src/components/bikes/BikesListItem.vue), en ajoutent la mutation `addBikeToCart` qui sera appelée au click du bouton d'ajout au panier.
- [ ] Mettez à jour le composant [CartBikesListItem](./src/components/cart/CartBikesListItem.vue), en ajoutent la mutation `removeBikeFromCart` qui sera appelée au click de l'icône font-awesome.

## Exercice 3 : Ajout du portefeuille

Maintenant que l'on peut ajouter des vélos au panier, avant de commander, il faut mettre en place le portefeuille.

Il faut donc :
- [ ] Créer un nouveau module nommé `wallet`
- [ ] Ajouter comme état : `{ wallet: 500, }` (500 est arbitraire, vous pouvez le changer).
- [ ] Ajouter un Getter qui renvoi la valeur du portefeuille.
- [ ] Ajouter une mutation qui diminue la valeur du portefeuille selon un montant passé en payload.
- [ ] Mettre à jour le composant [TheHeader](./src/components/TheHeader.vue), afin d'utiliser le nouveau Getter et afficher la valeur du portefeuille dans le template.
- [ ] Dans le composant [CartView](./src/views/CartView.vue), ajouter aussi le Getter afin de mettre à jour la computed property `insufficientFunds` pour renvoyer `true` si les fonds du portefeuille sont inférieur au prix total du panier.

## Exercice 4 : Enregistrement d'une commande.

Tout est prêt pour passer à l'enregistrement d'une commande.

- [ ] Créer un nouveau module nommé `orders`
- [ ] Ajouter comme état :
```javascript
orders: [
    // format d'une entrée :
    // {
    //     id: String,
    //     products: Array, même liste de produits que dans le panier.
    //     totalPrice: Number,
    // }
],
```
- [ ] Ajouter un Getter qui renvoi la liste de commandes.
- [ ] Ajouter une mutation `saveOrder` avec pour définition le code suivant :
```javascript
(state, {id, products, totalPrice}) => {
  state.orders.push({
    id,
    products,
    totalPrice,
  });
}
```
- [ ] Afin de pouvoir mettre à jour le portefeuille ainsi que le panier en même temps que l'enregistrement de la commande, il faut se définir une action qui nous permettra de lancer des commits.
  - [ ] créer une action nommée `saveOrder` qui...
    - ...aura en payload les produits ainsi que le prix total du panier.
    - ...génère un id pour la commande avant de commit.
    - ...commit la mutation `saveOrder` avec en payload un objet comprenant : l'id, les produits et le prix total du panier.
    - ...commit la mutation `reduceWallet` qui prend en payload le prix total du panier.
    - ...commit la mutation `emptyCart` (à ajouter dans le module [cart](./src/store/modules/cart.js)) pour vider le panier.
  - [ ] Ajouter cette action dans la vue [CartView](./src/views/CartView.vue), elle sera appelée au click du bouton de validation de commande.
