<script>
    import { Container, Row, Col } from 'sveltestrap'
    import Data from '../Data/data'
    
    const { heading, boldheading, u_list } = Data.EBOOKS_DATA
  </script>
  
  <section class="section" id="ebooks">
    <Container>
      <Row class="justify-content-center text-center">
        <Col lg={12}>
          <i class="fa-solid fa-book-open-reader title-icon text-dark" />
          <h3 class="title">
            {heading} <span class="fw-bold">{boldheading}</span>
          </h3>
          <!--
          <p class="text-muted mt-3 title-subtitle mx-auto">
            {description}
          </p>
        -->
        </Col>
      </Row>
  
      <Row class="mt-5 text-center">
        {#each u_list as item}
          <Col md={4}>
            <div class="services-box">
                <!--
              <div class="services-icon">
                <i class={'text-primary ' + list.icon} />
              </div>
              -->
              <div class="mt-3">
                <img src="assets\images\ebooks\{item.img_name}.jpeg" alt="." width="280px">
                <h5 class="services-title fw-bold mt-5 mb-3">{item.title}</h5>
                <p class="services-subtitle text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </Col>
        {/each}
      </Row>
    </Container>
  </section>
  