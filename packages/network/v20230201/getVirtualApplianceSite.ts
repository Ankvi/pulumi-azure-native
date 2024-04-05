import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Virtual Appliance Site.
 */
export function getVirtualApplianceSite(args: GetVirtualApplianceSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualApplianceSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:getVirtualApplianceSite", {
        "networkVirtualApplianceName": args.networkVirtualApplianceName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetVirtualApplianceSiteArgs {
    /**
     * The name of the Network Virtual Appliance.
     */
    networkVirtualApplianceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the site.
     */
    siteName: string;
}

/**
 * Virtual Appliance Site resource.
 */
export interface GetVirtualApplianceSiteResult {
    /**
     * Address Prefix.
     */
    readonly addressPrefix?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Name of the virtual appliance site.
     */
    readonly name?: string;
    /**
     * Office 365 Policy.
     */
    readonly o365Policy?: types.outputs.Office365PolicyPropertiesResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Site type.
     */
    readonly type: string;
}
/**
 * Gets the specified Virtual Appliance Site.
 */
export function getVirtualApplianceSiteOutput(args: GetVirtualApplianceSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualApplianceSiteResult> {
    return pulumi.output(args).apply((a: any) => getVirtualApplianceSite(a, opts))
}

export interface GetVirtualApplianceSiteOutputArgs {
    /**
     * The name of the Network Virtual Appliance.
     */
    networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the site.
     */
    siteName: pulumi.Input<string>;
}