import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a HypervHost
 * Azure REST API version: 2023-06-06.
 */
export function getHypervHostController(args: GetHypervHostControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetHypervHostControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getHypervHostController", {
        "hostName": args.hostName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetHypervHostControllerArgs {
    /**
     *  Host name
     */
    hostName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
}

/**
 * A host resource belonging to a site resource.
 */
export interface GetHypervHostControllerResult {
    /**
     * Gets the timestamp marking Hyper-V host creation.
     */
    readonly createdTimestamp: string;
    /**
     * Gets the errors.
     */
    readonly errors: types.outputs.HealthErrorDetailsResponse[];
    /**
     * Gets or sets the FQDN/IPAddress of the Hyper-V host.
     */
    readonly fqdn?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the run as account ID of the Hyper-V host.
     */
    readonly runAsAccountId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Gets the timestamp marking last updated on the Hyper-V host.
     */
    readonly updatedTimestamp: string;
    /**
     * Gets the version of the Hyper-V host.
     */
    readonly version: string;
}
/**
 * Get a HypervHost
 * Azure REST API version: 2023-06-06.
 */
export function getHypervHostControllerOutput(args: GetHypervHostControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHypervHostControllerResult> {
    return pulumi.output(args).apply((a: any) => getHypervHostController(a, opts))
}

export interface GetHypervHostControllerOutputArgs {
    /**
     *  Host name
     */
    hostName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}
