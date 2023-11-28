import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a server.
 */
export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql/v20210410privatepreview:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    public readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * availability Zone information of the server.
     */
    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    /**
     * Status showing whether the data encryption is enabled with customer-managed keys.
     */
    public /*out*/ readonly byokEnforcement!: pulumi.Output<string>;
    public readonly delegatedSubnetArguments!: pulumi.Output<types.outputs.ServerPropertiesResponseDelegatedSubnetArguments | undefined>;
    /**
     * The display name of a server.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified domain name of a server.
     */
    public /*out*/ readonly fullyQualifiedDomainName!: pulumi.Output<string>;
    /**
     * stand by count value can be either enabled or disabled
     */
    public readonly haEnabled!: pulumi.Output<string | undefined>;
    /**
     * A state of a HA server that is visible to user.
     */
    public /*out*/ readonly haState!: pulumi.Output<string>;
    /**
     * The Azure Active Directory identity of the server.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maintenance window of a server.
     */
    public readonly maintenanceWindow!: pulumi.Output<types.outputs.MaintenanceWindowResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from.
     */
    public readonly pointInTimeUTC!: pulumi.Output<string | undefined>;
    public readonly privateDnsZoneArguments!: pulumi.Output<types.outputs.ServerPropertiesResponsePrivateDnsZoneArguments | undefined>;
    /**
     * public network access is enabled or not
     */
    public /*out*/ readonly publicNetworkAccess!: pulumi.Output<string>;
    /**
     * The SKU (pricing tier) of the server.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The resource group name of source PostgreSQL server name to restore from.
     */
    public readonly sourceResourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * The source PostgreSQL server name to restore from.
     */
    public readonly sourceServerName!: pulumi.Output<string | undefined>;
    /**
     * The subscription id of source PostgreSQL server name to restore from.
     */
    public readonly sourceSubscriptionId!: pulumi.Output<string | undefined>;
    /**
     * availability Zone information of the server.
     */
    public /*out*/ readonly standbyAvailabilityZone!: pulumi.Output<string>;
    /**
     * A state of a server that is visible to user.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Storage profile of a server.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * PostgreSQL Server version.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["createMode"] = args ? args.createMode : undefined;
            resourceInputs["delegatedSubnetArguments"] = args ? args.delegatedSubnetArguments : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["haEnabled"] = args ? args.haEnabled : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceWindow"] = args ? args.maintenanceWindow : undefined;
            resourceInputs["pointInTimeUTC"] = args ? args.pointInTimeUTC : undefined;
            resourceInputs["privateDnsZoneArguments"] = args ? args.privateDnsZoneArguments : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["sourceResourceGroupName"] = args ? args.sourceResourceGroupName : undefined;
            resourceInputs["sourceServerName"] = args ? args.sourceServerName : undefined;
            resourceInputs["sourceSubscriptionId"] = args ? args.sourceSubscriptionId : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["byokEnforcement"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["haState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["standbyAvailabilityZone"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["availabilityZone"] = undefined /*out*/;
            resourceInputs["byokEnforcement"] = undefined /*out*/;
            resourceInputs["delegatedSubnetArguments"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["haEnabled"] = undefined /*out*/;
            resourceInputs["haState"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceWindow"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pointInTimeUTC"] = undefined /*out*/;
            resourceInputs["privateDnsZoneArguments"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["sourceResourceGroupName"] = undefined /*out*/;
            resourceInputs["sourceServerName"] = undefined /*out*/;
            resourceInputs["sourceSubscriptionId"] = undefined /*out*/;
            resourceInputs["standbyAvailabilityZone"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql:Server" }, { type: "azure-native:dbforpostgresql/v20200214preview:Server" }, { type: "azure-native:dbforpostgresql/v20200214privatepreview:Server" }, { type: "azure-native:dbforpostgresql/v20210601:Server" }, { type: "azure-native:dbforpostgresql/v20210601preview:Server" }, { type: "azure-native:dbforpostgresql/v20210615privatepreview:Server" }, { type: "azure-native:dbforpostgresql/v20220120preview:Server" }, { type: "azure-native:dbforpostgresql/v20220308preview:Server" }, { type: "azure-native:dbforpostgresql/v20221201:Server" }, { type: "azure-native:dbforpostgresql/v20230301preview:Server" }, { type: "azure-native:dbforpostgresql/v20230601preview:Server" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Server.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The administrator login password (required for server creation).
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * availability Zone information of the server.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The mode to create a new PostgreSQL server.
     */
    createMode?: pulumi.Input<string | types.enums.CreateMode>;
    delegatedSubnetArguments?: pulumi.Input<types.inputs.ServerPropertiesDelegatedSubnetArgumentsArgs>;
    /**
     * The display name of a server.
     */
    displayName?: pulumi.Input<string>;
    /**
     * stand by count value can be either enabled or disabled
     */
    haEnabled?: pulumi.Input<types.enums.HAEnabledEnum>;
    /**
     * The Azure Active Directory identity of the server.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Maintenance window of a server.
     */
    maintenanceWindow?: pulumi.Input<types.inputs.MaintenanceWindowArgs>;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from.
     */
    pointInTimeUTC?: pulumi.Input<string>;
    privateDnsZoneArguments?: pulumi.Input<types.inputs.ServerPropertiesPrivateDnsZoneArgumentsArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName?: pulumi.Input<string>;
    /**
     * The SKU (pricing tier) of the server.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The resource group name of source PostgreSQL server name to restore from.
     */
    sourceResourceGroupName?: pulumi.Input<string>;
    /**
     * The source PostgreSQL server name to restore from.
     */
    sourceServerName?: pulumi.Input<string>;
    /**
     * The subscription id of source PostgreSQL server name to restore from.
     */
    sourceSubscriptionId?: pulumi.Input<string>;
    /**
     * Storage profile of a server.
     */
    storageProfile?: pulumi.Input<types.inputs.StorageProfileArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * PostgreSQL Server version.
     */
    version?: pulumi.Input<string | types.enums.ServerVersion>;
}
