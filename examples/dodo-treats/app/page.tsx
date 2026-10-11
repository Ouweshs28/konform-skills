import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <h1>Gâteaux faits maison à Curepipe</h1>
      <img src="/hero.jpg" />
      <p>Livraison partout à Maurice et à La Réunion. Prices also shown in EUR for our Réunion customers.</p>
      <iframe src="https://www.youtube.com/embed/abc123" width="560" height="315"></iframe>
      <ContactForm />
    </main>
  );
}
