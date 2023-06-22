"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router= useRouter();
  const handleClick=()=>{
 console.log('PLacing order')
 router.push('/profile')
  }
  return (
    <div>
    <div className='text-2xl font-bold'>Home Page</div>
    <Link href={"/blog"}>
    Blog
    </Link>
    <button onClick={handleClick}> Place order </button>
    </div>
  )
}
