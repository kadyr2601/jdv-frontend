import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Service} from "@/types/services";

async function getServices(): Promise<Service[]> {
  const res = await fetch(`${process.env.API_URL}/api/services/`, {cache: "no-cache"});
  return res.json();
}

const Footer: React.FC = async () => {
  const services = await getServices();

  return (
    <footer className="footer ttm-bg ttm-bgcolor-darkgrey widget-footer clearfix">
      <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
      <div className="container">
        <div className="second-footer">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area" style={{position: 'relative'}}>
              <div className="widget widget_text clearfix" style={{position: 'relative'}}>
                <div className="footer-logo">
                  <Image
                    width={120}
                    height={65}
                    id="footer-logo-img"
                    className="img-fluid"
                    src="/logo.png"
                    alt="Joie De Vivre logo"
                  />
                </div>
                <div className="textwidget widget-text" style={{paddingRight: '10px'}}>
                  <p style={{paddingRight: '10px'}}>
                    Discover the essence of Joie De Vivre – where design is an art, luxury is a standard,
                    and every space tells a unique story.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area" style={{position: 'relative'}}>
              <div className="widget widget_nav_menu clearfix">
                <h3 className="widget-title">Quick Links</h3>
                <ul id="menu-footer-service-link" className="menu" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  listStyle: 'none',
                  padding: 0,
                }}>
                  <li style={{width:'100%'}}>
                    <Link href="/about">
                      About Us
                    </Link>
                  </li>
                  <li style={{width:'100%'}}>
                    <Link href="/projects">
                      Projects
                    </Link>
                  </li>
                  <li style={{width:'100%'}}>
                    <Link href="/contacts">
                      Contact Us
                    </Link>
                  </li>
                  {
                    services.map((service: Service) => {
                      return (
                          <li key={service.id} style={{width:'100%'}}>
                            <Link href={`/services/${service.slug}`}>{service.name}</Link>
                          </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-4 widget-area" style={{position: 'relative'}}>
              <div className="widget widget-timing clearfix">
                <h3 className="widget-title">Contact</h3>
                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                      <i className="flaticon flaticon-call-1"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>Phone Number</h3>
                    </div>
                    <div className="featured-desc">
                      <p>+971 55 407 3275</p>
                    </div>
                  </div>
                </div>
                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                      <i className="flaticon flaticon-email"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>Email Address</h3>
                    </div>
                    <div className="featured-desc">
                      <p>hello@jdv.ae</p>
                    </div>
                  </div>
                </div>
                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                      <i className="flaticon flaticon-navigation"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>Location</h3>
                    </div>
                    <div className="featured-desc">
                      <p>
                        1807- Business Central Tower B<br />
                        Dubai Internet City, Dubai.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text" style={{position: 'relative'}}>
          <div className="row copyright">
            <div className="col-lg-7 col-md-8">
              <p className="mb-0 res-991-pb-15">
                Copyright © 2025{' '}
                <Link href="https://www.kadyr.dev" target="_blank" rel="noopener noreferrer">
                  Developed by Kadyr.dev
                </Link>
                . All rights reserved.
              </p>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="social-icons d-flex align-items-center justify-content-end">
                <ul className="list-inline">
                  <li>
                    <Link
                      href="https://www.instagram.com/jdv_dubai?igsh=aWl4cTAxM2RibHFu&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=971554073275&text=Hello%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-whatsapp"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
