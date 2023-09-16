import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGitHubOAuthArgs, GetGitHubOAuthResult, GetGitHubOAuthOutputArgs } from "./getGitHubOAuth";
export const getGitHubOAuth: typeof import("./getGitHubOAuth").getGitHubOAuth = null as any;
export const getGitHubOAuthOutput: typeof import("./getGitHubOAuth").getGitHubOAuthOutput = null as any;
utilities.lazyLoad(exports, ["getGitHubOAuth","getGitHubOAuthOutput"], () => require("./getGitHubOAuth"));

