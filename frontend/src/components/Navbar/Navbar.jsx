import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setMobileMenuOpen(false);
  }

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active menu based on current location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setMenu('home');
    else if (path === '/cart') setMenu('cart');
    else if (path === '/myorders') setMenu('orders');
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.navbar')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to='/' className="logo-container">
        <img className='logo hover-scale' src={assets.logo} alt="Logo" />
        <div className="logo-glow"></div>
      </Link>
      
      <ul className={`navbar-menu ${mobileMenuOpen ? 'active mobile-active' : ''}`}>
        <Link to="/" onClick={() => handleMenuClick("home")} className={`${menu === "home" ? "active" : ""}`}>
          <span className="menu-text">home</span>
          <span className="menu-icon">🏠</span>
        </Link>
        <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={`${menu === "menu" ? "active" : ""}`}>
          <span className="menu-text">menu</span>
          <span className="menu-icon">🍽️</span>
        </a>
        <a href='#app-download' onClick={() => handleMenuClick("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>
          <span className="menu-text">mobile app</span>
          <span className="menu-icon">📱</span>
        </a>
        <a href='#footer' onClick={() => handleMenuClick("contact")} className={`${menu === "contact" ? "active" : ""}`}>
          <span className="menu-text">contact us</span>
          <span className="menu-icon">📞</span>
        </a>
      </ul>
      
      <div className="navbar-right">
        <div className="search-container">
          <img src={assets.search_icon} alt="Search" className="hover-scale" />
          <div className="search-tooltip">Search</div>
        </div>
        
        <Link to='/cart' className='navbar-search-icon hover-scale'>
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
          <div className="cart-tooltip">Cart ({getTotalCartAmount()})</div>
        </Link>
        
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="hover-lift signin-btn">
            <span className="btn-text">sign in</span>
            <span className="btn-icon">🔐</span>
          </button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> 
                <img src={assets.bag_icon} alt="Orders" /> 
                <p>Orders</p>
                <span className="dropdown-icon">📋</span>
              </li>
              <hr />
              <li onClick={logout}> 
                <img src={assets.logout_icon} alt="Logout" /> 
                <p>Logout</p>
                <span className="dropdown-icon">🚪</span>
              </li> 
            </ul>
          </div>
        )}
        
        {/* Mobile Menu Toggle */}
        <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </div>
  )
}

export default Navbar
