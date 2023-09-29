- [Algorithms](#algorithms)
  - [Euclidean Algorithm for Greatest Common Divisor](#euclidean-algorithm-for-greatest-common-divisor)
- [Skills](#skills)
  - [Repeat String Concatenation](#repeat-string-concatenation)


# Algorithms
## Euclidean Algorithm for Greatest Common Divisor
Consider two integers, `a` and `b`. To calculate their greatest common divisor, assuming that `a > b`:
1. Obtain the remainder: `r = a % b`, where it's known that `r < b`.
2. Replace `a` with `b` and `b` with `r`.
3. Return to the first step.

Code:
```javascript
const calGCD = (a, b) => b === 0 ? a : calGCD(b, a % b); // The first argument records the larger integer, and the second argument records the remainder.
```

# Skills
## Repeat String Concatenation
In this question, if we find that `(str1 + str2) === (str2 + str1)`, we can confirm the presence of repeated patterns. The process of proving this concept is outlined in the [Question: Repeated Substring Pattern](https://github.com/liushuyu6666/Algorithm_Leetcode_JavaScript/blob/master/Repeated_Substring_Pattern/)
