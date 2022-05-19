<script>
    import { Container, Row, Col } from 'sveltestrap'

    export let coachingData = {}
    const { questions, answers } = coachingData
</script>
  
<section class="section bg-light text-center" id="coaching">
  <Container>
    <Row class="justify-content-center">
      <Col lg={12}>
        <i class="ti-comments title-icon text-muted" />
        <h3 class="title">
          <span class="fw-bold">Coaching</span>
        </h3>
        <!--
        <p class="text-muted mt-3 title-subtitle mx-auto">
          {description}
        </p>
        -->
      </Col>
    </Row>
    <!-- end row -->
    <Row class="mt-5">
        <!-- Q. 1 -->
        <Col lg={12}>
          <div class="ps-4 pe-4">
              <div class="mt-4">
                <div>
                  <h5 class="mb-0 f-18 font-weight-600">
                    {questions[0]}
                  </h5>
                </div>
                <div class="mt-4">
                  <p class="text-muted text-center">
                    {answers[0].text}
                  </p>
                </div>
                <div class="mt-4">
                    <p class="text-muted text-center">
                      {answers[0].u_list}
                    </p>
                </div>
              </div>
          </div>
        </Col>
        <!-- Q. 3 -->
        <Col lg={12}>
            <div class="ps-4 pe-4">
                <div class="mt-4">
                  <div>
                    <h5 class="mb-0 f-18 font-weight-600">
                      {questions[2]}
                    </h5>
                  </div>
                  <div class="mt-4">
                    <p class="text-muted text-center">
                      {answers[2].text}
                    </p>
                  </div>
                </div>
            </div>
          </Col>
    </Row>
    <!-- end row -->
  </Container>
</section>
  
  