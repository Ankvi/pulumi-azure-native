import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An addon resource
 */
export function getAddon(args: GetAddonArgs, opts?: pulumi.InvokeOptions): Promise<GetAddonResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20210101preview:getAddon", {
        "addonName": args.addonName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAddonArgs {
    /**
     * Name of the addon for the private cloud
     */
    addonName: string;
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
 * An addon resource
 */
export interface GetAddonResult {
    /**
     * The type of private cloud addon
     */
    readonly addonType?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The SRM license
     */
    readonly licenseKey?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the addon provisioning
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * An addon resource
 */
export function getAddonOutput(args: GetAddonOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAddonResult> {
    return pulumi.output(args).apply((a: any) => getAddon(a, opts))
}

export interface GetAddonOutputArgs {
    /**
     * Name of the addon for the private cloud
     */
    addonName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}