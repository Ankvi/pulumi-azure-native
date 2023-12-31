import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a devcenter.
 */
export function getDevCenter(args: GetDevCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetDevCenterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20230801preview:getDevCenter", {
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevCenterArgs {
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
 * Represents a devcenter resource.
 */
export interface GetDevCenterResult {
    /**
     * The URI of the Dev Center.
     */
    readonly devCenterUri: string;
    /**
     * Encryption settings to be used for server-side encryption for proprietary content (such as catalogs, logs, customizations).
     */
    readonly encryption?: types.outputs.EncryptionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed identity properties
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
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
}
/**
 * Gets a devcenter.
 */
export function getDevCenterOutput(args: GetDevCenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevCenterResult> {
    return pulumi.output(args).apply((a: any) => getDevCenter(a, opts))
}

export interface GetDevCenterOutputArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
