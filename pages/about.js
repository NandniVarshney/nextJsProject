import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout
 from './components/layout';
export default function AboutPage() {

    const router = useRouter();
    console.log(router);
    return (
        <Layout title='About DJ events'>
            <h1>ABOUT</h1>
            <Link href='/'>Home</Link>
            <button onClick={()=>{router.push('/')}}>back to home</button> 
        </Layout>
    )
}

