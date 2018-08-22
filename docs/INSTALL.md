# Installing

Install angular-cli
```
npm i -g @angular/cli
```

### Obtaining sources
```
git clone https://github.com/metrostarsystem/usda-dva.git
cd usda-dva
```

### Local development

##### Server
```
cd server
npm i
npm run start:live
```

##### Client
```
cd client
npm i
ng serve
```

### Generate build

```
.\build.bat
cd build
npm i --only=production
set "NODE_ENV=production" & npm start
```