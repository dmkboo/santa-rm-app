import React, { Component } from 'react'

import Avatar from 'material-ui/Avatar';
import { Divider } from 'material-ui';
import LaCaraB from  '../img/album-cover-la-cara-b.jpg'

class AlbumLaCaraB extends Component{
  render(){
    return(
      <div className="pd-40">
        <div className="card">
          <Avatar
            src={LaCaraB}
            size={150}
            />
          <div className="album-details">
            <div className="album-year">2014</div>
            <div className="album-title">La Cara B</div>
          </div>
        </div>
        <Divider />
        <div className=""></div>
      </div>
    )
  }
}

export default AlbumLaCaraB;
