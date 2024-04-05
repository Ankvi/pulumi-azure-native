import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation returns properties of a SyncIdentityProvider.
 */
export function getSyncIdentityProvider(args: GetSyncIdentityProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncIdentityProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift/v20230701preview:getSyncIdentityProvider", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSyncIdentityProviderArgs {
    /**
     * The name of the SyncIdentityProvider resource.
     */
    childResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: string;
}

/**
 * SyncIdentityProvider represents a SyncIdentityProvider
 */
export interface GetSyncIdentityProviderResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly resources?: string;
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
 * The operation returns properties of a SyncIdentityProvider.
 */
export function getSyncIdentityProviderOutput(args: GetSyncIdentityProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSyncIdentityProviderResult> {
    return pulumi.output(args).apply((a: any) => getSyncIdentityProvider(a, opts))
}

export interface GetSyncIdentityProviderOutputArgs {
    /**
     * The name of the SyncIdentityProvider resource.
     */
    childResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: pulumi.Input<string>;
}