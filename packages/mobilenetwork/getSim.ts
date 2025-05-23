import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified SIM.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSim(args: GetSimArgs, opts?: pulumi.InvokeOptions): Promise<GetSimResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:getSim", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value.
     */
    readonly deviceType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the SIM resource.
     */
    readonly provisioningState: string;
    /**
     * The SIM policy used by this SIM. The SIM policy must be in the same location as the SIM.
     */
    readonly simPolicy?: types.outputs.SimPolicyResourceIdResponse;
    /**
     * The state of the SIM resource.
     */
    readonly simState: string;
    /**
     * A dictionary of sites to the provisioning state of this SIM on that site.
     */
    readonly siteProvisioningState: {[key: string]: string};
    /**
     * A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
     */
    readonly staticIpConfiguration?: types.outputs.SimStaticIpPropertiesResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The public key fingerprint of the SIM vendor who provided this SIM, if any.
     */
    readonly vendorKeyFingerprint: string;
    /**
     * The name of the SIM vendor who provided this SIM, if any.
     */
    readonly vendorName: string;
}
/**
 * Gets information about the specified SIM.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSimOutput(args: GetSimOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSimResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:getSim", {
        "resourceGroupName": args.resourceGroupName,
        "simGroupName": args.simGroupName,
        "simName": args.simName,
    }, opts);
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