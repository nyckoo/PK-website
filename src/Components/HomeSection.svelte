<script>
  import { Container, Row, Col } from 'sveltestrap'
  import Data from '../Data/data'

  const { quote } =  Data.HOME_DATA
</script>

<section class="section bg-home half-home" id="home">
  <div class="home-center">
    <div class="home-desc-center">
      <Container>
        <Row class="justify-content-center">
          <Col lg={12}>
            <div class="text-center">
              <h1 class="text-white home-title mb-0">
                <i>{quote}</i>
              </h1>
            </div>
          </Col>
          <!-- end col -->
        </Row>
        <!-- end row -->
      </Container>
    </div>
  </div>
</section>
