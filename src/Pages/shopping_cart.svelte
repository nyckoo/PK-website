<script>
  import { Link } from "svelte-routing";

  import { Form, Input, Label, Container, Row, Col, Button } from "sveltestrap";
  import NavbarShort from "../Components/NavbarShort.svelte";
  import { products } from "../Store/stores";

  let items;
  products.subscribe((prods) => {
    console.log(prods);
    items = prods;
  });

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
          <div class="flex-row total">
            <p class="mt-3 fs-2">
              Razem: {total + "zł"}
            </p>
          </div>
          <div class="flex-row">
            <Button class="btn-primary">Zapłać</Button>
          </div>
        </div>
      </Row>
    </div>
  </Container>
</section>
