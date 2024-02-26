# simple-twitch-chatbot Setup Guide

This guide outlines the steps to set up a Twitch chatbot using Node.js and the tmi.js library, aimed at developers with basic JavaScript and command-line knowledge.

The documentation for this configuration is detailed in [Twitch Chat Bot Getting Started](https://dev.twitch.tv/docs/irc/get-started/) reference.

## Prerequisites

- **Node.js**: Required to run the chatbot. Download and install from [Node.js official website](https://nodejs.org/).
- **tmi.js**: A Twitch Messaging Interface library for chat interaction, installed via npm.

## Setup Instructions

### 1. Create a Project Directory

Open a terminal and create a new directory for your project, then navigate into it. Or, clone this repo, and start there.


### 2. Initialize Node Project

Initialize a new Node.js project within your directory:

This creates a `package.json` file in your project directory.

`npm init -y`

### 3. Install tmi.js

Install the tmi.js package using npm:

`npm install tmi.js`

### 4. Register your Application

Follow the Twitch provided guide for [Registering your App](https://dev.twitch.tv/docs/authentication/register-app/)

You will need your Twitch application's Client ID and Secret to move forward.

### 5. Generate your OAUTH Token

It is recommended you leverage the [Twitch CLI](https://dev.twitch.tv/docs/cli/) for generating your OAUTH token.

After installing the Twitch CLI, the following command reference will help you generate your token:

`twitch token --client-id $my_client_id -s "chat:read chat:edit" -u`

### 6. Run your bot

After updating the "chatbot.js" code to meet your needs, including adding the token generated in the last step, use the following to run your bot:

`node chatbot.js`
