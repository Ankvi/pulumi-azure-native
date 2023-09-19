import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An addon resource
 */
export function getAddon(args: GetAddonArgs, opts?: pulumi.InvokeOptions): Promise<GetAddonResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20220501:getAddon", {
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The properties of an addon resource
     */
    readonly properties: types.outputs.AddonArcPropertiesResponse | types.outputs.AddonHcxPropertiesResponse | types.outputs.AddonSrmPropertiesResponse | types.outputs.AddonVrPropertiesResponse;
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
