<script>
  import { Router, Route } from "svelte-routing";

  import Layout from "./routes/Layout.svelte";
  import Login from "./routes/login.svelte";
  import Signup from "./routes/signup.svelte";
  import Password_forget from "./routes/password_forget.svelte";
  import ShoppingCart from "./routes/shopping_cart.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Layout /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/password_forget"><Password_forget /></Route>
    <Route path="/koszyk"><ShoppingCart /> </Route>
  </div>
</Router>
