import Head from 'next/head'
import styles from '../../styles/Layout.module.css'
import Header from './Header'
export default function Layout({title, meta, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <div className={styles.container}>
                {children}
            </div>           
        </div>
    )
}

Layout.defaultProps = {
    title:'DJ events'
}