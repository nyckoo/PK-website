<script>
  import { Row, Col, Input, Container, Button } from "sveltestrap";
  import Data from "../Data/data";
  import { user } from "../Store/stores";

  import { axiosInstance } from "../axios";

  const { description, email_address, phone_nr, instagram } = Data.CONTACT_DATA;

  import { createForm } from "svelte-forms-lib";

  let isSuccess = false;
  let isError = false;

  const { form, errors, state, handleChange, handleSubmit, handleReset } =
    createForm({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        content: "",
      },
      validate: (values) => {
        let errs = {};
        if (values.name === "") {
          errs["name"] = "Pole jest wymagane!";
        }
        if (values.email === "") {
          errs["email"] = "Pole jest wymagane!";
        }
        if (values.subject === "") {
          errs["subject"] = "Pole jest wymagane!";
        }
        if (values.content === "") {
          errs["content"] = "Pole jest wymagane!";
        }
        return errs;
      },
      onSubmit: async (data) => {
        try {
          const response = await axiosInstance.post(`form`, data);
          handleReset();
          isSuccess = true;
          isError = false;
        } catch (error) {
          isSuccess = false;
          isError = true;
        }
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
                    class="form-control"
                    id="subject"
                    placeholder="Temat wiadomości*"
                    invalid={$errors.subject}
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
                    id="content"
                    rows={8}
                    class="form-control"
                    placeholder="Treść wiadomości*"
                    invalid={$errors.content}
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
                <p class="fs-6 text-muted text-end mt-2">
                  {isError && !isSuccess
                    ? "Wystąpił błąd, spróbuj później."
                    : ""}
                  {isSuccess && !isError ? "Wysłano wiadomość :)" : ""}
                </p>
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
