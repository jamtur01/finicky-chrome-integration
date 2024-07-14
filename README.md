<img src="icons/eight128.png" alt="Finicky Chrome Integration Icon" width="64" height="64" align="left">

# Finicky Chrome Integration

<br clear="left"/>

## Overview

Finicky Chrome Integration is a Chrome extension that enhances your browsing experience by allowing you to open links in Finicky, a macOS app that gives you control over which browser to use for each link. This extension enables you to use Finicky's rules directly from within Chrome, making it easier to manage which links open in which browsers or profiles.

## Features

- Open links in Finicky directly from Chrome
- Customizable modifier key (Shift, Alt, or Command/Windows key)
- Works across all web pages
- Seamless integration with Finicky's rule system

## Installation

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The Finicky Chrome Integration extension should now appear in your list of installed extensions.

## Usage

1. Hold down your chosen modifier key (default is Shift) while clicking on a link.
2. The link will be opened through Finicky, allowing your Finicky rules to determine which browser or profile to use.

## Configuration

You can customize which modifier key activates the Finicky integration:

1. Right-click on the extension icon in the Chrome toolbar.
2. Select "Options" from the context menu.
3. Choose your preferred modifier key from the dropdown menu.
4. The change will take effect immediately, no restart required.

## Requirements

- Google Chrome browser
- Finicky installed on your macOS system (https://github.com/johnste/finicky)

## How It Works

When you hold down the configured modifier key and click a link, the extension intercepts the click event. Instead of opening the link directly in Chrome, it modifies the URL to use the `finicky://` protocol and passes it to Finicky. Finicky then applies its rules to determine how to open the link.

## Troubleshooting

If the extension doesn't seem to be working:

1. Ensure Finicky is properly installed and configured on your system.
2. Check that the extension is enabled in Chrome's extension settings.
3. Verify that you're using the correct modifier key (check the Options page).
4. Try reloading the web page or restarting Chrome.

## Contributing

Contributions to improve Finicky Chrome Integration are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the [Finicky project](https://github.com/johnste/finicky) for providing the underlying functionality.
- Icon made by [graphicmall](https://www.flaticon.com/free-icons/infinite") from www.flaticon.com.
