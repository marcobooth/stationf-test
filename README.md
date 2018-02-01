# StationF Jobs - created for an interview with CreditMint

This is a demo web application created for an interview with CreditMint.

The purpose of the site is to let companies working from the StationF campus in Paris to post links to their current job openings and to allow job-hunters to find any jobs that are available there.

The site will eventually allow job-hunters to get notified when certain types of jobs are posted or when companies they "follow" post jobs

## Getting Started

This repository actually consists of two applications: a server and a client. The client application can be found in the `/client` directory. The run script (see below) actually starts two servers - one for the backend and one for the fronted. In production, only one server will be used to serve both applications. For development, it's much faster to use two to avoid having to constantly build the client.

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

## Deployment

...

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - Data Store for the frontend
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
