import { Logo, Links } from './index';
import classes from '../../styles/classes.module.scss';

export const Footer = (props) => (
  <footer id="colophon" className="site-footer">
    <div className={ `inner ${classes.max_width_1680}` }>
      <div className="footer-sctn footer-top clearfix">
        <div className="wrap-el wrap-logo">
          <Logo />
        </div>
        <div className="wrap-nav nav-footer">
          <Links { ...props } element="footer" className={ classes.footer_links } />
        </div>
      </div>
      <div className="footer-sctn footer-bottom clearfix">
        <div className="wrap-el wrap-copyright">
          <p className={ `copyright ${classes.filo_ot}` }>The 601w Companies &copy;2020. All rights reserved.</p>
        </div>
        <div className="wrap-nav nav-legal">
          <Links { ...props } element="legal" className={ classes.footer_links } />
        </div>
      </div>
    </div>

    <style jsx>{`
      * {
        color: white;
      }
      .site-footer {
        padding: 32px;
        background: #223655;
        position: relative;
        z-index: 1;
      }
      ul {
        margin: 0;
        padding: 32px 0;
      }
      .footer-top {
        border-bottom: 1px solid white;
      }
      .wrap-logo {
        width: 100%;
        max-width: 132px;
        display: block;
        margin: 0;
      }
      .wrap-logo img {
        display: block;
        width: 100%;
      }
      @media (min-width: 1024px) {
        ul {
          line-height: 50px;
        }
        .footer-top {
          height: 100px;
          position: relative
        }
        .wrap-logo {
          position: absolute;
          left: 0;
          top: auto;
          bottom: 24px;
        }
        .wrap-copyright {
          float: left;
        }
        .copyright {
          line-height: 50px;
        }
        .nav-footer {
          position: absolute;
          right: 0;
          bottom: 0;
        }
        .nav-legal {
          float: right;
        }
        .nav-legal li {
          line-height: 60px;
        }
      }
    `}</style>
  </footer>
)

{/* <footer>
<a
  href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
</a>
</footer> */}