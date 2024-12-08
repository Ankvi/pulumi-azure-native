import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified NSP profile.
 * Azure REST API version: 2021-02-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview.
 */
export function getNspProfile(args: GetNspProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetNspProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNspProfile", {
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNspProfileArgs {
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
export interface GetNspProfileResult {
    /**
     * Version number that increases with every update to access rules within the profile.
     */
    readonly accessRulesVersion: string;
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
 * Azure REST API version: 2021-02-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview.
 */
export function getNspProfileOutput(args: GetNspProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNspProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNspProfile", {
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNspProfileOutputArgs {
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