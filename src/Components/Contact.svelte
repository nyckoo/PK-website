<script>
  import { Row, Col, Input, Container, Button } from "sveltestrap";
  import Data from "../Data/data";
  import { user } from "../Store/stores";

  const { description, email_address, phone_nr, instagram } = Data.CONTACT_DATA;

  import { createForm } from "svelte-forms-lib";

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      content: "",
    },
    validate: (values) => {
      let errs = {};
      if (values.name === "") {
        errs["name"] = "custom validation: name is required";
      }
      if (values.email === "") {
        errs["email"] = "custom validation: email is required";
      }
      return errs;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
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
        <div class="mt-4 pt-4 d-flex flex-column justify-content-center">
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
          <form name="clientForm" on:submit|preventDefault={handleSubmit}>
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
                    invalid={$errors.name}
                    on:change={handleChange}
                    bind:value={$form.name}
                  />
                </div>
              </Col>
              <!-- end col -->
              <Col lg={6}>
                <div class="form-group mt-2">
                  <Input
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Adres e-mail*"
                    invalid={$errors.email}
                    on:change={handleChange}
                    bind:value={$form.email}
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
                    multiple
                    class="form-control"
                    id="subject"
                    placeholder="Temat wiadomości*"
                    invalid={$errors.subject}
                    feedback="To pole jest wymagane"
                    on:change={handleChange}
                    bind:value={$form.subject}
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
                    type="textarea"
                    name="comments"
                    id="comments"
                    rows={8}
                    class="form-control"
                    placeholder="Treść wiadomości*"
                    invalid={$errors.content}
                    feedback="To pole jest wymagane"
                    on:change={handleChange}
                    bind:value={$form.content}
                  />
                </div>
              </Col>
              <!-- end col -->
            </Row>
            <!-- end row -->
            <Row>
              <Col lg={12} class="text-end">
                <Button class="btn-primary">Wyślij wiadomość</Button>
              </Col>
              <!-- end col -->
            </Row>
            <!-- end row -->
          </form>
          <!-- end form -->
        </div>
      </Col>
      <!-- end col -->
    </Row>
    <!-- end row -->
  </Container>
  <!-- end container -->
</section>
