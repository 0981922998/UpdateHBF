import React, { useState, useEffect } from "react";
import Button from "./Button";
import Select from "./Select";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FilterListIcon from "@material-ui/icons/FilterList";
import { filterRequest } from "../redux/actions/listRequest";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../redux/actions/category";
import { assignee } from "../redux/actions/assignee";
import { getUser } from "../redux/actions/user";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    margin: "10px 0px"
  },
  formBtn: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 10px",
    gap: "100px",
  },
  textField: {
    width: "22%",
  },
  main: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "0px 10px",
  },
}));
const statusItems = [
  { id: 1, name: "Open" },
  { id: 2, name: "In progress" },
  { id: 3, name: "Close" },
];
const initialValues = {
  name_request: "",
  content_request: "",
  due_date_request: "",
  status: '',
  author_request: '',
  assign_request: '',
  category_request: '',
};
const Filter = (props) => {
  const { onFilter } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const dataCategory = useSelector((state) => state.categoryReducer).data;
  const dataAssignee = useSelector((state) => state.assigneeReducer).data;
  const dataUsers = useSelector((state) => state.userReducer).data;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log({ value });
  };
  const resetForm = () => {
    setValues(initialValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      values,
    };
    dispatch(filterRequest(filters));
    onFilter(values);
  };

  useEffect(() => {
    dispatch(category());
    dispatch(assignee());
    dispatch(getUser());
  }, []);

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FilterListIcon />
          <Typography color="primary">Filter options</Typography>
        </AccordionSummary>
        <form onSubmit={handleSubmit}>
          <div className={classes.main}>
            <div className={classes.textField}>
              <h4 className={classes.title}>Name</h4>
              <TextField
                name="name_request"
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                value={values.name_request}
                size="small"
              />
            </div>
            <div className={classes.textField}>
              <h4 className={classes.title}>Content</h4>
              <TextField
                variant="outlined"
                fullWidth
                name="content_request"
                value={values.content_request}
                onChange={handleInputChange}
                size="small"
              />
            </div>
            <div className={classes.textField}>
              <h4 className={classes.title}>Due date</h4>
              <TextField
                name="due_date_request"
                type="date"
                variant="outlined"
                value={values.due_date_request}
                onChange={handleInputChange}
                size="small"
                fullWidth
              />
            </div>

            <div className={classes.textField}>
              <h4 className={classes.title}>Status</h4>
              <Select
                name="status"
                value={values.status}
                onChange={handleInputChange}
                options={statusItems}
                fullWidth
              />
            </div>
            <div className={classes.textField}>
              <h4 className={classes.title}>Author</h4>
              <Select
                name="author_request"
                value={values.author_request}
                onChange={handleInputChange}
                options={dataUsers}
                fullWidth
              />
            </div>
            <div className={classes.textField}>
              <h4 className={classes.title}>Assign</h4>
              <Select
                name="assign_request"
                value={values.assign_request}
                onChange={handleInputChange}
                options={dataAssignee}
                fullWidth
              />
            </div>
            <div className={classes.textField}>
              <h4 className={classes.title}>Category</h4>
              <Select
                name="category_request"
                value={values.category_request}
                onChange={handleInputChange}
                options={dataCategory}
                fullWidth
              />
            </div>
          </div>

          <div className={classes.formBtn}>
            <Button
              text="Reset"
              color="default"
              size="medium"
              onClick={resetForm}
            />
            <Button type="submit" text="Filter" size="medium" />
          </div>
        </form>
      </Accordion>
    </div>
  );
}
export default Filter