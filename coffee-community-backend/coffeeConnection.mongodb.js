/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('CoffeeConnectionsDB');

// Insert a few documents into the sales collection.
db.getCollection('coffeeShops').insertMany([
  { 'name': 'Mukasi Coffee Roasters', 'address': '417 Front Street Mews', 'location': 'New Westminster, British Columbia', 'rating': 4.6 },
  { 'name': 'Blenz Coffee', 'address': 'Main & East 26th St, 4198 Main St', 'location': 'Vancouver, British Columbia', 'rating': 4.2 },
  { 'name': 'Tru Cafe', 'address': '1500 W 2nd Ave', 'location': 'Vancouver, British Columbia', 'rating': 4.7 },
  { 'name': 'Moja Coffee', 'address': '1412 Rupert St', 'location': 'Vancouver, British Columbia', 'rating': 4.7 },
  { 'name': 'Bean Around the World', 'address': '175 W Hastings St', 'location': 'Vancouver, British Columbia', 'rating': 3.9 },
  { 'name': 'Trees Organic Coffee Joyce-Collingwood', 'address': '5078 Joyce St', 'location': 'Vancouver, British Columbia', 'rating': 4.1 },
  { 'name': 'Everbean Cafe', 'address': '15331 16 Ave #106', 'location': 'Surrey, British Columbia', 'rating': 4.7 },
  { 'name': 'Ethical Bean Coffee', 'address': '1315 Kootenay St', 'location': 'Vancouver, British Columbia', 'rating': 4.3 },
  { 'name': 'Caffè Cittadella', 'address': '2310 Ash St', 'location': 'Vancouver, British Columbia', 'rating': 4.1 },
]);
