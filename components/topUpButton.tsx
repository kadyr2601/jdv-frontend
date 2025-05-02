'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TopUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
      <Link
          id="totop"
          href="#top"
          className={isVisible ? 'top-visible' : ''}
          aria-label="Scroll to top of page"
          title="Back to top"
      >
        <i className="fa fa-angle-up"></i>
        <style jsx>{`
        #totop {
          font-weight: 900;
          color: #fff;
          display: none;
          position: fixed;
          right: 34px;
          bottom: 34px;
          z-index: 999;
          height: 0;
          width: 0;
          font-size: 0;
          text-align: center;
          padding-top: 0;
          line-height: 37px;
          border-radius: 0;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }

        #totop.top-visible {
          height: 43px;
          width: 43px;
          font-size: 23px;
          display: inline-block; /* Changed to inline-block for better rendering */
        }

        #totop:before {
          position: absolute;
          top: -7px;
          left: -7px;
          content: '';
          transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          border: solid;
          border-width: 0 1px 1px 0;
          display: inline-block;
          padding: 3px;
          -webkit-transition: all 0.5s ease-out;
          -moz-transition: all 0.5s ease-out;
          transition: all 0.7s ease-out;
          border-color: #cda274;
        }

        #totop:before {
          top: -6px;
          left: -6px;
        }

        #totop:hover:before {
          left: 100%;
          transform: rotate(90deg);
        }

        #totop:after {
          position: absolute;
          bottom: -7px;
          right: -7px;
          content: '';
          transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          border: solid;
          border-width: 1px 0 0 1px;
          display: inline-block;
          padding: 3px;
          -webkit-transition: all 0.5s ease-out;
          -moz-transition: all 0.5s ease-out;
          transition: all 0.7s ease-out;
          border-color: #cda274;
        }

        #totop:after {
          bottom: -6px;
          right: -6px;
        }

        #totop:hover:after {
          right: 100%;
          transform: rotate(90deg);
        }
      `}</style>
      </Link>
  );
};

export default TopUpButton;