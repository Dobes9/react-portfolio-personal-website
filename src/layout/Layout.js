import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

export default function Layout() {
  return (
    <div className="Layout">
      <h1>Richard H Dobeck</h1>
      <p>Orchestral Clarinetist</p>
      <p>Web Developer</p>
      <Navbar />
      <Routes></Routes>
    </div>
  );
}
