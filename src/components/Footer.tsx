import React from 'react';

function Footer() {
  let currentYear: Date = new Date();
  return (
    <>
      <footer className="text-center fw-bolder fixed-bottom my-3">
        Copyright &copy; {currentYear.getFullYear()}. All Rights Reserved @<a href="https://github.com/devopslayer">DevopsLayer</a>
      </footer>
    </>
  );
}

export default Footer;
