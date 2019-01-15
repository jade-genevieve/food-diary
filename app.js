var db = new PouchDB('app_database');

console.log("Hello World");
console.log("db");

var doc = {
    "_id": "messages",
    "messages": [
      "This message is a hard-coded test message",
      "This is another hard-coded message.",
      "Hard-coded messages fill up the space."
    ]
  };
  //db.put(doc);

  db.get('messages').then(function (doc) {
    console.log(doc);
  });

  const form = document.querySelector('form');
  form.addEventListener("submit", event => {
      event.preventDefault()
      console.log(event)
      const newMessage = document.querySelector('textarea').value
      console.log(newMessage)
      db.get("messages").then(doc => {
          doc.messages.push(newMessage)
          return db.put(doc)
      }).catch(err => {
          console.log(err)
      })
  })