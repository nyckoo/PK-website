<script>
  import { Router, Route } from "svelte-routing";

  import Layout from "./Pages/Home.svelte";
  import ShoppingCart from "./Pages/shopping_cart.svelte";
  import PaymentSummary from "./Pages/payment_summary.svelte";
  import DefaultPage from "./Pages/DefaultPage.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Layout /></Route>
    <Route path="/koszyk"><ShoppingCart /></Route>
    <Route path="/podsumowanie-platnosci"><PaymentSummary /></Route>
    <Route><DefaultPage /></Route>
  </div>
</Router>
