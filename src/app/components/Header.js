import Link from "next/link";
import styles from "./components.module.css";

const Header = () => {
    return ( 
        <header className={styles.Header}>
            <nav className={styles.HeaderNav}>
                <Link href="/">User Profile</Link>
                <Link href="/">Login User</Link>
                <Link href="/">Create Profile </Link>

                </nav>
        </header>
    );
};

export default Header;