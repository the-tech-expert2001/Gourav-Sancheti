import "./Priority.css";

const Priority = () => {
  return (
    <section className="priority-section" id="priority">
      <div className="priority-container">
        {/* LEFT */}
        <div className="priority-left">
          <span className="priority-subtitle">Why Work With Me</span>

          <h2 className="priority-title">
            Your Success Is <br />
            <span>My Priority</span>
          </h2>

          <p className="priority-desc">
            With 3+ years of experience and 100+ successful projects, I bring a
            unique combination of technical expertise and business understanding
            to every project. When you work with me, you're not just getting a
            developer — you're getting a partner invested in your success.
          </p>

          <div className="priority-tags">
            <span className="tag green">
              ●{" "}
              <span className="white-tag-title">100% Client Satisfaction</span>
            </span>
            <span className="tag blue">
              ● <span className="white-tag-title">Post-Launch Support</span>
            </span>
            <span className="tag purple">
              ● <span className="white-tag-title">Transparent Pricing</span>
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="priority-right">
          <div className="priority-card">
            <div className="icon blue">
              <svg viewBox="0 0 24 24">
                <path d="M3 17l6-6 4 4 7-7" />
                <path d="M14 4h7v7" />
              </svg>
            </div>
            <h4>Results-Driven</h4>
            <p>
              Every project is built with your business goals in mind to convert
              visitors into customers.
            </p>
          </div>

          <div className="priority-card">
            <div className="icon cyan">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <h4>On-Time Delivery</h4>
            <p>
              Projects are delivered on schedule without compromising on quality
              or attention to detail.
            </p>
          </div>

          <div className="priority-card">
            <div className="icon teal">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l7 4v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V7l7-4z" />
              </svg>
            </div>
            <h4>Quality Guaranteed</h4>
            <p>
              Clean, scalable, well-documented code built to last with ongoing
              support.
            </p>
          </div>

          <div className="priority-card">
            <div className="icon purple">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
              </svg>
            </div>
            <h4>Clear Communication</h4>
            <p>
              Regular updates, transparent process and always available for your
              questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priority;
