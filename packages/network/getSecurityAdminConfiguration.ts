import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a network manager security admin configuration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-05-01-preview, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-01-01-preview.
 */
export function getSecurityAdminConfiguration(args: GetSecurityAdminConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityAdminConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getSecurityAdminConfiguration", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSecurityAdminConfigurationArgs {
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
 * Defines the security admin configuration
 */
export interface GetSecurityAdminConfigurationResult {
    /**
     * Enum list of network intent policy based services.
     */
    readonly applyOnNetworkIntentPolicyBasedServices?: string[];
    /**
     * A description of the security configuration.
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
     * Unique identifier for this resource.
     */
    readonly resourceGuid: string;
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
 * Retrieves a network manager security admin configuration.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-05-01-preview, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-01-01-preview.
 */
export function getSecurityAdminConfigurationOutput(args: GetSecurityAdminConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityAdminConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getSecurityAdminConfiguration(a, opts))
}

export interface GetSecurityAdminConfigurationOutputArgs {
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