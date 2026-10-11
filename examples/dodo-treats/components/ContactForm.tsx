'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={async (e) => { e.preventDefault(); await fetch('/api/contact', { method: 'POST', body: new FormData(e.currentTarget) }); setSent(true); }}>
      <input name="fullName" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="phone" type="tel" placeholder="Phone (+230)" />
      <label htmlFor="nic">NIC number</label>
      <input id="nic" name="nic" required />
      <label htmlFor="allergies">Allergies or medical conditions</label>
      <textarea id="allergies" name="allergies" />
      <label>
        <input type="checkbox" name="newsletter" defaultChecked /> Subscribe me to offers from Dodo Treats and partners
      </label>
      <button type="submit">Send</button>
      {sent && <p>Merci !</p>}
    </form>
  );
}
