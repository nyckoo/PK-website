<script>
  import { Link } from "svelte-routing";
  import { Container, Row, Col } from "sveltestrap";
  import { onMount } from "svelte";

  let isSwitchToggle = false;

  function toggleSwitcher() {
    isSwitchToggle = !isSwitchToggle;
  }

  //Scroll to top
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setTheme(color) {
    document.getElementById("colorTheme").href =
      "assets/css/colors/" + color + ".css";
  }

  function scrollNavigation() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      // document.getElementById("back-to-top").style.display = "inline";
    } else {
      // document.getElementById("back-to-top").style.display = "none";
    }
  }

  onMount(async () => {
    window.addEventListener("scroll", scrollNavigation, true);
  });
</script>

<section class="section footer">
  <Container>
    <Row>
      <Col lg={12}>
        <div class="text-center">
          <ul class="list-inline social mb-0">
            <li class="list-inline-item">
              <a
                target="_blank"
                href="https://instagram.com/najpierw_ja/"
                class="social-icon text-muted"
                ><i class="fa-brands fa-instagram" /></a
              >
            </li>
            <li class="list-inline-item">
              <Link to={"#"} class="social-icon text-muted"
                ><i class="fa-brands fa-facebook" /></Link
              >
            </li>
            <li class="list-inline-item">
              <Link to={"#"} class="social-icon text-muted"
                ><i class="fa-brands fa-tiktok" /></Link
              >
            </li>
          </ul>
        </div>

        <div class="footer-terms">
          <ul class="mb-0 text-center mt-4 pt-2">
            <li class="list-inline-item">
              <Link to={"regulamin"} class="text-muted">Regulamin sklepu</Link>
            </li>
            <li class="list-inline-item">
              <Link to={"polityka-prywatnosci"} class="text-muted"
                >Polityka prywatności</Link
              >
            </li>
            <!--
            <li class="list-inline-item">
              <Link to={"#"} class="text-muted">Contact Us</Link>
            </li>
             -->
          </ul>
        </div>

        <div class="mt-5 pt-2 text-center">
          <p class="copy-rights text-muted mb-0">
            {new Date().getFullYear()} © Paweł Kowalski
          </p>
        </div>
      </Col>
      <!-- end col -->
    </Row>
    <!-- end row -->
  </Container>
</section>
<!-- Back to top -->

<Link to={""} class="back-to-top" id="back-to-top" on:click={scrollTop}>
  <i class="fa-solid fa-angle-up" /></Link
>

<!-- Style switcher
<div id="style-switcher" style="left: {isSwitchToggle ? '0px' : '-189px'}">
  <div>
    <h3>Select your color</h3>
    <ul class="pattern">
      <li>
        <Link class="color1" to={"#"} on:click={() => setTheme("default")} />
      </li>
      <li>
        <Link class="color2" to={"#"} on:click={() => setTheme("pink")} />
      </li>
      <li>
        <Link class="color3" to={"#"} on:click={() => setTheme("yellow")} />
      </li>
      <li>
        <Link class="color4" to={"#"} on:click={() => setTheme("green")} />
      </li>
      <li>
        <Link class="color5" to={"#"} on:click={() => setTheme("purple")} />
      </li>
      <li>
        <Link class="color6" to={"#"} on:click={() => setTheme("light-blue")} />
      </li>
    </ul>
  </div>
  <div class="bottom">
    <Link to={"#"} class="settings" on:click={toggleSwitcher}
      ><i class="ti-settings ti-spin" /></Link
    >
  </div>
</div>
 end Style switcher -->
