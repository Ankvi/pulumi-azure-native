import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a EnterpriseKnowledgeGraph service specified by the parameters.
 * Azure REST API version: 2018-12-03.
 */
export function getEnterpriseKnowledgeGraph(args: GetEnterpriseKnowledgeGraphArgs, opts?: pulumi.InvokeOptions): Promise<GetEnterpriseKnowledgeGraphResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:enterpriseknowledgegraph:getEnterpriseKnowledgeGraph", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetEnterpriseKnowledgeGraphArgs {
    /**
     * The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
     */
    resourceGroupName: string;
    /**
     * The name of the EnterpriseKnowledgeGraph resource.
     */
    resourceName: string;
}

/**
 * EnterpriseKnowledgeGraph resource definition
 */
export interface GetEnterpriseKnowledgeGraphResult {
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * The set of properties specific to EnterpriseKnowledgeGraph resource
     */
    readonly properties: types.outputs.EnterpriseKnowledgeGraphPropertiesResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
/**
 * Returns a EnterpriseKnowledgeGraph service specified by the parameters.
 * Azure REST API version: 2018-12-03.
 */
export function getEnterpriseKnowledgeGraphOutput(args: GetEnterpriseKnowledgeGraphOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnterpriseKnowledgeGraphResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:enterpriseknowledgegraph:getEnterpriseKnowledgeGraph", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetEnterpriseKnowledgeGraphOutputArgs {
    /**
     * The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the EnterpriseKnowledgeGraph resource.
     */
    resourceName: pulumi.Input<string>;
}