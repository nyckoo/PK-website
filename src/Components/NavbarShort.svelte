<script>
  import { scrollto } from "svelte-scrollto";
  import { onMount } from "svelte";
  import { Button } from "sveltestrap";
  import { Link } from "svelte-routing";

  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar?.classList.add("nav-sticky");
    } else {
      navbar?.classList.remove("nav-sticky");
    }

    if (!!document.getElementById("back-to-top")) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }

  window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    windowScroll();
  });

  /**
   * Toggle menu
   */
  const toggleMenu = () => {
    document.getElementById("navbarCollapse").classList.toggle("show");
  };

  /**
   * Component mount
   */
  onMount(() => {
    var section = document.querySelectorAll(".common-section");

    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector(".active").setAttribute("class", " ");
          document
            .querySelector("a[href*=" + i + "]")
            .setAttribute("class", "active");
        }
      }
    };
  });
</script>

<!-- START NAVBAR -->
<div>
  <nav
    class={"navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"}
    id="navbar"
  >
    <div class="container" id="navbarIconsCollapsed">
      <Link to="home">
        <p class="navbar-brand">Najpierw Ja</p>
      </Link>
    </div>
  </nav>
</div>
