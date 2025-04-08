import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the schemas for the specified connection in a pipeline.
 *
 * Uses Azure REST API version 2024-09-27.
 *
 * Other available API versions: 2023-10-11-preview, 2024-01-25, 2024-05-07, 2024-09-11, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuredatatransfer [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListSchema(args: ListListSchemaArgs, opts?: pulumi.InvokeOptions): Promise<ListListSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:listListSchema", {
        "connectionId": args.connectionId,
        "content": args.content,
        "direction": args.direction,
        "id": args.id,
        "name": args.name,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
        "schemaType": args.schemaType,
        "schemaUri": args.schemaUri,
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
     * The direction of the schema.
     */
    direction?: string | types.enums.SchemaDirection;
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
     * The Schema Type
     */
    schemaType?: string | types.enums.SchemaType;
    /**
     * Uri containing SAS token for the zipped schema
     */
    schemaUri?: string;
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
 * Uses Azure REST API version 2024-09-27.
 *
 * Other available API versions: 2023-10-11-preview, 2024-01-25, 2024-05-07, 2024-09-11, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuredatatransfer [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListSchemaOutput(args: ListListSchemaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListListSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:listListSchema", {
        "connectionId": args.connectionId,
        "content": args.content,
        "direction": args.direction,
        "id": args.id,
        "name": args.name,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
        "schemaType": args.schemaType,
        "schemaUri": args.schemaUri,
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
     * The direction of the schema.
     */
    direction?: pulumi.Input<string | types.enums.SchemaDirection>;
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
     * The Schema Type
     */
    schemaType?: pulumi.Input<string | types.enums.SchemaType>;
    /**
     * Uri containing SAS token for the zipped schema
     */
    schemaUri?: pulumi.Input<string>;
    /**
     * Status of the schema
     */
    status?: pulumi.Input<string | types.enums.SchemaStatus>;
}