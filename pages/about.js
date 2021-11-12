import Link from 'next/link'
import { useRouter } from 'next/router'
export default function AboutPage() {

    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>ABOUT</h1>
            <Link href='/'>Home</Link>
            <button onClick={()=>{router.push('/')}}>back to home</button>
        </div>
    )
}

