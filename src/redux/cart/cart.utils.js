export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemsExist = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (cartItemsExist) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
