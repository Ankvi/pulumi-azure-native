import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SchemaRegistry
 * Azure REST API version: 2024-09-01-preview.
 */
export function getSchemaRegistry(args: GetSchemaRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaRegistryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceregistry:getSchemaRegistry", {
        "resourceGroupName": args.resourceGroupName,
        "schemaRegistryName": args.schemaRegistryName,
    }, opts);
}

export interface GetSchemaRegistryArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Schema registry name parameter.
     */
    schemaRegistryName: string;
}

/**
 * Schema registry definition.
 */
export interface GetSchemaRegistryResult {
    /**
     * Human-readable description of the schema registry.
     */
    readonly description?: string;
    /**
     * Human-readable display name.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.SystemAssignedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Schema registry namespace. Uniquely identifies a schema registry within a tenant.
     */
    readonly namespace: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The Storage Account's Container URL where schemas will be stored.
     */
    readonly storageAccountContainerUrl: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
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
 * Get a SchemaRegistry
 * Azure REST API version: 2024-09-01-preview.
 */
export function getSchemaRegistryOutput(args: GetSchemaRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSchemaRegistryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceregistry:getSchemaRegistry", {
        "resourceGroupName": args.resourceGroupName,
        "schemaRegistryName": args.schemaRegistryName,
    }, opts);
}

export interface GetSchemaRegistryOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema registry name parameter.
     */
    schemaRegistryName: pulumi.Input<string>;
}