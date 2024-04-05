import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a SQL virtual machine.
 */
export function getSqlVirtualMachine(args: GetSqlVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlVirtualMachineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sqlvirtualmachine/v20230101preview:getSqlVirtualMachine", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "sqlVirtualMachineName": args.sqlVirtualMachineName,
    }, opts);
}

export interface GetSqlVirtualMachineArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: string;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL virtual machine.
     */
    sqlVirtualMachineName: string;
}

/**
 * A SQL virtual machine.
 */
export interface GetSqlVirtualMachineResult {
    /**
     * SQL best practices Assessment Settings.
     */
    readonly assessmentSettings?: types.outputs.AssessmentSettingsResponse;
    /**
     * Auto backup settings for SQL Server.
     */
    readonly autoBackupSettings?: types.outputs.AutoBackupSettingsResponse;
    /**
     * Auto patching settings for applying critical security updates to SQL virtual machine.
     */
    readonly autoPatchingSettings?: types.outputs.AutoPatchingSettingsResponse;
    /**
     * Enable automatic upgrade of Sql IaaS extension Agent.
     */
    readonly enableAutomaticUpgrade?: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * DO NOT USE. This value will be deprecated. Azure Active Directory identity of the server.
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * Key vault credential settings.
     */
    readonly keyVaultCredentialSettings?: types.outputs.KeyVaultCredentialSettingsResponse;
    /**
     * SQL IaaS Agent least privilege mode.
     */
    readonly leastPrivilegeMode?: string;
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
     * SQL Server configuration management settings.
     */
    readonly serverConfigurationsManagementSettings?: types.outputs.ServerConfigurationsManagementSettingsResponse;
    /**
     * SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
     */
    readonly sqlImageOffer?: string;
    /**
     * SQL Server edition type.
     */
    readonly sqlImageSku?: string;
    /**
     * SQL Server Management type. NOTE: This parameter is not used anymore. API will automatically detect the Sql Management, refrain from using it.
     */
    readonly sqlManagement?: string;
    /**
     * SQL Server license type.
     */
    readonly sqlServerLicenseType?: string;
    /**
     * ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
     */
    readonly sqlVirtualMachineGroupResourceId?: string;
    /**
     * Storage Configuration Settings.
     */
    readonly storageConfigurationSettings?: types.outputs.StorageConfigurationSettingsResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Troubleshooting status
     */
    readonly troubleshootingStatus: types.outputs.TroubleshootingStatusResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * ARM Resource id of underlying virtual machine created from SQL marketplace image.
     */
    readonly virtualMachineResourceId?: string;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    readonly wsfcDomainCredentials?: types.outputs.WsfcDomainCredentialsResponse;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    readonly wsfcStaticIp?: string;
}
/**
 * Gets a SQL virtual machine.
 */
export function getSqlVirtualMachineOutput(args: GetSqlVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getSqlVirtualMachine(a, opts))
}

export interface GetSqlVirtualMachineOutputArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL virtual machine.
     */
    sqlVirtualMachineName: pulumi.Input<string>;
}