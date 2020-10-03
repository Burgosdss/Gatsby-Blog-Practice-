import React from "react"
import style from "./footer.module.scss"

export default props => (
  <footer className={style.footer}>
    <p>
      Copyright &copy; All Rights Reserved &nbsp; {new Date().getFullYear}{" "}
      DanielJS
    </p>
  </footer>
)
