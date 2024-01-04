import { ScreenO, Title } from "../../../components/layout";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <ScreenO className={"centerize"}>
        <div
          className="boxed container aos-init aos-animate"
          data-aos="fade-up"
        >
          <Title>Contact Me</Title>

          <div className="row">
            <div
              className="col-lg-5 d-flex flex-column align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>95 Candos Road Ipaja Lagos</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>b.fadamitan2019@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+234 703 479 7467</p>
                </div>
              </div>
              <div className="embededMap w-100 h-100 bg-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.819767969889!2d3.2709210209300643!3d6.5444290801264495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f94e5548ecf%3A0x1679579032bac15b!2sBAFUTO%20INSTITUTE%20OF%20MANAGEMENT%20AND%20INFORMATION%20TECHNOLOGY!5e0!3m2!1sen!2sng!4v1670507233704!5m2!1sen!2sng"
                  style={{ border: 0 }}
                  className="w-100 h-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="location"
                ></iframe>
              </div>
            </div>

            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required=""
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ScreenO>
    </div>
  );
};

export default Contact;
