import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An HCX Enterprise Site resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getHcxEnterpriseSite(args: GetHcxEnterpriseSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetHcxEnterpriseSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getHcxEnterpriseSite", {
        "hcxEnterpriseSiteName": args.hcxEnterpriseSiteName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHcxEnterpriseSiteArgs {
    /**
     * Name of the HCX Enterprise Site in the private cloud
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The status of the HCX Enterprise Site
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * An HCX Enterprise Site resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getHcxEnterpriseSiteOutput(args: GetHcxEnterpriseSiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHcxEnterpriseSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getHcxEnterpriseSite", {
        "hcxEnterpriseSiteName": args.hcxEnterpriseSiteName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHcxEnterpriseSiteOutputArgs {
    /**
     * Name of the HCX Enterprise Site in the private cloud
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