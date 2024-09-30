import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves an Active Directory connector resource
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01.
 */
export function getActiveDirectoryConnector(args: GetActiveDirectoryConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetActiveDirectoryConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getActiveDirectoryConnector", {
        "activeDirectoryConnectorName": args.activeDirectoryConnectorName,
        "dataControllerName": args.dataControllerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActiveDirectoryConnectorArgs {
    /**
     * The name of the Active Directory connector instance
     */
    activeDirectoryConnectorName: string;
    /**
     * The name of the data controller
     */
    dataControllerName: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
}

/**
 * Active directory connector resource
 */
export interface GetActiveDirectoryConnectorResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * null
     */
    readonly properties: types.outputs.ActiveDirectoryConnectorPropertiesResponse;
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
 * Retrieves an Active Directory connector resource
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01.
 */
export function getActiveDirectoryConnectorOutput(args: GetActiveDirectoryConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActiveDirectoryConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getActiveDirectoryConnector", {
        "activeDirectoryConnectorName": args.activeDirectoryConnectorName,
        "dataControllerName": args.dataControllerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetActiveDirectoryConnectorOutputArgs {
    /**
     * The name of the Active Directory connector instance
     */
    activeDirectoryConnectorName: pulumi.Input<string>;
    /**
     * The name of the data controller
     */
    dataControllerName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
}