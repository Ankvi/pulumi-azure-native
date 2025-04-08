import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the access keys of the resource.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native signalrservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listSignalRKeys(args: ListSignalRKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListSignalRKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:signalrservice:listSignalRKeys", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListSignalRKeysArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A class represents the access keys of the resource.
 */
export interface ListSignalRKeysResult {
    /**
     * Connection string constructed via the primaryKey
     */
    readonly primaryConnectionString?: string;
    /**
     * The primary access key.
     */
    readonly primaryKey?: string;
    /**
     * Connection string constructed via the secondaryKey
     */
    readonly secondaryConnectionString?: string;
    /**
     * The secondary access key.
     */
    readonly secondaryKey?: string;
}
/**
 * Get the access keys of the resource.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native signalrservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listSignalRKeysOutput(args: ListSignalRKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSignalRKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:signalrservice:listSignalRKeys", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListSignalRKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}