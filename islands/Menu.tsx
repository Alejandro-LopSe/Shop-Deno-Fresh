import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Signal } from "@preact/signals";
import { CartProduct } from "../types.ts";

export const Menu: FunctionComponent<
  { selection: Signal; cesta: Signal<CartProduct[]> }
> = (
  { selection, cesta },
) => {
  let summ = 0;
  const sum = cesta.value.forEach((e) => {
    return summ += e.cuantity;
  });
  return (
    <div class="menu">
      <div
        class={selection.value === "breakfast" ? "selected" : ""}
        onClick={(e) => {
          selection.value = "breakfast";
        }}
      >
        Breakfast
      </div>
      <div
        class={selection.value === "lunch" ? "selected" : ""}
        onClick={(e) => {
          selection.value = "lunch";
        }}
      >
        Lunch
      </div>
      <div
        class={selection.value === "Cart" ? "selected" : ""}
        onClick={(e) => {
          selection.value = "Cart";
        }}
      >
        Cart
        <div class="quantity">{summ}</div>
      </div>
    </div>
  );
};
