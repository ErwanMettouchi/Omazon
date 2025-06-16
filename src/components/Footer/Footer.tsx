import { useState } from "react";
import "./Footer.css";
import sanitize from "sanitize-html";
import type { ICategory, ITag } from "../../@types/index.d";
import categories from "../../data/categories.json";
import tags from "../../data/tags.json";
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
export default function Footer() {
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <>
      {isModalOpen && (
        <div className="modal-background">
          <Modal
            title="Ajouter un produit"
            closeModal={() => setIsModalOpen(false)}
          >
            <div className="modal-content">
              <form className="modal-form">
                <label htmlFor="product-title">Titre</label>
                <input
                  type="text"
                  id="product-title"
                  placeholder="Mon super produit"
                  required
                />
                <label htmlFor="product-url">URL de la photo</label>
                <input type="text" id="product-image" required />
                <label htmlFor="product-price">Prix (en euros)</label>
                <input
                  type="text"
                  id="product-price"
                  placeholder="90.99"
                  required
                />
                <div id="category-tag">
                  <div>
                    <label htmlFor="product-category">Catégorie</label>
                    <select id="product-category" required>
                      <option value="all">Toutes nos catégories</option>
                      {categories.map((category: ICategory) => (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="product-tag">Tag</label>
                    <select id="product-tag" required>
                      <option value="all">Tous les tags</option>
                      {tags.map((tag: ITag) => (
                        <option key={tag.id} value={tag.id}>
                          {sanitize(tag.text)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button type="submit">Ajouter le produit</button>
              </form>
            </div>
          </Modal>
        </div>
      )}
      <footer className="footer">
        <div className="footer-top">Retour en haut</div>
        <div className="footer-cta">
          <div className="footer-cta-container">
            <h2>Vous aussi, gagnez de l'argent avec Omazon !</h2>
            <div className="footer-cta-paragraph">
              <p>Transformez vos passions en revenus.</p>
              <p>Rejoignez notre communauté de vendeurs dès aujourd'hui !</p>
            </div>
            <button type="button" onClick={() => setIsModalOpen(true)}>
              Vendez sur Omazon
            </button>
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
          <p className="copyright">
            © 2025 Omazon, un clone simplifié de Amazon
          </p>
        </div>
      </footer>
    </>
  );
}
