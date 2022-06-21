<script>
  import { Link } from "svelte-routing";
  import { Container, Row, Col } from "sveltestrap";
  import NavbarShort from "../Components/NavbarShort.svelte";

  import Data from "../Data/data";

  const termsOfUse = Data.TERMS_OF_USE;
</script>

<NavbarShort />
<section class="d-flex section bg-subsite full-height align-items-center">
  <Container>
    <div class="bg-white p-4 rounded bg-light">
      <Row class="justify-content-center text-start">
        <Col lg={12}>
          <h3 class="text-dark title text-center mb-5">Regulamin Sklepu</h3>
          <p class="fs-5 text-dark">1. Definicje</p>
          <div class="p-3">
            <p class="mt-2 mx-auto mb-5">
              {termsOfUse.definitions.desc}
            </p>
            {#each termsOfUse.definitions.list as item}
              <p class="text-muted">
                • {item}
              </p>
            {/each}
          </div>
          <p class="fs-5 text-dark">2. Zasady ogólne</p>
          <div class="p-3">
            {#each termsOfUse.general_rules.list as item}
              <p class="text-muted">
                • {item}
              </p>
            {/each}
          </div>
          <p class="fs-5 text-dark">3. Zawarcie umowy oraz dostawa</p>
          <div class="p-3">
            {#each termsOfUse.contract_and_delivery.list as item}
              <p class="text-muted">
                • {item}
              </p>
            {/each}
            <p class="mt-2 mx-auto mb-2">
              {termsOfUse.contract_and_delivery.coaching_payment_info}
            </p>
            <p class="mt-2 mx-auto mb-5">
              {termsOfUse.contract_and_delivery.coaching_payment_addition}
            </p>
          </div>
          <p class="fs-5 text-dark">4. Ceny</p>
          <p class="p-3 mt-2 mx-auto mb-4">
            {termsOfUse.prices}
          </p>
          <p class="fs-5 text-dark">5. Zastrzeżenia</p>
          <p class="p-3 mt-2 mx-auto mb-2">
            {termsOfUse.statements[0]}
          </p>
          <p class="p-3 mt-2 mx-auto mb-5">
            {termsOfUse.statements[1]}
          </p>
          <p class="fs-5 text-dark">6. Reklamacje</p>
          <p class="p-3 mt-2 mx-auto mb-4">
            {termsOfUse.complaint}
          </p>
          <p class="fs-5 text-dark">7. Zwroty</p>
          {#each termsOfUse.refund as item}
            <p class="p-3 text-muted">
              • {item}
            </p>
          {/each}
          <p class="fs-5 text-dark">8. Dane osobowe i pliki cookies</p>
          {#each termsOfUse.personal_data_and_cookies as item}
            <p class="p-3 text-muted">
              • {item}
            </p>
          {/each}
          <p class="fs-5 text-dark">9. Zmiany w regulaminie</p>
          {#each termsOfUse.future_changes as item}
            <p class="p-3 text-muted">
              {item}
            </p>
          {/each}
        </Col>
      </Row>
    </div>
  </Container>
</section>
