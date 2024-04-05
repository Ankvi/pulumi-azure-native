import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SQL virtual machine.
 */
export class SqlVirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing SqlVirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlVirtualMachine {
        return new SqlVirtualMachine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sqlvirtualmachine/v20230101preview:SqlVirtualMachine';

    /**
     * Returns true if the given object is an instance of SqlVirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlVirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlVirtualMachine.__pulumiType;
    }

    /**
     * SQL best practices Assessment Settings.
     */
    public readonly assessmentSettings!: pulumi.Output<types.outputs.AssessmentSettingsResponse | undefined>;
    /**
     * Auto backup settings for SQL Server.
     */
    public readonly autoBackupSettings!: pulumi.Output<types.outputs.AutoBackupSettingsResponse | undefined>;
    /**
     * Auto patching settings for applying critical security updates to SQL virtual machine.
     */
    public readonly autoPatchingSettings!: pulumi.Output<types.outputs.AutoPatchingSettingsResponse | undefined>;
    /**
     * Enable automatic upgrade of Sql IaaS extension Agent.
     */
    public readonly enableAutomaticUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * DO NOT USE. This value will be deprecated. Azure Active Directory identity of the server.
     */
    public readonly identity!: pulumi.Output<types.outputs.ResourceIdentityResponse | undefined>;
    /**
     * Key vault credential settings.
     */
    public readonly keyVaultCredentialSettings!: pulumi.Output<types.outputs.KeyVaultCredentialSettingsResponse | undefined>;
    /**
     * SQL IaaS Agent least privilege mode.
     */
    public readonly leastPrivilegeMode!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state to track the async operation status.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SQL Server configuration management settings.
     */
    public readonly serverConfigurationsManagementSettings!: pulumi.Output<types.outputs.ServerConfigurationsManagementSettingsResponse | undefined>;
    /**
     * SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
     */
    public readonly sqlImageOffer!: pulumi.Output<string | undefined>;
    /**
     * SQL Server edition type.
     */
    public readonly sqlImageSku!: pulumi.Output<string | undefined>;
    /**
     * SQL Server Management type. NOTE: This parameter is not used anymore. API will automatically detect the Sql Management, refrain from using it.
     */
    public readonly sqlManagement!: pulumi.Output<string | undefined>;
    /**
     * SQL Server license type.
     */
    public readonly sqlServerLicenseType!: pulumi.Output<string | undefined>;
    /**
     * ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
     */
    public readonly sqlVirtualMachineGroupResourceId!: pulumi.Output<string | undefined>;
    /**
     * Storage Configuration Settings.
     */
    public readonly storageConfigurationSettings!: pulumi.Output<types.outputs.StorageConfigurationSettingsResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Troubleshooting status
     */
    public /*out*/ readonly troubleshootingStatus!: pulumi.Output<types.outputs.TroubleshootingStatusResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * ARM Resource id of underlying virtual machine created from SQL marketplace image.
     */
    public readonly virtualMachineResourceId!: pulumi.Output<string | undefined>;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    public readonly wsfcDomainCredentials!: pulumi.Output<types.outputs.WsfcDomainCredentialsResponse | undefined>;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    public readonly wsfcStaticIp!: pulumi.Output<string | undefined>;

    /**
     * Create a SqlVirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlVirtualMachineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["assessmentSettings"] = args ? args.assessmentSettings : undefined;
            resourceInputs["autoBackupSettings"] = args ? args.autoBackupSettings : undefined;
            resourceInputs["autoPatchingSettings"] = args ? (args.autoPatchingSettings ? pulumi.output(args.autoPatchingSettings).apply(types.inputs.autoPatchingSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["enableAutomaticUpgrade"] = (args ? args.enableAutomaticUpgrade : undefined) ?? false;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["keyVaultCredentialSettings"] = args ? args.keyVaultCredentialSettings : undefined;
            resourceInputs["leastPrivilegeMode"] = (args ? args.leastPrivilegeMode : undefined) ?? "NotSet";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverConfigurationsManagementSettings"] = args ? args.serverConfigurationsManagementSettings : undefined;
            resourceInputs["sqlImageOffer"] = args ? args.sqlImageOffer : undefined;
            resourceInputs["sqlImageSku"] = args ? args.sqlImageSku : undefined;
            resourceInputs["sqlManagement"] = args ? args.sqlManagement : undefined;
            resourceInputs["sqlServerLicenseType"] = args ? args.sqlServerLicenseType : undefined;
            resourceInputs["sqlVirtualMachineGroupResourceId"] = args ? args.sqlVirtualMachineGroupResourceId : undefined;
            resourceInputs["sqlVirtualMachineName"] = args ? args.sqlVirtualMachineName : undefined;
            resourceInputs["storageConfigurationSettings"] = args ? (args.storageConfigurationSettings ? pulumi.output(args.storageConfigurationSettings).apply(types.inputs.storageConfigurationSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualMachineResourceId"] = args ? args.virtualMachineResourceId : undefined;
            resourceInputs["wsfcDomainCredentials"] = args ? args.wsfcDomainCredentials : undefined;
            resourceInputs["wsfcStaticIp"] = args ? args.wsfcStaticIp : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["troubleshootingStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentSettings"] = undefined /*out*/;
            resourceInputs["autoBackupSettings"] = undefined /*out*/;
            resourceInputs["autoPatchingSettings"] = undefined /*out*/;
            resourceInputs["enableAutomaticUpgrade"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["keyVaultCredentialSettings"] = undefined /*out*/;
            resourceInputs["leastPrivilegeMode"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serverConfigurationsManagementSettings"] = undefined /*out*/;
            resourceInputs["sqlImageOffer"] = undefined /*out*/;
            resourceInputs["sqlImageSku"] = undefined /*out*/;
            resourceInputs["sqlManagement"] = undefined /*out*/;
            resourceInputs["sqlServerLicenseType"] = undefined /*out*/;
            resourceInputs["sqlVirtualMachineGroupResourceId"] = undefined /*out*/;
            resourceInputs["storageConfigurationSettings"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["troubleshootingStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachineResourceId"] = undefined /*out*/;
            resourceInputs["wsfcDomainCredentials"] = undefined /*out*/;
            resourceInputs["wsfcStaticIp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sqlvirtualmachine:SqlVirtualMachine" }, { type: "azure-native:sqlvirtualmachine/v20170301preview:SqlVirtualMachine" }, { type: "azure-native:sqlvirtualmachine/v20211101preview:SqlVirtualMachine" }, { type: "azure-native:sqlvirtualmachine/v20220201:SqlVirtualMachine" }, { type: "azure-native:sqlvirtualmachine/v20220201preview:SqlVirtualMachine" }, { type: "azure-native:sqlvirtualmachine/v20220701preview:SqlVirtualMachine" }, { type: "azure-native:sqlvirtualmachine/v20220801preview:SqlVirtualMachine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlVirtualMachine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlVirtualMachine resource.
 */
export interface SqlVirtualMachineArgs {
    /**
     * SQL best practices Assessment Settings.
     */
    assessmentSettings?: pulumi.Input<types.inputs.AssessmentSettingsArgs>;
    /**
     * Auto backup settings for SQL Server.
     */
    autoBackupSettings?: pulumi.Input<types.inputs.AutoBackupSettingsArgs>;
    /**
     * Auto patching settings for applying critical security updates to SQL virtual machine.
     */
    autoPatchingSettings?: pulumi.Input<types.inputs.AutoPatchingSettingsArgs>;
    /**
     * Enable automatic upgrade of Sql IaaS extension Agent.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * DO NOT USE. This value will be deprecated. Azure Active Directory identity of the server.
     */
    identity?: pulumi.Input<types.inputs.ResourceIdentityArgs>;
    /**
     * Key vault credential settings.
     */
    keyVaultCredentialSettings?: pulumi.Input<types.inputs.KeyVaultCredentialSettingsArgs>;
    /**
     * SQL IaaS Agent least privilege mode.
     */
    leastPrivilegeMode?: pulumi.Input<string | types.enums.LeastPrivilegeMode>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL Server configuration management settings.
     */
    serverConfigurationsManagementSettings?: pulumi.Input<types.inputs.ServerConfigurationsManagementSettingsArgs>;
    /**
     * SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
     */
    sqlImageOffer?: pulumi.Input<string>;
    /**
     * SQL Server edition type.
     */
    sqlImageSku?: pulumi.Input<string | types.enums.SqlImageSku>;
    /**
     * SQL Server Management type. NOTE: This parameter is not used anymore. API will automatically detect the Sql Management, refrain from using it.
     */
    sqlManagement?: pulumi.Input<string | types.enums.SqlManagementMode>;
    /**
     * SQL Server license type.
     */
    sqlServerLicenseType?: pulumi.Input<string | types.enums.SqlServerLicenseType>;
    /**
     * ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
     */
    sqlVirtualMachineGroupResourceId?: pulumi.Input<string>;
    /**
     * Name of the SQL virtual machine.
     */
    sqlVirtualMachineName?: pulumi.Input<string>;
    /**
     * Storage Configuration Settings.
     */
    storageConfigurationSettings?: pulumi.Input<types.inputs.StorageConfigurationSettingsArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ARM Resource id of underlying virtual machine created from SQL marketplace image.
     */
    virtualMachineResourceId?: pulumi.Input<string>;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    wsfcDomainCredentials?: pulumi.Input<types.inputs.WsfcDomainCredentialsArgs>;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    wsfcStaticIp?: pulumi.Input<string>;
}