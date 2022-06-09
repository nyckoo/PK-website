<script>
  import { Router, Route } from "svelte-routing";

  import Layout from "./Pages/Home.svelte";
  import ShoppingCart from "./Pages/shopping_cart.svelte";
  import PaymentSummary from "./Pages/payment_summary.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Layout /></Route>
    <Route path="/koszyk"><ShoppingCart /></Route>
    <Route path="/podsumowanie_platnosci"><PaymentSummary /></Route>
  </div>
</Router>
