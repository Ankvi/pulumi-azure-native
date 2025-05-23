import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SchemaVersion
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getSchemaVersion(args: GetSchemaVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getSchemaVersion", {
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "schemaRegistryName": args.schemaRegistryName,
        "schemaVersionName": args.schemaVersionName,
    }, opts);
}

export interface GetSchemaVersionArgs {
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
    /**
     * Schema version name parameter.
     */
    schemaVersionName: string;
}

/**
 * Schema version's definition.
 */
export interface GetSchemaVersionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Human-readable description of the schema.
     */
    readonly description?: string;
    /**
     * Hash of the schema content.
     */
    readonly hash: string;
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
     * Schema content.
     */
    readonly schemaContent: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Get a SchemaVersion
 *
 * Uses Azure REST API version 2024-09-01-preview.
 */
export function getSchemaVersionOutput(args: GetSchemaVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSchemaVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getSchemaVersion", {
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "schemaRegistryName": args.schemaRegistryName,
        "schemaVersionName": args.schemaVersionName,
    }, opts);
}

export interface GetSchemaVersionOutputArgs {
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
    /**
     * Schema version name parameter.
     */
    schemaVersionName: pulumi.Input<string>;
}