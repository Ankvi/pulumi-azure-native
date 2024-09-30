import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of RP resources which supports pagination.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-04-01, 2024-05-15-preview.
 */
export function listAzureDevOpsOrgAvailable(args: ListAzureDevOpsOrgAvailableArgs, opts?: pulumi.InvokeOptions): Promise<ListAzureDevOpsOrgAvailableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:listAzureDevOpsOrgAvailable", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface ListAzureDevOpsOrgAvailableArgs {
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
export interface ListAzureDevOpsOrgAvailableResult {
    /**
     * Gets or sets next link to scroll over the results.
     */
    readonly nextLink?: string;
    /**
     * Gets or sets list of resources.
     */
    readonly value?: types.outputs.AzureDevOpsOrgResponse[];
}
/**
 * List of RP resources which supports pagination.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-04-01, 2024-05-15-preview.
 */
export function listAzureDevOpsOrgAvailableOutput(args: ListAzureDevOpsOrgAvailableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAzureDevOpsOrgAvailableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:listAzureDevOpsOrgAvailable", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface ListAzureDevOpsOrgAvailableOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}