import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns an attached database configuration.
 */
export function getKustoPoolAttachedDatabaseConfiguration(args: GetKustoPoolAttachedDatabaseConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetKustoPoolAttachedDatabaseConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:getKustoPoolAttachedDatabaseConfiguration", {
        "attachedDatabaseConfigurationName": args.attachedDatabaseConfigurationName,
        "kustoPoolName": args.kustoPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetKustoPoolAttachedDatabaseConfigurationArgs {
    /**
     * The name of the attached database configuration.
     */
    attachedDatabaseConfigurationName: string;
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: string;
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
 * Class representing an attached database configuration.
 */
export interface GetKustoPoolAttachedDatabaseConfigurationResult {
    /**
     * The list of databases from the clusterResourceId which are currently attached to the kusto pool.
     */
    readonly attachedDatabaseNames: string[];
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    readonly databaseName: string;
    /**
     * The default principals modification kind
     */
    readonly defaultPrincipalsModificationKind: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The resource id of the kusto pool where the databases you would like to attach reside.
     */
    readonly kustoPoolResourceId: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Table level sharing specifications
     */
    readonly tableLevelSharingProperties?: types.outputs.TableLevelSharingPropertiesResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns an attached database configuration.
 */
export function getKustoPoolAttachedDatabaseConfigurationOutput(args: GetKustoPoolAttachedDatabaseConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKustoPoolAttachedDatabaseConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getKustoPoolAttachedDatabaseConfiguration(a, opts))
}

export interface GetKustoPoolAttachedDatabaseConfigurationOutputArgs {
    /**
     * The name of the attached database configuration.
     */
    attachedDatabaseConfigurationName: pulumi.Input<string>;
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}