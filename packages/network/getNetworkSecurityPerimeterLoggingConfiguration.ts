import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the NSP logging configuration.
 * Azure REST API version: 2024-06-01-preview.
 */
export function getNetworkSecurityPerimeterLoggingConfiguration(args: GetNetworkSecurityPerimeterLoggingConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityPerimeterLoggingConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkSecurityPerimeterLoggingConfiguration", {
        "loggingConfigurationName": args.loggingConfigurationName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityPerimeterLoggingConfigurationArgs {
    /**
     * The name of the NSP logging configuration. Accepts 'instance' as name.
     */
    loggingConfigurationName: string;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The NSP logging configuration
 */
export interface GetNetworkSecurityPerimeterLoggingConfigurationResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Properties of the NSP logging configuration.
     */
    readonly properties: types.outputs.NspLoggingConfigurationPropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the NSP logging configuration.
 * Azure REST API version: 2024-06-01-preview.
 */
export function getNetworkSecurityPerimeterLoggingConfigurationOutput(args: GetNetworkSecurityPerimeterLoggingConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkSecurityPerimeterLoggingConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkSecurityPerimeterLoggingConfiguration", {
        "loggingConfigurationName": args.loggingConfigurationName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityPerimeterLoggingConfigurationOutputArgs {
    /**
     * The name of the NSP logging configuration. Accepts 'instance' as name.
     */
    loggingConfigurationName: pulumi.Input<string>;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}