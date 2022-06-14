<script>
  import { axiosInstance } from "../axios";

  import { Container, Row, Col, Button } from "sveltestrap";
  import NavbarShort from "../Components/NavbarShort.svelte";
  import { products } from "../Store/stores";
  import { compute_slots } from "svelte/internal";

  let items;
  products.subscribe((prods) => {
    items = prods;
  });

  let selected = false;

  let isError = false;
  const handleClick = async () => {
    try {
      const response = await axiosInstance.post(`transactions`, {
        products: items.map((item) => item.id),
      });
      window.location.href = response.data.uri;
      isError = false;
    } catch (error) {
      isError = true;
    }
  };

  $: total = items.reduce(
    (prev, current) => prev + +current.price.substr(0, 2),
    0
  );
</script>

<NavbarShort />

<section class="d-flex section bg-subsite full-height align-items-center">
  <Container>
    <div class="bg-white p-4 rounded bg-light">
      <p class="fs-2">Twój koszyk:</p>
      <Row class="justify-content-start">
        <p class="text-muted">Ilość e-booków do zakupu: {items.length}</p>
        <p class="text-dark">
          Uwaga! E-booki zostaną wysłane na e-mail podany po przekierowaniu na
          PayU.
        </p>
        {#each items as product}
          <Col md={4} class="p-3 d-flex-column align-items-start">
            <div class="mb-1">
              <p class="text-dark">{product.title}</p>
            </div>
            <img
              class="scale-img"
              src="\assets\images\ebooks\{product.img}.jpeg"
              alt=""
              width="100%"
              height="auto"
            />
            <p class="mt-3 fs-3">{product.price}</p>
          </Col>
        {/each}
        <div
          class="summary-box d-flex justify-content-between align-items-center"
        >
          <div class="d-flex flex-column mt-3 fs-2">
            {#if items.length === 3}
              <span class="mt-2 mb-2 fs-6 text-muted"
                >Uwzględniono promocję pakietu!</span
              >
              Razem: <span><s>{total}</s> 99zł</span>
            {:else}
              Razem: {total + "zł"}
            {/if}
          </div>
          <div class="d-flex flex-column align-items-end">
            <p class="fs-6 text-muted text-end p-2">
              {isError
                ? "Wystąpił problem z płatnością - spróbuj później."
                : ""}
            </p>
            <Button
              class="btn-primary"
              on:click={handleClick}
              disabled={items.length === 0 || selected === false}
              >Zapłać w PayU</Button
            >
          </div>
        </div>
      </Row>
      <div class="p-2 mt-2 d-flex flex-row-reverse">
        <label>
          <input type="radio" bind:group={selected} value="true" /> Akceptuję regulamin
          sklepu. (*pole obowiązkowe)
        </label>
      </div>
    </div>
  </Container>
</section>
