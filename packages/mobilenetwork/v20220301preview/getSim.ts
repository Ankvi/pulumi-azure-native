import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets information about the specified sim.
 */
export function getSim(args: GetSimArgs, opts?: pulumi.InvokeOptions): Promise<GetSimResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20220301preview:getSim", {
        "resourceGroupName": args.resourceGroupName,
        "simName": args.simName,
    }, opts);
}

export interface GetSimArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SIM.
     */
    simName: string;
}

/**
 * Sim resource.
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
     * An optional free-form text field that can be used to record the device type this sim is associated with, for example 'Video camera'. The Azure portal allows Sims to be grouped and filtered based on this value.
     */
    readonly deviceType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Integrated Circuit Card ID (ICC Id) for the sim.
     */
    readonly integratedCircuitCardIdentifier?: string;
    /**
     * The International Mobile Subscriber Identity (IMSI) for the sim.
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
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Mobile network that this sim belongs to
     */
    readonly mobileNetwork?: types.outputs.mobilenetwork.v20220301preview.MobileNetworkResourceIdResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the sim resource.
     */
    readonly provisioningState: string;
    /**
     * The simPolicy used by this sim.
     */
    readonly simPolicy?: types.outputs.mobilenetwork.v20220301preview.SimPolicyResourceIdResponse;
    /**
     * The state of the sim resource.
     */
    readonly simState: string;
    /**
     * A list of static IP addresses assigned to this sim. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
     */
    readonly staticIpConfiguration?: types.outputs.mobilenetwork.v20220301preview.SimStaticIpPropertiesResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.mobilenetwork.v20220301preview.SystemDataResponse;
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
 * Gets information about the specified sim.
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
     * The name of the SIM.
     */
    simName: pulumi.Input<string>;
}
