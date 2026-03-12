function Footer({ footerData, fatherName }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{footerData.message}</p>
        <small>
          {year} | Homenagem para {fatherName}
        </small>
      </div>
    </footer>
  );
}

export default Footer;
