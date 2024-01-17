import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the backup connection resource of virtual instance for SAP.
 * Azure REST API version: 2023-10-01-preview.
 */
export function getACSSBackupConnection(args: GetACSSBackupConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetACSSBackupConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getACSSBackupConnection", {
        "backupName": args.backupName,
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetACSSBackupConnectionArgs {
    /**
     * The name of the backup connection resource of virtual instance for SAP.
     */
    backupName: string;
    /**
     * The name of the connector resource
     */
    connectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Define the backup connection resource of virtual instance for SAP..
 */
export interface GetACSSBackupConnectionResult {
    /**
     * Information about the recovery services vault and backup policy used for backup.
     */
    readonly backupData?: types.outputs.HanaBackupDataResponse | types.outputs.SqlBackupDataResponse | types.outputs.VMBackupDataResponse;
    /**
     * Defines the errors related to backup connection resource of virtual instance for SAP.
     */
    readonly errors: types.outputs.ConnectorErrorDefinitionResponse;
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
    /**
     * Defines the provisioning states.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the backup connection resource of virtual instance for SAP.
 * Azure REST API version: 2023-10-01-preview.
 */
export function getACSSBackupConnectionOutput(args: GetACSSBackupConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetACSSBackupConnectionResult> {
    return pulumi.output(args).apply((a: any) => getACSSBackupConnection(a, opts))
}

export interface GetACSSBackupConnectionOutputArgs {
    /**
     * The name of the backup connection resource of virtual instance for SAP.
     */
    backupName: pulumi.Input<string>;
    /**
     * The name of the connector resource
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}