<script>
  import { Container, Row, Col } from "sveltestrap";
  import Data from "../Data/data";

  const { questions, answers } = Data.COACHING_DATA;
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
        <div class="ps-4 pe-4">
          <div class="mt-4">
            <div>
              <h5 class="mb-0 f-20 font-weight-600">
                {questions[0]}
              </h5>
            </div>
            <div class="mt-4 p-4">
              {#each answers[0].text as item}
                <div class="mt-3">
                  <p class="text-muted">
                    {item}
                  </p>
                </div>
              {/each}
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-sm-4">
                  {#each answers[0].u_list as item}
                    <p class="text-muted text-center max">
                      • {item}
                    </p>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <!-- Q. 2 -->
      <Col lg={12}>
        <div class="ps-4 pe-4">
          <div class="mt-4">
            <div>
              <h5 class="mb-0 f-20 font-weight-600">
                {questions[1]}
              </h5>
            </div>
            <div class="mt-4">
              <p class="text-muted text-center">
                {answers[1].text_one}
              </p>
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-sm-4">
                  {#each answers[1].u_list as item}
                    <p class="text-muted text-center max">
                      • {item}
                    </p>
                  {/each}
                </div>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-muted text-center">
                {answers[1].text_two}
              </p>
            </div>
            <div class="mt-5">
              <p class="text-muted text-center fw-bold f-18">
                {answers[1].offer_text[0]}
              </p>
              <Row class="mt-4 text-center">
                {#each answers[1].offer.services as item}
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
                {answers[1].offer_text[1]}
              </p>
              <p class="text-muted text-center fw-bold">
                {@html answers[1].offer.text_free}
              </p>
              <Row class="mt-4 text-center">
                {#each answers[1].offer.text_prices as item}
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
          </div>
        </div>
      </Col>
      <!-- Q. 3 -->
      <Col lg={12}>
        <div class="ps-4 pe-4">
          <div class="mt-4">
            <div>
              <h5 class="mb-0 f-20 font-weight-600">
                {questions[2]}
              </h5>
            </div>
            {#each answers[2].u_list as item}
              <div class="mt-3">
                <p class="text-muted">
                  {@html item}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </Col>
    </Row>
    <!-- end row -->
  </Container>
</section>
