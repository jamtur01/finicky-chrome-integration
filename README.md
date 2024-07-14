<img src="icons/eight128.png" alt="Finicky Chrome Integration Icon" width="64" height="64" align="left">

# Finicky Chrome Integration

<br clear="left"/>

## Overview

Finicky Chrome Integration is a Chrome extension that enhances your browsing experience by allowing you to open links in Finicky, a macOS app that gives you control over which browser to use for each link. This extension enables you to use Finicky's rules directly from within Chrome, making it easier to manage which links open in which browsers or profiles.

## Features

- Open links in Finicky directly from Chrome
- Customizable modifier key (Shift, Alt, or Command/Windows key)
- Context menu option to send links to Finicky
- Works across all web pages
- Seamless integration with Finicky's rule system
- Toolbar icon for quick enable/disable functionality
- Easy access to options through the toolbar icon

## Installation

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The Finicky Chrome Integration extension should now appear in your list of installed extensions with a toolbar icon.

## Usage

There are three ways to use this extension:

1. Modifier Key: When the extension is enabled, hold down your chosen modifier key (default is Shift) while clicking on a link.
2. Context Menu: Right-click on any link and select "Send to Finicky" from the context menu.
3. Toolbar Icon: Click the Finicky Integration toolbar icon to enable or disable the extension.

In all cases, the link will be opened through Finicky, allowing your Finicky rules to determine which browser or profile to use.

## Configuration

You can customize the extension's behavior through the options page:

1. Click the Finicky Integration toolbar icon and select "Open Options", or
2. Right-click the toolbar icon and select "Options" from the context menu.

In the options page, you can:

- Choose your preferred modifier key (Shift, Alt, or Command/Windows key)

## Requirements

- Google Chrome browser
- Finicky installed on your macOS system (https://github.com/johnste/finicky)

## How It Works

The extension intercepts link clicks (when using the modifier key) or context menu selections and modifies the URL to use the `finicky://` protocol. It then passes this modified URL to Finicky, which applies its rules to determine how to open the link.

## Troubleshooting

If the extension doesn't seem to be working:

1. Check if the extension is enabled by clicking the toolbar icon.
2. Ensure Finicky is properly installed and configured on your system.
3. Verify that you're using the correct modifier key (check the Options page).
4. Try reloading the web page or restarting Chrome.
5. If the context menu option doesn't appear, try disabling and re-enabling the extension.

## Contributing

Contributions to improve Finicky Chrome Integration are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Finicky project (https://github.com/johnste/finicky) for providing the underlying functionality.
- Icon made by [graphicmall](https://www.flaticon.com/free-icons/infinite") from www.flaticon.com.

## Version History

- 1.3: Added "Send to Finicky" context menu option for links.
- 1.2: Added toolbar icon for quick enable/disable, updated options page, removed Ctrl as a modifier key option.
- 1.1: Initial release with basic Finicky integration functionality.
