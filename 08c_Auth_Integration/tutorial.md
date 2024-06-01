Register on Auth0

In their web interface

Configure a default Application to...

```
Application Type = Single Page Application
Allowed Callback URLs = http://localhost:3000
Allowed Logout URLs = http://localhost:3000
ALlowed Web Origins = http://localhost:3000
```

Download their quickstart sample project (I chose React) for an application

Still in the web interface navigate to APIs and copy the Identifier for your API.

Open PROJECT/src/auth_config.json and input the identifier in the empty field

Run

```
npm install
npm start
```

Register to the website that opens

# Interesting files to look at for Auth0 implementation

index.js - provider setup
NavBar.js - logic for redirecting to login/register page
ExternalApi.js - logic for using valid login to perform action
Profile.js - logic for pulling information on logged in user
auth_config.json - secret file that configures Auth0 package to use YOUR authentication endpoint
