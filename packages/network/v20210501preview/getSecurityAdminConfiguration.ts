import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves a network manager security admin configuration.
 */
export function getSecurityAdminConfiguration(args: GetSecurityAdminConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityAdminConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210501preview:getSecurityAdminConfiguration", {
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
 * Defines the security configuration
 */
export interface GetSecurityAdminConfigurationResult {
    /**
     * Enum list of network intent policy based services.
     */
    readonly applyOnNetworkIntentPolicyBasedServices?: string[];
    /**
     * Flag if need to delete existing network security groups.
     */
    readonly deleteExistingNSGs?: string;
    /**
     * A description of the security configuration.
     */
    readonly description?: string;
    /**
     * A display name of the security configuration.
     */
    readonly displayName?: string;
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
     * Security Type.
     */
    readonly securityType?: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.network.v20210501preview.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves a network manager security admin configuration.
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
