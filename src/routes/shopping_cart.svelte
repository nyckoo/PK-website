<script>
  import { Link } from "svelte-routing";

  import { Form, Input, Label, Container, Row, Col, Button } from "sveltestrap";
  import Navbar from "../Components/Navbar.svelte";
  import { products } from "../Store/stores";

  export let items;
  products.subscribe((prods) => {
    items = prods;
  });

  $: total = items.reduce(
    (prev, current) => prev + +current.price.substr(0, 2),
    0
  );
</script>

<section class="section bg-login align-items-center">
  <Container>
    <div class="bg-white p-4 rounded">
      <p class="fs-3">Twój koszyk:</p>
      <Row class="justify-content-center">
        <p>Ilość e-booków do zakupu: {items.length}</p>
        {#each items as product}
          <Col md={4}>
            <div class="services-box">
              <img
                src="\assets\images\ebooks\{product.img_name}.jpeg"
                alt=""
                width="280px"
              />
              <h4>{product.title}</h4>
              <p>{product.price}</p>
            </div>
          </Col>
        {/each}
        <div class="total">
          <h4>
            Razem: {total}zł
          </h4>
        </div>
      </Row>
    </div>
  </Container>
</section>
