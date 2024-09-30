import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a NetworkFunctionResource
 * Azure REST API version: 2023-05-15-preview.
 */
export function getNetworkFunction(args: GetNetworkFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFunctionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilepacketcore:getNetworkFunction", {
        "networkFunctionName": args.networkFunctionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFunctionArgs {
    /**
     * The name of the network function
     */
    networkFunctionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AO5GC Network Function Resource
 */
export interface GetNetworkFunctionResult {
    /**
     * Capacity of the network function in units of 10000.  This represents the session count or the Simultaneously Attached Users (SAU) count as applicable
     */
    readonly capacity?: number;
    /**
     * User provided deployment notes.  This is used to optionally provide details about the NF deployment
     */
    readonly deploymentNotes?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Count of infrastructure elements used by this network function (vCPUs, in units of 8)
     */
    readonly infrastructureElementCount: number;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Administrative state of the network function
     */
    readonly networkFunctionAdministrativeState: string;
    /**
     * Operational state of the network function
     */
    readonly networkFunctionOperationalStatus: string;
    /**
     * Type of network function
     */
    readonly networkFunctionType: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Provisioned SKU Value.
     */
    readonly sku: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * User provided description
     */
    readonly userDescription?: string;
}
/**
 * Get a NetworkFunctionResource
 * Azure REST API version: 2023-05-15-preview.
 */
export function getNetworkFunctionOutput(args: GetNetworkFunctionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFunctionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilepacketcore:getNetworkFunction", {
        "networkFunctionName": args.networkFunctionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFunctionOutputArgs {
    /**
     * The name of the network function
     */
    networkFunctionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}