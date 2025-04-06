import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The managed private endpoint resource type.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2022-10-01-preview, 2023-09-01, 2023-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dashboard [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedPrivateEndpoint(args: GetManagedPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dashboard:getManagedPrivateEndpoint", {
        "managedPrivateEndpointName": args.managedPrivateEndpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetManagedPrivateEndpointArgs {
    /**
     * The managed private endpoint name of Azure Managed Grafana.
     */
    managedPrivateEndpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName: string;
}

/**
 * The managed private endpoint resource type.
 */
export interface GetManagedPrivateEndpointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The state of managed private endpoint connection.
     */
    readonly connectionState: types.outputs.ManagedPrivateEndpointConnectionStateResponse;
    /**
     * The group Ids of the managed private endpoint.
     */
    readonly groupIds?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The ARM resource ID of the resource for which the managed private endpoint is pointing to.
     */
    readonly privateLinkResourceId?: string;
    /**
     * The region of the resource to which the managed private endpoint is pointing to.
     */
    readonly privateLinkResourceRegion?: string;
    /**
     * The private IP of private endpoint after approval. This property is empty before connection is approved.
     */
    readonly privateLinkServicePrivateIP: string;
    /**
     * The URL of the data store behind the private link service. It would be the URL in the Grafana data source configuration page without the protocol and port.
     */
    readonly privateLinkServiceUrl?: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * User input request message of the managed private endpoint.
     */
    readonly requestMessage?: string;
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
 * The managed private endpoint resource type.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2022-10-01-preview, 2023-09-01, 2023-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dashboard [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedPrivateEndpointOutput(args: GetManagedPrivateEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dashboard:getManagedPrivateEndpoint", {
        "managedPrivateEndpointName": args.managedPrivateEndpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetManagedPrivateEndpointOutputArgs {
    /**
     * The managed private endpoint name of Azure Managed Grafana.
     */
    managedPrivateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName: pulumi.Input<string>;
}