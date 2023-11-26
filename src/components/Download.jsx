import styles from "../styles/Global"
import assets from "../assets"
import Link from "next/link"

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the Source Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full source code on GitHub
          </p>
        </div>
        <Link
          href={"https://github.com/kimikoi123/react_native_nft_marketplace"}
          target="_blank"
        >
          <button className={styles.btnPrimary}>Source Code</button>
        </Link>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene.src}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download
