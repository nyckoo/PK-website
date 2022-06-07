<script>
  import { Router, Route } from "svelte-routing";

  import Layout from "./Pages/Home.svelte";
  import Login from "./Pages/login.svelte";
  import Signup from "./Pages/signup.svelte";
  import Password_forget from "./Pages/password_forget.svelte";
  import ShoppingCart from "./Pages/shopping_cart.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Layout /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/password_forget"><Password_forget /></Route>
    <Route path="/koszyk"><ShoppingCart /></Route>
  </div>
</Router>
