import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get GitHub Access Token.
 */
export function getFactoryGitHubAccessToken(args: GetFactoryGitHubAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetFactoryGitHubAccessTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getFactoryGitHubAccessToken", {
        "factoryName": args.factoryName,
        "gitHubAccessCode": args.gitHubAccessCode,
        "gitHubAccessTokenBaseUrl": args.gitHubAccessTokenBaseUrl,
        "gitHubClientId": args.gitHubClientId,
        "gitHubClientSecret": args.gitHubClientSecret,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFactoryGitHubAccessTokenArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * GitHub access code.
     */
    gitHubAccessCode: string;
    /**
     * GitHub access token base URL.
     */
    gitHubAccessTokenBaseUrl: string;
    /**
     * GitHub application client ID.
     */
    gitHubClientId?: string;
    /**
     * GitHub bring your own app client secret information.
     */
    gitHubClientSecret?: types.inputs.datafactory.v20180601.GitHubClientSecret;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Get GitHub access token response definition.
 */
export interface GetFactoryGitHubAccessTokenResult {
    /**
     * GitHub access token.
     */
    readonly gitHubAccessToken?: string;
}
/**
 * Get GitHub Access Token.
 */
export function getFactoryGitHubAccessTokenOutput(args: GetFactoryGitHubAccessTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFactoryGitHubAccessTokenResult> {
    return pulumi.output(args).apply((a: any) => getFactoryGitHubAccessToken(a, opts))
}

export interface GetFactoryGitHubAccessTokenOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * GitHub access code.
     */
    gitHubAccessCode: pulumi.Input<string>;
    /**
     * GitHub access token base URL.
     */
    gitHubAccessTokenBaseUrl: pulumi.Input<string>;
    /**
     * GitHub application client ID.
     */
    gitHubClientId?: pulumi.Input<string>;
    /**
     * GitHub bring your own app client secret information.
     */
    gitHubClientSecret?: pulumi.Input<types.inputs.datafactory.v20180601.GitHubClientSecretArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
