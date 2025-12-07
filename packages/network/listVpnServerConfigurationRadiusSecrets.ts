import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all Radius servers with respective radius secrets from VpnServerConfiguration.
 *
 * Uses Azure REST API version 2024-10-01.
 */
export function listVpnServerConfigurationRadiusSecrets(args: ListVpnServerConfigurationRadiusSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListVpnServerConfigurationRadiusSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listVpnServerConfigurationRadiusSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "vpnServerConfigurationName": args.vpnServerConfigurationName,
    }, opts);
}

export interface ListVpnServerConfigurationRadiusSecretsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the VpnServerConfiguration.
     */
    vpnServerConfigurationName: string;
}

/**
 * List of Radius servers with respective radius secrets.
 */
export interface ListVpnServerConfigurationRadiusSecretsResult {
    /**
     * URL to get the next set of operation list results if there are any.
     */
    readonly nextLink?: string;
    /**
     * List of Radius servers with respective radius secrets.
     */
    readonly value?: types.outputs.RadiusAuthServerResponse[];
}
/**
 * List all Radius servers with respective radius secrets from VpnServerConfiguration.
 *
 * Uses Azure REST API version 2024-10-01.
 */
export function listVpnServerConfigurationRadiusSecretsOutput(args: ListVpnServerConfigurationRadiusSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListVpnServerConfigurationRadiusSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listVpnServerConfigurationRadiusSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "vpnServerConfigurationName": args.vpnServerConfigurationName,
    }, opts);
}

export interface ListVpnServerConfigurationRadiusSecretsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VpnServerConfiguration.
     */
    vpnServerConfigurationName: pulumi.Input<string>;
}