import React from "react";

function Stats() {
  return (
    <div className="container p-4 pb-0">
      <div className="row p-4 pb-0">
        <div className="col-6 p-5">
          <h2>Trust with confidence</h2>
          <h4 className="mt-4">Customer-first always</h4>
          <p className="mt-2 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h4 className="mt-4">No spam or gimmicks</h4>
          <p className="mt-2 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our{" "}
            <a href="#">philosophies.</a>
          </p>
          <h4 className="mt-4">The Zerodha universe</h4>
          <p className="mt-2 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="mt-4">Do better with money</h4>
          <p className="mt-2 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "95%" }} />
          <div className="row text-center">
            <a href="#" className="col-6 text-decoration-none">Explore our products <i class="fa-solid fa-arrow-right ms-1"></i></a>
            <a href="#" className="col-6 text-decoration-none">Try Kite demo <i class="fa-solid fa-arrow-right ms-1"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
