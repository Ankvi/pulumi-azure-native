import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Schema
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getSchema(args: GetSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getSchema", {
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "schemaRegistryName": args.schemaRegistryName,
    }, opts);
}

export interface GetSchemaArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Schema name parameter.
     */
    schemaName: string;
    /**
     * Schema registry name parameter.
     */
    schemaRegistryName: string;
}

/**
 * Schema definition.
 */
export interface GetSchemaResult {
    /**
     * Human-readable description of the schema.
     */
    readonly description?: string;
    /**
     * Human-readable display name.
     */
    readonly displayName?: string;
    /**
     * Format of the schema.
     */
    readonly format: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the schema.
     */
    readonly schemaType: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Schema tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Globally unique, immutable, non-reusable id.
     */
    readonly uuid: string;
}
/**
 * Get a Schema
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getSchemaOutput(args: GetSchemaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getSchema", {
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "schemaRegistryName": args.schemaRegistryName,
    }, opts);
}

export interface GetSchemaOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema name parameter.
     */
    schemaName: pulumi.Input<string>;
    /**
     * Schema registry name parameter.
     */
    schemaRegistryName: pulumi.Input<string>;
}