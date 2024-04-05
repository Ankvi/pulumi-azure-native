import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a HcxEnterpriseSite
 */
export function getHcxEnterpriseSite(args: GetHcxEnterpriseSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetHcxEnterpriseSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getHcxEnterpriseSite", {
        "hcxEnterpriseSiteName": args.hcxEnterpriseSiteName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHcxEnterpriseSiteArgs {
    /**
     * Name of the HCX Enterprise Site
     */
    hcxEnterpriseSiteName: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An HCX Enterprise Site resource
 */
export interface GetHcxEnterpriseSiteResult {
    /**
     * The activation key
     */
    readonly activationKey: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The status of the HCX Enterprise Site
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a HcxEnterpriseSite
 */
export function getHcxEnterpriseSiteOutput(args: GetHcxEnterpriseSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHcxEnterpriseSiteResult> {
    return pulumi.output(args).apply((a: any) => getHcxEnterpriseSite(a, opts))
}

export interface GetHcxEnterpriseSiteOutputArgs {
    /**
     * Name of the HCX Enterprise Site
     */
    hcxEnterpriseSiteName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}