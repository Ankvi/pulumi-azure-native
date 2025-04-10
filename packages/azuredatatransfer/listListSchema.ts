import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the schemas for the specified connection in a pipeline.
 *
 * Uses Azure REST API version 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07, 2024-09-11, 2024-09-27, 2025-03-01-preview.
 */
export function listListSchema(args: ListListSchemaArgs, opts?: pulumi.InvokeOptions): Promise<ListListSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:listListSchema", {
        "connectionId": args.connectionId,
        "content": args.content,
        "id": args.id,
        "name": args.name,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
        "status": args.status,
    }, opts);
}

export interface ListListSchemaArgs {
    /**
     * Connection ID associated with this schema
     */
    connectionId?: string;
    /**
     * Content of the schema
     */
    content?: string;
    /**
     * ID associated with this schema
     */
    id?: string;
    /**
     * Name of the schema
     */
    name?: string;
    /**
     * The name for the pipeline that is to be requested.
     */
    pipelineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Status of the schema
     */
    status?: string | types.enums.SchemaStatus;
}

/**
 * The schemas list result.
 */
export interface ListListSchemaResult {
    /**
     * Schemas array.
     */
    readonly value?: types.outputs.SchemaResponse[];
}
/**
 * Lists the schemas for the specified connection in a pipeline.
 *
 * Uses Azure REST API version 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07, 2024-09-11, 2024-09-27, 2025-03-01-preview.
 */
export function listListSchemaOutput(args: ListListSchemaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListListSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:listListSchema", {
        "connectionId": args.connectionId,
        "content": args.content,
        "id": args.id,
        "name": args.name,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
        "status": args.status,
    }, opts);
}

export interface ListListSchemaOutputArgs {
    /**
     * Connection ID associated with this schema
     */
    connectionId?: pulumi.Input<string>;
    /**
     * Content of the schema
     */
    content?: pulumi.Input<string>;
    /**
     * ID associated with this schema
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the schema
     */
    name?: pulumi.Input<string>;
    /**
     * The name for the pipeline that is to be requested.
     */
    pipelineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Status of the schema
     */
    status?: pulumi.Input<string | types.enums.SchemaStatus>;
}