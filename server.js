const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/connectDB");
const programmerController = require("./controllers/programmerController");

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

// Programmer Routes
app.post("/programmer", programmerController.createProgrammer);
app.get("/programmers", programmerController.fetchAllProgrammers);
app.get("/programmer/:id", programmerController.singleProgrammer);
app.patch("/programmer/:id", programmerController.updateProgrammer);
app.delete("/programmer/:id", programmerController.deleteProgrammer);

//Home Route
app.get("/", (req,res) => {
    const response = {
        Success: "Server is Running (Home)",
        Routes: {
            HomeRoute : ["/", "GET"],
            CreateRoute : ["/programmer", "POST"],
            AllProgrammers : ["/programmers", "GET"],
            SingleProgrammer : ["/programmer/:id", "GET"],
            UpdateRoute : ["/programmer/:id", "PATCH"],
            DeleteRoute : ["/programmer/:id", "DELETE"]
        }
    };

    const formattedResponse = JSON.stringify(response, null, 3);
    const htmlResponse = `<pre>${formattedResponse}</pre>`;

    res.send(htmlResponse);
});

app.listen("9000" || process.env.PORT, () => {
    console.log("Server Started");
})