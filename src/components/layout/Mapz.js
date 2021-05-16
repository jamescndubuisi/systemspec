import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "80%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="container">
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{
            lat: 6.5244,
            lng: 3.3792,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyALCrfn5BSQD077ZZXlF9_d5j3JuNe7E3c",
})(MapContainer);
