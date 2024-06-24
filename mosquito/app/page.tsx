import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCards";



export default function Home() {
  return (
    <main >
      <div >
        <Link href="/users">Users</Link>
        <ProductCard />
      </div>
    </main>
  );
}
