# JavaScript30

Hi!

These are my solutions to Wes Bos’ JavaScript30 Vanilla JS Challenges at [javascript30.com](https://javascript30.com)


## Thoughts

At the end of each challenge I am creating a note with any thoughts about the challenge. These notes may include new things I learned, problems I faces and how I solved them, or whatever thoughts I may have.

### 01 JavaScript Drum Kit – 08.25.2017

One minor thing I felt was missing from the drum kit was the ability to activate any of the drums by clicking on the pad. I solved this by adding an event listener to the click event and setting `playSound` as the callback. Then I modified `playSound` slightly to find the correct key code whether the event was a keydown or click.

In the CSS, I added `pointer-events: none;` to each of the text elements inside the drum pad to prevent them from interrupting the click on the drum pad.


### 02 JS and CSS Clock - 08.25.2017
