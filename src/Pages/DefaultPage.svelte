<script>
  import { navigate } from "svelte-routing";
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    navigate("/");
  });
</script>
