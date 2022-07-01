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
      if (prevProducts.map((product) => product.id).includes(item.key)) {
        return prevProducts.filter((product) => product.id !== item.key);
      } else {
        prevProducts.push({
          id: item.key,
          price: item.price,
          title: item.title,
          desc: item.short_description,
          img: item.img_name,
        });
      }
      return prevProducts;
    });
  }}
  >{items.map((val) => val.id).includes(item.key)
    ? "Usuń z koszyka"
    : "Dodaj do koszyka"}</Button
>
