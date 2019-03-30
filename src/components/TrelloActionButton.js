import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";

export default class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another Card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list ? "Enter list title " : "Enter card title";

    const buttonTitle = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: "80px",
            minWidth: "272px",
            padding: "6px 8px 2px"
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#5aac44"
            }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 0, cursor: "pointer"}}>
            close
          </Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "3px",
    height: "36px",
    width: "272px",
    paddingLeft: "10px"
  },
  formButtonGroup: {
    marginTop: "8px",
    display: "flex",
    alignItems: "center"
  }
};
