import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { CartProduct, Product } from "../types.ts";
import { Menu } from "./Menu.tsx";
import { Products } from "./Products.tsx";
import { useEffect } from "preact/hooks";
import { Cart } from "./Cart.tsx";

export const Page: FunctionComponent = () => {
  const productos = useSignal<Product[]>([]);
  const cesta = useSignal<CartProduct[]>([]);
  const menu = useSignal<string>("breakfast");

  //esta mal????
  useEffect(() => {
    if (menu.value === "Cart") {
      return;
    }
    const llamada = async () => {
      const response = await fetch(
        `https://shop-products.deno.dev/products/${menu.value}`,
      );
      productos.value = await response.json();
    };
    llamada();
  }, [menu.value]);
  useEffect(() => {
    console.log("cambio");
  }, [cesta.value]);
  return (
    <div>
      <Menu selection={menu} cesta={cesta}></Menu>
      {menu.value !== "Cart" && (
        <Products selection={productos} menu={menu} cesta={cesta}></Products>
      )}
      {menu.value === "Cart" && <Cart selection={cesta}></Cart>}
    </div>
  );
};
