<template>
  <footer>
    <div class="container">
      <div class="footer-about">
        <div class="about-name">
          <h3>AKALI</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laborum perferendis sed vitae repellendus tempora accusamus
            consequuntur commodi qui.
          </p>
        </div>
        <div class="about-follow">
          <h5>Follow Us</h5>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div class="social-icons">
            <font-awesome-icon :icon="['fab', 'twitter']" />
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
            <font-awesome-icon :icon="['fab', 'dribbble']" />
            <font-awesome-icon :icon="['fab', 'behance']" />
          </div>
        </div>
        <div class="about-contact">
          <h5>Contact Us</h5>
          <p>My Company, 4579 Marmora Road, Glasgow</p>
          <p>D04 89GR</p>
          <p>Call us now: 0123-456-789</p>
          <p>Email: support@akali.com</p>
        </div>
        <div class="about-news">
          <h5>News Letter</h5>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <form @submit.prevent>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-links">
        <div class="links-info">
          <h5>Information</h5>
          <ul>
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Privacy Plociy</a>
            </li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="links-services">
          <h5>Services</h5>
          <ul>
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Privacy Plociy</a>
            </li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="links-extras">
          <h5>Extras</h5>
          <ul>
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Privacy Plociy</a>
            </li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="links-account">
          <h5>My Account</h5>
          <ul>
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Privacy Plociy</a>
            </li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <div class="last-footer">
    <div class="container">
      <p>© 2015 Ecommerce software by Velatheme</p>
      <p>
        <span><font-awesome-icon :icon="['fab', 'cc-visa']" /></span>
        <span><font-awesome-icon :icon="['fab', 'cc-mastercard']" /></span>
        <span><font-awesome-icon :icon="['fab', 'cc-paypal']" /></span>
        <span><font-awesome-icon :icon="['fab', 'cc-discover']" /></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
footer {
  border-top: 2px solid var(--border-color);
  border-bottom: 2px solid var(--border-color);
}
footer p {
  font-size: 12px;
  line-height: 2;
}
footer .container .footer-about,
footer .container .footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.container div > div {
  padding: 1rem;
}
footer .container h3 {
  margin-bottom: 1rem;
}
footer .container h5 {
  margin-bottom: 1.8rem;
}
footer .container .footer-about {
  border-bottom: 2px solid var(--border-color);
}
footer .container .about-follow .social-icons {
  padding: 0;
}

footer .container .about-follow .social-icons svg {
  margin-right: 1rem;
  font-size: 12px;
  border: 2px solid var(--border-color);
  padding: 0.5rem;
}
footer .container .about-follow .social-icons svg:hover {
  border: 2px solid var(--btn-blue-color);
}
footer .container .about-news form {
  margin-top: 1rem;
}
footer .container .about-news form input[type="email"] {
  padding: 0.5rem;
  border: 2px solid var(--border-color);
  outline: none;
  margin-bottom: 1rem;
}
footer .container .about-news form button {
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--btn-blue-color);
  color: #fff;
  border: 2px solid var(--btn-blue-color);
}
footer .container .about-news form button:hover {
  background-color: var(--white-color);
  color: var(--btn-blue-color);
}
footer .footer-links li {
  font-size: 12px;
  line-height: 2;
}
footer .footer-links li a {
  color: var(--main-color);
}
footer .footer-links li a:hover {
  color: var(--btn-blue-color);
}
.last-footer .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem 0;
}
.last-footer p {
  font-size: 12px;
}
.last-footer p span {
  margin-right: 1rem;
  font-size: 16px;
}
</style>
