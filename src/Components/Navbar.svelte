<!-- Navbar component -->
<script>
  import { scrollto } from "svelte-scrollto";
  import { onMount } from "svelte";
  import { Button } from "sveltestrap";
  import { Link } from "svelte-routing";
  import { products } from "../Store/stores";

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

  /**
   * Scroll method
   */
  const handleScroll = () => {
    var navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar?.classList.add("is-sticky");
    } else {
      navbar?.classList.remove("is-sticky");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: false });

  let itemsCount = 0;

  products.subscribe((items) => {
    itemsCount = items.length;
  });
</script>

<!-- START NAVBAR -->
<div>
  <nav
    class={"navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"}
    id="navbar"
  >
    <div class="container">
      <a class="navbar-brand" href={"/"}>Najpierw Ja</a>

      <ul class="list-inline m-0" id="navbarIconsCollapsed">
        <li class="list-inline-item">
          <!-- Shopping cart button -->
          <Link to="koszyk">
            <Button class="navbar-toggler position-relative">
              <span
                class="position-absolute translate-middle rounded-3 bg-warning items-amount"
                >{itemsCount}</span
              >
              <div class="fa-solid fa-cart-shopping" />
            </Button>
          </Link>
        </li>

        <li class="list-inline-item">
          <!-- Menu button -->
          <Button class="navbar-toggler" on:click={toggleMenu}>
            <div class="fa-solid fa-bars" />
          </Button>
        </li>
      </ul>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mx-auto" id="navbar-navlist">
          <li class="nav-item">
            <a class="nav-link" use:scrollto={"#home"} href={"#about"}>O mnie</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" use:scrollto={"#ebooks"} href={"#ebooks"}
              >E-booki</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" use:scrollto={"#coaching"} href={"#coaching"}
              >Coaching</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" use:scrollto={"#contact"} href={"#contact"}
              >Kontakt</a
            >
          </li>
        </ul>
        <!-- end ul -->
        <div>
          <ul class="text-end list-inline mb-0 nav-social">
            <li class="list-inline-item">
              <Link to="koszyk" class="shopping-cart">
                <div>
                  <i class="fa-solid fa-cart-shopping fa-lg" />
                  <span
                    class="position-fixed translate-middle rounded-pill bg-warning items-amount"
                  >
                    {itemsCount}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
