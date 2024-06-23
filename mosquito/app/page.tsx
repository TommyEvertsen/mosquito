import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCards";



export default function Home() {
  return (
    <main >
      <div >
        <h1>YO</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
      </div>
    </main>
  );
}
