import React, {View, Image, Header} from 'react'

export default function headerApp() {
    const ImageHeader = props => {
        return(
            <div class=" w3-display-container w3-grayscale-min" id="home"
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url("https://picsum.photos/800/800?random=1")`,
                minHeight: '400px'
              }}>
                <div class="w3-display-bottomleft w3-padding">
                  <span class="w3-tag w3-xlarge">Open from 10am to 12pm</span>
                </div>
                <div class="w3-display-middle w3-center">
                  <span class="w3-text-white w3-hide-small" style={{fontSize:"100px"}}>thin<br/>CRUST PIZZA</span>
                  <span class="w3-text-white w3-hide-large w3-hide-medium" style={{fontSize:"60px"}}><b>thin<br/>CRUST PIZZA</b></span>
                  <p><a href="#menu" class="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
                </div>
            </div>
        )
    };
    
    

    return (
        <div>
            {ImageHeader}
        </div>
    )
}

/*

const bgimg = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url("https://picsum.photos/800/800?random=1")`,
    minHeight: '90%'
  }



    <header class=" w3-display-container w3-grayscale-min" style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url("https://picsum.photos/800/800?random=1")`,
          minHeight: '90%'
        }} id="home">
          <div class="w3-display-bottomleft w3-padding">
            <span class="w3-tag w3-xlarge">Open from 10am to 12pm</span>
          </div>
          <div class="w3-display-middle w3-center">
            <span class="w3-text-white w3-hide-small" style={{fontSize:"100px"}}>thin<br/>CRUST PIZZA</span>
            <span class="w3-text-white w3-hide-large w3-hide-medium" style={{fontSize:"60px"}}><b>thin<br/>CRUST PIZZA</b></span>
            <p><a href="#menu" class="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
          </div>
        </header>

*/
