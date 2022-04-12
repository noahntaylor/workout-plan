import "./Footer.css";

function Footer() {
  const copyText = "\u00A9 NT 2022";

  return (
    <div id="footer" className="footer">
      <div>
        <p className="footer-copyright">{copyText}</p>
      </div>
    </div>
  );
}

export default Footer;
