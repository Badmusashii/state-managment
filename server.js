const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importer CORS
const app = express();
const port = 3000;

// Configuration CORS pour autoriser les requêtes venant de http://localhost:4200
app.use(cors({ origin: "http://localhost:4200" }));

// Simuler des utilisateurs dans une base de données JSON

const users = [
  {
    id: 1,
    cp: "0285489P",
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    external: false,
  },
  {
    id: 2,
    cp: "7029890L",
    firstname: "Alice",
    lastname: "Smith",
    email: "alice.smith@example.com",
    external: false,
  },
  {
    id: 3,
    cp: "6881880E",
    firstname: "Bob",
    lastname: "Johnson",
    email: "bob.johnson@example.com",
    external: false,
  },
  {
    id: 4,
    cp: "8103509M",
    firstname: "Bayram",
    lastname: "Moi",
    email: "bob.jon@example.com",
    external: false,
  },
  {
    id: 5,
    cp: "ABCD12345",
    firstname: "Emma",
    lastname: "Watson",
    email: "emma.watson@example.com",
    external: true,
  },
  {
    id: 6,
    cp: "EFGH67890",
    firstname: "Michael",
    lastname: "Jordan",
    email: "michael.jordan@example.com",
    external: true,
  },
  {
    id: 7,
    cp: "IJKL11223",
    firstname: "Sarah",
    lastname: "Connor",
    email: "sarah.connor@example.com",
    external: true,
  },
  {
    id: 8,
    cp: "MNOP44567",
    firstname: "Bruce",
    lastname: "Wayne",
    email: "bruce.wayne@example.com",
    external: true,
  },
  {
    id: 9,
    cp: "QRST99887",
    firstname: "Diana",
    lastname: "Prince",
    email: "diana.prince@example.com",
    external: true,
  },
  {
    id: 10,
    cp: "1234567A",
    firstname: "Clark",
    lastname: "Kent",
    email: "clark.kent@example.com",
    external: false,
  },
  {
    id: 11,
    cp: "7654321B",
    firstname: "Peter",
    lastname: "Parker",
    email: "peter.parker@example.com",
    external: false,
  },
  {
    id: 12,
    cp: "WXYZ54321",
    firstname: "Tony",
    lastname: "Stark",
    email: "tony.stark@example.com",
    external: true,
  },
  {
    id: 13,
    cp: "2468101C",
    firstname: "Natasha",
    lastname: "Romanoff",
    email: "natasha.romanoff@example.com",
    external: false,
  },
  {
    id: 14,
    cp: "1357924D",
    firstname: "Steve",
    lastname: "Rogers",
    email: "steve.rogers@example.com",
    external: false,
  },
  {
    id: 15,
    cp: "QRST12345",
    firstname: "Wanda",
    lastname: "Maximoff",
    email: "wanda.maximoff@example.com",
    external: true,
  },
  {
    id: 16,
    cp: "5792468E",
    firstname: "Bruce",
    lastname: "Banner",
    email: "bruce.banner@example.com",
    external: false,
  },
  {
    id: 17,
    cp: "1123581F",
    firstname: "Stephen",
    lastname: "Strange",
    email: "stephen.strange@example.com",
    external: false,
  },
  {
    id: 18,
    cp: "UVWX67890",
    firstname: "T'Challa",
    lastname: "Panther",
    email: "tchalla.panther@example.com",
    external: true,
  },
  {
    id: 19,
    cp: "3141592G",
    firstname: "Scott",
    lastname: "Lang",
    email: "scott.lang@example.com",
    external: false,
  },
  {
    id: 20,
    cp: "GHIJ23456",
    firstname: "Carol",
    lastname: "Danvers",
    email: "carol.danvers@example.com",
    external: true,
  },
];

app.use(bodyParser.json());

app.post("/users/search", (req, res) => {
  const { cp } = req.body;

  if (!cp) {
    return res.status(400).json({ error: "Le champ 'cp' est requis" });
  }

  const user = users.find((user) => user.cp === cp);

  if (user) {
    res.json(user); // Renvoie l'utilisateur trouvé
  } else {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
});

app.listen(port, () => {
  console.log(`Serveur Express démarré sur http://localhost:${port}`);
});
