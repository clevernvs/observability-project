import "dotenv/config";
import app from "./index";

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
