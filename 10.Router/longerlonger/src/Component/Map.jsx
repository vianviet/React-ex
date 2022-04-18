import React, { Component } from "react";

class Map extends Component {
  render(props) {
    return (
      <div>
        <iframe
          title="map"
          src={this.props.src}
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  }
}

export default Map;
