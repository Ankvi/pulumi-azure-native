import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an attached NetworkConnection.
 */
export function getAttachedNetworkByDevCenter(args: GetAttachedNetworkByDevCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetAttachedNetworkByDevCenterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20231001preview:getAttachedNetworkByDevCenter", {
        "attachedNetworkConnectionName": args.attachedNetworkConnectionName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttachedNetworkByDevCenterArgs {
    /**
     * The name of the attached NetworkConnection.
     */
    attachedNetworkConnectionName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents an attached NetworkConnection.
 */
export interface GetAttachedNetworkByDevCenterResult {
    /**
     * AAD Join type of the network. This is populated based on the referenced Network Connection.
     */
    readonly domainJoinType: string;
    /**
     * Health check status values
     */
    readonly healthCheckStatus: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource ID of the NetworkConnection you want to attach.
     */
    readonly networkConnectionId: string;
    /**
     * The geo-location where the NetworkConnection resource specified in 'networkConnectionResourceId' property lives.
     */
    readonly networkConnectionLocation: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an attached NetworkConnection.
 */
export function getAttachedNetworkByDevCenterOutput(args: GetAttachedNetworkByDevCenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAttachedNetworkByDevCenterResult> {
    return pulumi.output(args).apply((a: any) => getAttachedNetworkByDevCenter(a, opts))
}

export interface GetAttachedNetworkByDevCenterOutputArgs {
    /**
     * The name of the attached NetworkConnection.
     */
    attachedNetworkConnectionName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
