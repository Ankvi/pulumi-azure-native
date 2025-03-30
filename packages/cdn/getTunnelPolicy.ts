import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing tunnel policy within a profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getTunnelPolicy(args: GetTunnelPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetTunnelPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getTunnelPolicy", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "tunnelPolicyName": args.tunnelPolicyName,
    }, opts);
}

export interface GetTunnelPolicyArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the Tunnel Policy under the profile.
     */
    tunnelPolicyName: string;
}

/**
 * Tunnel Policy maps domains to target endpoints to process traffic over the tunnelling protocol.
 */
export interface GetTunnelPolicyResult {
    readonly deploymentStatus: string;
    /**
     * Domains referenced by this tunnel policy.
     */
    readonly domains: types.outputs.ActivatedResourceReferenceResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Target Groups referenced by this tunnel policy.
     */
    readonly targetGroups?: types.outputs.ResourceReferenceResponse[];
    /**
     * Protocol this tunnel will use for allowing traffic to backends.
     */
    readonly tunnelType?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing tunnel policy within a profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getTunnelPolicyOutput(args: GetTunnelPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTunnelPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getTunnelPolicy", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "tunnelPolicyName": args.tunnelPolicyName,
    }, opts);
}

export interface GetTunnelPolicyOutputArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Tunnel Policy under the profile.
     */
    tunnelPolicyName: pulumi.Input<string>;
}