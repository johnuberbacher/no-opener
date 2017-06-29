# no-opener

When target="_blank" or target="blank" are used, the page linked to temporarily gains partial access to the origin page, this is possible by manipulating window.opener through javascript, and as a security concern has existed for far too long. This script helps to aim solve that problem by sanitizing your anchors. 

This script adds noopener and noreferrer attributre tags to your links to prevent location hijacking on target="_blank" or target="blank" links.


## Installing / Getting started

To use this script, just include it and run noOpener() on document.ready


## Contributing

If you have ideas or suggestions, feel free to open an issue on GitHub or fork
the repository and use a feature branch. Feedback is very welcome.


## Licensing

The code in this project is licensed under MIT license.
