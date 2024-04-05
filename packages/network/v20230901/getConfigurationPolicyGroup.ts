import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a ConfigurationPolicyGroup.
 */
export function getConfigurationPolicyGroup(args: GetConfigurationPolicyGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationPolicyGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230901:getConfigurationPolicyGroup", {
        "configurationPolicyGroupName": args.configurationPolicyGroupName,
        "resourceGroupName": args.resourceGroupName,
        "vpnServerConfigurationName": args.vpnServerConfigurationName,
    }, opts);
}

export interface GetConfigurationPolicyGroupArgs {
    /**
     * The name of the ConfigurationPolicyGroup being retrieved.
     */
    configurationPolicyGroupName: string;
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    resourceGroupName: string;
    /**
     * The name of the VpnServerConfiguration.
     */
    vpnServerConfigurationName: string;
}

/**
 * VpnServerConfigurationPolicyGroup Resource.
 */
export interface GetConfigurationPolicyGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
     */
    readonly isDefault?: boolean;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * List of references to P2SConnectionConfigurations.
     */
    readonly p2SConnectionConfigurations: types.outputs.SubResourceResponse[];
    /**
     * Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
     */
    readonly policyMembers?: types.outputs.VpnServerConfigurationPolicyGroupMemberResponse[];
    /**
     * Priority for VpnServerConfigurationPolicyGroup.
     */
    readonly priority?: number;
    /**
     * The provisioning state of the VpnServerConfigurationPolicyGroup resource.
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a ConfigurationPolicyGroup.
 */
export function getConfigurationPolicyGroupOutput(args: GetConfigurationPolicyGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationPolicyGroupResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationPolicyGroup(a, opts))
}

export interface GetConfigurationPolicyGroupOutputArgs {
    /**
     * The name of the ConfigurationPolicyGroup being retrieved.
     */
    configurationPolicyGroupName: pulumi.Input<string>;
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VpnServerConfiguration.
     */
    vpnServerConfigurationName: pulumi.Input<string>;
}