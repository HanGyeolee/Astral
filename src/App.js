import {ReactComponent as Svg_home} from './svg/home-solid.svg';
import {ReactComponent as Svg_work} from './svg/folder-solid.svg';
import {ReactComponent as Svg_contact} from './svg/envelope-solid.svg';
import {ReactComponent as Svg_twitter} from './svg/twitter-brands.svg';
import {useEffect, useState, useRef} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import $ from "jquery";
import './App.css';
import './Main.css';
import {Home, Work, Contact} from './pages';

function Headersvg(props){
  let popup;
  let clickablesvg;
  switch(props.type){
    case "home":
      popup = <span>Home</span>
      clickablesvg = <Svg_home onClick={() => {props.click()}}></Svg_home>
      break;
    case "work":
      popup = <span>Work</span>
      clickablesvg = <Svg_work onClick={() => {props.click()}}></Svg_work>
      break;
    case "contact":
      popup = <span>Contact</span>
      clickablesvg = <Svg_contact onClick={() => {props.click()}}></Svg_contact>
      break;
    case "twitter":
      popup = <span>Twitter</span>
      clickablesvg = <Svg_twitter onClick={() => {props.click()}}></Svg_twitter>
      break;
  }

  return (
    <div className={`headersvg ${props.active ? "active" : ""}`}>
      {popup}
      {clickablesvg}
      <svg></svg>
    </div>
  );
}

function Header(props){
  return(
    <header className="App-header">
      <ul className="horizontal">
        {props.svgs.map(headersvg => (
          <li><Headersvg click={headersvg.click} type={headersvg.type} active={headersvg.active}></Headersvg></li>
        ))}
      </ul>
    </header>
  );
}

function Footer(){
  return(
    <footer>
      <ul className="horizontal">
        <li><p>© Untitled.</p></li>
        <li><p>Design:&nbsp;<a href="/">HTML5 UP</a></p></li>
        <li><p>Demo Images:&nbsp;<a href="/">Unsplash</a></p></li>
      </ul>
    </footer>
  );
}

const App = () => {
  const history = useHistory();
  
  const [headersvgs, setSvgs] = useState([
    {
      id: 0,
      click: () => Move("/", 0),
      type: "home",
      active: true
    },
    {
      id: 1,
      click: () => Move("/work", 1),
      type: "work",
      active: false
    },
    {
      id: 2,
      click: () => Move("/contact", 2),
      type: "contact",
      active: false
    },
    {
      id: 3,
      click: () => Move("/", 3),
      type: "twitter",
      active: false
    }
  ]);

  const [sectionHeight, setHeight] = useState(0);
  useEffect(() => {
    setHeight($("section:nth-child(1)").height());
    $("section:nth-child(2)").css({"min-height": sectionHeight, "max-height": sectionHeight});
  });

  function Move(path, id){
    setSvgs(
      headersvgs.map(headersvg => 
        headersvg.id === id ? {...headersvg, active: true} : {...headersvg, active: false}
      )
    );
    history.push(path);
  }

  const location = useLocation();

  return (
    <div className="App">
      <img src="./img/bg.jpg" alt="background image"/>
      <Header svgs={headersvgs}/>
      <TransitionGroup className="SectionAnimation">
        {/* 애니메이션을 위한 */}
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
          <section>
            <Switch location={location}>
              <Route exact path="/" children={<Home className="fade-enter-done" click={() => Move("/work", 1)}/>}/>
              <Route exact path="/work" children={<Work/>}/>
              <Route exact path="/contact" children={<Contact/>}/>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
