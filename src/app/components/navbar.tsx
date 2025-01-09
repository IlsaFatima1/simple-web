import Link from "next/link";
export default function Navbar() {
       return (
              <div className="p-5 border-8 border-slate-300 bg-slate-500 text-slate-300 text-center m-2 text-3xl">
                     <Link href="/Job" className=" p-10 text-justify  active:text-white  hover:text-slate-800">Job</Link>
                     <Link href="/Contact" className="   p-10 text-justify  hover:text-slate-800 active:text-white">Contact</Link>
                     <Link href="/Home" className="  p-10  text-justify  hover:text-slate-800 active:text-white">Home</Link>
                     <Link href="/Index" className="  p-10 text-justify  hover:text-slate-800 active:text-white">Index</Link>
                     <Link href="/About" className=" p-10  text-justify  hover:text-slate-800 active:text-white">About</Link>

              </div>


       )
}