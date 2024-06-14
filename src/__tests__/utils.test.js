// Your tests here
// src/__tests__/utils.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  // Bonus: handles combinations of uppercase and lowercase letters
  it("handles combinations of uppercase and lowercase letters", () => {
    expect(isPalindrome("RacEcAr")).toBe(true);
  });

  // Bonus: returns false for an empty string
  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  // Bonus: throws an error for input with non-alphabetic characters
  it("throws an error for input with non-alphabetic characters", () => {
    expect(() => {
      isPalindrome("123@!");
    }).toThrow();
  });

  // Bonus: throws an error for input that isn't a string
  it("throws an error for input that isn't a string", () => {
    expect(() => {
      isPalindrome(123);
    }).toThrow();
  });
});
