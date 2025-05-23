import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of an EventHub schema group.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSchemaRegistry(args: GetSchemaRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaRegistryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getSchemaRegistry", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "schemaGroupName": args.schemaGroupName,
    }, opts);
}

export interface GetSchemaRegistryArgs {
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Schema Group name 
     */
    schemaGroupName: string;
}

/**
 * Single item in List or Get Schema Group operation
 */
export interface GetSchemaRegistryResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Exact time the Schema Group was created.
     */
    readonly createdAtUtc: string;
    /**
     * The ETag value.
     */
    readonly eTag: string;
    /**
     * dictionary object for SchemaGroup group properties
     */
    readonly groupProperties?: {[key: string]: string};
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly schemaCompatibility?: string;
    readonly schemaType?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
    /**
     * Exact time the Schema Group was updated
     */
    readonly updatedAtUtc: string;
}
/**
 * Gets the details of an EventHub schema group.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSchemaRegistryOutput(args: GetSchemaRegistryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSchemaRegistryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getSchemaRegistry", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "schemaGroupName": args.schemaGroupName,
    }, opts);
}

export interface GetSchemaRegistryOutputArgs {
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Schema Group name 
     */
    schemaGroupName: pulumi.Input<string>;
}