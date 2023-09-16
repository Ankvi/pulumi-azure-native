import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get bare metal machine key set of the provided cluster.
 */
export function getBareMetalMachineKeySet(args: GetBareMetalMachineKeySetArgs, opts?: pulumi.InvokeOptions): Promise<GetBareMetalMachineKeySetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud/v20230701:getBareMetalMachineKeySet", {
        "bareMetalMachineKeySetName": args.bareMetalMachineKeySetName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBareMetalMachineKeySetArgs {
    /**
     * The name of the bare metal machine key set.
     */
    bareMetalMachineKeySetName: string;
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetBareMetalMachineKeySetResult {
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
     * The date and time after which the users in this key set will be removed from the bare metal machines.
     */
    readonly expiration: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.networkcloud.v20230701.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The list of IP addresses of jump hosts with management network access from which a login will be allowed for the users.
     */
    readonly jumpHostsAllowed: string[];
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
     * The name of the group that users will be assigned to on the operating system of the machines.
     */
    readonly osGroupName?: string;
    /**
     * The access level allowed for the users in this key set.
     */
    readonly privilegeLevel: string;
    /**
     * The provisioning state of the bare metal machine key set.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.networkcloud.v20230701.SystemDataResponse;
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
    readonly userList: types.outputs.networkcloud.v20230701.KeySetUserResponse[];
    /**
     * The status evaluation of each user.
     */
    readonly userListStatus: types.outputs.networkcloud.v20230701.KeySetUserStatusResponse[];
}
/**
 * Get bare metal machine key set of the provided cluster.
 */
export function getBareMetalMachineKeySetOutput(args: GetBareMetalMachineKeySetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBareMetalMachineKeySetResult> {
    return pulumi.output(args).apply((a: any) => getBareMetalMachineKeySet(a, opts))
}

export interface GetBareMetalMachineKeySetOutputArgs {
    /**
     * The name of the bare metal machine key set.
     */
    bareMetalMachineKeySetName: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
