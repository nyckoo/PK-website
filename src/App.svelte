<script>
  import { Router, Route } from "svelte-routing";

  import Layout from "./Pages/Home.svelte";
  import ShoppingCart from "./Pages/ShoppingCart.svelte";
  import PaymentSummary from "./Pages/PaymentSummary.svelte";
  import DefaultPage from "./Pages/DefaultPage.svelte";
  import TermsOfUse from "./Pages/TermsOfUse.svelte";
  import PrivacyPolicy from "./Pages/PrivacyPolicy.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route><DefaultPage /></Route>
    <Route path="/"><Layout /></Route>
    <Route path="/koszyk"><ShoppingCart /></Route>
    <Route path="/podsumowanie-platnosci"><PaymentSummary /></Route>
    <Route path="/regulamin"><TermsOfUse /></Route>
    <Route path="/polityka-prywatnosci"><PrivacyPolicy /></Route>
  </div>
</Router>
