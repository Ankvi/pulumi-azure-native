import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a network manager security user configuration.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2021-05-01-preview, 2024-03-01, 2024-05-01.
 */
export function getSecurityUserConfiguration(args: GetSecurityUserConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityUserConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getSecurityUserConfiguration", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSecurityUserConfigurationArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Defines the security user configuration
 */
export interface GetSecurityUserConfigurationResult {
    /**
     * Flag if need to delete existing network security groups.
     */
    readonly deleteExistingNSGs?: string;
    /**
     * A description of the security user configuration.
     */
    readonly description?: string;
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
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves a network manager security user configuration.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2021-05-01-preview, 2024-03-01, 2024-05-01.
 */
export function getSecurityUserConfigurationOutput(args: GetSecurityUserConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecurityUserConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getSecurityUserConfiguration", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSecurityUserConfigurationOutputArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}