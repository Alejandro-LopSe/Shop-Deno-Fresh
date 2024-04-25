import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { CartProduct, Product } from "../types.ts";
import { addtocarrt, substocarrt } from "../funciones.ts";

export const DisplayCart: FunctionComponent<
  { selection: Signal<CartProduct[]>; b: Signal }
> = (
  { selection, b },
) => {
  let summ = 0;
  const sum = selection.value.forEach((element) => {
    return summ += (element.cuantity) * element.product.price;
  });
  return (
    <div>
      {selection.value.map((producto: CartProduct) => {
        return (
          <div class="item">
            <span class="name">{producto.product.name}</span>
            <span class="price">{producto.product.price}$</span>
            <img src={producto.product.image} alt={producto.product.name} />
            <span class="description">{producto.product.description}</span>
            <span
              class="remove"
              onClick={(e) => {
                substocarrt(producto.product, selection);
              }}
            >
              -
            </span>
            <span>{producto.cuantity}</span>
            <span
              class="add"
              onClick={(e) => {
                addtocarrt(producto.product, selection);
              }}
            >
              +
            </span>
          </div>
        );
      })}
      <div class="total">
        <div class="total-text">
          Total:
        </div>
        <div class="total-price">
          {Math.round(summ * 100) / 100}€
        </div>
      </div>
      <button
        class="checkout-button"
        type="button"
        onClick={(e) => {
          b.value = true;
        }}
      >
        Submit
      </button>
    </div>
  );
};
