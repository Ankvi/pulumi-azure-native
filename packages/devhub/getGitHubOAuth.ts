import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * URL used to authorize the Developer Hub GitHub App
 * Azure REST API version: 2022-10-11-preview.
 *
 * Other available API versions: 2022-04-01-preview, 2023-08-01, 2024-05-01-preview, 2024-08-01-preview.
 */
export function getGitHubOAuth(args: GetGitHubOAuthArgs, opts?: pulumi.InvokeOptions): Promise<GetGitHubOAuthResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devhub:getGitHubOAuth", {
        "location": args.location,
        "redirectUrl": args.redirectUrl,
    }, opts);
}

export interface GetGitHubOAuthArgs {
    /**
     * The name of Azure region.
     */
    location: string;
    /**
     * The URL the client will redirect to on successful authentication. If empty, no redirect will occur.
     */
    redirectUrl?: string;
}

/**
 * URL used to authorize the Developer Hub GitHub App
 */
export interface GetGitHubOAuthResult {
    /**
     * URL for authorizing the Developer Hub GitHub App
     */
    readonly authURL?: string;
    /**
     * OAuth token used to make calls to GitHub
     */
    readonly token?: string;
}
/**
 * URL used to authorize the Developer Hub GitHub App
 * Azure REST API version: 2022-10-11-preview.
 *
 * Other available API versions: 2022-04-01-preview, 2023-08-01, 2024-05-01-preview, 2024-08-01-preview.
 */
export function getGitHubOAuthOutput(args: GetGitHubOAuthOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGitHubOAuthResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devhub:getGitHubOAuth", {
        "location": args.location,
        "redirectUrl": args.redirectUrl,
    }, opts);
}

export interface GetGitHubOAuthOutputArgs {
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The URL the client will redirect to on successful authentication. If empty, no redirect will occur.
     */
    redirectUrl?: pulumi.Input<string>;
}