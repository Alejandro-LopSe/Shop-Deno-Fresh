import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Signal } from "@preact/signals";
import { CartProduct, Product } from "../types.ts";
import { addtocarrt } from "../funciones.ts";

export const DisplayProducts: FunctionComponent<
  { selection: Product[]; cesta: Signal<CartProduct[]> }
> = (
  { selection, cesta },
) => {
  return (
    <div>
      {selection.map((producto: Product) => {
        return (
          <div class="item">
            <span class="name">{producto.name}</span>
            <span class="price">{producto.price}$</span>
            <img src={producto.image} alt={producto.name} />
            <span class="description">{producto.description}</span>
            <span
              class="add"
              onClick={(e) => {
                addtocarrt(producto, cesta);
              }}
            >
              +
            </span>
          </div>
        );
      })}
    </div>
  );
};
