import "./Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <span className="section-tag">Services</span>

        <h2 className="section-title">
          Solutions That Drive <br />
          <span>Business Growth</span>
        </h2>

        <p className="section-desc">
          Comprehensive web development services designed to help your business
          succeed online. Every project is crafted with attention to detail and
          focus on results.
        </p>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="icon">🌐</div>
            <h3>WordPress Development</h3>
            <p>
              Custom WordPress websites tailored to your brand. From business
              sites to complex portals, built for performance and easy
              management.
            </p>
            <div className="tags">
              <span>Custom Themes</span>
              <span>Plugin Development</span>
              <span>Speed Optimized</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="icon">🛒</div>
            <h3>Shopify Store Setup</h3>
            <p>
              Launch your eCommerce store with Shopify. Complete setup including
              theme customization, product upload, and payment integration.
            </p>
            <div className="tags">
              <span>Theme Customization</span>
              <span>Product Setup</span>
              <span>Launch Ready</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="icon">💳</div>
            <h3>WooCommerce Solutions</h3>
            <p>
              Transform your WordPress site into a powerful online store. Full
              WooCommerce setup with custom functionality.
            </p>
            <div className="tags">
              <span>Store Setup</span>
              <span>Custom Features</span>
              <span>Multi-Currency</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="icon">🧩</div>
            <h3>Theme & Plugin Customization</h3>
            <p>
              Extend your website’s functionality with custom themes and plugin
              modifications tailored to your needs.
            </p>
            <div className="tags">
              <span>Theme Editing</span>
              <span>Plugin Mods</span>
              <span>Custom Functions</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="service-card">
            <div className="icon">🚀</div>
            <h3>Speed & SEO Optimization</h3>
            <p>
              Boost your website’s performance and search rankings with advanced
              optimization techniques.
            </p>
            <div className="tags">
              <span>Core Web Vitals</span>
              <span>On-Page SEO</span>
              <span>Performance Audit</span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="service-card">
            <div className="icon">🔗</div>
            <h3>Payment & Shipping Integration</h3>
            <p>
              Seamless integration of payment gateways and shipping solutions
              for global eCommerce.
            </p>
            <div className="tags">
              <span>Payment Gateways</span>
              <span>Shipping APIs</span>
              <span>Tax Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
