import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the Schema specified by its identifier.
 * Azure REST API version: 2022-08-01.
 */
export function getGlobalSchema(args: GetGlobalSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getGlobalSchema", {
        "resourceGroupName": args.resourceGroupName,
        "schemaId": args.schemaId,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGlobalSchemaArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Schema id identifier. Must be unique in the current API Management service instance.
     */
    schemaId: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Global Schema Contract details.
 */
export interface GetGlobalSchemaResult {
    /**
     * Free-form schema entity description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Schema Type. Immutable.
     */
    readonly schemaType: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Json-encoded string for non json-based schema.
     */
    readonly value?: any;
}
/**
 * Gets the details of the Schema specified by its identifier.
 * Azure REST API version: 2022-08-01.
 */
export function getGlobalSchemaOutput(args: GetGlobalSchemaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlobalSchemaResult> {
    return pulumi.output(args).apply((a: any) => getGlobalSchema(a, opts))
}

export interface GetGlobalSchemaOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schema id identifier. Must be unique in the current API Management service instance.
     */
    schemaId: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
