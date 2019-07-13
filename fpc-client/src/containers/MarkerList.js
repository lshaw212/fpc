import React, { Component } from "react";
import PetrolMarker from '../components/PetrolMarker';

class MarkerList extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <PetrolMarker position={[57.15, -2.35]} text="This is test marker 1!" />
        <PetrolMarker position={[57.15, -2.30]} text="This is test marker 2!" />
        <PetrolMarker position={[57.15, -2.25]} text="This is test marker 3!" />
        <PetrolMarker position={[57.15, -2.20]} text="This is test marker 4!" />

      </div>
    );

  }
}

export default MarkerList;