import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists approved schemas for Azure Data Transfer.
 */
export function listAzureDataTransferApprovedSchemas(args?: ListAzureDataTransferApprovedSchemasArgs, opts?: pulumi.InvokeOptions): Promise<ListAzureDataTransferApprovedSchemasResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer/v20240125:listAzureDataTransferApprovedSchemas", {
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
 */
export function listAzureDataTransferApprovedSchemasOutput(args?: ListAzureDataTransferApprovedSchemasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAzureDataTransferApprovedSchemasResult> {
    return pulumi.output(args).apply((a: any) => listAzureDataTransferApprovedSchemas(a, opts))
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