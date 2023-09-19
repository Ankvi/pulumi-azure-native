import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of RP resources which supports pagination.
 */
export function listGitHubOwnerAvailable(args: ListGitHubOwnerAvailableArgs, opts?: pulumi.InvokeOptions): Promise<ListGitHubOwnerAvailableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20230901preview:listGitHubOwnerAvailable", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface ListGitHubOwnerAvailableArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * List of RP resources which supports pagination.
 */
export interface ListGitHubOwnerAvailableResult {
    /**
     * Gets or sets next link to scroll over the results.
     */
    readonly nextLink?: string;
    /**
     * Gets or sets list of resources.
     */
    readonly value?: types.outputs.GitHubOwnerResponse[];
}
/**
 * List of RP resources which supports pagination.
 */
export function listGitHubOwnerAvailableOutput(args: ListGitHubOwnerAvailableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGitHubOwnerAvailableResult> {
    return pulumi.output(args).apply((a: any) => listGitHubOwnerAvailable(a, opts))
}

export interface ListGitHubOwnerAvailableOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}
