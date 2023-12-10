import NavFooter from "../navfooter/NavFooter"
import { SiLinktree } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { GiSuperMushroom } from "react-icons/gi";
import styles from "./footer.module.css"
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {

    return (
        <div className={styles.container}>

            <div className={styles.container2}>
                <p className={styles.direitos}>Todos os direitos reservados a Nitendo-Site para estudos.</p>
            </div>

            <div >
                <div className={styles.icons}>

                    <div className={styles.mario}>
                        <Link className={styles.icon} href={"https://mario.nintendo.com/"} target="_blank">
                            <GiSuperMushroom />
                        </Link>
                        <Link className={styles.icon} href={""} target="_blank">
                            <SiLinktree />
                        </Link>
                        <Link className={styles.icon} href={"https://mario.nintendo.com/"} target="_blank">
                            <AiFillGithub />
                        </Link>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer