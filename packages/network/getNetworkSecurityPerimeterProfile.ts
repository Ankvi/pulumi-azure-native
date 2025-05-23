import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified NSP profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getNetworkSecurityPerimeterProfile(args: GetNetworkSecurityPerimeterProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityPerimeterProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkSecurityPerimeterProfile", {
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityPerimeterProfileArgs {
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: string;
    /**
     * The name of the NSP profile.
     */
    profileName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The network security perimeter profile resource
 */
export interface GetNetworkSecurityPerimeterProfileResult {
    /**
     * Version number that increases with every update to access rules within the profile.
     */
    readonly accessRulesVersion: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Version number that increases with every update to diagnostic settings within the profile.
     */
    readonly diagnosticSettingsVersion: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified NSP profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getNetworkSecurityPerimeterProfileOutput(args: GetNetworkSecurityPerimeterProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkSecurityPerimeterProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkSecurityPerimeterProfile", {
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityPerimeterProfileOutputArgs {
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * The name of the NSP profile.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}