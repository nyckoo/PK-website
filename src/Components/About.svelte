<script>
    import { Container, Row, Col } from 'sveltestrap'
  
    export let aboutData = {}
    const { pretext, text_one, u_list, text_two } = aboutData
</script>
<section class="section" id="about">
    <Container class="justify-content-center">
      <Row class="justify-content-center text-center">
        <Col lg={12}>
          <h3 class="mt-2 title mx-auto mb-5">
            {pretext}
          </h3>
          <div class="about-box">

            <div class="mt-3">
              <p class="text-dark">
                {text_one}
              </p>
            </div>
        </div>
        </Col>
      </Row>

    </Container>
</section>