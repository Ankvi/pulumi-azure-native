import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets all linked storage account of a specific data source type associated with the specified workspace.
 * Azure REST API version: 2020-08-01.
 */
export function getLinkedStorageAccount(args: GetLinkedStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedStorageAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getLinkedStorageAccount", {
        "dataSourceType": args.dataSourceType,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLinkedStorageAccountArgs {
    /**
     * Linked storage accounts type.
     */
    dataSourceType: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Linked storage accounts top level resource container.
 */
export interface GetLinkedStorageAccountResult {
    /**
     * Linked storage accounts type.
     */
    readonly dataSourceType: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Linked storage accounts resources ids.
     */
    readonly storageAccountIds?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets all linked storage account of a specific data source type associated with the specified workspace.
 * Azure REST API version: 2020-08-01.
 */
export function getLinkedStorageAccountOutput(args: GetLinkedStorageAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLinkedStorageAccountResult> {
    return pulumi.output(args).apply((a: any) => getLinkedStorageAccount(a, opts))
}

export interface GetLinkedStorageAccountOutputArgs {
    /**
     * Linked storage accounts type.
     */
    dataSourceType: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
