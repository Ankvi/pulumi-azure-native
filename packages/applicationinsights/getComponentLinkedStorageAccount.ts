import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the current linked storage settings for an Application Insights component.
 *
 * Uses Azure REST API version 2020-03-01-preview.
 */
export function getComponentLinkedStorageAccount(args: GetComponentLinkedStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetComponentLinkedStorageAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:applicationinsights:getComponentLinkedStorageAccount", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "storageType": args.storageType,
    }, opts);
}

export interface GetComponentLinkedStorageAccountArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: string;
    /**
     * The type of the Application Insights component data source for the linked storage account.
     */
    storageType: string;
}

/**
 * An Application Insights component linked storage accounts
 */
export interface GetComponentLinkedStorageAccountResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Linked storage account resource ID
     */
    readonly linkedStorageAccount?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the current linked storage settings for an Application Insights component.
 *
 * Uses Azure REST API version 2020-03-01-preview.
 */
export function getComponentLinkedStorageAccountOutput(args: GetComponentLinkedStorageAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetComponentLinkedStorageAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:applicationinsights:getComponentLinkedStorageAccount", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "storageType": args.storageType,
    }, opts);
}

export interface GetComponentLinkedStorageAccountOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The type of the Application Insights component data source for the linked storage account.
     */
    storageType: pulumi.Input<string>;
}