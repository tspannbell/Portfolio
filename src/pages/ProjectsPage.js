import React from "react";
import Products from "../componets/Products";


class ProjectsPage extends React.Component {
  render() {
    return (

      <div>
        <Products
          pic='/pic/gateway.png'
          title='Gateway Project Revision'
          description=""
          site='https://codepen.io/Tspannbell/project/editor/AQznoN'
       />
        <Products
          pic='/pic/todo.png'
          title='To Do App'
          description=''
          site='https://github.com/tspannbell/to-do-app'
          site2='https://sad-gates-325995.netlify.app/'
        />
        <Products
          pic='/pic/Ecomerce.png'
          title='eCommerce'
          description=" "
          site='https://github.com/tspannbell/eCommercePJ'
          site2='https://condescending-johnson-ddd701.netlify.app/'
           />
        <Products 
          pic='/pic/code.png'
          title='Code for Justice'
          description=''
          site='https://github.com/tspannbell/awareness_hackathon'
          site2='https://pedantic-wescoff-5d1510.netlify.app/'
          />
        <Products 
          pic='/pic/HOPE.png'
          title='HOPE Hacks'
          description=''
          site='https://github.com/tspannbell/hope-hackathon-1'
          site2='https://distracted-kare-56ef2e.netlify.app/'
          />
        <Products
          pic='/pic/color.png'
          title='Color Game'
          description=''
          site='https://github.com/tspannbell/Color-Game'
          site2='https://nervous-saha-8d1227.netlify.app/'
        />
        <Products
          pic='/pic/res.png'
          title='Restaurant Reservation Form'
          description=''
          site='https://github.com/tspannbell/ReservePage'
          site2='https://gracious-noyce-8e6d81.netlify.app/'
        />
      
        <Products 
          pic='/pic/Guess.png'
          title='Guessing Game'
          description=''
          site2='https://reverent-hodgkin-8eb724.netlify.app/'
          site='https://github.com/tspannbell/Guessing-Game'
          />
        <Products 
          pic='/pic/ham.png'
          title='Hamburger Builder'
          description=''
          site2='https://laughing-wescoff-3405aa.netlify.app/'
          site='https://github.com/tspannbell/GitHub-Hamburger-app'
          />
       
        <Products
          pic='/pic/ecomv2.png'
          title='Ecommerce V2'
          description=''
          site='https://github.com/tspannbell/E-comm'
          site2='https://inspiring-noyce-baf36e.netlify.app/'
        />
      </div>
    );
  }
}

export default ProjectsPage;