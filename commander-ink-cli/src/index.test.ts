import { describe, it, expect, vi } from "vitest";
import { helloCommand } from "./index.js";

describe("CLI functionality", () => {
  it("should greet in English by default", () => {
    const consoleSpy = vi.spyOn(console, "log");
    helloCommand("John");
    expect(consoleSpy).toHaveBeenCalledWith("Hello, John!");
  });

  it("should greet in Spanish when language is es", () => {
    const consoleSpy = vi.spyOn(console, "log");
    helloCommand("Maria", { language: "es" });
    expect(consoleSpy).toHaveBeenCalledWith("Hola, Maria!");
  });
});
