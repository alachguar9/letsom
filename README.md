#<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FASHIONISTA | Mode tendance à petits prix</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Variables et reset */
        :root {
            --primary: #ff3366;
            --secondary: #ff6699;
            --dark: #333;
            --light: #f8f9fa;
            --gray: #6c757d;
            --border: #e0e0e0;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        
        a {
            text-decoration: none;
            color: inherit;
        }
        
        ul {
            list-style: none;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        .top-bar {
            background-color: #000;
            color: white;
            padding: 8px 0;
            font-size: 14px;
        }
        
        .top-bar-container {
            display: flex;
            justify-content: space-between;
        }
        
        .promo-text {
            font-weight: 500;
        }
        
        .top-links a {
            margin-left: 20px;
            transition: opacity 0.3s;
        }
        
        .top-links a:hover {
            opacity: 0.8;
        }
        
        .header-main {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 0;
        }
        
        .logo {
            font-size: 28px;
            font-weight: 800;
            color: var(--primary);
            letter-spacing: -1px;
        }
        
        .logo span {
            color: var(--dark);
        }
        
        .nav-categories {
            display: flex;
            gap: 25px;
            font-weight: 600;
            font-size: 15px;
        }
        
        .nav-categories a:hover {
            color: var(--primary);
        }
        
        .header-icons {
            display: flex;
            gap: 20px;
            font-size: 20px;
        }
        
        .icon-badge {
            position: relative;
        }
        
        .badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--primary);
            color: white;
            font-size: 10px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .search-container {
            display: flex;
            align-items: center;
            background-color: #f5f5f5;
            border-radius: 20px;
            padding: 8px 15px;
            width: 300px;
        }
        
        .search-container input {
            border: none;
            background: transparent;
            width: 100%;
            font-size: 14px;
            outline: none;
        }
        
        .search-container button {
            background: transparent;
            border: none;
            cursor: pointer;
            color: var(--gray);
        }
        
        /* Hero Section */
        .hero {
            height: 500px;
            background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80') center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
        }
        
        .hero-content {
            max-width: 800px;
            padding: 20px;
        }
        
        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero p {
            font-size: 18px;
            margin-bottom: 30px;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        .btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: var(--primary);
            color: white;
            border-radius: 30px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            font-size: 14px;
        }
        
        .btn:hover {
            background-color: #ff1a55;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(255,51,102,0.3);
        }
        
        /* Categories */
        .section-title {
            text-align: center;
            margin: 40px 0 30px;
            font-size: 32px;
            color: var(--dark);
        }
        
        .categories {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin: 0 auto 40px;
        }
        
        .category-card {
            position: relative;
            height: 250px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .category-card:hover {
            transform: translateY(-5px);
        }
        
        .category-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .category-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
            padding: 20px;
            color: white;
        }
        
        .category-name {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .category-count {
            font-size: 14px;
        }
        
        /* Featured Products */
        .featured-products {
            margin: 0 auto 50px;
        }
        
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
        }
        
        .product-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            transition: all 0.3s;
        }
        
        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .product-image {
            position: relative;
            height: 300px;
            overflow: hidden;
        }
        
        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        
        .product-card:hover .product-image img {
            transform: scale(1.05);
        }
        
        .product-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: var(--primary);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .product-actions {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s;
        }
        
        .product-card:hover .product-actions {
            opacity: 1;
            transform: translateY(0);
        }
        
        .product-actions button {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: white;
            border: none;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            color: var(--dark);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        
        .product-actions button:hover {
            background-color: var(--primary);
            color: white;
        }
        
        .product-info {
            padding: 20px;
        }
        
        .product-title {
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: 500;
        }
        
        .product-price {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .current-price {
            font-size: 18px;
            font-weight: 700;
            color: var(--primary);
        }
        
        .old-price {
            font-size: 14px;
            color: var(--gray);
            text-decoration: line-through;
        }
        
        .rating {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 15px;
        }
        
        .stars {
            color: #ffc107;
        }
        
        .rating-count {
            font-size: 13px;
            color: var(--gray);
        }
        
        /* Promo Banner */
        .promo-banner {
            background: linear-gradient(to right, #ff3366, #ff9966);
            padding: 60px 0;
            margin: 50px 0;
            text-align: center;
            color: white;
        }
        
        .promo-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .promo-content h2 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        
        .promo-content p {
            font-size: 18px;
            margin-bottom: 30px;
        }
        
        .timer {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
        }
        
        .timer-item {
            background-color: rgba(255,255,255,0.2);
            border-radius: 5px;
            padding: 10px 15px;
            min-width: 70px;
        }
        
        .timer-number {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .timer-label {
            font-size: 12px;
            text-transform: uppercase;
        }
        
        /* Newsletter */
        .newsletter {
            background-color: #f0f0f0;
            padding: 60px 0;
            text-align: center;
        }
        
        .newsletter-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .newsletter h2 {
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        .newsletter p {
            margin-bottom: 30px;
            color: var(--gray);
        }
        
        .newsletter-form {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .newsletter-form input {
            flex: 1;
            padding: 15px 20px;
            border: none;
            border-radius: 30px 0 0 30px;
            font-size: 16px;
            outline: none;
        }
        
        .newsletter-form button {
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 0 30px 30px 0;
            padding: 0 25px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .newsletter-form button:hover {
            background-color: #ff1a55;
        }
        
        /* Footer */
        .footer {
            background-color: #222;
            color: #aaa;
            padding: 60px 0 0;
        }
        
        .footer-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
        }
        
        .footer-column h3 {
            color: white;
            font-size: 18px;
            margin-bottom: 20px;
        }
        
        .footer-links li {
            margin-bottom: 12px;
        }
        
        .footer-links a {
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-icons a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background-color: #333;
            border-radius: 50%;
            transition: background-color 0.3s;
        }
        
        .social-icons a:hover {
            background-color: var(--primary);
        }
        
        .payment-methods {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }
        
        .payment-methods img {
            height: 24px;
            background-color: white;
            padding: 3px;
            border-radius: 3px;
        }
        
        .footer-bottom {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid #444;
            margin-top: 50px;
            font-size: 14px;
        }

        /* Netlify Deployment Section */
        .netlify-section {
            background: #0a1e32;
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        .netlify-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .netlify-container h2 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        
        .netlify-steps {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin: 40px 0;
        }
        
        .netlify-step {
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            padding: 25px;
            width: 220px;
            text-align: center;
            transition: transform 0.3s;
        }
        
        .netlify-step:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,0.15);
        }
        
        .step-number {
            background: var(--primary);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            font-weight: bold;
        }
        
        .netlify-cta {
            margin-top: 30px;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .categories {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .header-container {
                flex-wrap: wrap;
                gap: 15px;
            }
            
            .nav-categories {
                order: 3;
                width: 100%;
                justify-content: center;
                gap: 15px;
                flex-wrap: wrap;
            }
            
            .hero h1 {
                font-size: 36px;
            }
            
            .hero {
                height: 400px;
            }
            
            .product-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }

            .search-container {
                width: 100%;
                order: 2;
            }
        }
        
        @media (max-width: 576px) {
            .top-bar-container {
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }
            
            .categories {
                grid-template-columns: 1fr;
            }
            
            .timer {
                flex-wrap: wrap;
            }
            
            .newsletter-form {
                flex-direction: column;
                gap: 10px;
            }
            
            .newsletter-form input,
            .newsletter-form button {
                border-radius: 30px;
                width: 100%;
            }

            .netlify-step {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container top-bar-container">
            <div class="promo-text">Livraison gratuite à partir de 49€ d'achat !</div>
            <div class="top-links">
                <a href="#"><i class="fas fa-question-circle"></i> Aide</a>
                <a href="#"><i class="fas fa-user"></i> Mon Compte</a>
                <a href="#"><i class="fas fa-flag"></i> FR | €</a>
            </div>
        </div>
    </div>
    
    <!-- Header -->
    <header class="header-main">
        <div class="container header-container">
            <div class="logo">FASHION<span>ISTA</span></div>
            
            <nav class="nav-categories">
                <a href="#">FEMME</a>
                <a href="#">HOMME</a>
                <a href="#">ENFANT</a>
                <a href="#">BEAUTÉ</a>
                <a href="#">MAISON</a>
                <a href="#">PROMOS</a>
                <a href="#">NOUVEAUTÉS</a>
            </nav>
            
            <div class="search-container">
                <input type="text" placeholder="Rechercher des produits...">
                <button><i class="fas fa-search"></i></button>
            </div>
            
            <div class="header-icons">
                <a href="#" class="icon-badge">
                    <i class="fas fa-user"></i>
                </a>
                <a href="#" class="icon-badge">
                    <i class="fas fa-heart"></i>
                    <span class="badge">3</span>
                </a>
                <a href="#" class="icon-badge">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="badge">5</span>
                </a>
            </div>
        </div>
    </header>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>ÉTÉ 2023 COLLECTION</h1>
            <p>Découvrez les dernières tendances à des prix imbattables</p>
            <a href="#" class="btn">Voir la collection</a>
        </div>
    </section>
    
    <!-- Categories -->
    <div class="container">
        <h2 class="section-title">Catégories populaires</h2>
        <div class="categories">
            <div class="category-card">
                <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Robes">
                <div class="category-overlay">
                    <div class="category-name">Robes</div>
                    <div class="category-count">Plus de 500 produits</div>
                </div>
            </div>
            <div class="category-card">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hauts">
                <div class="category-overlay">
                    <div class="category-name">Hauts & T-shirts</div>
                    <div class="category-count">Plus de 800 produits</div>
                </div>
            </div>
            <div class="category-card">
                <img src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Accessoires">
                <div class="category-overlay">
                    <div class="category-name">Accessoires</div>
                    <div class="category-count">Plus de 300 produits</div>
                </div>
            </div>
            <div class="category-card">
                <img src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Maillots">
                <div class="category-overlay">
                    <div class="category-name">Maillots de bain</div>
                    <div class="category-count">Plus de 200 produits</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Featured Products -->
    <div class="container">
        <h2 class="section-title">Nouveautés à ne pas manquer</h2>
        <div class="featured-products">
            <div class="product-grid">
                <!-- Product 1 -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Robe d'été">
                        <div class="product-badge">Nouveau</div>
                        <div class="product-actions">
                            <button><i class="fas fa-heart"></i></button>
                            <button><i class="fas fa-shopping-bag"></i></button>
                            <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Robe d'été fleurie</h3>
                        <div class="product-price">
                            <span class="current-price">24,99€</span>
                            <span class="old-price">39,99€</span>
                        </div>
                        <div class="rating">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span class="rating-count">(128)</span>
                        </div>
                    </div>
                </div>
                
                <!-- Product 2 -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jupe">
                        <div class="product-badge">-30%</div>
                        <div class="product-actions">
                            <button><i class="fas fa-heart"></i></button>
                            <button><i class="fas fa-shopping-bag"></i></button>
                            <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Jupe plissée longue</h3>
                        <div class="product-price">
                            <span class="current-price">19,99€</span>
                            <span class="old-price">28,99€</span>
                        </div>
                        <div class="rating">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <span class="rating-count">(94)</span>
                        </div>
                    </div>
                </div>
                
                <!-- Product 3 -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ensemble">
                        <div class="product-badge">Promo</div>
                        <div class="product-actions">
                            <button><i class="fas fa-heart"></i></button>
                            <button><i class="fas fa-shopping-bag"></i></button>
                            <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Ensemble deux pièces</h3>
                        <div class="product-price">
                            <span class="current-price">34,99€</span>
                        </div>
                        <div class="rating">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="rating-count">(201)</span>
                        </div>
                    </div>
                </div>
                
                <!-- Product 4 -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sac">
                        <div class="product-badge">Nouveau</div>
                        <div class="product-actions">
                            <button><i class="fas fa-heart"></i></button>
                            <button><i class="fas fa-shopping-bag"></i></button>
                            <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Sac à main tendance</h3>
                        <div class="product-price">
                            <span class="current-price">29,99€</span>
                            <span class="old-price">45,99€</span>
                        </div>
                        <div class="rating">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <span class="rating-count">(67)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Promo Banner -->
    <section class="promo-banner">
        <div class="promo-content">
            <h2>SOLDES D'ÉTÉ JUSQU'À -70%</h2>
            <p>Profitez de nos meilleures offres sur toute la collection été</p>
            <a href="#" class="btn">Voir les offres</a>
            
            <div class="timer">
                <div class="timer-item">
                    <div class="timer-number">02</div>
                    <div class="timer-label">Jours</div>
                </div>
                <div class="timer-item">
                    <div class="timer-number">14</div>
                    <div class="timer-label">Heures</div>
                </div>
                <div class="timer-item">
                    <div class="timer-number">45</div>
                    <div class="timer-label">Minutes</div>
                </div>
                <div class="timer-item">
                    <div class="timer-number">30</div>
                    <div class="timer-label">Secondes</div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Netlify Deployment Guide -->
    <section class="netlify-section">
        <div class="netlify-container">
            <h2>Comment déployer ce site sur Netlify</h2>
            <p>Suivez ces étapes simples pour mettre votre boutique en ligne</p>
            
            <div class="netlify-steps">
                <div class="netlify-step">
                    <div class="step-number">1</div>
                    <h3>Créez un compte</h3>
                    <p>Inscrivez-vous sur netlify.com</p>
                </div>
                
                <div class="netlify-step">
                    <div class="step-number">2</div>
                    <h3>Ajoutez votre site</h3>
                    <p>Cliquez sur "New site from Git"</p>
                </div>
                
                <div class="netlify-step">
                    <div class="step-number">3</div>
                    <h3>Choisissez Git provider</h3>
                    <p>Sélectionnez GitHub, GitLab ou Bitbucket</p>
                </div>
                
                <div class="netlify-step">
                    <div class="step-number">4</div>
                    <h3>Configurez et déployez</h3>
                    <p>Netlify déploiera automatiquement votre site</p>
                </div>
            </div>
            
            <div class="netlify-cta">
                <a href="https://app.netlify.com/" target="_blank" class="btn">Déployer maintenant</a>
            </div>
        </div>
    </section>
    
    <!-- Newsletter -->
    <section class="newsletter">
        <div class="container newsletter-container">
            <h2>Inscrivez-vous à notre newsletter</h2>
            <p>Recevez en exclusivité nos offres spéciales et les dernières tendances</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Votre adresse email" required>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-column">
                <h3>Aide & Service Client</h3>
                <ul class="footer-links">
                    <li><a href="#">Contactez-nous</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Livraison</a></li>
                    <li><a href="#">Retours & Échanges</a></li>
                    <li><a href="#">Suivi de commande</a></li>
                </ul>
            </div>
            
            <div class="footer-column">
                <h3>À propos de nous</h3>
                <ul class="footer-links">
                    <li><a href="#">Notre histoire</a></li>
                    <li><a href="#">Carrières</a></li>
                    <li><a href="#">Responsabilité sociale</a></li>
                    <li><a href="#">Presse</a></li>
                    <li><a href="#">Conditions générales</a></li>
                </ul>
            </div>
            
            <div class="footer-column">
                <h3>Paiements sécurisés</h3>
                <div class="payment-methods">
                    <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="PayPal">
                    <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Visa">
                    <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="MasterCard">
                    <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="American Express">
                    <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Apple Pay">
                    <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Google Pay">
                </div>
            </div>
            
            <div class="footer-column">
                <h3>Suivez-nous</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
                
                <h3 style="margin-top: 30px;">Téléchargez notre app</h3>
                <div class="app-download">
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="App Store" height="40"></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Google Play" height="40"></a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2023 FASHIONISTA. Tous droits réservés. | Politique de confidentialité | Conditions d'utilisation</p>
        </div>
    </footer>
    
    <script>
        // Countdown timer
        function updateCountdown() {
            const now = new Date();
            const target = new Date(now);
            target.setDate(target.getDate() + 2);
            target.setHours(14, 45, 30, 0);
            
            const diff = target - now;
            
            if (diff <= 0) {
                document.querySelector('.timer').innerHTML = '<div class="timer-item">Soldes terminées!</div>';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.querySelector('.timer-number:nth-child(1)').textContent = days.toString().padStart(2, '0');
            document.querySelector('.timer-number:nth-child(2)').textContent = hours.toString().padStart(2, '0');
            document.querySelector('.timer-number:nth-child(3)').textContent = minutes.toString().padStart(2, '0');
            document.querySelector('.timer-number:nth-child(4)').textContent = seconds.toString().padStart(2, '0');
        }
        
        // Initialize and update every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Merci pour votre inscription avec l'email: ${email}`);
            this.reset();
        });
        
        // Product action buttons
        document.querySelectorAll('.product-actions button').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.querySelector('i').className;
                const product = this.closest('.product-card').querySelector('.product-title').textContent;
                
                if (action.includes('heart')) {
                    alert(`Ajouté aux favoris: ${product}`);
                } else if (action.includes('shopping-bag')) {
                    alert(`Ajouté au panier: ${product}`);
                } else if (action.includes('search')) {
                    alert(`Voir les détails: ${product}`);
                }
            });
        });

        // Netlify CTA button
        document.querySelector('.netlify-cta .btn').addEventListener('click', function(e) {
            if(!confirm('Vous allez être redirigé vers Netlify. Continuer?')) {
                e.preventDefault();
            }
        });
    </script>
</body>
</html>

