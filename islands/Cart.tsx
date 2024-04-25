import { FunctionComponent } from "preact";
import { Signal, useSignal } from "@preact/signals";
import { DisplayCart } from "../components/DisplayCart.tsx";
import { C_selected, CartProduct, Cities, Country } from "../types.ts";
import { useEffect, useState } from "preact/hooks";
import { Checkout } from "../components/Checkout.tsx";

export const Cart: FunctionComponent<{ selection: Signal<CartProduct[]> }> = (
  { selection },
) => {
  const but = useSignal(false);
  const countrylist = useSignal<Country>({});
  const citylist = useSignal<C_selected>({ selected: "", data: {} });
  useEffect(() => {
    const llamada = async () => {
      const response = await fetch(
        "https://api.first.org/data/v1/countries?region=europe",
      );
      const data = await response.json();
      countrylist.value = data.data;
      return;
    };
    llamada();
  }, []);
  useEffect(() => {
    const llamada = async () => {
      if (citylist.value.selected === "") {
        return;
      }
      const response = await fetch(
        `https://countriesnow.space/api/v0.1/countries/cities/q?iso2=${citylist.value.selected}`,
      );
      const data = await response.json();
      citylist.value = {
        selected: citylist.value.selected,
        data: data.data,
      };

      return;
    };
    llamada();
  }, [citylist.value.selected]);

  if (but.value === false) {
    return (
      <div class="products">
        <h1>Cart</h1>
        <DisplayCart selection={selection} b={but}>
        </DisplayCart>
      </div>
    );
  } else {
    return (
      <div class="products">
        <Checkout
          selection={selection}
          countrylist={countrylist}
          citylist={citylist}
        >
        </Checkout>
      </div>
    );
  }
};
