// lib
import { FC } from "react";

// styles
import styles from "./unAuthorized.module.scss";
import Link from "antd/es/typography/Link";

/**
 * Code error: 401
 * @returns {JSX.Element}
 */
export const UnAuthorizedError: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Код ошибки: 401 - Вам отказано в доступе {":("}</span>
            <p className={styles.description}>Приносим извинения, но данная ссылка для вас недействительна.</p>
            <footer className={styles.contacts}>
                Связь с нашей поддержкой: <Link href="https://t.me/crystalhertz-support" target="_blank">https://t.me/crystalhertz-support</Link>
            </footer>
        </div>
    )
}