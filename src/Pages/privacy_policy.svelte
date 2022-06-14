<script>
  import { Link } from "svelte-routing";
  import { Container, Row, Col } from "sveltestrap";
  import NavbarShort from "../Components/NavbarShort.svelte";

  import Data from "../Data/data";

  const privacyPolicy = Data.PRIVACY_POLICY;
</script>

<NavbarShort />
<section class="d-flex section bg-subsite full-height align-items-center">
  <Container>
    <div class="bg-white p-4 rounded bg-light">
      <Row class="justify-content-center text-start">
        <Col lg={12}>
          <h3 class="text-dark title text-center mb-5">Polityka prywatności</h3>
          <p class="fs-5 text-dark">Informacja</p>
          <div class="p-3">
            {#each privacyPolicy.desc_list as item}
              <p class="text-dark">
                {item}
              </p>
            {/each}
            <p class="text-dark">
              {privacyPolicy.rodo.desc}
            </p>
            {#each privacyPolicy.rodo.list as item}
              <p class="text-muted">
                • {item}
              </p>
            {/each}
            <p class="text-dark">
              {privacyPolicy.rodo.summary}
            </p>
          </div>
          <p class="fs-5 text-dark">Dane osobowe umożliwiające identyfikację</p>
          {#each privacyPolicy.identification_data.list as item}
            <p class="p-3 text-dark">
              {item}
            </p>
          {/each}
          {#each privacyPolicy.identification_data.subjects as item}
            <p class="p-3 text-muted">
              - {item}
            </p>
          {/each}
          <p class="fs-5 text-dark">Zmiana polityki prywatności</p>
          <p class="p-3 text-dark">
            {privacyPolicy.future_changes}
          </p>
          <p class="fs-5 text-dark">Akceptacja niniejszych zasad użytkowania</p>
          <p class="p-3 text-dark">
            {privacyPolicy.acceptation}
          </p>
          <p class="fs-5 text-dark">Pliki cookies</p>
          {#each privacyPolicy.cookies as item}
            <p class="p-3 text-dark">
              {item}
            </p>
          {/each}
        </Col>
      </Row>
    </div>
  </Container>
</section>
