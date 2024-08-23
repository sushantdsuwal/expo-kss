#!/usr/bin/env node

const { createComponent } = require("./commands/createComponent");
const { createScreen } = require("./commands/createScreen");

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: fuse create [component | screen] {name} [options]");
  process.exit(1);
}

const [command, action, ...rest] = args;

const typeArg = rest.find((arg) => arg.startsWith("type="));
const type = typeArg ? typeArg.split("=")[1] : "common"; // Default to 'common'

// Extract the component name and custom path if present
const componentName = rest.find(
  (arg) => !arg.startsWith("type=") && !arg.startsWith("-"),
);
const customPathArg = rest.find((arg) => arg.startsWith("-p="));
const customPath = customPathArg ? customPathArg.split("=")[1] : "";

console.log(`Command: ${command}`);
console.log(`Action: ${action}`);
console.log(`Component Name: ${componentName}`);
console.log(`Type: ${type}`);
console.log(`Custom Path: ${customPath}`);

if (command === "create") {
  if (action === "component") {
    if (componentName) {
      createComponent(componentName, type);
    } else {
      console.error("Component name is required.");
      process.exit(1);
    }
  } else if (action === "screen") {
    if (componentName) {
      createScreen(componentName, customPath);
    } else {
      console.error("Screen name is required.");
      process.exit(1);
    }
  } else {
    console.error(
      "Invalid action. Usage: fuse create [component | screen] {name} [options]",
    );
    process.exit(1);
  }
} else {
  console.error(
    "Invalid command. Usage: fuse create [component | screen] {name} [options]",
  );
  process.exit(1);
}
