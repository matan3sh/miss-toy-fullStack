import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarkers: [],
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      showingInfoWindow: true,
      activeMarker: marker,
    });

  onMapClicked = (mapProps, map, clickEvent) => {
    console.log(clickEvent.latLng);
    this.setState(({ activeMarkers }) => ({
      activeMarkers: [...activeMarkers, { position: clickEvent.latLng }],
    }));
  };

  onSetPositions = (positions) => {
    console.log(positions);
    this.setState({ positions });
  };

  containerStyle = {
    position: 'absolute',
    width: '58%',
    height: '50%',
  };

  render() {
    return (
      <div className='card my-2'>
        <div className='grid-1 text-center my-1'>
          <h1>Our Stores</h1>
        </div>
        <Map
          google={this.props.google}
          containerStyle={this.containerStyle}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 39.8333333,
            lng: -98.585522,
          }}
          zoom={4}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Los Angeles'}
            position={{ lat: 34.052235, lng: -118.243683 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'Chicago'}
            position={{ lat: 41.881832, lng: -87.623177 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={'New York'}
            position={{ lat: 40.73061, lng: -73.935242 }}
          />
          {this.state.activeMarkers.map((marker, idx) => (
            <Marker
              position={marker.position}
              key={idx}
              onClick={this.onMarkerClick}
              name={`Marker ${idx}`}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB52WZadL0qrmDyH9SjRaVGCxg98KR0dfc',
})(MapContainer);
