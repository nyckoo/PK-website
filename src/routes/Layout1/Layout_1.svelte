<script>
    import Navbar from '../../Components/Navbar.svelte'
    import HomeSection from '../Layout1/HomeSection.svelte'
    import Service from '../../Components/Service.svelte'
    import Feature from '../../Components/Feature.svelte'
    import Testimonial from '../../Components/Testimonial.svelte'
    import Team from '../../Components/Team.svelte'
    import Faq from '../../Components/Faq.svelte'
    import Pricing from '../../Components/Pricing.svelte'
    import Contact from '../../Components/Contact.svelte'
    import Footer from '../../Components/Footer.svelte'
    import About from '../../Components/About.svelte';
    import Ebooks from '../../Components/Ebooks.svelte';
    import Coaching from '../../Components/Coaching.svelte';
  
    import data from '../../Data/data'
  
  </script>
  
  <!-- STRAT NAVBAR -->
  <Navbar extraclass="" />
  <!-- END NAVBAR -->
  
  <!-- START HOME -->
  <HomeSection homeData={data.HOME_DATA} />
  <!-- END HOME -->

  <!-- START ABOUT -->
  <About aboutData={data.ABOUT_DATA} />
  <!-- END ABOUT -->

  <!-- START ABOUT -->
  <Ebooks ebooksData={data.EBOOKS_DATA} />
  <!-- END ABOUT -->
  
  <!-- START ABOUT -->
  <Coaching coachingData={data.COACHING_DATA} />
  <!-- END ABOUT -->
  
  <!-- CONTACT FORM START-->
  <Contact contactData={data.CONTACT_DATA} />
  <!-- CONTACT FORM END-->
  
  <!-- STRT FOOTER -->
  <Footer />
  <!-- END FOOTER -->