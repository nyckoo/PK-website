<script>
  import { Container, Row, Col } from "sveltestrap";
  import Data from "../Data/data";

  const { titles, descriptions } = Data.COACHING_DATA;
</script>

<section class="section bg-light text-center" id="coaching">
  <Container>
    <Row class="justify-content-center">
      <Col lg={12}>
        <i class="fa-solid fa-people-group title-icon text-dark" />
        <h3 class="title">
          <span class="fw-bold">Coaching</span>
        </h3>
      </Col>
    </Row>
    <!-- end row -->
    <Row class="mt-5">
      <!-- Q. 1 -->
      <Col lg={12}>
        <div class="mt-4">
          <div>
            <h5 class="mb-4 f-20 font-weight-600">
              {titles[0]}
            </h5>
          </div>
          <div class="text-start mb-4">
            {#each descriptions[0].text as item}
              <p class="text-muted">
                {@html item}
              </p>
            {/each}
          </div>
          <!-- 
          <div class="container">
            <div class="row justify-content-center">
              {#each descriptions[0].u_list as item}
                <Col md={3}>
                  <p class="text-muted text-start max">
                    • {item}
                  </p>
                </Col>
              {/each}
            </div>
          </div>
          -->
        </div>
      </Col>
      <!-- Q. 2 -->
      <Col lg={12}>
        <div class="mt-4">
          <div>
            <h5 class="mb-0 f-20 font-weight-600">
              {titles[1]}
            </h5>
          </div>
          <div class="mt-4 mb-4">
            <p class="text-muted text-start">
              {descriptions[1].text_one}
            </p>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              {#each descriptions[1].u_list as item}
                <Col md={3}>
                  <p class="text-muted text-start max">
                    • {item}
                  </p>
                </Col>
              {/each}
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted text-start">
              {descriptions[1].text_two}
            </p>
          </div>
          <div class="mt-4">
            <p class="text-muted text-start">
              {@html descriptions[1].offer_text}
            </p>
          </div>
          <!-- 
          <div class="mt-5">
            <p class="text-muted fw-bold f-18">
              {descriptions[1].offer_text[0]}
            </p>
            <Row class="mt-4 text-center">
              {#each descriptions[1].offer.services as item}
                <Col md={6}>
                  <div class="services-box">
                    <p class="services-subtitle fw-normal fst-italic">
                      {item}
                    </p>
                  </div>
                </Col>
              {/each}
            </Row>
          </div>
          <div class="mt-5">
            <p class="text-muted text-center fw-bold f-18 mb-5">
              {descriptions[1].offer_text[1]}
            </p>
            <p class="text-muted text-center fw-bold">
              {@html descriptions[1].offer.text_free}
            </p>
            <Row class="mt-4 text-center">
              {#each descriptions[1].offer.text_prices as item}
                <Col md={4}>
                  <div class="services-box">
                    <p class="services-subtitle fw-normal fst-italic">
                      {item}
                    </p>
                  </div>
                </Col>
              {/each}
            </Row>
          </div>
          -->
        </div>
      </Col>
      <!-- Q. 3 -->
      <Col lg={12}>
        <div class="mt-4">
          <div>
            <h5 class="mb-0 f-20 font-weight-600">
              {titles[2]}
            </h5>
          </div>
          <Row class="mt-4 text-center">
            <Col md={6}>
              {#each descriptions[2].offer.services as item}
                <div class="services-box">
                  <p class="services-subtitle fw-normal">
                    {@html item}
                  </p>
                </div>
              {/each}
            </Col>
            <Col md={6}>
              {#each descriptions[2].offer.for_businesses as item}
                <div class="services-box">
                  <p class="services-subtitle fw-normal">
                    {@html item}
                  </p>
                </div>
              {/each}
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    <!-- end row -->
  </Container>
</section>
