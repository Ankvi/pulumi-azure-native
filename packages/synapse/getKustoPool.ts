import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Kusto pool.
 *
 * Uses Azure REST API version 2021-06-01-preview.
 *
 * Other available API versions: 2021-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getKustoPool(args: GetKustoPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetKustoPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getKustoPool", {
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetKustoPoolArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Class representing a Kusto kusto pool.
 */
export interface GetKustoPoolResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The Kusto Pool data ingestion URI.
     */
    readonly dataIngestionUri: string;
    /**
     * A boolean value that indicates if the purge operations are enabled.
     */
    readonly enablePurge?: boolean;
    /**
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    readonly enableStreamingIngest?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * List of the Kusto Pool's language extensions.
     */
    readonly languageExtensions: types.outputs.LanguageExtensionsListResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Optimized auto scale definition.
     */
    readonly optimizedAutoscale?: types.outputs.OptimizedAutoscaleResponse;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU of the kusto pool.
     */
    readonly sku: types.outputs.AzureSkuResponse;
    /**
     * The state of the resource.
     */
    readonly state: string;
    /**
     * The reason for the Kusto Pool's current state.
     */
    readonly stateReason: string;
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
    /**
     * The Kusto Pool URI.
     */
    readonly uri: string;
    /**
     * The workspace unique identifier.
     */
    readonly workspaceUID?: string;
}
/**
 * Gets a Kusto pool.
 *
 * Uses Azure REST API version 2021-06-01-preview.
 *
 * Other available API versions: 2021-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getKustoPoolOutput(args: GetKustoPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKustoPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getKustoPool", {
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetKustoPoolOutputArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}