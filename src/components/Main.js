import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumListoParaLoQueVenga from './AlbumListoParaLoQueVenga'
import AlbumLaCaraB from './AlbumLaCaraB'


class Main extends Component{
  constructor(props){
    super(props);
    this.renderProperAlbum = this.renderProperAlbum.bind(this)
  }
  componentDidMount() {
    console.log(this.props);
  }
  renderProperAlbum(){
    const { album } = this.props.loadAlbumSelection
    if(album === "listo_para_lo_que_venga"){
      return(
        <AlbumListoParaLoQueVenga />
      )
    }
    if(album === "la_cara_b"){
      return(
        <AlbumLaCaraB />
      )
    }
  }
  render(){
    return(
      <div className="main-wrapper">
        {this.renderProperAlbum()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    loadAlbumSelection: state.loadAlbumSelection,
  }
}

export default connect(mapStateToProps,null)(Main);
