import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {MenuItem, Drawer, Divider, List, ListItem} from 'material-ui';
import Avatar from 'material-ui/Avatar';

import SantaRMAvatar from '../../img/santa-rm-logo-2.jpg'
import ListoParaLoQueVenga from  '../../img/album-cover-listo.jpg'
import LaCaraB from  '../../img/album-cover-la-cara-b.jpg'
import MalaOrtografia from  '../../img/album-cover-mala-ortografia.jpg'
import LosMasBuscados from  '../../img/album-cover-los-mas-buscados.jpg'
import RamoDeProsas from  '../../img/album-cover-ramo-de-prosas.jpg'
import BajoCero from  '../../img/album-cover-bajo-cero.jpg'
import SocialIcons from './SocialIcons'

import { loadAlbumSelection } from '../../actions/album'

class SideBar extends Component{
  constructor(props){
    super(props);
    this.state={
      albumSelection: 'listo_para_lo_que_venga'
    }
  }
  componentDidMount() {
    const { albumSelection } = this.state;
    this.props.loadAlbumSelection(albumSelection)
  }
  changeAlbumSelection(album){
    this.setState({
      albumSelection:album
    })
    this.props.loadAlbumSelection(album)
  }
  render(){
    return(
      <Drawer>
        <List>
          <div className="avatar-container">
            <Avatar
              src={SantaRMAvatar}
              size={200}
              />
            <h1 className="artist-name">Santa RM</h1>
            <h3 className="artist-address">Sonora, MX</h3>
            <SocialIcons />
          </div>
          <Divider />
          <ListItem
            onClick={this.changeAlbumSelection.bind(this,'listo_para_lo_que_venga')}
            innerDivStyle={{paddingLeft: '20px', textTransform: 'uppercase'}}
            className="album-list"
            primaryText="Listo para Lo Que Venga"
            insetChildren={true}
            rightAvatar={<Avatar src={ListoParaLoQueVenga} />}
          />
          <ListItem
            onClick={this.changeAlbumSelection.bind(this,'la_cara_b')}
            innerDivStyle={{paddingLeft: '20px', textTransform: 'uppercase'}}
            className="album-list"
            primaryText="La cara B"
            insetChildren={true}
            rightAvatar={<Avatar src={LaCaraB} />}
          />
          <ListItem
            innerDivStyle={{paddingLeft: '20px', textTransform: 'uppercase'}}
            className="album-list"
            primaryText="Mala Ortografía"
            insetChildren={true}
            rightAvatar={<Avatar src={MalaOrtografia} />}
          />
          <ListItem
            innerDivStyle={{paddingLeft: '20px', textTransform: 'uppercase'}}
            className="album-list"
            primaryText="Los más buscados"
            insetChildren={true}
            rightAvatar={<Avatar src={LosMasBuscados} />}
          />
          <ListItem
            innerDivStyle={{paddingLeft: '20px', textTransform: 'uppercase'}}
            className="album-list"
            primaryText="Ramo de Prosas"
            insetChildren={true}
            rightAvatar={<Avatar src={RamoDeProsas} />}
          />
          <ListItem
            innerDivStyle={{paddingLeft: '20px', textTransform: 'uppercase'}}
            className="album-list"
            primaryText="Bajo Cero"
            insetChildren={true}
            rightAvatar={<Avatar src={BajoCero} />}
          />
        </List>
      </Drawer>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(Object.assign({}, {loadAlbumSelection}), dispatch);
}
export default connect (null, mapDispatchToProps)(SideBar);
