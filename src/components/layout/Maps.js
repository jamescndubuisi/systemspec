import React, { Component } from "react";
import { GoogleMap, Marker } from "react-google-maps";
export class Maps extends Component {
  render() {
    return (
      <div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyALCrfn5BSQD077ZZXlF9_d5j3JuNe7E3c"></script>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {this.props.isMarkerShown && (
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default Maps;
