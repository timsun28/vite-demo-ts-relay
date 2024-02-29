import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { App } from "/imports/ui/App";

Meteor.startup(() => {
    console.log("test");
    const container = document.getElementById("react-target");
    console.log({ container });
    if (!container) throw new Error("No container");
    const root = createRoot(container);
    root.render(<App />);
});
