import React, { Component }  from 'react';
import FontIcon from 'material-ui/FontIcon';

class SocialIcons extends Component{
  render(){
    const graphIconStyle = {
      fontSize: 30
    };
    return(
      <div className="social-wrapper">
        <div className="social-item">
           <FontIcon className="fa fa-youtube-play" style={graphIconStyle} />
        </div>
        <div className="social-item">
          <FontIcon className="fa fa-instagram" style={graphIconStyle} />
        </div>
        <div className="social-item">
          <FontIcon className="fa fa-twitter" style={graphIconStyle} />
        </div>
      </div>
    )
  }
}
export default SocialIcons;
