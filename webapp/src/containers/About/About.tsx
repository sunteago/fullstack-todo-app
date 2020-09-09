import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.About}>
      <h1>About this App</h1>
      <p>
        This app was created for Ensolvers, it consists in a simple To-Do
        Full-Stack App
      </p>
      <h2>Features</h2>
      <ul>
        <li>Create Account</li>
        <li>Log in</li>
        <li>Authentication via JWT (Json Web Token)</li>
        <li>Instant Auth (saves token in localStorage)</li>
        <li>Get Todos from DB</li>
        <li>Create Todos</li>
        <li>Update them</li>
        <li>Set them to either done or not done yet</li>
        <li>Delete them</li>
        <li>Simple validation client-side and server-side</li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>Bcryptjs</li>
        <li>JWT</li>
        <li>React.js</li>
        <li>Typescript</li>
        <li>REDUX</li>
      </ul>
    </div>
  );
}
