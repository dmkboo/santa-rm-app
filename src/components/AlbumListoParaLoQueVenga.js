import React, { Component } from 'react'

import Avatar from 'material-ui/Avatar';
import { Divider } from 'material-ui';
import ListoParaLoQueVenga from  '../img/album-cover-listo.jpg'

class AlbumListoParaLoQueVenga extends Component{
  render(){
    return(
      <div className="pd-40">
        <div className="card">
          <Avatar
            src={ListoParaLoQueVenga}
            size={150}
            />
          <div className="album-details">
            <div className="album-year">2016</div>
            <div className="album-title">Listo Para lo Que Venga</div>
          </div>
        </div>
        <Divider />
        <div className=""></div>
      </div>
    )
  }
}

export default AlbumListoParaLoQueVenga;
