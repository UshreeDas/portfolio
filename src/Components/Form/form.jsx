import React from "react";
import "./form.css";
import Swal from 'sweetalert2';


function Form () {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4fe34f11-6457-4d9b-82ea-139ba8d0461a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent !",
                icon: "success"
              });
        }
      };
    return (
        <div id="call">
        <section id="hello">
        <form onSubmit={onSubmit}>
        <h3>Contact me</h3>
        <section className="contact">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter your name" name="name" required/>
        </section>
        <section className="contact">
            <label>Email Address</label>
            <input type="email" className="field" placeholder="Enter your email" name="email" required/>
        </section>
        <section className="contact">
            <label>Your Message</label>
            <textarea name="message" id="" className="field mess" placeholder="Enter your message " required></textarea>
        </section>
        <button type="submit"> Send Message</button>
        </form>
        </section>
        </div>

    )
}
export default Form;