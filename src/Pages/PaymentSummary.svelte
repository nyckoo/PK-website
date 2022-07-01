<script>
  import { Link } from "svelte-routing";
  import { Container, Row, Col } from "sveltestrap";
  import NavbarShort from "../Components/NavbarShort.svelte";

  const urlSearch = new URLSearchParams(window.location.search);
  const isError = urlSearch.get("error") === "501";
</script>

<NavbarShort />
<section class="d-flex section bg-subsite full-height align-items-center">
  <Container>
    {#if isError}
      <div class="bg-white p-4 rounded bg-light text-wrap">
        <p class="fs-3">Coś poszło nie tak!</p>
        <p class="fs-5 text-dark">Przerwano płatność w serwisie PayU.</p>
        <Row class="justify-content-start">
          <div
            class="summary-box d-flex justify-content-between align-items-center"
          >
            <div class="flex-row total">
              <a href={"/"}
                ><p class="mt-3 fs-6">Przejdź do strony głównej</p></a
              >
            </div>
          </div>
        </Row>
      </div>
    {:else}
      <div class="bg-white p-4 rounded bg-light text-wrap">
        <p class="fs-3">Gratulacje! Płatność zrealizowana.</p>
        <p class="fs-5 text-dark">
          Twoje e-booki zostały wysłane na skrzynkę mailową.
        </p>
        <Row class="justify-content-start">
          <div
            class="summary-box d-flex justify-content-between align-items-center"
          >
            <div class="flex-row total">
              <a href={"/"}
                ><p class="mt-3 fs-6">Przejdź do strony głównej</p></a
              >
            </div>
          </div>
        </Row>
      </div>
    {/if}
  </Container>
</section>
