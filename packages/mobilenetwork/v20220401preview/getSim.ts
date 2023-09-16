import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets information about the specified SIM.
 */
export function getSim(args: GetSimArgs, opts?: pulumi.InvokeOptions): Promise<GetSimResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20220401preview:getSim", {
        "resourceGroupName": args.resourceGroupName,
        "simGroupName": args.simGroupName,
        "simName": args.simName,
    }, opts);
}

export interface GetSimArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SIM Group.
     */
    simGroupName: string;
    /**
     * The name of the SIM.
     */
    simName: string;
}

/**
 * SIM resource.
 */
export interface GetSimResult {
    /**
     * The timestamp of resource creation (UTC).
     */
    readonly createdAt?: string;
    /**
     * The identity that created the resource.
     */
    readonly createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    readonly createdByType?: string;
    /**
     * An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value.
     */
    readonly deviceType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The integrated circuit card ID (ICCID) for the SIM.
     */
    readonly integratedCircuitCardIdentifier?: string;
    /**
     * The international mobile subscriber identity (IMSI) for the SIM.
     */
    readonly internationalMobileSubscriberIdentity: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    readonly lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    readonly lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    readonly lastModifiedByType?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the SIM resource.
     */
    readonly provisioningState: string;
    /**
     * The SIM policy used by this SIM.
     */
    readonly simPolicy?: types.outputs.mobilenetwork.v20220401preview.SimPolicyResourceIdResponse;
    /**
     * The state of the SIM resource.
     */
    readonly simState: string;
    /**
     * A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
     */
    readonly staticIpConfiguration?: types.outputs.mobilenetwork.v20220401preview.SimStaticIpPropertiesResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.mobilenetwork.v20220401preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified SIM.
 */
export function getSimOutput(args: GetSimOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSimResult> {
    return pulumi.output(args).apply((a: any) => getSim(a, opts))
}

export interface GetSimOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SIM Group.
     */
    simGroupName: pulumi.Input<string>;
    /**
     * The name of the SIM.
     */
    simName: pulumi.Input<string>;
}
