import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific addon by name.
 */
export function getArcAddon(args: GetArcAddonArgs, opts?: pulumi.InvokeOptions): Promise<GetArcAddonResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20231201:getArcAddon", {
        "addonName": args.addonName,
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
        "roleName": args.roleName,
    }, opts);
}

export interface GetArcAddonArgs {
    /**
     * The addon name.
     */
    addonName: string;
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The role name.
     */
    roleName: string;
}

/**
 * Arc Addon.
 */
export interface GetArcAddonResult {
    /**
     * Host OS supported by the Arc addon.
     */
    readonly hostPlatform: string;
    /**
     * Platform where the runtime is hosted.
     */
    readonly hostPlatformType: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Addon type.
     * Expected value is 'ArcForKubernetes'.
     */
    readonly kind: "ArcForKubernetes";
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Addon Provisioning State
     */
    readonly provisioningState: string;
    /**
     * Arc resource group name
     */
    readonly resourceGroupName: string;
    /**
     * Arc resource location
     */
    readonly resourceLocation: string;
    /**
     * Arc resource Name
     */
    readonly resourceName: string;
    /**
     * Arc resource subscription Id
     */
    readonly subscriptionId: string;
    /**
     * Metadata pertaining to creation and last modification of Addon
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Arc resource version
     */
    readonly version: string;
}
/**
 * Gets a specific addon by name.
 */
export function getArcAddonOutput(args: GetArcAddonOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArcAddonResult> {
    return pulumi.output(args).apply((a: any) => getArcAddon(a, opts))
}

export interface GetArcAddonOutputArgs {
    /**
     * The addon name.
     */
    addonName: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The role name.
     */
    roleName: pulumi.Input<string>;
}