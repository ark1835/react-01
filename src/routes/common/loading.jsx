import { useEffect, useState } from "react";
import styles from "./loading.module.css";

export default function _() {
    const [loading, setLoading] = useState("");
    const loadings = ["Loading..|", "Loading../", "Loading..-", "Loading..\\"];
    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count++;
            setLoading(loadings[count % loadings.length]);
        }, 200);

        return () => clearInterval(interval);
    }, [])

    return (
        <h1 className={styles.loading}>
            {loading}
        </h1>
    );
}