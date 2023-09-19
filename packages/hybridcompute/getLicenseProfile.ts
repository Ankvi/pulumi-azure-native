import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the view of a license profile.
 * Azure REST API version: 2023-06-20-preview.
 */
export function getLicenseProfile(args: GetLicenseProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetLicenseProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getLicenseProfile", {
        "licenseProfileName": args.licenseProfileName,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLicenseProfileArgs {
    /**
     * The name of the license profile.
     */
    licenseProfileName: string;
    /**
     * The name of the hybrid machine.
     */
    machineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a license profile in a hybrid machine.
 */
export interface GetLicenseProfileResult {
    /**
     * The resource id of the license.
     */
    readonly assignedLicense?: string;
    /**
     * The guid id of the license.
     */
    readonly assignedLicenseImmutableId: string;
    /**
     * Indicates the eligibility state of Esu.
     */
    readonly esuEligibility: string;
    /**
     * Indicates whether there is an ESU Key currently active for the machine.
     */
    readonly esuKeyState: string;
    /**
     * The list of ESU keys.
     */
    readonly esuKeys: types.outputs.EsuKeyResponse[];
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
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The type of the Esu servers.
     */
    readonly serverType: string;
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
 * Retrieves information about the view of a license profile.
 * Azure REST API version: 2023-06-20-preview.
 */
export function getLicenseProfileOutput(args: GetLicenseProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLicenseProfileResult> {
    return pulumi.output(args).apply((a: any) => getLicenseProfile(a, opts))
}

export interface GetLicenseProfileOutputArgs {
    /**
     * The name of the license profile.
     */
    licenseProfileName: pulumi.Input<string>;
    /**
     * The name of the hybrid machine.
     */
    machineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
