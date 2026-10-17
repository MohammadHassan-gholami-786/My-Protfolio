import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <h2 className="section-header">Connect With Mohammad Hassan</h2>
      <div className="contact-container">
        <div>
          <p className="custom-text">
            Reach out via my official real-world communication channels for full live code reviews, presentation feedback, or capstone verification.
          </p>
          
          <div className="social-channels">
            <a href="https://t.me/MHG078" target="_blank" rel="noreferrer" className="communication-link">
             <img src="/telegram.png" alt="Telegram Logo" className="icon-logo" />
              <span>Connect via Telegram</span>
            </a>
            <a href="https://wa.me/93782351628" target="_blank" rel="noreferrer" className="communication-link">
              <img src="whats app.png" alt="WhatsApp Logo" className="icon-logo" />
              <span>Message on WhatsApp</span>
            </a>
 

            <a href="mailto:mohammadhassang81@gmail.com" className="communication-link">
              <img src="email.png" alt="Email Logo" className="icon-logo" />
              <span>Send Professional Email</span>
            </a>
          </div>
        </div>

        <div className="form-wrapper">
  {/* اضافه کردن متد کنترل وضعیت و آدرس پست سرور */}
  <form onSubmit={async (e) => { 
    e.preventDefault(); 
    
    // ۱. گرفتن اطلاعات تایپ شده از کادرهای ورودی فرم
    const nameInput = e.target.elements[0].value;
    const emailInput = e.target.elements[1].value;
    const formData = { name: nameInput, email: emailInput };

    try {
      // 🌟 ۲. آدرس دقیق سرور لوکال که اطلاعات فرم باید به آنجا POST شوند
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: { "Content-Type": "api/js" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSent(true); // نمایش پیام موفقیت فقط در صورت ارسال درست به آدرس
        e.target.reset(); // پاک کردن کادرها بعد از فرستادن اطلاعات
      } else {
        alert("Server error. Could not post data.");
      }
    } catch (error) {
      alert("Please run 'npm run api' in your terminal first to start the server!");
    }
  }}>
    <div className="input-container">
      <label className="custom-label">Your Name</label>
      <input type="text" required className="input-box" />
    </div>
    <div className="input-container">
      <label className="custom-label">Your Email</label>
      <input type="email" required className="input-box" />
    </div>
    <button type="submit" className="submit-btn">Submit Contact Action</button>
  </form>
  
  {/* پیام موفقیت واقعی پس از ارسال موفق به آدرس API */}
  {sent && <div style={{ color: "#facc15", marginTop: "12px", fontWeight: "bold" }}>✓ Transmission Completed Successfully to Server Endpoint!</div>}
</div>


        
      </div>
    </div>
  );
}
