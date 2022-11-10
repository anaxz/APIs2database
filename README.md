## Intro
Practise repo on docker, connecting apis to databases (using postgres)

## Installation
- Clone or download the repo
- Open terminal and navigate to the repo folder 
- Type `bash _scripts/startDev.sh` to start development
- Type `bash _scripts/stop.sh` to stop
- Type `bash _scripts/teardown.sh` to stop & remove volume

Goto http://localhost:8080/ to see website. 
Goto http://localhost:3000/ for server. 

## Changelogs
### Client
- Add client file examples -> need to change

### API
- Add basic database setup
- Fixed postgres configuration 

### Other
- Added basic docker setup related files
- Changed docker setup layout

## Wins & Challenges

## Bugs
### Client

### API
- database may not be seeding properly after changing docker layout

#### Note to self:
- Connect client index to api but use own one