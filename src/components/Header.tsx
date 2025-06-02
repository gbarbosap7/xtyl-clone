import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className="elementor-element e-con-full bg e-flex e-con e-child">
      <div className="elementor-element elementor-widget__width-initial elementor-widget elementor-widget-image">
        <div className="elementor-widget-container">
          <Link href="/">
            <img 
              width="897" 
              height="125" 
              src="https://xtyl.digital/wp-content/uploads/2024/10/XTYL-HORIZONTALbranca.webp" 
              className="attachment-full size-full wp-image-1634" 
              alt="Logotipo da empresa XYL, apresentando um design moderno e minimalista em preto e branco, ideal para branding e identificação visual." 
              srcSet="https://xtyl.digital/wp-content/uploads/2024/10/XTYL-HORIZONTALbranca.webp 897w, https://xtyl.digital/wp-content/uploads/2024/10/XTYL-HORIZONTALbranca-300x42.webp 300w, https://xtyl.digital/wp-content/uploads/2024/10/XTYL-HORIZONTALbranca-768x107.webp 768w"
              sizes="(max-width: 897px) 100vw, 897px"
            />
          </Link>
        </div>
      </div>

      <div className="elementor-element elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-view-default elementor-widget elementor-widget-icon">
        <div className="elementor-widget-container">
          <div className="elementor-icon-wrapper">
            <a className="elementor-icon" href="#menu-mobile">
              <i aria-hidden="true" className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </div>

      <nav className="elementor-element elementor-nav-menu--stretch elementor-nav-menu__text-align-center elementor-hidden-mobile elementor-hidden-tablet elementor-hidden-mobile_extra elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger">
        <ul className="elementor-nav-menu">
          <li className="menu-item"><Link href="/" className="elementor-item elementor-item-active">Home</Link></li>
          <li className="menu-item"><Link href="/#cases" className="elementor-item elementor-item-anchor">Cases</Link></li>
          <li className="menu-item"><Link href="/blog" className="elementor-item">Blog</Link></li>
          <li className="menu-item"><Link href="/contato" className="elementor-item">Contato</Link></li>
        </ul>
      </nav>

      <div className="elementor-element elementor-hidden-mobile elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-button">
        <div className="elementor-widget-container">
          <div className="elementor-button-wrapper">
            <a className="elementor-button elementor-button-link elementor-size-sm" href="https://tintim.link/whatsapp/248d811a-8081-4bc3-b660-2f66cdb262b5/cd97eeba-e4ae-4eee-8f4d-1e412b0c2474" target="_blank" rel="noopener noreferrer">
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-icon">
                  <i aria-hidden="true" className="fab fa-whatsapp"></i>
                </span>
                <span className="elementor-button-text">Entrar em Contato</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 