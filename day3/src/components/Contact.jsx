import { useState } from "react"


function Contact(){
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === ""){
            alert("Please enter your email!");
            return;
        }
        
        console.log("Sending email to:", email);
        setSubmitted(true);
        setEmail("");
    }

    return(
        <section className="contact-section">
            <h3>Contact Us</h3>

            {submitted ? (
                <p className="success-msg">Thanks for contacting us!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email: </label>
                        <input 
                            type="text" 
                            placeholder="Enter email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </section>
    )
}

export default Contact