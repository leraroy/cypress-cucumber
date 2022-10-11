# cypress-cucumber

This repo contains tests written in Cypress with Cucucmber for "telnyx.com" website.

To manage multiple projects customized config files are used so user is able to run any project without making any change in the code

Config files for projects are placed here

https://github.com/leraroy/cypress-cucumber/blob/master/cypress.test.config.js

and

https://github.com/leraroy/cypress-cucumber/blob/master/cypress.config.js

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 10.X )
- Install Visual Studio Code
- Clone and checkout the github project
- Go to the terminal and execute "npm install" command

### How to run the tests on windows
Go to the terminal and run any of the following commands:
 <ol>
   <li>Run the "npm run test" command for run test on the chrome browser</li>  
   <li>Run the "npm run test:firefox" command for run test on the firefox browser</li>  
   <li>Run the "npm run cy:open" command to run test in chrome browser in cypress GUI</li>
  </ol>
   
#### To see reports without installation
Go to this link to see [Allure report](https://leraroy.github.io/cypress-cucumber/)
