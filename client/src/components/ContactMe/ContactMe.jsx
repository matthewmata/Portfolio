import React, { Component } from 'react';
import style from './ContactMe.scss';
import resume from '../Header/imgs/Resume.pdf';

const ContactMe = (props) => (
  <footer className={style.contactMeContainer} id="contactMe">
    <div className={style.mainTextBox}>
      <span className={style.row}>
        <hr className={style.separator} />
        <h3 className={style.title}>
          THANKS!
        </h3>
        <hr className={style.separator} />
      </span>
      <div className={style.sentence}>Want to chat about something?</div>
      <a href='mailto:matthewmata151@gmail.com' className={style.contactMeBox}>
        <span className={style.contactMeIcon}>
          <ion-icon name="mail"/>
        </span>
        <span>contact me</span>
      </a>
      <ul className={props.width >= 1024 ? style.iconLinkList : style.smallIconLinkList}>
        <li>
          <a href='https://github.com/matthewmata' target="_blank">
            <svg width="60px" height="60px" fill="#fff" viewBox="0 0 512 512" className={style.github}>
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/matthew-mata/' target="_blank">
            <svg width="60px" height="60px" fill="#fff" viewBox="0 0 512 512" className={style.linkedIn}>
              <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href={resume} target="_blank">
            <svg width="60px" height="60px" fill="#fff" viewBox="0 0 512 512" className={style.resume}>
              <path d="M464 64H192c-8.8 0-16 7.7-16 16.5V112H74c-23.1 0-42 18.9-42 42v207.5c0 47.6 39 86.5 86 86.5h279.7c45.1 0 82.3-36.9 82.3-82V80c0-8.8-7.2-16-16-16zm-288 80v192h-42V163.2c0-6.8-.8-13.3-3.3-19.2H176zm-17 255.4C148 410 133.2 416 118.5 416c-14.5 0-28.1-5.7-38.5-16-10.3-10.3-16-24-16-38.5V163.2c0-10.6 8.4-19.2 19-19.2s19 8.6 19 19.2V352c0 8.8 7.2 16 16 16h57.5c-1.5 11.6-7.2 22.6-16.5 31.4zM448 366c0 13.3-5.4 25.8-14.9 35.3-9.5 9.5-22.2 14.7-35.4 14.7H187.3c12.8-14.9 20.7-33.9 20.7-54.5V97h240v269z"/><path d="M248 136h160v56H248zM248 224h160v32H248zM248 288h160v32H248zM408 352H248s0 32-8 32h148.7c19.3 0 19.3-21 19.3-32z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href='mailto:matthewmata151@gmail.com'>
            <svg width="60px" height="60px" fill="#fff" viewBox="0 0 512 512" className={style.email}>
              <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
            </svg>
          </a>
        </li>
      </ul>
      <div className={style.footerNote}>
        Designed and developed by Matthew Mata © 2019
      </div>
    </div>
  </footer>
)

export default ContactMe;