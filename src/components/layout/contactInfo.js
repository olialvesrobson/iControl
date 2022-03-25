import React from 'react';
import logo_dude_180 from '../../images/images';

const ContactInfo = () => {

  const { container, image } = styles;


  return (

    <div className='row white'>
        <div className="col s4 m4" >
            <img style={{width: "100px", height: "100px", padding: 10}} src={logo_dude_180}/>
        </div>
        <div className="col s8 center grey-text text-darken-2" >
            <h5 className="center">Contact us<br/><i className="material-icons center">cellphone</i>+61 (0) 452 553 487</h5>
        </div>
    </div>

  )
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,   
    width: '100%',
    height: '100%',
  },
  image: {  
    flex: 1,  
  }
};

export default ContactInfo;