import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the gateway settings for the specified cluster.
 * Azure REST API version: 2021-06-01.
 */
export function getClusterGatewaySettings(args: GetClusterGatewaySettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterGatewaySettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hdinsight:getClusterGatewaySettings", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterGatewaySettingsArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Gateway settings.
 */
export interface GetClusterGatewaySettingsResult {
    /**
     * Indicates whether or not the gateway settings based authorization is enabled.
     */
    readonly isCredentialEnabled: string;
    /**
     * The gateway settings user password.
     */
    readonly password: string;
    /**
     * The gateway settings user name.
     */
    readonly userName: string;
}
/**
 * Gets the gateway settings for the specified cluster.
 * Azure REST API version: 2021-06-01.
 */
export function getClusterGatewaySettingsOutput(args: GetClusterGatewaySettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterGatewaySettingsResult> {
    return pulumi.output(args).apply((a: any) => getClusterGatewaySettings(a, opts))
}

export interface GetClusterGatewaySettingsOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
