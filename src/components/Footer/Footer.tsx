import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">Retour en haut</div>
      <div className="footer-cta">
        <div className="footer-cta-container">
          <h2>Vous aussi, gagnez de l'argent avec Omazon !</h2>
          <div className="footer-cta-paragraph">
            <p>Transformez vos passions en revenus.</p>
            <p>Rejoignez notre communauté de vendeurs dès aujourd'hui !</p>
          </div>
          <button type="button">Devenez vendeur sur Omazon</button>
        </div>
        <div className="footer-logo">
          <img src="/resources/logos/omazon.svg" alt="Logo Omazon" />
        </div>
      </div>
      <div className="footer-legals">
        <ul className="footer-legals-list">
          <li>Conditions générales de vente</li>
          <li>Vos informations personnelles</li>
          <li>Cookies</li>
          <li>Annonces basées sur vos centres d'intérêt</li>
        </ul>

        <p className="copyright">© 2025 Omazon, un clone simplifié de Amazon</p>
      </div>
    </footer>
  );
}
