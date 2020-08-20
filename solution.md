# Implementation
* What libraries did you add? What are they used for?

The only two packages I added were `node sass` and `prop-types`. `node sass` was used for variable driven styling and easier media queries. `prop-types` was used to validate props in BluePrint.jsx and ItemsList.js
* What's the command to start the application locally? (default is `npm start`)

Still `npm start` 🙂

# General
* How much time did you spend on this? If you had more time, what further improvements or new features would you add?

I spent about 12 or 14 hours on this. If I had more time, I would make the app better suited for mobile users. Make a function in the BluePrint component that procedurally processes each construction object, instead of hardcoding a SVG group for each one. I would also work on a better color scheme that is more appealing. The ability to rotate or zoom into the model would also be a great feature. Working on the look of the checkboxes and the list overall would be beneficial.
* What part are you most proud of and why?

I've never programmatically created an SVG before, only manipulated ones that already exist. It was exciting to search around for the best SVG shape to use and what their parameters are. When I finally saw all the coordinates turn into a clear SVG drawing that matched the wireframes, I was stoked!
* Which parts did you spend the most time with? What did you find most difficult?

The section I spent the most time on was a part of the app that I actually discarded. I first started using the coordinates to make lines (`<line>`) and then filling them with rectangles (`<rect>`). It was a lot of mathematical programming trying to find the x1, x2, y1, y2 values for the `<line>` parameters. Similarly, it was difficult to find the x, y, height, and width values for the `<rect>` parameters. I got all of it working, except when it came to the generic rooms shape, which a rectangle couldn't fill. This drove me to find a better solution with the `<polygon>` shape.

# Other
* Anything else you'd like us to know (about your implementation or otherwise)?

Ti let me know that your company uses only functional components, so that's the only component type I used and prefer. create-react-app doesn't allow data to be pulled in from outside of the source folder, so I put the JSON files in a folder called data in src. To avoid redux, I used the Context API hooks and found it to be a really clean approach when two components needed to have access to or set the same value.
* How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.

I learned a ton with this project and really leveled up my knowledge of SVGs. If this is anything like the kind of work you're looking the selected candidate to do, I think I can really thrive at Social Construct. In terms of improvements to the test, I would suggest providing a little bit more information about what the data represents in the JSON files, the number of array elements vary between different construction objects. wireframes.png was a great help though and kept me on track.