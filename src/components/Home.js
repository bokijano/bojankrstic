import React, { Component } from "react";
import MyPicture from "./../pictures/my-picture.JPG";
import Address from "./../pictures/address.png";
import Phone from "./../pictures/phone.jpg";
import Mail from "./../pictures/mail.png";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about">
        <div className="picture-about">
          <img src={MyPicture} alt="" />
        </div>
        <div className="text-about">
          <h3>Hello, my name is</h3>
          <h1>Bojan Krstić</h1>
          <h2>
            I am a <span>Web Developer</span>
          </h2>
          <div className="info">
            <article>
              <img src={Address} alt="address" />
              <span>Pirot, Serbia</span>
            </article>
            <article>
              <img src={Phone} alt="phone" />
              <span>+381641555562</span>
            </article>
            <article>
              <img src={Mail} alt="mail" />
              <span>krstic.bojan80@gmail.com</span>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
