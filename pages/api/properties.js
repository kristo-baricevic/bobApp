import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const data = await db.collection("sample_photoApp").find({}).limit(20);
    const arrayData = await data.toArray();

    console.log(arrayData);
    res.json(arrayData);
}