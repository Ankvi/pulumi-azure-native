import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns details of the metadata schema.
 *
 * Uses Azure REST API version 2024-03-15-preview.
 *
 * Other available API versions: 2024-03-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apicenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMetadataSchema(args: GetMetadataSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetMetadataSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apicenter:getMetadataSchema", {
        "metadataSchemaName": args.metadataSchemaName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetMetadataSchemaArgs {
    /**
     * The name of the metadata schema.
     */
    metadataSchemaName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of Azure API Center service.
     */
    serviceName: string;
}

/**
 * Metadata schema entity. Used to define metadata for the entities in API catalog.
 */
export interface GetMetadataSchemaResult {
    /**
     * The assignees
     */
    readonly assignedTo?: types.outputs.MetadataAssignmentResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The schema defining the type.
     */
    readonly schema: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns details of the metadata schema.
 *
 * Uses Azure REST API version 2024-03-15-preview.
 *
 * Other available API versions: 2024-03-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apicenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMetadataSchemaOutput(args: GetMetadataSchemaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMetadataSchemaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apicenter:getMetadataSchema", {
        "metadataSchemaName": args.metadataSchemaName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetMetadataSchemaOutputArgs {
    /**
     * The name of the metadata schema.
     */
    metadataSchemaName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
}