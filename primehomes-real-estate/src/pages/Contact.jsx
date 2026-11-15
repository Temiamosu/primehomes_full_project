import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
const initial = { name: "", email: "", subject: "", message: "" };
export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const update = e => { setForm({...form, [e.target.name]: e.target.value}); setErrors({...errors, [e.target.name]: ""}); setSubmitted(false); };
  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length === 0) { setSubmitted(true); setForm(initial); }
  }
  return <main><section className="page-banner"><div className="container"><span className="eyebrow light">WE'RE HERE TO HELP</span><h1>Let's get in touch.</h1><p>Have a question about a property? Send our team a message.</p></div></section>
    <section className="section container contact-layout"><div className="contact-info"><span className="eyebrow">CONTACT PRIMEHOMES</span><h2>We'd love to hear from you.</h2><p>Use the form to send an enquiry. The contact details below are sample details for this student project.</p><div className="contact-item"><span><Phone/></span><div><small>Phone</small><strong>+234 800 000 0000</strong></div></div><div className="contact-item"><span><Mail/></span><div><small>Email</small><strong>hello@primehomes.example</strong></div></div><div className="contact-item"><span><MapPin/></span><div><small>Location</small><strong>Lagos, Nigeria</strong></div></div></div>
      <form className="contact-form" onSubmit={submit} noValidate><h3>Send us a message</h3>{submitted && <div className="success-message"><CheckCircle2 size={18}/> Thank you! Your message has been validated successfully. (Demo form — no email was sent.)</div>}
        <label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your full name"/>{errors.name && <small className="error">{errors.name}</small>}</label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com"/>{errors.email && <small className="error">{errors.email}</small>}</label>
        <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="How can we help?"/>{errors.subject && <small className="error">{errors.subject}</small>}</label>
        <label>Message<textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Write your message..."/>{errors.message && <small className="error">{errors.message}</small>}</label>
        <button className="button button-primary" type="submit">Send message <Send size={17}/></button>
      </form>
    </section></main>;
}
