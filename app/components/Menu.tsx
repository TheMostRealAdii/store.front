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
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blog</Link>
          </li>
          <li>
            <Link
              href={"https://mailchi.mp/b41c3798dcb1/subscribe"}
              target="_link"
            >
              Subscribe
            </Link>
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
