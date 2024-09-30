import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contains information about a database Threat Detection policy.
 * Azure REST API version: 2014-04-01.
 */
export class DatabaseThreatDetectionPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseThreatDetectionPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseThreatDetectionPolicy {
        return new DatabaseThreatDetectionPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:DatabaseThreatDetectionPolicy';

    /**
     * Returns true if the given object is an instance of DatabaseThreatDetectionPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseThreatDetectionPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseThreatDetectionPolicy.__pulumiType;
    }

    /**
     * Specifies the semicolon-separated list of alerts that are disabled, or empty string to disable no alerts. Possible values: Sql_Injection; Sql_Injection_Vulnerability; Access_Anomaly; Data_Exfiltration; Unsafe_Action.
     */
    public readonly disabledAlerts!: pulumi.Output<string | undefined>;
    /**
     * Specifies that the alert is sent to the account administrators.
     */
    public readonly emailAccountAdmins!: pulumi.Output<string | undefined>;
    /**
     * Specifies the semicolon-separated list of e-mail addresses to which the alert is sent.
     */
    public readonly emailAddresses!: pulumi.Output<string | undefined>;
    /**
     * Resource kind.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs.
     */
    public readonly retentionDays!: pulumi.Output<number | undefined>;
    /**
     * Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. If state is Enabled, storageEndpoint is required.
     */
    public readonly storageEndpoint!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies whether to use the default server policy.
     */
    public readonly useServerDefault!: pulumi.Output<string | undefined>;

    /**
     * Create a DatabaseThreatDetectionPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseThreatDetectionPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["disabledAlerts"] = args ? args.disabledAlerts : undefined;
            resourceInputs["emailAccountAdmins"] = args ? args.emailAccountAdmins : undefined;
            resourceInputs["emailAddresses"] = args ? args.emailAddresses : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["securityAlertPolicyName"] = args ? args.securityAlertPolicyName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["storageAccountAccessKey"] = args ? args.storageAccountAccessKey : undefined;
            resourceInputs["storageEndpoint"] = args ? args.storageEndpoint : undefined;
            resourceInputs["useServerDefault"] = args ? args.useServerDefault : undefined;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["disabledAlerts"] = undefined /*out*/;
            resourceInputs["emailAccountAdmins"] = undefined /*out*/;
            resourceInputs["emailAddresses"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["retentionDays"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageEndpoint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useServerDefault"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20140401:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20180601preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20200202preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20200801preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20201101preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20210201preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20210501preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20210801preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20211101:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20211101preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20220201preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20220501preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20220801preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20221101preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20230201preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20230501preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20230801preview:DatabaseThreatDetectionPolicy" }, { type: "azure-native:sql/v20240501preview:DatabaseThreatDetectionPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseThreatDetectionPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseThreatDetectionPolicy resource.
 */
export interface DatabaseThreatDetectionPolicyArgs {
    /**
     * The name of the database for which database Threat Detection policy is defined.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Specifies the semicolon-separated list of alerts that are disabled, or empty string to disable no alerts. Possible values: Sql_Injection; Sql_Injection_Vulnerability; Access_Anomaly; Data_Exfiltration; Unsafe_Action.
     */
    disabledAlerts?: pulumi.Input<string>;
    /**
     * Specifies that the alert is sent to the account administrators.
     */
    emailAccountAdmins?: pulumi.Input<string | types.enums.SecurityAlertPolicyEmailAccountAdmins>;
    /**
     * Specifies the semicolon-separated list of e-mail addresses to which the alert is sent.
     */
    emailAddresses?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * The name of the security alert policy.
     */
    securityAlertPolicyName?: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
     */
    state: pulumi.Input<string | types.enums.SecurityAlertPolicyState>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account. If state is Enabled, storageAccountAccessKey is required.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. If state is Enabled, storageEndpoint is required.
     */
    storageEndpoint?: pulumi.Input<string>;
    /**
     * Specifies whether to use the default server policy.
     */
    useServerDefault?: pulumi.Input<string | types.enums.SecurityAlertPolicyUseServerDefault>;
}