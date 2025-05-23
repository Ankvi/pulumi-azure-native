import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Pool
 *
 * Uses Azure REST API version 2025-01-21.
 *
 * Other available API versions: 2023-10-30-preview, 2023-12-13-preview, 2024-03-26-preview, 2024-04-04-preview, 2024-10-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devopsinfrastructure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPool(args: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devopsinfrastructure:getPool", {
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPoolArgs {
    /**
     * Name of the pool. It needs to be globally unique.
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Concrete tracked resource types can be created by aliasing this type using a specific property type.
 */
export interface GetPoolResult {
    /**
     * Defines how the machine will be handled once it executed a job.
     */
    readonly agentProfile: types.outputs.StatefulResponse | types.outputs.StatelessAgentProfileResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource id of the DevCenter Project the pool belongs to.
     */
    readonly devCenterProjectResourceId: string;
    /**
     * Defines the type of fabric the agent will run on.
     */
    readonly fabricProfile: types.outputs.VmssFabricProfileResponse;
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
     * Defines how many resources can there be created at any given time.
     */
    readonly maximumConcurrency: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the organization in which the pool will be used.
     */
    readonly organizationProfile: types.outputs.AzureDevOpsOrganizationProfileResponse | types.outputs.GitHubOrganizationProfileResponse;
    /**
     * The status of the current operation.
     */
    readonly provisioningState?: string;
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
 * Get a Pool
 *
 * Uses Azure REST API version 2025-01-21.
 *
 * Other available API versions: 2023-10-30-preview, 2023-12-13-preview, 2024-03-26-preview, 2024-04-04-preview, 2024-10-19. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devopsinfrastructure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPoolOutput(args: GetPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devopsinfrastructure:getPool", {
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPoolOutputArgs {
    /**
     * Name of the pool. It needs to be globally unique.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}