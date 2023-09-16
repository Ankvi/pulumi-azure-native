import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a single graph query by its resourceName.
 */
export function getGraphQuery(args: GetGraphQueryArgs, opts?: pulumi.InvokeOptions): Promise<GetGraphQueryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourcegraph/v20200401preview:getGraphQuery", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetGraphQueryArgs {
    /**
     * The name of the resource group.
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
     * The description of a graph query.
     */
    readonly description?: string;
    /**
     * This will be used to handle Optimistic Concurrency.
     */
    readonly etag?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The location of the resource
     */
    readonly location: string;
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.resourcegraph.v20200401preview.SystemDataResponse;
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
 */
export function getGraphQueryOutput(args: GetGraphQueryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGraphQueryResult> {
    return pulumi.output(args).apply((a: any) => getGraphQuery(a, opts))
}

export interface GetGraphQueryOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Graph Query resource.
     */
    resourceName: pulumi.Input<string>;
}
