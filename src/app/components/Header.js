import Link from "next/link";
import styles from "./components.module.css";

const Header = ({isLoggedIn, logoutUser}) => {
    return ( 
        <header className={styles.Header}>
            <nav className={styles.HeaderNav}>
              
            { isLoggedIn && (
                <>
                 <Link href="/">User Profile</Link>
                 <a onClick={logoutUser}>Log Out</a>
                </>
            )}
            {!isLoggedIn && (
                <>
                <Link href="/login">Login User</Link>
                <Link href="/create">Create Profile </Link> 
                </>
            )}
                </nav>
        </header>
    );
};

export default Header;