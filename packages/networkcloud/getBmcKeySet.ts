import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get baseboard management controller key set of the provided cluster.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview.
 */
export function getBmcKeySet(args: GetBmcKeySetArgs, opts?: pulumi.InvokeOptions): Promise<GetBmcKeySetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getBmcKeySet", {
        "bmcKeySetName": args.bmcKeySetName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBmcKeySetArgs {
    /**
     * The name of the baseboard management controller key set.
     */
    bmcKeySetName: string;
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetBmcKeySetResult {
    /**
     * The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access.
     */
    readonly azureGroupId: string;
    /**
     * The more detailed status of the key set.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The date and time after which the users in this key set will be removed from the baseboard management controllers.
     */
    readonly expiration: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The last time this key set was validated.
     */
    readonly lastValidation: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The access level allowed for the users in this key set.
     */
    readonly privilegeLevel: string;
    /**
     * The provisioning state of the baseboard management controller key set.
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
    /**
     * The unique list of permitted users.
     */
    readonly userList: types.outputs.KeySetUserResponse[];
    /**
     * The status evaluation of each user.
     */
    readonly userListStatus: types.outputs.KeySetUserStatusResponse[];
}
/**
 * Get baseboard management controller key set of the provided cluster.
 * Azure REST API version: 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview.
 */
export function getBmcKeySetOutput(args: GetBmcKeySetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBmcKeySetResult> {
    return pulumi.output(args).apply((a: any) => getBmcKeySet(a, opts))
}

export interface GetBmcKeySetOutputArgs {
    /**
     * The name of the baseboard management controller key set.
     */
    bmcKeySetName: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}