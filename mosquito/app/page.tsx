import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCards";
import Navbar from "./components/NavBar";



export default function Home() {
  return (
    <main >
      <div >
        <Navbar />
        
        <ProductCard />
      </div>
    </main>
  );
}
