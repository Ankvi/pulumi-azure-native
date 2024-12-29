import { Octokit } from "@octokit/rest";
import { $ } from "bun";
import type { PackageJson } from "./modules/templates/types";

let octokitClient: Octokit | undefined;

async function getOctokitClient(): Promise<Octokit> {
    if (octokitClient) {
        return octokitClient;
    }

    const githubAuth = await $`gh auth token`.quiet().text();

    octokitClient = new Octokit({
        auth: githubAuth.trim(),
    });

    return octokitClient;
}

type Release = Awaited<ReturnType<Octokit["rest"]["repos"]["getLatestRelease"]>>["data"];

let latestRelease: Promise<Release> | null = null;

export async function getLatestRelease() {
    if (latestRelease) {
        return latestRelease;
    }

    console.log("Getting latest release of '@pulumi/pulumi-azure-native'");

    const octokit = await getOctokitClient();

    latestRelease = octokit.rest.repos
        .getLatestRelease({
            owner: "pulumi",
            repo: "pulumi-azure-native",
            per_page: 1,
        })
        .then((response) => response.data);

    return latestRelease;
}

export async function getLatestReleaseChangelog() {
    const latestRelease = await getLatestRelease();
    return latestRelease.body;
}

export async function getLatestBuildVersion(): Promise<string> {
    const response = await fetch(
        "https://raw.githubusercontent.com/Ankvi/pulumi-azure-native/main/packages/aad/package.json",
    );
    const pkg = (await response.json()) as PackageJson;
    return pkg.version;
}
