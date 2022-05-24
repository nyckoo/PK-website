<script>
    import { Container, Row, Col } from 'sveltestrap'
    import Data from '../Data/data'

    const { pretext, text_list } = Data.ABOUT_DATA
</script>

<section class="section" id="about">
    <Container class="justify-content-center">
      <Row class="justify-content-center text-center">
        <Col lg={12}>
          <!-- Icon/Logo before the header -->
          <i class="fa-solid fa-user-pen title-icon text-dark" />
          <h3 class="mt-2 title mx-auto mb-5">
            {pretext}
          </h3>
          <div class="about-box">
            {#each text_list as item}
              <div class="mt-3">
                <p class="text-muted">
                  {item}
                </p>
              </div>
            {/each}
        </div>
        </Col>
      </Row>

    </Container>
</section>