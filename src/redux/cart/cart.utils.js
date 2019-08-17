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

export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const cartItemsExist = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (cartItemsExist.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemsExist.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
