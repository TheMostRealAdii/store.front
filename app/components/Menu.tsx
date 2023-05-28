import Link from "next/link";

const Menu = () => {
  return (
    <>
      <input type="checkbox" id="active"></input>
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        {/* <div className="menu-email">For Any Quiery You Can Email Us At -</div> */}
        {/* <div className="em-email">hello@rustyrags.xyz</div> */}
        {/* <div className="other-contact-details">
          You can also contact us on -{" "}
        </div> */}
        {/* <div className="icons-menu">
          <Link href={"##"}>
            <i className="bi bi-instagram icon-mer-men"></i>
          </Link>
          <i className="bi bi-twitter icon-mer-men"></i>
        </div> */}
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>

          {/* <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Menu;
