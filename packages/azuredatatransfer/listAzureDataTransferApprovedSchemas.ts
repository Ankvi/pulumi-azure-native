import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists approved schemas for Azure Data Transfer.
 *
 * Uses Azure REST API version 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07, 2024-09-11, 2024-09-27, 2025-03-01-preview.
 */
export function listAzureDataTransferApprovedSchemas(args?: ListAzureDataTransferApprovedSchemasArgs, opts?: pulumi.InvokeOptions): Promise<ListAzureDataTransferApprovedSchemasResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:listAzureDataTransferApprovedSchemas", {
        "direction": args.direction,
        "pipeline": args.pipeline,
    }, opts);
}

export interface ListAzureDataTransferApprovedSchemasArgs {
    /**
     * The direction pipeline to filter approved schemas.
     */
    direction?: string | types.enums.ListApprovedSchemasDirection;
    /**
     * The name of the pipeline to filter approved schemas.
     */
    pipeline?: string;
}

/**
 * The schemas list result.
 */
export interface ListAzureDataTransferApprovedSchemasResult {
    /**
     * Schemas array.
     */
    readonly value?: types.outputs.SchemaResponse[];
}
/**
 * Lists approved schemas for Azure Data Transfer.
 *
 * Uses Azure REST API version 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07, 2024-09-11, 2024-09-27, 2025-03-01-preview.
 */
export function listAzureDataTransferApprovedSchemasOutput(args?: ListAzureDataTransferApprovedSchemasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAzureDataTransferApprovedSchemasResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:listAzureDataTransferApprovedSchemas", {
        "direction": args.direction,
        "pipeline": args.pipeline,
    }, opts);
}

export interface ListAzureDataTransferApprovedSchemasOutputArgs {
    /**
     * The direction pipeline to filter approved schemas.
     */
    direction?: pulumi.Input<string | types.enums.ListApprovedSchemasDirection>;
    /**
     * The name of the pipeline to filter approved schemas.
     */
    pipeline?: pulumi.Input<string>;
}