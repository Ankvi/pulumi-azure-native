import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the access keys of the resource.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2018-10-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01.
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
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2018-10-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01.
 */
export function listSignalRKeysOutput(args: ListSignalRKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSignalRKeysResult> {
    return pulumi.output(args).apply((a: any) => listSignalRKeys(a, opts))
}

export interface ListSignalRKeysOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}