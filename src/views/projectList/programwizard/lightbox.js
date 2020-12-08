import React, { Component } from "react";
import MultipleGridImages from "react-multiple-image-grid";

export default class lightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      base_url:
      "http://trutask.easytodb.com/uploads/project_photo/",
    };
  }

  componentDidMount() {
    for (let index = 0; index < this.props.allImage.length; index++) {
      console.log("this.allImage.props", this.props.allImage);
      let element = this.state.base_url + this.props.allImage[index].image;
      this.state.images.push(element);
      this.setState({});
    }
  }

    render() {
    //console.log("this.state.images", this.state.images);
    return this.props.allImage.length > 0 ? (
      <div className="lightbox">
        <MultipleGridImages images={this.state.images} />
      </div>
    ) : null;
  }
}
