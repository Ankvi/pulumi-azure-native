import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns the properties of a lab resource.
 */
export function getLab(args: GetLabArgs, opts?: pulumi.InvokeOptions): Promise<GetLabResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices/v20220801:getLab", {
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabArgs {
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The lab resource.
 */
export interface GetLabResult {
    /**
     * The resource auto shutdown configuration for the lab. This controls whether actions are taken on resources that are sitting idle.
     */
    readonly autoShutdownProfile: types.outputs.labservices.v20220801.AutoShutdownProfileResponse;
    /**
     * The connection profile for the lab. This controls settings such as web access to lab resources or whether RDP or SSH ports are open.
     */
    readonly connectionProfile: types.outputs.labservices.v20220801.ConnectionProfileResponse;
    /**
     * The description of the lab.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The ID of the lab plan. Used during resource creation to provide defaults and acts as a permission container when creating a lab via labs.azure.com. Setting a labPlanId on an existing lab provides organization..
     */
    readonly labPlanId?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The network profile for the lab, typically applied via a lab plan. This profile cannot be modified once a lab has been created.
     */
    readonly networkProfile?: types.outputs.labservices.v20220801.LabNetworkProfileResponse;
    /**
     * Current provisioning state of the lab.
     */
    readonly provisioningState: string;
    /**
     * The lab user list management profile.
     */
    readonly rosterProfile?: types.outputs.labservices.v20220801.RosterProfileResponse;
    /**
     * The lab security profile.
     */
    readonly securityProfile: types.outputs.labservices.v20220801.SecurityProfileResponse;
    /**
     * The lab state.
     */
    readonly state: string;
    /**
     * Metadata pertaining to creation and last modification of the lab.
     */
    readonly systemData: types.outputs.labservices.v20220801.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The title of the lab.
     */
    readonly title?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The profile used for creating lab virtual machines.
     */
    readonly virtualMachineProfile: types.outputs.labservices.v20220801.VirtualMachineProfileResponse;
}
/**
 * Returns the properties of a lab resource.
 */
export function getLabOutput(args: GetLabOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabResult> {
    return pulumi.output(args).apply((a: any) => getLab(a, opts))
}

export interface GetLabOutputArgs {
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
