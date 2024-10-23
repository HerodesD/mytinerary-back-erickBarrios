import mongoose from "mongoose";

let url = process.env.URI_MONGO



console.log(url)


async function connectionToTheDataBase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("connected to the database")
    } catch (error) {
        console.log(error);

    }
}

connectionToTheDataBase()
