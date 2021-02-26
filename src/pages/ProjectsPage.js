import React from "react";
import Products from "../componets/Products";



class ProjectsPage extends React.Component {
  render() {
    return (

      <div>
        
        <Products
          pic='/pic/gateway.png'
          title='Gateway Project Revision'
          description='The very first project completed in the Road to Hire. With the use of Vanilla HTML and CSS I created a semantic tourist website for Rio De Janeiro'
          site='https://codepen.io/Tspannbell/project/editor/AQznoN'
       />
        <Products
          pic='/pic/Ecomerce.png'
          title='eCommerce'
          description="In Week 3 of the program I was tasked with creating a responsive eCommerce website to sell products to the public. The site had to be responsive on mobile phones and tablets."
          site='https://github.com/tspannbell/eCommercePJ'
          site2='https://condescending-johnson-ddd701.netlify.app/'
        />
        <Products
          pic='/pic/todo.png'
          title='To Do App - Css Ex'
          description=''
          site='https://github.com/tspannbell/to-do-app'
          site2='https://sad-gates-325995.netlify.app/'
        />
        <Products
          pic='/pic/Guess.png'
          title='Guessing Game'
          description="With the use of JavaScript we created a Gussing Game that'll listen to the players voice to tell whether or not they guessed the right answer."
          site2='https://reverent-hodgkin-8eb724.netlify.app/'
          site='https://github.com/tspannbell/Guessing-Game'
        />
        <Products
          pic='/pic/HOPE.png'
          title='HOPE Hacks'
          description='Further expanding on Javascript, the HOPE Hackathon was created using a third party API on the backend to pull from a server to show information on the frontend.'
          site='https://github.com/tspannbell/hope-hackathon-1'
          site2='https://distracted-kare-56ef2e.netlify.app/'
        />
        <Products
          pic='/pic/ecomv2.png'
          title='eCommerce V2'
          description='With the second iteration of the eCommerce project, the website was built completly in React. Making the site cleaner and allowing it to run faster with the use of components. '
          site='https://github.com/tspannbell/E-comm'
          site2='https://inspiring-noyce-baf36e.netlify.app/'
        />
        <Products 
          pic='/pic/code.png'
          title='Code for Justice'
          description="The Code for Justice Hackathon was created using vanilla HTML and CSS with the intent of educating the population on worldly events and injustices. "
          site='https://github.com/tspannbell/awareness_hackathon'
          site2='https://pedantic-wescoff-5d1510.netlify.app/'
          />
        <Products
          pic='/pic/color.png'
          title='Color Game'
          description='A Color Guessing Game I put together with the help of a code along I found on Github to explore JavaScript.'
          site='https://github.com/tspannbell/Color-Game'
          site2='https://nervous-saha-8d1227.netlify.app/'
        />
        <Products
          pic='/pic/res.png'
          title='Restaurant Reservation Form'
          description='An app created using basic HTML and CSS with the purpose of scheduling reservations for a resturant. Completely static without backend intergration.'
          site='https://github.com/tspannbell/ReservePage'
          site2='https://gracious-noyce-8e6d81.netlify.app/'
        />
      
        
        <Products 
          pic='/pic/ham.png'
          title='Hamburger Builder'
          description='An app built using React with the intention of putting together hambugers for a resturant.'
          site2='https://laughing-wescoff-3405aa.netlify.app/'
          site='https://github.com/tspannbell/GitHub-Hamburger-app'
          />
       
       
      </div>
    );
  }
}

export default ProjectsPage;