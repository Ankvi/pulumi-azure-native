import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of RP resources which supports pagination.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-04-01, 2024-05-15-preview.
 */
export function listGitLabGroupAvailable(args: ListGitLabGroupAvailableArgs, opts?: pulumi.InvokeOptions): Promise<ListGitLabGroupAvailableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:listGitLabGroupAvailable", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface ListGitLabGroupAvailableArgs {
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
export interface ListGitLabGroupAvailableResult {
    /**
     * Gets or sets next link to scroll over the results.
     */
    readonly nextLink?: string;
    /**
     * Gets or sets list of resources.
     */
    readonly value?: types.outputs.GitLabGroupResponse[];
}
/**
 * List of RP resources which supports pagination.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-04-01, 2024-05-15-preview.
 */
export function listGitLabGroupAvailableOutput(args: ListGitLabGroupAvailableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGitLabGroupAvailableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:listGitLabGroupAvailable", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface ListGitLabGroupAvailableOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}