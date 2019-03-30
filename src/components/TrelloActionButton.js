import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "react-textarea-autosize";

export default class TrelloActionButton extends Component {
  state = {
    formOpen: false
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    })
  }

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
          ...styles.openForButtonGroup,
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
        <Card>
          <Textarea placeholder={placeholder} autoFocus onBlur={this.closeForm}/>
        </Card>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "3px",
    height: "36px",
    width: "272px",
    paddingLeft: "10px"
  }
};
