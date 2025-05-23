import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a SQL virtual machine group.
 *
 * Uses Azure REST API version 2023-10-01.
 *
 * Other available API versions: 2022-02-01, 2022-07-01-preview, 2022-08-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sqlvirtualmachine [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlVirtualMachineGroup(args: GetSqlVirtualMachineGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlVirtualMachineGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sqlvirtualmachine:getSqlVirtualMachineGroup", {
        "resourceGroupName": args.resourceGroupName,
        "sqlVirtualMachineGroupName": args.sqlVirtualMachineGroupName,
    }, opts);
}

export interface GetSqlVirtualMachineGroupArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL virtual machine group.
     */
    sqlVirtualMachineGroupName: string;
}

/**
 * A SQL virtual machine group.
 */
export interface GetSqlVirtualMachineGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Cluster type.
     */
    readonly clusterConfiguration: string;
    /**
     * Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type.
     */
    readonly clusterManagerType: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning state to track the async operation status.
     */
    readonly provisioningState: string;
    /**
     * Scale type.
     */
    readonly scaleType: string;
    /**
     * SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
     */
    readonly sqlImageOffer?: string;
    /**
     * SQL image sku.
     */
    readonly sqlImageSku?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Cluster Active Directory domain profile.
     */
    readonly wsfcDomainProfile?: types.outputs.WsfcDomainProfileResponse;
}
/**
 * Gets a SQL virtual machine group.
 *
 * Uses Azure REST API version 2023-10-01.
 *
 * Other available API versions: 2022-02-01, 2022-07-01-preview, 2022-08-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sqlvirtualmachine [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlVirtualMachineGroupOutput(args: GetSqlVirtualMachineGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlVirtualMachineGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sqlvirtualmachine:getSqlVirtualMachineGroup", {
        "resourceGroupName": args.resourceGroupName,
        "sqlVirtualMachineGroupName": args.sqlVirtualMachineGroupName,
    }, opts);
}

export interface GetSqlVirtualMachineGroupOutputArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL virtual machine group.
     */
    sqlVirtualMachineGroupName: pulumi.Input<string>;
}