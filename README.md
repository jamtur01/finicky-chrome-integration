<img src="icons/eight128.png" alt="Finicky Chrome Integration Icon" width="64" height="64" align="left">

# Finicky Chrome Integration

<br clear="left"/>

## Overview

Finicky Chrome Integration is a Chrome extension that enhances your browsing experience by allowing you to open links in Finicky, a macOS app that gives you control over which browser to use for each link. This extension enables you to use Finicky's rules directly from within Chrome, making it easier to manage which links open in which browsers or profiles.

## Features

- Open links in Finicky directly from Chrome using a modifier key
- New: Context menu option to open links in Finicky
- Customizable modifier key (Shift, Alt, or Command/Windows key)
- Works across all web pages
- Seamless integration with Finicky's rule system
- Toolbar icon for quick enable/disable functionality
- Easy access to options through the toolbar icon

## Installation

1. Clone this repository or download the release zip file and unpack it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The Finicky Chrome Integration extension should now appear in your list of installed extensions with a toolbar icon.

## Usage

1. Click the Finicky Integration toolbar icon to enable or disable the extension.
2. When enabled, you can use the extension in two ways:
   a. Hold down your chosen modifier key (default is Shift) while clicking on a link.
   b. Right-click on a link and select "Open in Finicky" from the context menu.
3. The link will be opened through Finicky, allowing your Finicky rules to determine which browser or profile to use.

**Warning**: When opening links with Finicky for the first time, you may see a prompt asking permission to open the link with Finicky. This is a security feature of your operating system. You can choose to allow this action if you trust Finicky and this extension.

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

When the extension is enabled and you either hold down the configured modifier key while clicking a link or use the context menu option, the extension intercepts the action. Instead of opening the link directly in Chrome, it modifies the URL to use the `finicky://` protocol and passes it to Finicky. Finicky then applies its rules to determine how to open the link.

## Troubleshooting

If the extension doesn't seem to be working:

1. Check if the extension is enabled by clicking the toolbar icon.
2. Ensure Finicky is properly installed and configured on your system.
3. Verify that you're using the correct modifier key (check the Options page).
4. Try reloading the web page or restarting Chrome.
5. If you're using the context menu option and it's not appearing, try reloading the extension.

## Contributing

Contributions to improve Finicky Chrome Integration are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the [Finicky project](https://github.com/johnste/finicky) for providing the underlying functionality.
- Icon made by [graphicmall](https://www.flaticon.com/free-icons/infinite") from www.flaticon.com.

## Version History

- 1.3: Added context menu option to open links in Finicky.
- 1.2: Added toolbar icon for quick enable/disable, updated options page, removed Ctrl as a modifier key option.
- 1.1: Initial release with basic Finicky integration functionality.
