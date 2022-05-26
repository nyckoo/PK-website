<script>
  import { Container, Row, Col, Button } from "sveltestrap";
  import Data from "../Data/data";
  import { products } from "../Store/stores";
  import AddRemoveEbook from "../Store/AddRemoveEbook.svelte";

  const { heading, boldheading, u_list, current_offer } = Data.EBOOKS_DATA;

  let items = {};

  products.subscribe((val) => {
    items = val;
    console.log(items);
  });
</script>

<section class="section" id="ebooks">
  <Container>
    <Row class="justify-content-center text-center">
      <Col lg={12}>
        <i class="fa-solid fa-book-open-reader title-icon text-dark" />
        <h3 class="title">
          {heading} <span class="fw-bold">{boldheading}</span>
        </h3>
      </Col>
    </Row>
    <!-- Ebooks info & offer -->
    <Row class="mt-5 text-center">
      {#each u_list as item}
        <Col md={4}>
          <div class="services-box">
            <div class="mt-3">
              <img
                src="assets\images\ebooks\{item.img_name}.jpeg"
                alt="."
                width="280px"
              />
              <h5 class="services-title fw-bold mt-5 mb-4">{item.title}</h5>
              <h6 class="services-subtitle text-dark fw-bold mb-4">
                {item.price}
              </h6>
              <!-- Button Add/Remove Item -->
              <AddRemoveEbook {item} {items} />
              <p class="services-subtitle text-muted mt-4">
                {item.description}
              </p>
              <p class="services-subtitle text-muted mt-2">
                {@html item.short_description}
              </p>
            </div>
          </div>
        </Col>
      {/each}
      <h6 class="services-title fw-bold mt-4 mb-4">{current_offer}</h6>
    </Row>
  </Container>
</section>
