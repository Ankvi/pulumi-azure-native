import { resolve } from "node:path";
import { config } from "../config";
import { getLatestReleaseChangelog } from "../github";

async function getChangelog() {
    const changelog = await getLatestReleaseChangelog();
    return ["# CHANGELOG", "", changelog].join("\n");
}

export async function writeChangelogToOutput() {
    const changelog = await getChangelog();
    const releaseTag = config.getAzureNativeVersion();
    const outputChangelog = resolve(`${config.getOutputPath()}/../CHANGELOG.md`);
    if (changelog) {
        await Bun.write(outputChangelog, changelog);
    } else {
        const emptyChangeLog = await Bun.file(`${import.meta.dir}/EMPTY_CHANGELOG.md`).text();
        await Bun.write(outputChangelog, emptyChangeLog.replace("{{RELEASE_TAG}}", releaseTag));
    }
}
