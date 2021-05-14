This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## demo
visit https://next-country-finder.vercel.app for demo.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5500](http://localhost:5500) with your browser to see the result.

## User Interface
A user can type or select from a list of countries

A population info card will appear when user types (and submit) or selects a country from list

The population info card can be collapsed ( for space constraints in mobile devices)

## map box key
Use your own mapbox api key if you want to run in dev mode.
create next.config.js in root directory and export key like below:
```
module.exports = {
    env: {
      mapBoxKey: 'YOUR API KEY',
    },
  }
```
start dev server again

## license
MIT open source
