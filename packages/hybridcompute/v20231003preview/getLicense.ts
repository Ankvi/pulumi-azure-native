import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the view of a license.
 */
export function getLicense(args: GetLicenseArgs, opts?: pulumi.InvokeOptions): Promise<GetLicenseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute/v20231003preview:getLicense", {
        "licenseName": args.licenseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLicenseArgs {
    /**
     * The name of the license.
     */
    licenseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a license in a hybrid machine.
 */
export interface GetLicenseResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Describes the properties of a License.
     */
    readonly licenseDetails?: types.outputs.LicenseDetailsResponse;
    /**
     * The type of the license resource.
     */
    readonly licenseType?: string;
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Describes the tenant id.
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves information about the view of a license.
 */
export function getLicenseOutput(args: GetLicenseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLicenseResult> {
    return pulumi.output(args).apply((a: any) => getLicense(a, opts))
}

export interface GetLicenseOutputArgs {
    /**
     * The name of the license.
     */
    licenseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
