import Link from "next/link";
import Head from "next/head";
import Menu from "../components/Menu";
import s from "../styles/main.module.css";
export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - RustyRags</title>
      </Head>
      <Menu />
      <h1 className={`${s.title}`}>Blogs Coming Soon</h1>
    </>
  );
}
