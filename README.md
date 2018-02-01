# StationF Jobs - created for an interview with CreditMint

StationF is a startup campus in Paris that houses around 1000 companies. The purpose of the site is to let companies working from the campus to post links to their current job openings and to allow job-hunters to find any jobs that are available there.

## Getting Started

This repository actually consists of two applications: a server and a client. The client application can be found in the /client directory. The script that starts the server actually runs two scripts - one for the server and one for the client. In production, only one server will be used to serve both applications. For development, it's much faster to use two although this can seem slightly over the top.

### Prerequisites

```
Node (~8.9.3)
NPM (~5.5.1)
```

### Installing

The scripts folder has everything you need to get up and running

Step 1:

```
./scripts/install.sh
```

Step 2:

```
./scripts/run_server.sh
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

...

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - Data Store for the frontend
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
