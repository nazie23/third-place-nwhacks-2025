# Third Place: Because sometimes, you just need to touch grass  -  made for nwHacks 2025

## Pitch
Find your home-away-from-home through third spaces such as cafes, gyms and bookstores. Build a community and cultivate bonds by discovering local gems, social events and earning rewards in style!

## Inspiration
As people who love coffee, we enjoy making a day of picking up a book at a bookstore, followed by visiting a cafe to sit and read accompanied by a cappuccino. However, we're also frugal students on a budget, which means this is something we can't do often.

## What it does
Our website, Third Place, offers a wide selection of local coffee shops for users to visit, where they're able to add cafes they've visited to their "activity passport", which functions like a digital scrapbook. When a user visits a cafe for the first time and scans their loyalty card found on their activity passport, they receive a one-time welcome discount. On each user's account, they are able to see which cafes they have visited and what coupons are available; for example, a user who has visited a cafe 4 times will have a 15% discount on their 5th visit. Users are also able to check out the website's forum, and view posts by other users about cafes they are yet to visit or have already been to. Our website aims to build a sense of community and belonging, especially in largely-populated cities where people may find it difficult to create genuine connections. We want our website to commit to fostering a vibrant community through helping local businesses!

## How we built it
We used GitHub to facilitate version control and collaboration on our project. Our code comprises of JavaScript (Node.js, React.js), CSS and HTML. We used ChatGPT and GitHub Copilot to generate code and debug errors.

## Challenges we ran into
- The biggest challenge we faced was deciding how to store information about our cafes, users and forum posts. We intended to use MongoDB when we began our project but experienced issues when attempting to link it to our frontend. We instead decided to use .csv files to store data for our prototype.
- We were unsure about how to design an engaging and intuitive user experience for our activity passport to ensure that our website was bringing something new to the table. After we had created our design together, implementing it was a challenge due to issues with our CSS code, such as the user loyalty card's QR code not appearing on our frontend.

## Accomplishments that we're proud of
- We were able to create a functioning prototype!
- We believe that this app will create a sense of belonging, especially for newcomers to cities who may find it difficult to integrate themselves into a new society
- We are pleased that we were able to collaborate with no tension between team members, which we believe contributed to our prototype's success

## What we learned
- Dealing with severe merge conflicts and how to troubleshoot them
- How to use React.js and Node.js to create a satisfying and appealing UI
- We needed to learn how to choose what our core features were and implement those in our prototype rather than focusing on minute details which wouldn't accurately depict the big picture of our idea

## What's next for Third Place: Because sometimes, you just need to touch grass
- So far we have only added data about local coffee shops, but we want to add bookstores, gyms, parks, museums, etc.
- Allow users to add places to their passport as 'Want to Go' or 'Visited'
- Implement a social system where users can friend other users on the website
- Implement a feature where users can visit places with their friends and check-in with them on the website to gain additional loyalty points using technology similar to AirDrop
- Move our website to an app eventually!


## Setup

- npm install
- npm install react-router-dom
- npm install express mongoose cors dotenv
- npm install axios
- npm install papaparse


## Running project

- npm run dev
