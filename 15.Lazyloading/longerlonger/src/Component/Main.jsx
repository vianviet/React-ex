import React, { Component, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const DescendantRouter = lazy(() => import("./DescendantRouter"));
const Invoice = lazy(() => import("./Invoice"));
const NotFound = lazy(() => import("./NotFound"));

export default class Main extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="invoices/:invoiceId">Info</Link>
          </li>
          <li>
            <Link to="map">Descendant Router</Link>
            <ul>
              <li>
                <Link to="map/show">Map</Link>
              </li>
              <li>
                <Link to="map/invoices">Invoice</Link>
              </li>
            </ul>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="invoices/:invoiceId" element={<Invoice />} />
            <Route path="map/*" element={<DescendantRouter />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}
