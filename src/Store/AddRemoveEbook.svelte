<script>
  import { Button } from "sveltestrap";
  import { products } from "../Store/stores";

  export let item;
  export let items;
</script>

<Button
  class="btn-primary"
  on:click={() => {
    products.update((prevProducts) => {
      if (item.key in prevProducts) {
        delete prevProducts[item.key];
      } else {
        prevProducts[item.key] = {
          id: item.key,
          price: item.price,
        };
      }
      return prevProducts;
    });
  }}>{item.key in items ? "Usuń z koszyka" : "Dodaj do koszyka"}</Button
>
