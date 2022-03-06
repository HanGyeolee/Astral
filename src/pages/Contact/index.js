import {useState} from 'react';
import { useHistory } from 'react-router';
import './index.css';
import '../../Main.css';

export const Contact = () => {
    return (
        <article>
            <h2>Contact Me</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className="wrap">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div className="fit">
                    <input type="text" name="subject" placeholder="Subject"/>
                </div>
                <textarea placeholder="Message"></textarea>
                <ul className="horizontal">
                    <li>
                        <input type="submit" value="Send Message"/>
                    </li>
                </ul>
            </form>
        </article>
    );
}