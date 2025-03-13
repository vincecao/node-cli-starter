#!/usr/bin/env node
import { Command } from "commander";

export function helloCommand(name: string, options: { language?: string } = {}) {
  let greeting = options.language === "es" ? "Hola" : "Hello";
  console.log(`${greeting}, ${name}!`);
}

const program = new Command();

program.name("mycli").description("My CLI tool").version("1.0.0");

program
  .command("hello <name>")
  .description("Say hello to someone")
  .option("-l, --language <lang>", "Language for greeting", "en")
  .action((name, options) => {
    helloCommand(name, options);
  });

if (process.env.NODE_ENV !== "test") {
  program.parse();
}
