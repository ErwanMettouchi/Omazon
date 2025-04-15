import "./styles/styles.scss";

function App() {
	return (
		<div className="app">
			<div className="header">
				<div className="header-logo">
					<img src="./src/img/logo.png" alt="omazon" />
				</div>
				<a href="/account" className="header-account">
					Bonjour, identifiez-vous
					<div className="link--bold">
						Compte et listes <span className="icon-caret-down" />
					</div>
				</a>
				<a href="/cart" className="header-cart">
					<div className="header-cart-count">
						<span className="header-cart-count-number">0</span>
						<span className="icon-cart" />
					</div>
					<div className="header-cart-title">Panier</div>
				</a>
				<div className="header-form">
					<button className="header-form-filter" type="button">
						Catégories <span className="icon-caret-down" />
					</button>
					<input
						type="text"
						className="header-form-input"
						placeholder="Rechercher ..."
					/>
					<button className="header-form-button" type="button">
						<span className="icon-search" />
					</button>
				</div>
			</div>

			<main className="main">
				<section className="categories">
					<h2 className="categories-title">Catégories à l'honneur</h2>
					<div className="categories-list">
						<div className="category">
							<div className="category-img">
								<img src="./src/img/categories/animalerie.jpg" alt="produit" />
							</div>
							<div className="category-name">Animalerie</div>
						</div>
						<div className="category">
							<div className="category-img">
								<img
									src="./src/img/categories/beaute-et-parfum.png"
									alt="produit"
								/>
							</div>
							<div className="category-name">Beauté</div>
						</div>
						<div className="category">
							<div className="category-img">
								<img src="./src/img/categories/livres.jpg" alt="produit" />
							</div>
							<div className="category-name">Livres</div>
						</div>
						<div className="category">
							<div className="category-img">
								<img src="./src/img/categories/bricolage.jpg" alt="produit" />
							</div>
							<div className="category-name">Bricolage</div>
						</div>
					</div>
				</section>

				<section className="products">
					<h2>Tous nos produits</h2>
					<div className="products-list">
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/vans.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Sk8-Hi Slim Vans, Baskets mode mixte adulte
							</div>
							<div className="product-price">
								59
								<span className="price-decimal">50 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/surfskate.jpg" alt="produit" />
							</div>
							<div className="product-name">BTFL Cody Surfskate 2024</div>
							<div className="product-price">
								208
								<span className="price-decimal">89 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/lego.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Millennium Falcon™ 75192 | Star Wars
							</div>
							<div className="product-price">
								129
								<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/shaker.jpg" alt="produit" />
							</div>
							<div className="product-name">
								SmartShake Lite DC, 800 ml, Wonderwoman, Shaker
							</div>
							<div className="product-price">
								9<span className="price-decimal">09 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/karcher.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Kärcher Nettoyeur haute pression K 2 Power Control Home
							</div>
							<div className="product-price">
								22
								<span className="price-decimal">15 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/bananes.jpg" alt="produit" />
							</div>
							<div className="product-name">
								2 Pack Sac Banane Femme, Banane Sacoche, Banane
							</div>
							<div className="product-price">
								13
								<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/zelda-totk.jpg" alt="produit" />
							</div>
							<div className="product-name">
								The Legend of Zelda : Tears of the Kingdom - Millenium
							</div>
							<div className="product-price">
								51
								<span className="price-decimal">49 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/bbq.jpg" alt="produit" />
							</div>
							<div className="product-name">BBQ</div>
							<div className="product-price">
								55
								<span className="price-decimal">77 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/bouee.jpg" alt="produit" />
							</div>
							<div className="product-name">Bouée Donut – Multicolore</div>
							<div className="product-price">
								9<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/chaussons.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Mignon Furry Alpaga Peluche Animal Pantoufles Femmes
							</div>
							<div className="product-price">
								18
								<span className="price-decimal">49 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img
									src="./src/img/products/hoddie-pokemon.jpg"
									alt="produit"
								/>
							</div>
							<div className="product-name">
								Pokemon - Pull Plaid à Capuche molletonné Pikachu Pokémon
							</div>
							<div className="product-price">
								13
								<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/cupcakes.jpg" alt="produit" />
							</div>
							<div className="product-name">
								300 Pièces Caissettes Cupcake Antiadhésif, Arc en Ciel
							</div>
							<div className="product-price">
								9<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
					</div>
				</section>
			</main>

			<footer className="footer">
				<div className="footer-top">
					<a href="#top">Retour en haut</a>
				</div>

				<div className="footer-main">
					<h3>Vous aussi gagnez de l'argent avec Omazon !</h3>
					<p>Transformez vos passions en revenus.</p>
					<p>Rejoingnez notre communautée de vendeurs dès aujourd'hui !</p>
					<button className="footer-main-btn" type="button">
						Devenez vendeurs sur Omazon
					</button>
				</div>

				<div className="footer-logo">
					<img src="./src/img/logo.png" alt="omazon" />
				</div>

				<div className="footer-legals">
					<div className="legals-links">
						<a href="/conditions">Conditions générales de vente</a>
						<a href="/me">Vos informations personnelles</a>
						<a href="/cookies">Cookies</a>
						<a href="/ads">Annonces basées sur vos centres d'interêts</a>
					</div>
					<div className="legals-credits">
						@2024 Omazon, un clone simplifié d'Amazon
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
