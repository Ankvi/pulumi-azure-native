import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a server group for create.
 */
export class ServerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ServerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerGroup {
        return new ServerGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql/v20201005privatepreview:ServerGroup';

    /**
     * Returns true if the given object is an instance of ServerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerGroup.__pulumiType;
    }

    /**
     * The administrator's login name of servers in server group. Can only be specified when the server is being created (and is required for creation).
     */
    public readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * Availability Zone information of the server group.
     */
    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    /**
     * The backup retention days for server group.
     */
    public readonly backupRetentionDays!: pulumi.Output<number | undefined>;
    /**
     * The Citus version of server group.
     */
    public readonly citusVersion!: pulumi.Output<string | undefined>;
    /**
     * The delegated subnet arguments for a server group.
     */
    public readonly delegatedSubnetArguments!: pulumi.Output<types.outputs.ServerGroupPropertiesResponseDelegatedSubnetArguments | undefined>;
    /**
     * The earliest restore point time (ISO8601 format) for server group.
     */
    public /*out*/ readonly earliestRestoreTime!: pulumi.Output<string>;
    /**
     * If Citus MX is enabled or not for the server group.
     */
    public readonly enableMx!: pulumi.Output<boolean | undefined>;
    /**
     * If shards on coordinator is enabled or not for the server group.
     */
    public readonly enableShardsOnCoordinator!: pulumi.Output<boolean | undefined>;
    /**
     * If ZFS compression is enabled or not for the server group.
     */
    public readonly enableZfs!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maintenance window of a server group.
     */
    public readonly maintenanceWindow!: pulumi.Output<types.outputs.MaintenanceWindowResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The PostgreSQL version of server group.
     */
    public readonly postgresqlVersion!: pulumi.Output<string | undefined>;
    /**
     * The private dns zone arguments for a server group.
     */
    public readonly privateDnsZoneArguments!: pulumi.Output<types.outputs.ServerGroupPropertiesResponsePrivateDnsZoneArguments | undefined>;
    /**
     * The array of read replica server groups.
     */
    public /*out*/ readonly readReplicas!: pulumi.Output<string[]>;
    /**
     * The resource provider type of server group.
     */
    public /*out*/ readonly resourceProviderType!: pulumi.Output<string>;
    /**
     * The list of server role groups.
     */
    public readonly serverRoleGroups!: pulumi.Output<types.outputs.ServerRoleGroupResponse[] | undefined>;
    /**
     * The source server group id for read replica server groups.
     */
    public /*out*/ readonly sourceServerGroup!: pulumi.Output<string>;
    /**
     * Standby Availability Zone information of the server group.
     */
    public readonly standbyAvailabilityZone!: pulumi.Output<string | undefined>;
    /**
     * A state of a server group that is visible to user.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["backupRetentionDays"] = args ? args.backupRetentionDays : undefined;
            resourceInputs["citusVersion"] = args ? args.citusVersion : undefined;
            resourceInputs["createMode"] = args ? args.createMode : undefined;
            resourceInputs["delegatedSubnetArguments"] = args ? args.delegatedSubnetArguments : undefined;
            resourceInputs["enableMx"] = args ? args.enableMx : undefined;
            resourceInputs["enableShardsOnCoordinator"] = args ? args.enableShardsOnCoordinator : undefined;
            resourceInputs["enableZfs"] = args ? args.enableZfs : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceWindow"] = args ? args.maintenanceWindow : undefined;
            resourceInputs["pointInTimeUTC"] = args ? args.pointInTimeUTC : undefined;
            resourceInputs["postgresqlVersion"] = args ? args.postgresqlVersion : undefined;
            resourceInputs["privateDnsZoneArguments"] = args ? args.privateDnsZoneArguments : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverGroupName"] = args ? args.serverGroupName : undefined;
            resourceInputs["serverRoleGroups"] = args ? args.serverRoleGroups : undefined;
            resourceInputs["sourceLocation"] = args ? args.sourceLocation : undefined;
            resourceInputs["sourceResourceGroupName"] = args ? args.sourceResourceGroupName : undefined;
            resourceInputs["sourceServerGroupName"] = args ? args.sourceServerGroupName : undefined;
            resourceInputs["sourceSubscriptionId"] = args ? args.sourceSubscriptionId : undefined;
            resourceInputs["standbyAvailabilityZone"] = args ? args.standbyAvailabilityZone : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["earliestRestoreTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["readReplicas"] = undefined /*out*/;
            resourceInputs["resourceProviderType"] = undefined /*out*/;
            resourceInputs["sourceServerGroup"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["availabilityZone"] = undefined /*out*/;
            resourceInputs["backupRetentionDays"] = undefined /*out*/;
            resourceInputs["citusVersion"] = undefined /*out*/;
            resourceInputs["delegatedSubnetArguments"] = undefined /*out*/;
            resourceInputs["earliestRestoreTime"] = undefined /*out*/;
            resourceInputs["enableMx"] = undefined /*out*/;
            resourceInputs["enableShardsOnCoordinator"] = undefined /*out*/;
            resourceInputs["enableZfs"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceWindow"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["postgresqlVersion"] = undefined /*out*/;
            resourceInputs["privateDnsZoneArguments"] = undefined /*out*/;
            resourceInputs["readReplicas"] = undefined /*out*/;
            resourceInputs["resourceProviderType"] = undefined /*out*/;
            resourceInputs["serverRoleGroups"] = undefined /*out*/;
            resourceInputs["sourceServerGroup"] = undefined /*out*/;
            resourceInputs["standbyAvailabilityZone"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql:ServerGroup" }, { type: "azure-native:dbforpostgresql/v20221108:ServerGroup" }, { type: "azure-native:dbforpostgresql/v20230302preview:ServerGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerGroup resource.
 */
export interface ServerGroupArgs {
    /**
     * The administrator's login name of servers in server group. Can only be specified when the server is being created (and is required for creation).
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The password of the administrator login.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * Availability Zone information of the server group.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The backup retention days for server group.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * The Citus version of server group.
     */
    citusVersion?: pulumi.Input<string | types.enums.CitusVersion>;
    /**
     * The mode to create a new server group.
     */
    createMode?: pulumi.Input<string | types.enums.CreateMode>;
    /**
     * The delegated subnet arguments for a server group.
     */
    delegatedSubnetArguments?: pulumi.Input<types.inputs.ServerGroupPropertiesDelegatedSubnetArgumentsArgs>;
    /**
     * If Citus MX is enabled or not for the server group.
     */
    enableMx?: pulumi.Input<boolean>;
    /**
     * If shards on coordinator is enabled or not for the server group.
     */
    enableShardsOnCoordinator?: pulumi.Input<boolean>;
    /**
     * If ZFS compression is enabled or not for the server group.
     */
    enableZfs?: pulumi.Input<boolean>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Maintenance window of a server group.
     */
    maintenanceWindow?: pulumi.Input<types.inputs.MaintenanceWindowArgs>;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore'
     */
    pointInTimeUTC?: pulumi.Input<string>;
    /**
     * The PostgreSQL version of server group.
     */
    postgresqlVersion?: pulumi.Input<string | types.enums.PostgreSQLVersion>;
    /**
     * The private dns zone arguments for a server group.
     */
    privateDnsZoneArguments?: pulumi.Input<types.inputs.ServerGroupPropertiesPrivateDnsZoneArgumentsArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server group.
     */
    serverGroupName?: pulumi.Input<string>;
    /**
     * The list of server role groups.
     */
    serverRoleGroups?: pulumi.Input<pulumi.Input<types.inputs.ServerRoleGroupArgs>[]>;
    /**
     * The source server group location to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
     */
    sourceLocation?: pulumi.Input<string>;
    /**
     * The source resource group name to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
     */
    sourceResourceGroupName?: pulumi.Input<string>;
    /**
     * The source server group name to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
     */
    sourceServerGroupName?: pulumi.Input<string>;
    /**
     * The source subscription id to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'ReadReplica'
     */
    sourceSubscriptionId?: pulumi.Input<string>;
    /**
     * Standby Availability Zone information of the server group.
     */
    standbyAvailabilityZone?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}