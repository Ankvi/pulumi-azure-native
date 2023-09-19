import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of RP resources which supports pagination.
 */
export function listAzureDevOpsOrgAvailable(args: ListAzureDevOpsOrgAvailableArgs, opts?: pulumi.InvokeOptions): Promise<ListAzureDevOpsOrgAvailableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20230901preview:listAzureDevOpsOrgAvailable", {
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
 */
export function listAzureDevOpsOrgAvailableOutput(args: ListAzureDevOpsOrgAvailableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAzureDevOpsOrgAvailableResult> {
    return pulumi.output(args).apply((a: any) => listAzureDevOpsOrgAvailable(a, opts))
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
