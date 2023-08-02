import { useState } from "react";
import styles from "./about.module.css";
import styled from 'styled-components';
import PropTypes from 'prop-types';


export default function _app(_props) {
  // Banana
  const [banana, setBanana] = useState(0);
  const addBanana = () => setBanana(cur => cur + 1);

  return (
    <main style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className={styles.abc} style={{border: "1px solid black", padding: "24px"}}>
        About | {banana}
        <br></br>
        <Button evClick={addBanana} text="banana ++" />
        <Button2>button2</Button2>
      </div>
    </main>
  );
}

const Button = ({ evClick, text = "button" }) => {
  return (
    <button style={{
      all: "unset",
      padding: "8px 12px",
      border: "1px solid black",
      cursor: "pointer",
    }} onClick={evClick}>{text}</button>
  )
}

Button.propTypes = {
  evClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}


const Button2 = styled.button`
  all: unset;
  padding: 20px;
  border: 1px solid blue;
  cursor: pointer;
`
