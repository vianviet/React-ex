import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Invoice from "./Invoice";
import Map from "./Map";

export default class DescendantRouter extends Component {
  render() {
    return (
      <div>
        <p>Look, hello I'm descendant routes!</p>
        <Routes>
          <Route
            path="show"
            element={
              <Map
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1860257166395!2d108.2301736144689!3d16.05583364406238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219a4a914fcad%3A0xfb0a958ce151606d!2zMjMwIMSQLiBUcuG6p24gSMawbmcgxJDhuqFvLCBBbiBI4bqjaSBUw6J5LCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1650282106487!5m2!1svi!2s"
                height="300"
                width="300"
              />
            }
          />
          <Route path="invoices" element={<Invoice />} />
        </Routes>
      </div>
    );
  }
}
