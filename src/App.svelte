<script>
  import { Router, Route } from "svelte-routing";

  import Layout from "./Pages/Home.svelte";
  import ShoppingCart from "./Pages/shopping_cart.svelte";
  import PaymentSucceed from "./Pages/payment_succeed.svelte";
  import PaymentFailed from "./Pages/payment_failed.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Layout /></Route>
    <Route path="/koszyk"><ShoppingCart /></Route>
    <Route path="/platnosc_udana"><PaymentSucceed /></Route>
    <Route path="/blad_platnosci"><PaymentFailed /></Route>
  </div>
</Router>
