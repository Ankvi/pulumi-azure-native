import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the identity.
 */
export function getUserAssignedIdentity(args: GetUserAssignedIdentityArgs, opts?: pulumi.InvokeOptions): Promise<GetUserAssignedIdentityResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managedidentity/v20230131:getUserAssignedIdentity", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetUserAssignedIdentityArgs {
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the identity resource.
     */
    resourceName: string;
}

/**
 * Describes an identity resource.
 */
export interface GetUserAssignedIdentityResult {
    /**
     * The id of the app associated with the identity. This is a random generated UUID by MSI.
     */
    readonly clientId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The id of the service principal object associated with the created identity.
     */
    readonly principalId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The id of the tenant which the identity belongs to.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the identity.
 */
export function getUserAssignedIdentityOutput(args: GetUserAssignedIdentityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserAssignedIdentityResult> {
    return pulumi.output(args).apply((a: any) => getUserAssignedIdentity(a, opts))
}

export interface GetUserAssignedIdentityOutputArgs {
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the identity resource.
     */
    resourceName: pulumi.Input<string>;
}