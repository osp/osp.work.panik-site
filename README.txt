Radio Panik Website
===================

© 2013 Simon Daron, Frederic Peters, Sébastian Sanfilippo, Eric Schrijver

Free and open source under a number of copyleft licenses, see LICENSE.txt

The Mockup / Initial Design
---------------------------

The files are available as static html in the folder mockup-html/html
You should be able to open the file index.html in a web browser.

The CSS is implemented as LESS. The LESS JavaScript will not run
locally in Chrome due to security restrictions, so you might need to
run a small server to have the stylesheets display correctly.
Python’s default server will do just fine:

    cd mockup-html/html
    python -m SimpleHTTPServer

You can view the website at http://127.0.0.1:8000/

The mockup was created with Jekyll, http://jekyllrb.com/
In mockup-html/src you will find the templates we used.

To run the Jekyll development server:

    cd mockup-html/src
    jekyll serve --watch

You can view the website at http://127.0.0.1:4000/
