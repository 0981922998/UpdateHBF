import React, { useState } from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import MyListRequest from "../../components/MyRequest";
import Filter from "../../components/Filter";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  paperListRequest: {
    width: "70%",
  },
  paperHistoryRequest: {
    width: "28%",
    padding: "10px",
  },
}));

function MyRequest(props) {
  const [filter, setFilter] = useState({});
  const handleFilter = (values) => {
    setFilter(values)
  }
  const dataTitles = [
    "Name Request",
    "Content Request",
    "Author Create",
    "Due Date",
    "Category",
    "Assignee",
    "Status",
    ""
  ];
  const classes = useStyles();
  return (
    <LayoutDefault>
      <div className={classes.flex}>
        <Paper className={classes.paperListRequest}>
          <Filter onFilter={handleFilter}></Filter>
          <MyListRequest dataTitles={dataTitles} filter={filter}></MyListRequest>
        </Paper>
      </div>
    </LayoutDefault>
  );
}

export default MyRequest;
