<script>
  import { Form, Row, Col, Input, Container } from 'sveltestrap'
  import Data from '../Data/data'

  const {
    description,
    email_address,
    phone_nr,
    instagram
  } = Data.CONTACT_DATA
</script>

<section class="section" id="contact">
  <Container>
    <Row class="justify-content-center text-center">
      <Col lg={12}>
        <i class="fa-solid fa-phone title-icon text-dark" />
        <h3 class="title">
          <span class="fw-bold">Kontakt</span>
        </h3>
        <p class="text-muted mt-3 title-subtitle mx-auto">
          {description}
        </p>
      </Col>
      <!-- end col -->
    </Row>
    <!-- end row -->
    <Row>
      <Col lg={4}>
        <div class="mt-4 pt-4">
          <p class="text-muted mt-4">
            <span class="fw-bold ">Adres e-mail:</span><br />
            <span class="d-block mt-2">{email_address}</span>
          </p>
          <p class="text-muted mt-4">
            <span class="fw-bold ">Nr telefonu:</span><br />
            <span class="d-block mt-2">{phone_nr}</span>
          </p>
          <p class="text-muted mt-4">
            <span class="fw-bold ">Instagram:</span><br />
            <span class="d-block mt-2">{instagram}</span>
          </p>
        </div>
      </Col>
      <!-- end col -->
      <Col lg={8}>
        <div class="custom-form mt-4 pt-4">
          <Form method="post" name="myForm">
            <p id="error-msg" />
            <div id="simple-msg" />
            <Row>
              <Col lg={6}>
                <div class="form-group mt-2">
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    class="form-control"
                    placeholder="Imię*"
                  />
                </div>
              </Col>
              <!-- end col -->
              <Col lg={6}>
                <div class="form-group mt-2">
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="Adres e-mail*"
                  />
                </div>
              </Col>
              <!-- end col -->
            </Row>
            <!-- end row -->
            <Row>
              <Col lg={12}>
                <div class="form-group mt-2">
                  <Input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Temat wiadomości*"
                  />
                </div>
              </Col>
              <!-- end col -->
            </Row>
            <!-- end row -->
            <Row>
              <Col lg={12}>
                <div class="form-group mt-2">
                  <Input
                    type="text"
                    name="comments"
                    id="comments"
                    rows="4"
                    class="form-control"
                    placeholder="Treść wiadomości*"
                  />
                </div>
              </Col>
              <!-- end col -->
            </Row>
            <!-- end row -->
            <Row>
              <Col lg={12} class="text-end">
                <Input
                  type="submit"
                  id="submit"
                  name="send"
                  class="submitBnt btn btn-primary"
                  value="Wyślij Wiadomość"
                />
                <div id="simple-msg" />
              </Col>
              <!-- end col -->
            </Row>
            <!-- end row -->
          </Form>
          <!-- end form -->
        </div>
      </Col>
      <!-- end col -->
    </Row>
    <!-- end row -->
  </Container>
  <!-- end container -->
</section>
