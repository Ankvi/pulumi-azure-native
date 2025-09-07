import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a CommunityResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCommunity(args: GetCommunityArgs, opts?: pulumi.InvokeOptions): Promise<GetCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mission:getCommunity", {
        "communityName": args.communityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommunityArgs {
    /**
     * The name of the communityResource Resource
     */
    communityName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Community Model Resource
 */
export interface GetCommunityResult {
    /**
     * Address Space.
     */
    readonly addressSpace?: string;
    /**
     * Approval requirements for various actions on the community's resources.
     */
    readonly approvalSettings?: types.outputs.ApprovalSettingsResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Community role assignments
     */
    readonly communityRoleAssignments?: types.outputs.RoleAssignmentItemResponse[];
    /**
     * DNS Servers.
     */
    readonly dnsServers?: string[];
    /**
     * SKU of the community's Azure Firewall (Basic, Standard, Premium). Standard is the default
     */
    readonly firewallSku?: string;
    /**
     * List of services governed by a community.
     */
    readonly governedServiceList?: types.outputs.GovernedServiceItemResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maintenance Mode configuration.
     */
    readonly maintenanceModeConfiguration?: types.outputs.MaintenanceModeConfigurationModelResponse;
    /**
     * Managed On Behalf Of Configuration.
     */
    readonly managedOnBehalfOfConfiguration: types.outputs.ManagedOnBehalfOfConfigurationResponse;
    /**
     * Managed resource group name.
     */
    readonly managedResourceGroupName: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Policy override setting for the community. Specifies whether to apply enclave-specific policies or disable policy enforcement.
     */
    readonly policyOverride?: string;
    /**
     * Provisioning State.
     */
    readonly provisioningState: string;
    /**
     * List of resource ids created by communities.
     */
    readonly resourceCollection: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a CommunityResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCommunityOutput(args: GetCommunityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mission:getCommunity", {
        "communityName": args.communityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommunityOutputArgs {
    /**
     * The name of the communityResource Resource
     */
    communityName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}