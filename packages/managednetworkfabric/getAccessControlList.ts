import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Access Control List GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessControlList(args: GetAccessControlListArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessControlListResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getAccessControlList", {
        "accessControlListName": args.accessControlListName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessControlListArgs {
    /**
     * Name of the Access Control List.
     */
    accessControlListName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Access Control List resource definition.
 */
export interface GetAccessControlListResult {
    /**
     * Access Control List file URL.
     */
    readonly aclsUrl?: string;
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
     * Input method to configure Access Control List.
     */
    readonly configurationType: string;
    /**
     * Default action that needs to be applied when no condition is matched. Example: Permit | Deny.
     */
    readonly defaultAction?: string;
    /**
     * List of dynamic match configurations.
     */
    readonly dynamicMatchConfigurations?: types.outputs.CommonDynamicMatchConfigurationResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The last synced timestamp.
     */
    readonly lastSyncedTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * List of match configurations.
     */
    readonly matchConfigurations?: types.outputs.AccessControlListMatchConfigurationResponse[];
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
 * Implements Access Control List GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessControlListOutput(args: GetAccessControlListOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessControlListResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getAccessControlList", {
        "accessControlListName": args.accessControlListName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessControlListOutputArgs {
    /**
     * Name of the Access Control List.
     */
    accessControlListName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}