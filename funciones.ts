import { Signal } from "@preact/signals";
import { CartProduct, Product } from "./types.ts";

export const addtocarrt = (
  product: Product,
  cart: Signal,
) => {
  let done = false;
  const exist = cart.value.map((p: CartProduct) => {
    if (p.product === product) {
      p.cuantity += 1;
      done = true;
      return p;
    }
    return p;
  });

  if (!done) {
    cart.value = [...cart.value, { product: product, cuantity: 1 }];
  } else {
    cart.value = [...exist];
  }

  return;
};

export const substocarrt = (
  product: Product,
  cart: Signal,
) => {
  const exist = cart.value.reduce((arr: CartProduct[], p: CartProduct) => {
    if (p.product === product) {
      if (p.cuantity === 1) {
        console.log(true);

        return [...arr];
      } else {
        p.cuantity -= 1;
        return [...arr, p];
      }
    }
    return [...arr, p];
  }, []);

  cart.value = exist;

  return;
};
