import { useState, useContext, useEffect } from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";

import { StoreContext } from "../store";
import styles from "../styles/Info.module.css";

const Info = () => {
  const [showShow, setShowShow] = useState(true);
  const [state, _] = useContext(StoreContext);

  const toggleShow = () => setShowShow(!showShow);

  useEffect(() => {
      setShowShow(true);
  }, [state.searchItems])


  return state.searchItems.length ? (
    <div className={styles.infocontainer}>
      <MDBBtn onClick={toggleShow}>Toggle Info</MDBBtn>
      <MDBCollapse show={showShow}>
        <div className={`card card-body ${styles.info}`}>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </MDBCollapse>
    </div>
  ) : null;
};

export default Info;
