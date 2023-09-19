import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Anomaly Security ML Analytics Settings
 */
export class AnomalySecurityMLAnalyticsSettings extends pulumi.CustomResource {
    /**
     * Get an existing AnomalySecurityMLAnalyticsSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AnomalySecurityMLAnalyticsSettings {
        return new AnomalySecurityMLAnalyticsSettings(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230601preview:AnomalySecurityMLAnalyticsSettings';

    /**
     * Returns true if the given object is an instance of AnomalySecurityMLAnalyticsSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AnomalySecurityMLAnalyticsSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AnomalySecurityMLAnalyticsSettings.__pulumiType;
    }

    /**
     * The anomaly settings version of the Anomaly security ml analytics settings that dictates whether job version gets updated or not.
     */
    public readonly anomalySettingsVersion!: pulumi.Output<number | undefined>;
    /**
     * The anomaly version of the AnomalySecurityMLAnalyticsSettings.
     */
    public readonly anomalyVersion!: pulumi.Output<string>;
    /**
     * The customizable observations of the AnomalySecurityMLAnalyticsSettings.
     */
    public readonly customizableObservations!: pulumi.Output<any | undefined>;
    /**
     * The description of the SecurityMLAnalyticsSettings.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name for settings created by this SecurityMLAnalyticsSettings.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Determines whether this settings is enabled or disabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The frequency that this SecurityMLAnalyticsSettings will be run.
     */
    public readonly frequency!: pulumi.Output<string>;
    /**
     * Determines whether this anomaly security ml analytics settings is a default settings
     */
    public readonly isDefaultSettings!: pulumi.Output<boolean>;
    /**
     * The kind of security ML analytics settings
     * Expected value is 'Anomaly'.
     */
    public readonly kind!: pulumi.Output<"Anomaly">;
    /**
     * The last time that this SecurityMLAnalyticsSettings has been modified.
     */
    public /*out*/ readonly lastModifiedUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The required data sources for this SecurityMLAnalyticsSettings
     */
    public readonly requiredDataConnectors!: pulumi.Output<types.outputs.SecurityMLAnalyticsSettingsDataSourceResponse[] | undefined>;
    /**
     * The anomaly settings definition Id
     */
    public readonly settingsDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * The anomaly SecurityMLAnalyticsSettings status
     */
    public readonly settingsStatus!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tactics of the SecurityMLAnalyticsSettings
     */
    public readonly tactics!: pulumi.Output<string[] | undefined>;
    /**
     * The techniques of the SecurityMLAnalyticsSettings
     */
    public readonly techniques!: pulumi.Output<string[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AnomalySecurityMLAnalyticsSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnomalySecurityMLAnalyticsSettingsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.anomalyVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'anomalyVersion'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.frequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.isDefaultSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isDefaultSettings'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.settingsStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'settingsStatus'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["anomalySettingsVersion"] = args ? args.anomalySettingsVersion : undefined;
            resourceInputs["anomalyVersion"] = args ? args.anomalyVersion : undefined;
            resourceInputs["customizableObservations"] = args ? args.customizableObservations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["frequency"] = args ? args.frequency : undefined;
            resourceInputs["isDefaultSettings"] = args ? args.isDefaultSettings : undefined;
            resourceInputs["kind"] = "Anomaly";
            resourceInputs["requiredDataConnectors"] = args ? args.requiredDataConnectors : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settingsDefinitionId"] = args ? args.settingsDefinitionId : undefined;
            resourceInputs["settingsResourceName"] = args ? args.settingsResourceName : undefined;
            resourceInputs["settingsStatus"] = args ? args.settingsStatus : undefined;
            resourceInputs["tactics"] = args ? args.tactics : undefined;
            resourceInputs["techniques"] = args ? args.techniques : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["anomalySettingsVersion"] = undefined /*out*/;
            resourceInputs["anomalyVersion"] = undefined /*out*/;
            resourceInputs["customizableObservations"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["frequency"] = undefined /*out*/;
            resourceInputs["isDefaultSettings"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["requiredDataConnectors"] = undefined /*out*/;
            resourceInputs["settingsDefinitionId"] = undefined /*out*/;
            resourceInputs["settingsStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tactics"] = undefined /*out*/;
            resourceInputs["techniques"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20220501preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20220601preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20220701preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20220801preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20220901preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20221001preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20221101:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20221101preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20221201preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20230201:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20230201preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20230301preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20230401preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20230501preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20230701preview:AnomalySecurityMLAnalyticsSettings" }, { type: "azure-native:securityinsights/v20230801preview:AnomalySecurityMLAnalyticsSettings" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AnomalySecurityMLAnalyticsSettings.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AnomalySecurityMLAnalyticsSettings resource.
 */
export interface AnomalySecurityMLAnalyticsSettingsArgs {
    /**
     * The anomaly settings version of the Anomaly security ml analytics settings that dictates whether job version gets updated or not.
     */
    anomalySettingsVersion?: pulumi.Input<number>;
    /**
     * The anomaly version of the AnomalySecurityMLAnalyticsSettings.
     */
    anomalyVersion: pulumi.Input<string>;
    /**
     * The customizable observations of the AnomalySecurityMLAnalyticsSettings.
     */
    customizableObservations?: any;
    /**
     * The description of the SecurityMLAnalyticsSettings.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name for settings created by this SecurityMLAnalyticsSettings.
     */
    displayName: pulumi.Input<string>;
    /**
     * Determines whether this settings is enabled or disabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The frequency that this SecurityMLAnalyticsSettings will be run.
     */
    frequency: pulumi.Input<string>;
    /**
     * Determines whether this anomaly security ml analytics settings is a default settings
     */
    isDefaultSettings: pulumi.Input<boolean>;
    /**
     * The kind of security ML analytics settings
     * Expected value is 'Anomaly'.
     */
    kind: pulumi.Input<"Anomaly">;
    /**
     * The required data sources for this SecurityMLAnalyticsSettings
     */
    requiredDataConnectors?: pulumi.Input<pulumi.Input<types.inputs.SecurityMLAnalyticsSettingsDataSourceArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The anomaly settings definition Id
     */
    settingsDefinitionId?: pulumi.Input<string>;
    /**
     * Security ML Analytics Settings resource name
     */
    settingsResourceName?: pulumi.Input<string>;
    /**
     * The anomaly SecurityMLAnalyticsSettings status
     */
    settingsStatus: pulumi.Input<string | types.enums.SettingsStatus>;
    /**
     * The tactics of the SecurityMLAnalyticsSettings
     */
    tactics?: pulumi.Input<pulumi.Input<string | types.enums.AttackTactic>[]>;
    /**
     * The techniques of the SecurityMLAnalyticsSettings
     */
    techniques?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
