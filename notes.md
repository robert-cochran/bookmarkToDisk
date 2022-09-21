- use RESTer extension to help craft rest requests

- content types 
    - x-www-form-urlencoded is for text/ascii data (thus need the %2 characters), use form-data for non-ascii text
    - content type doesnt have to be the the x-www-form-urlencoded and multipart-form but theyre just the most popular

- ?XMLHttpRequest vs fetch (no cors)  
    - https://stackoverflow.com/questions/35549547/fetch-api-vs-xmlhttprequest 

- filesystems access
    - https://web.dev/file-system-access/
    - https://levelup.gitconnected.com/3-ways-to-access-local-files-from-web-browser-70f57fa57e50

Similar example
- http://shitmyself.com/bookmark.html uses bookmarklet to access url title etc and I think sends to clipboard?
- https://github.com/nikhil1raghav/kindle-send sending web data with mail from browser
- https://news.ycombinator.com/item?id=32759786 user tracked everything they read for a year presumably with some bookmarklet to send window data somewhere
- https://github.com/bitmakerla/estela web scraper (could come in handy?)
- https://github.com/inversepolarity/Even-Less-Addictive-Youtube useful for info on how to interact with youtube webpage and pull specific data I need
