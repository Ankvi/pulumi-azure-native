import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A server security alert policy.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export class SingleServerServerSecurityAlertPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SingleServerServerSecurityAlertPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SingleServerServerSecurityAlertPolicy {
        return new SingleServerServerSecurityAlertPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:SingleServerServerSecurityAlertPolicy';

    /**
     * Returns true if the given object is an instance of SingleServerServerSecurityAlertPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SingleServerServerSecurityAlertPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SingleServerServerSecurityAlertPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly
     */
    public readonly disabledAlerts!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies that the alert is sent to the account administrators.
     */
    public readonly emailAccountAdmins!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    public readonly emailAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs.
     */
    public readonly retentionDays!: pulumi.Output<number | undefined>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    public readonly storageAccountAccessKey!: pulumi.Output<string | undefined>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    public readonly storageEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SingleServerServerSecurityAlertPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SingleServerServerSecurityAlertPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["disabledAlerts"] = args ? args.disabledAlerts : undefined;
            resourceInputs["emailAccountAdmins"] = args ? args.emailAccountAdmins : undefined;
            resourceInputs["emailAddresses"] = args ? args.emailAddresses : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["securityAlertPolicyName"] = args ? args.securityAlertPolicyName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["storageAccountAccessKey"] = args ? args.storageAccountAccessKey : undefined;
            resourceInputs["storageEndpoint"] = args ? args.storageEndpoint : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["disabledAlerts"] = undefined /*out*/;
            resourceInputs["emailAccountAdmins"] = undefined /*out*/;
            resourceInputs["emailAddresses"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["retentionDays"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageAccountAccessKey"] = undefined /*out*/;
            resourceInputs["storageEndpoint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20171201:ServerSecurityAlertPolicy" }, { type: "azure-native:dbforpostgresql/v20171201:SingleServerServerSecurityAlertPolicy" }, { type: "azure-native:dbforpostgresql/v20171201preview:ServerSecurityAlertPolicy" }, { type: "azure-native:dbforpostgresql/v20171201preview:SingleServerServerSecurityAlertPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SingleServerServerSecurityAlertPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SingleServerServerSecurityAlertPolicy resource.
 */
export interface SingleServerServerSecurityAlertPolicyArgs {
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly
     */
    disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies that the alert is sent to the account administrators.
     */
    emailAccountAdmins?: pulumi.Input<boolean>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * The name of the threat detection policy.
     */
    securityAlertPolicyName?: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled.
     */
    state: pulumi.Input<types.enums.ServerSecurityAlertPolicyState>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    storageEndpoint?: pulumi.Input<string>;
}