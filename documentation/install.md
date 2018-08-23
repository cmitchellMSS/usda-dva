# Installing

This solutions is build with Angular 6 and the angular-cli package is required to build it.

Install angular-cli globally
```
npm i -g @angular/cli
```

## Obtaining sources
```
git clone https://github.com/metrostarsystem/usda-dva.git
cd usda-dva
```

## Local development

For local development the client and server should be run seperatly.

### Running the server
```
cd server
npm i
npm run start:live
```

### Running the client
```
cd client
npm i
ng serve
```

## Generate build and run it locally

You can run the solution in its entirety using these steps. 

```
.\build.bat
cd build
npm i --only=production
set "NODE_ENV=local" & npm start
```

Make sure to unset `NODE_ENV` after this
```
set NODE_ENV=
```