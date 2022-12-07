import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/credentials">Credentials</Link>
            <Link href="/inventory">inventory</Link>
            <Link href="/employes">Employes</Link>
            <Link href="/company-structure">Company Structure</Link>
        </nav>
    )
}