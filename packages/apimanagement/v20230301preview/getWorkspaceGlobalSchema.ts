import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the Schema specified by its identifier.
 */
export function getWorkspaceGlobalSchema(args: GetWorkspaceGlobalSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceGlobalSchemaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getWorkspaceGlobalSchema", {
        "resourceGroupName": args.resourceGroupName,
        "schemaId": args.schemaId,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceGlobalSchemaArgs {
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
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Global Schema Contract details.
 */
export interface GetWorkspaceGlobalSchemaResult {
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
 */
export function getWorkspaceGlobalSchemaOutput(args: GetWorkspaceGlobalSchemaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceGlobalSchemaResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceGlobalSchema(a, opts))
}

export interface GetWorkspaceGlobalSchemaOutputArgs {
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
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}
