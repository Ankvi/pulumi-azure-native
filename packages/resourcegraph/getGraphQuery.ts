import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single graph query by its resourceName.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2020-04-01-preview, 2021-03-01, 2022-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resourcegraph [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGraphQuery(args: GetGraphQueryArgs, opts?: pulumi.InvokeOptions): Promise<GetGraphQueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourcegraph:getGraphQuery", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetGraphQueryArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Graph Query resource.
     */
    resourceName: string;
}

/**
 * Graph Query entity definition.
 */
export interface GetGraphQueryResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The description of a graph query.
     */
    readonly description?: string;
    /**
     * This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
     */
    readonly etag?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The location of the resource
     */
    readonly location?: string;
    /**
     * Azure resource name. This is GUID value. The display name should be assigned within properties field.
     */
    readonly name: string;
    /**
     * KQL query that will be graph.
     */
    readonly query: string;
    /**
     * Enum indicating a type of graph query.
     */
    readonly resultKind: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Date and time in UTC of the last modification that was made to this graph query definition.
     */
    readonly timeModified: string;
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Get a single graph query by its resourceName.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2020-04-01-preview, 2021-03-01, 2022-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resourcegraph [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGraphQueryOutput(args: GetGraphQueryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGraphQueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resourcegraph:getGraphQuery", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetGraphQueryOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Graph Query resource.
     */
    resourceName: pulumi.Input<string>;
}