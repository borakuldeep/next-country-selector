import { useState, useContext, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { StoreContext } from "../store";
import styles from "../styles/Info.module.css";

const Info = () => {
  const [expanded, setExpanded] = useState(true);
  const [state, _] = useContext(StoreContext);

  const toggleShow = () => setExpanded(!expanded);

  useEffect(() => {
    setExpanded(true);
  }, [state.searchItems]);

  if(state.error) {
    return (
      <div className={styles.infocontainer}>
        <p className={`${styles.info} ${styles.error}`}>{state.error}</p>
      </div>
    )
  }

  return state.searchItems.length ? (
    <div className={styles.infocontainer}>
      <Accordion expanded={expanded} onChange={toggleShow}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="moreinfo"
          id="moreinfo-header"
        >
          <Typography>Population info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.info}>
            <BarChart
              width={350}
              height={300}
              data={state.searchDetails}
              margin={{
                top: 20,
                right: 10,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 200, backgroundColor: "#ccc" }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <Bar dataKey="population" fill="#8884d8" barSize={30} />
            </BarChart>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  ) : null;
};

export default Info;
