import { getPackageNames } from "./packages";

const packageNames = await getPackageNames();

type GitHubMatrix = {
    name: string[];
}

const gitHubMatrix: GitHubMatrix = {
    name: packageNames.sort()
};

console.log(JSON.stringify(gitHubMatrix));
