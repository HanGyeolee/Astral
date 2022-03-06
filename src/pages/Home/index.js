import {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import './index.css';
import '../../Main.css';

export const Home = (props) => {
    return (
        <div className="row2_1">
            <article>
                <h1>Choi HanGyeol</h1>
                <p>Senior Astral Projectionist</p>
            </article>
            <article>
                <Link onClick={props.click} className="next" to="/Work">
                    <img src="https://hangyeolee.github.io/Astral/img/me.jpg" alt="girl"></img>
                </Link>
            </article>
        </div>
    );
}