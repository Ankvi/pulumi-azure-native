import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements IP Extended Community GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIpExtendedCommunity(args: GetIpExtendedCommunityArgs, opts?: pulumi.InvokeOptions): Promise<GetIpExtendedCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getIpExtendedCommunity", {
        "ipExtendedCommunityName": args.ipExtendedCommunityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpExtendedCommunityArgs {
    /**
     * Name of the IP Extended Community.
     */
    ipExtendedCommunityName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The IP Extended Community resource definition.
 */
export interface GetIpExtendedCommunityResult {
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * List of IP Extended Community Rules.
     */
    readonly ipExtendedCommunityRules: types.outputs.IpExtendedCommunityRuleResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Implements IP Extended Community GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIpExtendedCommunityOutput(args: GetIpExtendedCommunityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpExtendedCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getIpExtendedCommunity", {
        "ipExtendedCommunityName": args.ipExtendedCommunityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpExtendedCommunityOutputArgs {
    /**
     * Name of the IP Extended Community.
     */
    ipExtendedCommunityName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}