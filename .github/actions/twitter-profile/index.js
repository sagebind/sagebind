const core = require("@actions/core");
const Twitter = require("twitter-lite");

async function run() {
    try {
        const client = new Twitter({
            consumer_key: core.getInput("consumer-key"),
            consumer_secret: core.getInput("consumer-secret"),
            access_token_key: core.getInput("access-token-key"),
            access_token_secret: core.getInput("access-token-secret")
        });

        await client.post("account/update_profile", {
            description: fs.readFileSync("bio.md", "utf8")
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
