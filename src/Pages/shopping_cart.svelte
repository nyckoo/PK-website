<script>
  import { Link } from "svelte-routing";
  import axios from "axios";

  import { Form, Input, Label, Container, Row, Col, Button } from "sveltestrap";
  import NavbarShort from "../Components/NavbarShort.svelte";
  import { products } from "../Store/stores";

  let isError = false;
  let items;
  products.subscribe((prods) => {
    console.log(prods);
    items = prods;
  });

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "https://d6ab-176-115-80-91.eu.ngrok.io/transactions",
        {
          products: items.map((item) => item.id),
        }
      );
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
            <Button
              class="btn-primary"
              on:click={handleClick}
              disabled={items.length === 0}>Zapłać w PayU</Button
            >
            <p class="fs-6 text-muted text-center mt-2">
              {isError
                ? "Wystąpił problem z płatnością - spróbuj później."
                : ""}
            </p>
          </div>
        </div>
      </Row>
    </div>
  </Container>
</section>
