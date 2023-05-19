import React from "react";
import gitLogo from '../../images/github-mark-white.png';
import pokedex from '../../images/pokedex.png';
import link from '../../images/websiteLink.png';
import marvel from '../../images/marvelDatabase.png';
import password from '../../images/passwordGenerator.png';
import work from '../../images/workdayScheduler.png';
import note from '../../images/noteTaker.png';
import starWars from '../../images/starWars.png';

export default function Portfolio() {
  return (
    <div className="container col-10 row justify-content-center mx-auto my-5 p-5 rendered">
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={pokedex}
          alt="Pokedex Emulator Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Pokedex Emulator
          </section>
          <a
            className="col-1"
            href="https://github.com/Hteasdell44/pokedex-emulation"
          >
            <img
              src={gitLogo}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://hteasdell44.github.io/pokedex-emulation/"
          >
            <img
              src={link}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={marvel}
          alt="Marvel Database Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Marvel Data Base
          </section>
          <a
            className="col-1"
            href="https://github.com/Hteasdell44/pokedex-emulation"
          >
            <img
              src={gitLogo}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://github.com/anthonylieu/marvel-team-builder"
          >
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={note}
          alt="Express Note Taker App Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Express Note Taker
          </section>
          <a
            className="col-1"
            href="https://github.com/seannoway/effective-winner"
          >
            <img
              src={gitLogo}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://nameless-plateau-31258.herokuapp.com"
          >
            <img
              src={link}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={work}
          alt="Pokedex Emulator Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Work Day Scheduler
          </section>
          <a
            className="col-1"
            href="https://github.com/seannoway/shiny-disco"
          >
            <img
              src={gitLogo}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://seannoway.github.io/shiny-disco/"
          >
            <img
              src={link}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={password}
          alt="Pokedex Emulator Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Random Password Generator
          </section>
          <a
            className="col-1"
            href="https://github.com/seannoway/stunning-robot"
          >
            <img
              src={gitLogo}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://seannoway.github.io/stunning-robot/"
          >
            <img
              src={link}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>
      <article className="bg-secondary rounded col-12 col-md-3 mx-1 p-2 my-3">
        <img
          className="mx-auto proj-img"
          src={starWars}
          alt="Pokedex Emulator Screenshot"
        ></img>
        <div className="container row">
          <section className="col-9 text-align-center">
            Insterstellar Index
          </section>
          <a
            className="col-1"
            href="https://github.com/shaboon/symmetrical-robot"
          >
            <img
              src={gitLogo}
              className="link-icon mx-1"
              alt="Github Logo and Link"
            />
          </a>
          <a
            className="col-1"
            href="https://interstellar-index.herokuapp.com/"
          >
            <img
              src={link}
              className="link-icon"
              alt="Link to Deployed Website"
            />
          </a>
        </div>
      </article>

    </div>
  )
}