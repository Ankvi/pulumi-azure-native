import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified SIM policy.
 */
export function getSimPolicy(args: GetSimPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSimPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20221101:getSimPolicy", {
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
        "simPolicyName": args.simPolicyName,
    }, opts);
}

export interface GetSimPolicyArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SIM policy.
     */
    simPolicyName: string;
}

/**
 * SIM policy resource.
 */
export interface GetSimPolicyResult {
    /**
     * The default slice to use if the UE does not explicitly specify it. This slice must exist in the `sliceConfigurations` map. The slice must be in the same location as the SIM policy.
     */
    readonly defaultSlice: types.outputs.SliceResourceIdResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The provisioning state of the SIM policy resource.
     */
    readonly provisioningState: string;
    /**
     * Interval for the UE periodic registration update procedure, in seconds.
     */
    readonly registrationTimer?: number;
    /**
     * RAT/Frequency Selection Priority Index, defined in 3GPP TS 36.413. This is an optional setting and by default is unspecified.
     */
    readonly rfspIndex?: number;
    /**
     * A dictionary of sites to the provisioning state of this SIM policy on that site.
     */
    readonly siteProvisioningState: {[key: string]: string};
    /**
     * The allowed slices and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
     */
    readonly sliceConfigurations: types.outputs.SliceConfigurationResponse[];
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
     * Aggregate maximum bit rate across all non-GBR QoS flows of all PDU sessions of a given UE. See 3GPP TS23.501 section 5.7.2.6 for a full description of the UE-AMBR.
     */
    readonly ueAmbr: types.outputs.AmbrResponse;
}
/**
 * Gets information about the specified SIM policy.
 */
export function getSimPolicyOutput(args: GetSimPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSimPolicyResult> {
    return pulumi.output(args).apply((a: any) => getSimPolicy(a, opts))
}

export interface GetSimPolicyOutputArgs {
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SIM policy.
     */
    simPolicyName: pulumi.Input<string>;
}