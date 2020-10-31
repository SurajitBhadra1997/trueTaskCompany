import React, { Component } from "react";
import "./tagsInput.css";
const Tag = (props) => <span className="tag" {...props} />;
const Delete = (props) => <button className="delete" {...props} />;
const Help = (props) => <span className="help" {...props} />;

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTag: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
  }
  handleChange(e) {
    this.setState({ newTag: e.target.value });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newTag = this.state.newTag.trim();

      if (this.props.value.indexOf(newTag) === -1) {
        this.props.value.push(newTag);
        this.setState({ newTag: "" });
      }
      e.target.value = "";
    }
  }

  handleRemoveTag(e) {
    let tag = e.target.parentNode.textContent.trim();
    let index = this.props.value.indexOf(tag);
    this.props.value.splice(index, 1);
    this.setState({ newTag: "" });
  }
  render() {
    return (
      <div className="cheery-tags-input">
        {/* component created by cheery, ask him for more information */}
        <div className="tags-input">
          {this.props.value.map((tag, index) => (
            <Tag>
              {tag}
              <Delete onClick={this.handleRemoveTag} />
            </Tag>
          ))}
          <input
            type="text"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            placeholder="Type & hit 'Enter' to add new tags..."
          />
        </div>
        {/* <Help>:- hit 'Enter' to add new tags</Help> */}
      </div>
    );
  }
}
