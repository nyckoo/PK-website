<script>
  import { axiosInstance } from "../axios";

  import { createForm } from "svelte-forms-lib";

  import {
    Container,
    Row,
    Col,
    Button,
    Column,
    Input,
    FormGroup,
    Label,
  } from "sveltestrap";
  import NavbarShort from "../Components/NavbarShort.svelte";
  import { products } from "../Store/stores";

  import rawCountries from "i18n-iso-countries";
  import polishLang from "i18n-iso-countries/langs/pl.json";
  rawCountries.registerLocale(polishLang);
  const countries = Object.entries(
    rawCountries.getNames("pl", { select: "official" })
  ).sort((a, b) => a[1].localeCompare(b[1]));

  let items;
  products.subscribe((prods) => {
    items = prods;
  });

  let isError = false;

  $: total = items.reduce(
    (prev, current) => prev + +current.price.substr(0, 2),
    0
  );

  const { form, errors, state, handleChange, handleSubmit, handleReset } =
    createForm({
      initialValues: {
        name: "",
        surname: "",
        street: "",
        street_nr: "",
        country: "PL",
        city: "",
        postal_code: "",
        email: "",
        isTermsAccepted: false,
        isPrivacyPolicyAccepted: false,
      },
      validate: (values) => {
        let errs = {};
        if (values.name === "") {
          errs["name"] = "Pole jest wymagane!";
        }
        if (values.surname === "") {
          errs["surname"] = "Pole jest wymagane!";
        }
        if (values.street === "") {
          errs["street"] = "Pole jest wymagane!";
        }
        if (values.street_nr === "") {
          errs["street_nr"] = "Pole jest wymagane!";
        }
        if (values.country === "") {
          errs["country"] = "Pole jest wymagane!";
        }
        if (values.city === "") {
          errs["city"] = "Pole jest wymagane!";
        }
        if (values.postal_code === "") {
          errs["postal_code"] = "Pole jest wymagane!";
        }
        if (!values.email) {
          errs["email"] = "Pole jest wymagane!";
        } else if (
          !values.email.match(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
          )
        ) {
          errs["email"] = "Niepoprawny adres e-mail!";
        }
        if (!values.isTermsAccepted) {
          errs["isTermsAccepted"] = "Pole jest wymagane!";
        }
        if (!values.isPrivacyPolicyAccepted) {
          errs["isPrivacyPolicyAccepted"] = "Pole jest wymagane!";
        }
        return errs;
      },
      onSubmit: async (data) => {
        try {
          const response = await axiosInstance.post(`transactions`, {
            email: data.email,
            name: data.name,
            surname: data.surname,
            country: data.country,
            city: data.city,
            postalCode: data.postal_code,
            street: data.street,
            streetNumber: data.street_nr,
            flatNumber: data.house_nr !== "" ? data.house_nr : undefined,
            products: items.map((item) => item.id),
          });
          window.location.href = response.data.uri;
          isError = false;
        } catch (error) {
          isError = true;
        }
      },
    });
</script>

<NavbarShort />

<section class="d-flex section bg-subsite full-height align-items-center">
  <Container>
    <div class="bg-white p-4 rounded bg-light">
      <!-- Purchase Summary -->
      <p class="fs-2">Twój koszyk:</p>
      <Row class="justify-content-start">
        <p class="text-muted">Ilość e-booków do zakupu: {items.length}</p>
        {#each items as product}
          <Col md={4} class="p-3 d-flex-column align-items-start">
            <div class="mb-1">
              <p class="text-dark">{product.title}</p>
            </div>
            <img
              class="scale-img"
              src="\assets\images\ebooks\{product.img}.jpeg"
              alt=""
              width="100%"
              height="auto"
            />
            <p class="mt-3 fs-3">{product.price}</p>
          </Col>
        {/each}
        <!-- Client Form -->
        <div class="custom-form mt-4 mb-2 pt-4">
          <p class="fs-2 mb-4">Dane i adres:</p>
          <form name="clientForm" on:submit|preventDefault>
            <p id="error-msg" />
            <div id="simple-msg" />
            <Row>
              <Col lg={6}>
                <div class="form-group mt-2">
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Imię*"
                    invalid={$errors.name}
                    on:change={handleChange}
                    bind:value={$form.name}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div class="form-group mt-2">
                  <Input
                    name="surname"
                    id="surname"
                    type="text"
                    class="form-control"
                    placeholder="Nazwisko*"
                    invalid={$errors.surname}
                    on:change={handleChange}
                    bind:value={$form.surname}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div class="form-group mt-2">
                  <Input
                    name="street"
                    id="street"
                    type="text"
                    class="form-control"
                    placeholder="Ulica*"
                    invalid={$errors.street}
                    on:change={handleChange}
                    bind:value={$form.street}
                  />
                </div>
              </Col>
              <!-- end col -->
              <Col lg={3}>
                <div class="form-group mt-2">
                  <Input
                    name="street_nr"
                    id="street_nr"
                    type="text"
                    class="form-control"
                    placeholder="Nr domu*"
                    invalid={$errors.street_nr}
                    on:change={handleChange}
                    bind:value={$form.street_nr}
                  />
                </div>
              </Col>
              <Col lg={3}>
                <div class="form-group mt-2">
                  <Input
                    name="house_nr"
                    id="house_nr"
                    type="text"
                    class="form-control"
                    placeholder="Nr mieszkania"
                    invalid={$errors.house_nr}
                    on:change={handleChange}
                    bind:value={$form.house_nr}
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div class="form-group mt-2 mb-3">
                  <Input
                    type="select"
                    id="country"
                    name="country"
                    invalid={$errors.country}
                    on:change={handleChange}
                    bind:value={$form.country}
                  >
                    {#each countries as country}
                      <option value={country[0]}>{country[1]}</option>
                    {/each}
                  </Input>
                </div>
              </Col>
              <Col lg={3}>
                <div class="form-group mt-2">
                  <Input
                    name="city"
                    id="city"
                    type="text"
                    class="form-control"
                    placeholder="Miasto*"
                    invalid={$errors.city}
                    on:change={handleChange}
                    bind:value={$form.city}
                  />
                </div>
              </Col>
              <Col lg={3}>
                <div class="form-group mt-2">
                  <Input
                    name="postal_code"
                    id="postal_code"
                    type="text"
                    class="form-control"
                    placeholder="Kod pocztowy*"
                    invalid={$errors.postal_code}
                    on:change={handleChange}
                    bind:value={$form.postal_code}
                  />
                </div>
              </Col>
              <!-- end col -->
              <Col lg={12}>
                <div class="form-group mt-2">
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Email*"
                    invalid={$errors.email}
                    feedback={$errors.email}
                    on:change={handleChange}
                    bind:value={$form.email}
                  />
                </div>
              </Col>
            </Row>
            <!-- end row -->
          </form>
          <!-- end form -->
          <p class="text-dark">
            Uwaga! E-booki zostaną wysłane na e-mail podany w formlarzu.
          </p>
        </div>
        <div>
          <!-- Purchase Agreements -->
          <div class="p-1 mt-2">
            <p class="fs-2 mb-5">Zgody:</p>
            <Column>
              <FormGroup class="d-flex flex-row">
                <Input
                  type="checkbox"
                  invalid={$errors.isTermsAccepted}
                  bind:checked={$form.isTermsAccepted}
                  on:change={handleChange}
                  value="true"
                />
                <Label>
                  Akceptuję
                  <a target="_blank" href="/regulamin">Regulamin sklepu</a
                  >*.</Label
                >
              </FormGroup>
              <FormGroup class="d-flex flex-row">
                <Input
                  type="checkbox"
                  invalid={$errors.isPrivacyPolicyAccepted}
                  bind:checked={$form.isPrivacyPolicyAccepted}
                  on:change={handleChange}
                  value="true"
                />
                <Label>
                  Akceptuję
                  <a target="_blank" href="/polityka-prywatnosci"
                    >Politykę prywatności</a
                  >*.</Label
                >
              </FormGroup>
              <p class="text-dark fs-6 p-1">* - pola obowiązkowe</p>
            </Column>
          </div>
        </div>
        <div
          class="summary-box d-flex justify-content-between align-items-center"
        >
          <!-- Payment Summary -->
          <div class="d-flex flex-column mt-2 fs-2">
            {#if items.length === 3}
              <span class="mt-2 mb-2 fs-6 text-muted"
                >Uwzględniono promocję pakietu!</span
              >
              Razem: <span><s>{total}</s> 99zł</span>
            {:else}
              Razem: {total + "zł"}
            {/if}
          </div>
          <div class="d-flex flex-column align-items-end">
            <p class="fs-6 text-muted text-end p-2">
              {isError
                ? "Wystąpił problem z płatnością - spróbuj później."
                : ""}
            </p>
            <Button
              on:click={handleSubmit}
              class="btn-primary"
              disabled={items.length === 0}>Zapłać w PayU</Button
            >
          </div>
        </div>
      </Row>
    </div>
  </Container>
</section>
