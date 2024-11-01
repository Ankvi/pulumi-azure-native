import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a failover group resource
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview.
 */
export function getFailoverGroup(args: GetFailoverGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFailoverGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getFailoverGroup", {
        "failoverGroupName": args.failoverGroupName,
        "resourceGroupName": args.resourceGroupName,
        "sqlManagedInstanceName": args.sqlManagedInstanceName,
    }, opts);
}

export interface GetFailoverGroupArgs {
    /**
     * The name of the Failover Group
     */
    failoverGroupName: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Managed Instance
     */
    sqlManagedInstanceName: string;
}

/**
 * A failover group resource.
 */
export interface GetFailoverGroupResult {
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
    readonly properties: types.outputs.FailoverGroupPropertiesResponse;
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
 * Retrieves a failover group resource
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview.
 */
export function getFailoverGroupOutput(args: GetFailoverGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFailoverGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getFailoverGroup", {
        "failoverGroupName": args.failoverGroupName,
        "resourceGroupName": args.resourceGroupName,
        "sqlManagedInstanceName": args.sqlManagedInstanceName,
    }, opts);
}

export interface GetFailoverGroupOutputArgs {
    /**
     * The name of the Failover Group
     */
    failoverGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Managed Instance
     */
    sqlManagedInstanceName: pulumi.Input<string>;
}