    /**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response            ) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/logar", function (req, res) {
    let usuario = req.body.usuario;
    let senha = req.body.senha;
    let usuarios = [["daniel", "123"], ["maria", "234"], ["felipe", "345"]];

    for (let x=0; x<usuarios.length; x++) {
        if (usuarios[x][0] == usuario) {
            if (usuarios[x][1] == senha) {
                res.end("Seja bem-vindo "+ usuario);
            } else {
                res.end("Senha incorreta!");
            }
        }
    }
    res.end("Usuário não existe!");
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.app = functions.https.onRequest(app);       
