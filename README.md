<!-- Header block for project -->
<hr>

<div align="center">

<!-- ☝️ Replace with your logo (if applicable) via ![](https://uri-to-your-logo-image) ☝️ -->
<!-- ☝️ If you see logo rendering errors, make sure you're not using indentation, or try an HTML IMG tag -->

<h1 align="center">[INSERT PROJECT NAME] Website</h1>
<!-- ☝️ Replace with your repo name ☝️ -->

</div>

<pre align="center">Website and Docs for [INSERT PROJECT NAME].</pre>
<!-- ☝️ Replace with a single sentence describing the purpose of your repo / proj ☝️ -->

<!-- Header block for project -->

[INSERT YOUR BADGES HERE (SEE: https://shields.io)] [![SLIM](https://img.shields.io/badge/Best%20Practices%20from-SLIM-blue)](https://nasa-ammos.github.io/slim/)
<!-- ☝️ Add badges via: https://shields.io e.g. ![](https://img.shields.io/github/your_chosen_action/your_org/your_repo) ☝️ -->

[INSERT SCREENSHOT OF YOUR SOFTWARE, IF APPLICABLE]
<!-- ☝️ Screenshot of your software (if applicable) via ![](https://uri-to-your-screenshot) ☝️ -->

[INSERT PROJECT NAME] hosts a website built with Docusaurus, a site generator that is optimized for building documentation websites. It was created to help you quickly and easily set up a website for your project, including comprehensive documentation and other static content.

[INSERT LIST OF IMPORTANT PROJECT / REPO LINKS HERE]
<!-- example links>
[Website](INSERT WEBSITE LINK HERE) | [Docs/Wiki](INSERT DOCS/WIKI SITE LINK HERE) | [Discussion Board](INSERT DISCUSSION BOARD LINK HERE) | [Issue Tracker](INSERT ISSUE TRACKER LINK HERE)
-->

## Features

* Simple and efficient setup with Docusaurus
* Live-reloading development server for quick feedback
* Easy deployment to GitHub Pages
* Customizable to fit your project’s branding and needs
  
<!-- ☝️ Replace with a bullet-point list of your features ☝️ -->

## Contents

- [Features](#features)
- [Contents](#contents)
- [Quick Start](#quick-start)
  - [Requirements](#requirements)
  - [Setup Instructions](#setup-instructions)
  - [Run Instructions](#run-instructions)
  - [Build Instructions](#build-instructions)
  - [Deployment](#deployment)
- [Changelog](#changelog)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Quick Start

This guide provides a quick way to get started with our project. Please see our [docs]([INSERT LINK TO DOCS SITE / WIKI HERE]) for a more comprehensive overview.

### Requirements

* Node.js and npm installed on your machine
* Yarn package manager

<!-- ☝️ Replace with a numbered list of your requirements, including hardware if applicable ☝️ -->

### Setup Instructions

1. Clone the repository to your local machine.
2. Install the dependencies:
  ```
  yarn
  ```

<!-- ☝️ Replace with a numbered list of how to set up your software prior to running ☝️ -->

### Run Instructions

1. Start the local development server:
  ```
  yarn start
  ```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

<!-- ☝️ Replace with a numbered list of your run instructions, including expected results ☝️ -->

### Build Instructions

1. Build the static content:
  ```
  yarn build
  ```

This command generates static content into the `build` directory and can be served using any static content hosting service.

<!-- ☝️ Replace with a numbered list of your build instructions, including expected results / outputs with optional screenshots ☝️ -->

### Deployment

The project is configured to automatically build and deploy using GitHub Actions. The workflow files located within the `.github/workflows` directory are set up to trigger builds whenever commits are pushed to the `main` branch. Additionally, pull requests will be automatically built for testing purposes.

To ensure your site is properly deployed:

1. Ensure that GitHub Pages is enabled for your repository. You can enable it by going to the repository settings on GitHub and selecting the branch you want to use for GitHub Pages, typically `gh-pages` or `main`.
   
2. If you prefer manual deployment or are not using GitHub Actions, you can still deploy manually:

   - Deploy using SSH:
     ```
     USE_SSH=true yarn deploy
     ```

   - Deploy without SSH:
     ```
     GIT_USER=<Your GitHub username> yarn deploy
     ```

3. For more detailed information on deploying with GitHub Actions, please refer to the [Docusaurus documentation](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions).

By following these steps, your site will be automatically built and deployed when changes are made to the `main` branch or when pull requests are created. Manual deployment commands are also available if needed.

## Changelog

See our [CHANGELOG.md](CHANGELOG.md) for a history of our changes.

See our [releases page]([INSERT LINK TO YOUR RELEASES PAGE]) for our key versioned releases.

<!-- ☝️ Replace with links to your changelog and releases page ☝️ -->

## Frequently Asked Questions (FAQ)

[INSERT LINK TO FAQ PAGE OR PROVIDE FAQ INLINE HERE]
<!-- example link to FAQ PAGE>
Questions about our project? Please see our: [FAQ]([INSERT LINK TO FAQ / DISCUSSION BOARD])
-->

<!-- example FAQ inline format>
1. Question 1
- Answer to question 1
2. Question 2
- Answer to question 2
-->

<!-- example FAQ inline with no questions yet>
No questions yet. Propose a question to be added here by reaching out to our contributors! See support section below.
-->

<!-- ☝️ Replace with a list of frequently asked questions from your project, or post a link to your FAQ on a discussion board ☝️ -->

## Contributing

[INSERT LINK TO CONTRIBUTING GUIDE OR FILL INLINE HERE]
<!-- example link to CONTRIBUTING.md>
Interested in contributing to our project? Please see our: [CONTRIBUTING.md](CONTRIBUTING.md)
-->

<!-- example inline contributing guide>
1. Create an GitHub issue ticket describing what changes you need (e.g. issue-1)
2. [Fork](INSERT LINK TO YOUR REPO FORK PAGE HERE, e.g. https://github.com/my_org/my_repo/fork) this repo
3. Make your modifications in your own fork
4. Make a pull-request in this repo with the code in your fork and tag the repo owner / largest contributor as a reviewer

**Working on your first pull request?** See guide: [How to Contribute to an Open Source [INSERT PROJECT NAME] on GitHub](https://kcd.im/pull-request)
-->

[INSERT LINK TO YOUR CODE_OF_CONDUCT.md OR SHARE TEXT HERE]
<!-- example link to CODE_OF_CONDUCT.md>
For guidance on how to interact with our team, please see our code of conduct located at: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
-->

<!-- ☝️ Replace with a text describing how people may contribute to your project, or link to your contribution guide directly ☝️ -->

[INSERT LINK TO YOUR GOVERNANCE.md OR SHARE TEXT HERE]
<!-- example link to GOVERNANCE.md>
For guidance on our governance approach, including decision-making process and our various roles, please see our governance model at: [GOVERNANCE.md](GOVERNANCE.md)
-->

## License

See our: [LICENSE](LICENSE)
<!-- ☝️ Replace with the text of your copyright and license, or directly link to your license file ☝️ -->

## Support

[INSERT CONTACT INFORMATION OR PROFILE LINKS TO MAINTAINERS AMONG COMMITTER LIST]

<!-- example list of contacts>
Key points of contact are: [@github-user-1](link to github profile) [@github-user-2](link to github profile)
-->

<!-- ☝️ Replace with the key individuals who should be contacted for questions ☝️ -->


