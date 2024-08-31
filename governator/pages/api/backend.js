// this file will be used to create the backend of the project

export default function handler(req, res) {
    res.status(200).json({ name: "John Doe" });
}