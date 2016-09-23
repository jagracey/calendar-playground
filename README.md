

This project used React & JSX.

Given that I allocated one day for this project, there are quite a few rough spots. The options page has been left have finished, and the naming convensions for variables, files, class names etc aren't as consistent as I would have liked.

I accomplished all the features with the exception of creating new events. This isn't much of a problem for testing however since I make liberal use of a fake data generator. The view for a single day isn't pretty, though the events do have fun names and bright colors.

The calendar can be found at '/calendar'. This does require a static file server to get the url endpoints correct.

To run this project, you can `npm -g install static-server`, followed by navigating to the `public` directory where you will then run `static-server`.  The server will let you know which localhost port to connect to.


If you want to dig deep into the code, you will need Node v6. `npm install` will handle the rest. `npm build --release` to build, and `npm start` to run the dev server.

Also note, I started the project using Yeoman's React Static boilerplate (https://github.com/kriasoft/react-static-boilerplate#readme) which is was really heavy on the asset pipeline, but really came with very little to offer in terms of web page implementation.
