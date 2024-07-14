<img src="icons/eight128.png" alt="Finicky Chrome Integration Icon" width="64" height="64" align="left">

# Finicky Chrome Integration

<br clear="left"/>

## Overview

Finicky Chrome Integration is a Chrome extension that enhances your browsing experience by allowing you to open links in Finicky, a macOS app that gives you control over which browser to use for each link. This extension enables you to use Finicky's rules directly from within Chrome, making it easier to manage which links open in which browsers or profiles.

## Features

- Open links in Finicky directly from Chrome
- Context menu option to open links in Finicky
- Optional modifier key functionality (can be disabled)
- Customizable modifier key
- Works across all web pages
- Seamless integration with Finicky's rule system
- Easy access to options through the extension menu

## Installation

1. Clone this repository or download the release zip file and unpack it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The Finicky Chrome Integration extension should now appear in your list of installed extensions.

## Usage

1. The context menu option "Open in Finicky" is always available when you right-click on a link.
2. By default, the extension is set to "Always active" mode, which means clicking on any link will open it in Finicky.
3. You can optionally set a modifier key (Shift, Alt, or Command/Windows key) in the options page. When set, you'll need to hold down this key while clicking a link to open it in Finicky.

**Note**: You may see a one-time prompt asking permission to open links with Finicky. This is a security feature of your operating system. After allowing it once, you shouldn't see the prompt again.

## Configuration

You can customize the extension's behavior through the options page:

1. Right-click the extension icon and select "Options" from the context menu.

In the options page, you can:

- Choose your preferred modifier key setting:
  - None (Always active): All clicks will open links in Finicky
  - Shift, Alt, or Command/Windows key: Hold down this key while clicking to open links in Finicky

## Requirements

- Google Chrome browser
- Finicky installed on your macOS system (https://github.com/johnste/finicky)

## How It Works

When you use either the configured modifier key (if set) or the context menu option, the extension intercepts the action. Instead of opening the link directly in Chrome, it modifies the URL to use the `finicky://` protocol and passes it to Finicky. Finicky then applies its rules to determine how to open the link.

## Troubleshooting

If the extension doesn't seem to be working:

1. Ensure Finicky is properly installed and configured on your system.
2. Check your modifier key setting in the Options page.
3. Try reloading the web page or restarting Chrome.
4. If you're still having issues, try reloading the extension.

## Contributing

Contributions to improve Finicky Chrome Integration are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the [Finicky project](https://github.com/johnste/finicky) for providing the underlying functionality.
- Icon made by [graphicmall](https://www.flaticon.com/free-icons/infinite") from www.flaticon.com.

## Version History

- 1.4: Added option to disable modifier key, making the extension always active. Context menu option now always available.
- 1.3: Added context menu option to open links in Finicky. Fixed issue with repeated permission prompts.
- 1.2: Added toolbar icon for quick enable/disable, updated options page, removed Ctrl as a modifier key option.
- 1.1: Initial release with basic Finicky integration functionality.
