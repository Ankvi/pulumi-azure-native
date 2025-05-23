import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the SAP Database Instance resource.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getSapDatabaseInstance(args: GetSapDatabaseInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSapDatabaseInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSapDatabaseInstance", {
        "databaseInstanceName": args.databaseInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "sapVirtualInstanceName": args.sapVirtualInstanceName,
    }, opts);
}

export interface GetSapDatabaseInstanceArgs {
    /**
     * Database resource name string modeled as parameter for auto generation to work correctly.
     */
    databaseInstanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: string;
}

/**
 * Define the Database resource.
 */
export interface GetSapDatabaseInstanceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Database SID name.
     */
    readonly databaseSid: string;
    /**
     * Database type, that is if the DB is HANA, DB2, Oracle, SAP ASE, Max DB or MS SQL Server.
     */
    readonly databaseType: string;
    /**
     * Defines the errors related to Database resource.
     */
    readonly errors: types.outputs.SAPVirtualInstanceErrorResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Database IP Address.
     */
    readonly ipAddress: string;
    /**
     * The Load Balancer details such as LoadBalancer ID attached to Database Virtual Machines
     */
    readonly loadBalancerDetails: types.outputs.LoadBalancerDetailsResponse;
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
     * Defines the SAP Instance status.
     */
    readonly status: string;
    /**
     * Database subnet.
     */
    readonly subnet: string;
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
    /**
     * The list of virtual machines corresponding to the Database resource.
     */
    readonly vmDetails: types.outputs.DatabaseVmDetailsResponse[];
}
/**
 * Gets the SAP Database Instance resource.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getSapDatabaseInstanceOutput(args: GetSapDatabaseInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSapDatabaseInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSapDatabaseInstance", {
        "databaseInstanceName": args.databaseInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "sapVirtualInstanceName": args.sapVirtualInstanceName,
    }, opts);
}

export interface GetSapDatabaseInstanceOutputArgs {
    /**
     * Database resource name string modeled as parameter for auto generation to work correctly.
     */
    databaseInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: pulumi.Input<string>;
}