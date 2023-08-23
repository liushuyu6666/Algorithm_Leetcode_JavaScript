# Algorithms and Skills
## Two Pointers - Sliding window
Employing a sliding window approach involves continuously shifting the right boundary. With each right boundary movement, we assess whether any newly added character is already present within the window. If a character is found to be preexisting, the left boundary is advanced to eliminate elements from the window until all characters within it are distinct.