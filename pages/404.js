import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Custom404() {
    return (
        <main className={styles.container}>
            <h1>404 - Page Not Found</h1>
            <Link href='/'>Go home</Link>
        </main>
    );
}
