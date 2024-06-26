import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { C_selected, CartProduct, Cities, Country, Product } from "../types.ts";
import { addtocarrt, substocarrt } from "../funciones.ts";

export const Checkout: FunctionComponent<
  {
    selection: Signal<CartProduct[]>;
    countrylist: Signal<Country>;
    citylist: Signal<C_selected>;
  }
> = (
  { selection, countrylist, citylist },
) => {
  console.log(
    citylist.value.selected
      ? countrylist.value[citylist.value.selected].country
      : "Select a Country",
  );

  let summ = 0;
  const sum = selection.value.forEach((element) => {
    return summ += (element.cuantity) * element.product.price;
  });
  return (
    <div class="checkout">
      <h1>Checkout</h1>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label for="address">Address</label>
        <input type="text" id="address" name="address" required />
        <label for="country">Country</label>
        <select
          class={!citylist.value.selected ? "not" : ""}
          name="country"
          id="country"
          onChange={(e) => {
            citylist.value = {
              selected: e.currentTarget.value,
              data: citylist.value.data,
            };
          }}
        >
          <option value={"Select a Country"}>
            Select a Country
          </option>
          {Object.keys(countrylist.value).map((elemkey) => {
            return (
              <option value={elemkey}>
                {countrylist.value[elemkey].country}
              </option>
            );
          })}
        </select>
        {citylist.value.selected && <label for="city">city</label>}
        {citylist.value.selected && (
          <select name="city" id="city">
            {Object.keys(citylist.value.data).map((elem: string) => {
              return (
                <option value={elem}>
                  {citylist.value.data[parseInt(elem)]}
                </option>
              );
            })}
          </select>
        )}
        <label for="payment">payment</label>
        <select name="payment" id="payment">
          <option value={"Card"}>
            Card
          </option>
          <option value={"Cash"}>
            Cash
          </option>
        </select>
        <div class="total">{summ}€</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
