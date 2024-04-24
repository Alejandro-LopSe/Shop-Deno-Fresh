import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Signal } from "@preact/signals";
import { DisplayProducts } from "../components/DisplayProducts.tsx";
import { CartProduct, Product } from "../types.ts";

export const Products: FunctionComponent<
  { selection: Signal<Product[]>; menu: Signal; cesta: Signal<CartProduct[]> }
> = (
  { selection, menu, cesta },
) => {
  return (
    <div class="products">
      <h1>Products</h1>
      <DisplayProducts
        selection={selection.value}
        cesta={cesta}
      >
      </DisplayProducts>
    </div>
  );
};
