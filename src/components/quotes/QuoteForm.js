import { Fragment } from "react";
import { Form } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  return (
    <Fragment>
      {/* In react-router-dom vesion 6 for now there is no Prompt yet but it will come soon */}
      {/* <Prompt
        when={isEntered}
        message={(location) => {
          return "Are you sure you want to leave? All your data will be lost.";
        }}
      /> */}
      <Card>
        <Form className={classes.form} method="post" action="/new-quote">
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <fieldset className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" />
          </fieldset>
          <fieldset className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" name="text" rows="5"></textarea>
          </fieldset>
          <fieldset className={classes.actions}>
            <button className="btn">Add Quote</button>
          </fieldset>
        </Form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
