import Image from "next/image";
import Head from "next/head";
import Menu from "./components/Menu";
import Link from "next/link";
import s from "./styles/main.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>RustyRags</title>
      </Head>
      <Menu />
      <h1 className={`${s.title}`}>Rusty Rags</h1>
      <p className={`${s.subtext1} ${s.subtextdeco}`}>
        Welcome to RustyRags, your go-to destination for vintage and
        retro-inspired minimal apparel. As a print-on-demand dropshipping store,
        we&apos;re here to deliver the perfect blend of nostalgia and fashion
        right to your doorstep.
      </p>
      {/* <p>
        {" "}
        With our launch just around the corner, get ready to step into the past
        with our carefully curated collection.
      </p> */}
      <p className={`${s.subtext2}`}>
        {" "}
        Stay in the loop with our latest updates by subscribing to our
        newsletter, ensuring you&apos;re among the first to know when our store
        officially launches. Get ready to embrace the past in style with
        RustyRags!
      </p>
      <Link href={"https://mailchi.mp/b41c3798dcb1/subscribe"} target="_link">
        <div className={`${s.subscribe}`}>Subscribe Now →</div>
      </Link>
      {/* <div className="scroll">SCROLL</div> */}
      {/* <div className="gap"></div>
      <p className="enqtext">
        <span className="enqtex">Swift Shipping: </span>During the initial
        months, we estimate a delivery time of 14-15 days. However, rest assured
        that we&apos;re working tirelessly to enhance our efficiency. Soon
        enough, our delivery time will decrease to an impressive 7-8 days.
        We&apos;re excited to announce that pre-orders will be available for one
        week, giving you the chance to secure your favorite pieces before
        they&apos;re gone.
      </p>
      <p className="enqtext">
        <span className="enqtex">Get Ready to Embrace the Vintage Magic: </span>
        Once the pre-order period concludes, we&apos;ll swiftly process and ship
        the maximum number of orders. Most pre-orders will be delivered
        promptly, so you won&apos;t have to wait long to experience the vintage
        magic. Stay in the loop with our latest updates by subscribing to our
        newsletter, ensuring you&apos;re among the first to know when our store
        officially launches. Get ready to embrace the past in style with
        RustyRags!
      </p> */}
      <div className={`${s.gap}`}></div>
      <footer>
        <div className={`${s.footerline}`}></div>
        <div className={`${s.copyright}`}>Copyright © 2023 RustyRags.</div>
      </footer>
    </>
  );
}
