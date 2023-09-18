import { getPackageFolderNames } from "./packages";

const packageFolderNames = await getPackageFolderNames();

type GitHubMatrix = {
    name: string[];
}

const gitHubMatrix: GitHubMatrix = {
    name: packageFolderNames
};

console.log(JSON.stringify(gitHubMatrix));
