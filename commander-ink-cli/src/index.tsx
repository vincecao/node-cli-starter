#!/usr/bin/env node
import React from "react";
import { Command } from "commander";
import { render, Text } from "ink";

export function helloCommand(name: string, options: { language?: string } = {}) {
  let greeting = options.language === "es" ? "Hola" : "Hello";
  console.log(`${greeting}, ${name}!`);
}

function MyName() {
  return (
    <Text>
      <Text color="green" backgroundColor="black" bold>
        V
      </Text>
      <Text color="blue" backgroundColor="white" italic>
        i
      </Text>
      <Text color="yellow" backgroundColor="red" underline>
        n
      </Text>
      <Text color="cyan" backgroundColor="magenta" strikethrough>
        c
      </Text>
      <Text color="white" backgroundColor="blue" inverse>
        e
      </Text>
      <Text color="red" backgroundColor="yellow" bold>
        C
      </Text>
      <Text color="magenta" backgroundColor="cyan" italic>
        a
      </Text>
      <Text color="black" backgroundColor="green" underline>
        o
      </Text>
    </Text>
  );
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

program
  .command("whoami")
  .description("Display author info with ink render function")
  .action(() => {
    render(<MyName />);
  });

if (process.env.NODE_ENV !== "test") {
  program.parse();
}
