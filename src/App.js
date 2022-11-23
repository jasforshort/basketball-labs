import FeaturedPlayers from './components/FeaturedPlayers';
import Nav from './components/Nav.js';
import "./styles/app.scss"

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c31c0f80f4mshbb6b108a22becd7p1ccc72jsn990e3c358a6d',
// 		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://api-nba-v1.p.rapidapi.com/players?search=james', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

function App() {
  return (
    <div className="root-div">
      <Nav/>
    </div>
  );
}

export default App;
