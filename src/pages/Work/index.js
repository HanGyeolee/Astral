import {useState} from 'react';
import { useHistory } from 'react-router';
import './index.css';
import '../../Main.css';

export const Work = () => {
    const history = useHistory();
    
    function Move(path){
        history.push(path);
    }

    return (
        <article>
            <h2>Work</h2>
            <p>Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.</p>
            <ul className="horizontal flex fit">
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic01.jpg" alt="1"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic02.jpg" alt="2"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic03.jpg" alt="3"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic04.jpg" alt="4"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic05.jpg" alt="5"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic06.jpg" alt="6"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic07.jpg" alt="7"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic08.jpg" alt="8"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic09.jpg" alt="9"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic10.jpg" alt="10"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic11.jpg" alt="11"></img></li>
                <li><img onClick={() => this.Move("/Astral")} src="https://hangyeolee.github.io/Astral/img/pic12.jpg" alt="12"></img></li>
            </ul>
        </article>
    );
}