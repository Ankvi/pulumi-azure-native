import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the Graph resource under an existing Azure Cosmos DB database account with the provided name.
 */
export function getGraphResourceGraph(args: GetGraphResourceGraphArgs, opts?: pulumi.InvokeOptions): Promise<GetGraphResourceGraphResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20230315preview:getGraphResourceGraph", {
        "accountName": args.accountName,
        "graphName": args.graphName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGraphResourceGraphArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * Cosmos DB graph resource name.
     */
    graphName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB Graph resource.
 */
export interface GetGraphResourceGraphResult {
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.documentdb.v20230315preview.ManagedServiceIdentityResponse;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly options?: types.outputs.documentdb.v20230315preview.GraphResourceGetPropertiesResponseOptions;
    readonly resource?: types.outputs.documentdb.v20230315preview.GraphResourceGetPropertiesResponseResource;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Gets the Graph resource under an existing Azure Cosmos DB database account with the provided name.
 */
export function getGraphResourceGraphOutput(args: GetGraphResourceGraphOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGraphResourceGraphResult> {
    return pulumi.output(args).apply((a: any) => getGraphResourceGraph(a, opts))
}

export interface GetGraphResourceGraphOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Cosmos DB graph resource name.
     */
    graphName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
