<script>
  import { Container, Row, Col } from "sveltestrap";
  import Data from "../Data/data";

  const { heading, text_list } = Data.ABOUT_DATA;
</script>

<section class="section" id="about">
  <Container class="justify-content-center">
    <Row class="justify-content-center text-center">
      <Col lg={12}>
        <!-- Icon/Logo before the header -->
        <i class="fa-solid fa-user-pen title-icon text-dark" />
        <h3 class="title">
          {heading}
        </h3>
        <div class="about-box text-start mt-5">
          <!-- Make each piece html customizable -->
          {#each text_list as item}
            <div class="mt-3 ">
              <p class="text-muted">
                {@html item}
              </p>
            </div>
          {/each}
        </div>
      </Col>
    </Row>
  </Container>
</section>
