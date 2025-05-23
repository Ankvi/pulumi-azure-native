import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Domain service.
 *
 * Uses Azure REST API version 2022-12-01. In version 2.x of the Azure Native provider, it used API version 2022-12-01.
 */
export class DomainService extends pulumi.CustomResource {
    /**
     * Get an existing DomainService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DomainService {
        return new DomainService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:aad:DomainService';

    /**
     * Returns true if the given object is an instance of DomainService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainService.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration diagnostics data containing latest execution from client.
     */
    public readonly configDiagnostics!: pulumi.Output<types.outputs.ConfigDiagnosticsResponse | undefined>;
    /**
     * Deployment Id
     */
    public /*out*/ readonly deploymentId!: pulumi.Output<string>;
    /**
     * Domain Configuration Type
     */
    public readonly domainConfigurationType!: pulumi.Output<string | undefined>;
    /**
     * The name of the Azure domain that the user would like to deploy Domain Services to.
     */
    public readonly domainName!: pulumi.Output<string | undefined>;
    /**
     * DomainSecurity Settings
     */
    public readonly domainSecuritySettings!: pulumi.Output<types.outputs.DomainSecuritySettingsResponse | undefined>;
    /**
     * Resource etag
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Enabled or Disabled flag to turn on Group-based filtered sync
     */
    public readonly filteredSync!: pulumi.Output<string | undefined>;
    /**
     * Secure LDAP Settings
     */
    public readonly ldapsSettings!: pulumi.Output<types.outputs.LdapsSettingsResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Migration Properties
     */
    public /*out*/ readonly migrationProperties!: pulumi.Output<types.outputs.MigrationPropertiesResponse>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Notification Settings
     */
    public readonly notificationSettings!: pulumi.Output<types.outputs.NotificationSettingsResponse | undefined>;
    /**
     * the current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of ReplicaSets
     */
    public readonly replicaSets!: pulumi.Output<types.outputs.ReplicaSetResponse[] | undefined>;
    /**
     * Resource Forest Settings
     */
    public readonly resourceForestSettings!: pulumi.Output<types.outputs.ResourceForestSettingsResponse | undefined>;
    /**
     * Sku Type
     */
    public readonly sku!: pulumi.Output<string | undefined>;
    /**
     * The unique sync application id of the Azure AD Domain Services deployment.
     */
    public /*out*/ readonly syncApplicationId!: pulumi.Output<string>;
    /**
     * SyncOwner ReplicaSet Id
     */
    public /*out*/ readonly syncOwner!: pulumi.Output<string>;
    /**
     * All or CloudOnly, All users in AAD are synced to AAD DS domain or only users actively syncing in the cloud
     */
    public readonly syncScope!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure Active Directory Tenant Id
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Data Model Version
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a DomainService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["configDiagnostics"] = args ? args.configDiagnostics : undefined;
            resourceInputs["domainConfigurationType"] = args ? args.domainConfigurationType : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["domainSecuritySettings"] = args ? (args.domainSecuritySettings ? pulumi.output(args.domainSecuritySettings).apply(types.inputs.domainSecuritySettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["domainServiceName"] = args ? args.domainServiceName : undefined;
            resourceInputs["filteredSync"] = args ? args.filteredSync : undefined;
            resourceInputs["ldapsSettings"] = args ? (args.ldapsSettings ? pulumi.output(args.ldapsSettings).apply(types.inputs.ldapsSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["notificationSettings"] = args ? args.notificationSettings : undefined;
            resourceInputs["replicaSets"] = args ? args.replicaSets : undefined;
            resourceInputs["resourceForestSettings"] = args ? args.resourceForestSettings : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["syncScope"] = (args ? args.syncScope : undefined) ?? "All";
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["migrationProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncApplicationId"] = undefined /*out*/;
            resourceInputs["syncOwner"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configDiagnostics"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["domainConfigurationType"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["domainSecuritySettings"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["filteredSync"] = undefined /*out*/;
            resourceInputs["ldapsSettings"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["migrationProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationSettings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["replicaSets"] = undefined /*out*/;
            resourceInputs["resourceForestSettings"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["syncApplicationId"] = undefined /*out*/;
            resourceInputs["syncOwner"] = undefined /*out*/;
            resourceInputs["syncScope"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:aad/v20170101:DomainService" }, { type: "azure-native:aad/v20170601:DomainService" }, { type: "azure-native:aad/v20200101:DomainService" }, { type: "azure-native:aad/v20210301:DomainService" }, { type: "azure-native:aad/v20210501:DomainService" }, { type: "azure-native:aad/v20220901:DomainService" }, { type: "azure-native:aad/v20221201:DomainService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DomainService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DomainService resource.
 */
export interface DomainServiceArgs {
    /**
     * Configuration diagnostics data containing latest execution from client.
     */
    configDiagnostics?: pulumi.Input<types.inputs.ConfigDiagnosticsArgs>;
    /**
     * Domain Configuration Type
     */
    domainConfigurationType?: pulumi.Input<string>;
    /**
     * The name of the Azure domain that the user would like to deploy Domain Services to.
     */
    domainName?: pulumi.Input<string>;
    /**
     * DomainSecurity Settings
     */
    domainSecuritySettings?: pulumi.Input<types.inputs.DomainSecuritySettingsArgs>;
    /**
     * The name of the domain service.
     */
    domainServiceName?: pulumi.Input<string>;
    /**
     * Enabled or Disabled flag to turn on Group-based filtered sync
     */
    filteredSync?: pulumi.Input<string | types.enums.FilteredSync>;
    /**
     * Secure LDAP Settings
     */
    ldapsSettings?: pulumi.Input<types.inputs.LdapsSettingsArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Notification Settings
     */
    notificationSettings?: pulumi.Input<types.inputs.NotificationSettingsArgs>;
    /**
     * List of ReplicaSets
     */
    replicaSets?: pulumi.Input<pulumi.Input<types.inputs.ReplicaSetArgs>[]>;
    /**
     * Resource Forest Settings
     */
    resourceForestSettings?: pulumi.Input<types.inputs.ResourceForestSettingsArgs>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sku Type
     */
    sku?: pulumi.Input<string>;
    /**
     * All or CloudOnly, All users in AAD are synced to AAD DS domain or only users actively syncing in the cloud
     */
    syncScope?: pulumi.Input<string | types.enums.SyncScope>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}