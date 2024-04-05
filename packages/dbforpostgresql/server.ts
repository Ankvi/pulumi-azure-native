import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a server.
 * Azure REST API version: 2022-12-01. Prior API version in Azure Native 1.x: 2017-12-01.
 *
 * Other available API versions: 2017-12-01, 2017-12-01-preview, 2020-02-14-preview, 2021-04-10-privatepreview, 2021-06-15-privatepreview, 2022-03-08-preview, 2023-03-01-preview, 2023-06-01-preview, 2023-12-01-preview.
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
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:Server';

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
     * AuthConfig properties of a server.
     */
    public readonly authConfig!: pulumi.Output<types.outputs.AuthConfigResponse | undefined>;
    /**
     * availability zone information of the server.
     */
    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    /**
     * Backup properties of a server.
     */
    public readonly backup!: pulumi.Output<types.outputs.BackupResponse | undefined>;
    /**
     * Data encryption properties of a server.
     */
    public readonly dataEncryption!: pulumi.Output<types.outputs.DataEncryptionResponse | undefined>;
    /**
     * The fully qualified domain name of a server.
     */
    public /*out*/ readonly fullyQualifiedDomainName!: pulumi.Output<string>;
    /**
     * High availability properties of a server.
     */
    public readonly highAvailability!: pulumi.Output<types.outputs.HighAvailabilityResponse | undefined>;
    /**
     * Describes the identity of the application.
     */
    public readonly identity!: pulumi.Output<types.outputs.UserAssignedIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maintenance window properties of a server.
     */
    public readonly maintenanceWindow!: pulumi.Output<types.outputs.MaintenanceWindowResponse | undefined>;
    /**
     * The minor version of the server.
     */
    public /*out*/ readonly minorVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server.
     */
    public readonly network!: pulumi.Output<types.outputs.NetworkResponse | undefined>;
    /**
     * Replicas allowed for a server.
     */
    public /*out*/ readonly replicaCapacity!: pulumi.Output<number>;
    /**
     * Replication role of the server
     */
    public readonly replicationRole!: pulumi.Output<string | undefined>;
    /**
     * The SKU (pricing tier) of the server.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica'. This property is returned only for Replica server
     */
    public readonly sourceServerResourceId!: pulumi.Output<string | undefined>;
    /**
     * A state of a server that is visible to user.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Storage properties of a server.
     */
    public readonly storage!: pulumi.Output<types.outputs.StorageResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
            resourceInputs["authConfig"] = args ? (args.authConfig ? pulumi.output(args.authConfig).apply(types.inputs.authConfigArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["availabilityZone"] = (args ? args.availabilityZone : undefined) ?? "";
            resourceInputs["backup"] = args ? (args.backup ? pulumi.output(args.backup).apply(types.inputs.backupArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["createMode"] = args ? args.createMode : undefined;
            resourceInputs["dataEncryption"] = args ? args.dataEncryption : undefined;
            resourceInputs["highAvailability"] = args ? (args.highAvailability ? pulumi.output(args.highAvailability).apply(types.inputs.highAvailabilityArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceWindow"] = args ? (args.maintenanceWindow ? pulumi.output(args.maintenanceWindow).apply(types.inputs.maintenanceWindowArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["pointInTimeUTC"] = args ? args.pointInTimeUTC : undefined;
            resourceInputs["replicationRole"] = args ? args.replicationRole : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["sourceServerResourceId"] = args ? args.sourceServerResourceId : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["minorVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["replicaCapacity"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["authConfig"] = undefined /*out*/;
            resourceInputs["availabilityZone"] = undefined /*out*/;
            resourceInputs["backup"] = undefined /*out*/;
            resourceInputs["dataEncryption"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["highAvailability"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceWindow"] = undefined /*out*/;
            resourceInputs["minorVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["network"] = undefined /*out*/;
            resourceInputs["replicaCapacity"] = undefined /*out*/;
            resourceInputs["replicationRole"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["sourceServerResourceId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20200214preview:Server" }, { type: "azure-native:dbforpostgresql/v20200214privatepreview:Server" }, { type: "azure-native:dbforpostgresql/v20210410privatepreview:Server" }, { type: "azure-native:dbforpostgresql/v20210601:Server" }, { type: "azure-native:dbforpostgresql/v20210601preview:Server" }, { type: "azure-native:dbforpostgresql/v20210615privatepreview:Server" }, { type: "azure-native:dbforpostgresql/v20220120preview:Server" }, { type: "azure-native:dbforpostgresql/v20220308preview:Server" }, { type: "azure-native:dbforpostgresql/v20221201:Server" }, { type: "azure-native:dbforpostgresql/v20230301preview:Server" }, { type: "azure-native:dbforpostgresql/v20230601preview:Server" }, { type: "azure-native:dbforpostgresql/v20231201preview:Server" }] };
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
     * AuthConfig properties of a server.
     */
    authConfig?: pulumi.Input<types.inputs.AuthConfigArgs>;
    /**
     * availability zone information of the server.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * Backup properties of a server.
     */
    backup?: pulumi.Input<types.inputs.BackupArgs>;
    /**
     * The mode to create a new PostgreSQL server.
     */
    createMode?: pulumi.Input<string | types.enums.CreateMode>;
    /**
     * Data encryption properties of a server.
     */
    dataEncryption?: pulumi.Input<types.inputs.DataEncryptionArgs>;
    /**
     * High availability properties of a server.
     */
    highAvailability?: pulumi.Input<types.inputs.HighAvailabilityArgs>;
    /**
     * Describes the identity of the application.
     */
    identity?: pulumi.Input<types.inputs.UserAssignedIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Maintenance window properties of a server.
     */
    maintenanceWindow?: pulumi.Input<types.inputs.MaintenanceWindowArgs>;
    /**
     * Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server.
     */
    network?: pulumi.Input<types.inputs.NetworkArgs>;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore'.
     */
    pointInTimeUTC?: pulumi.Input<string>;
    /**
     * Replication role of the server
     */
    replicationRole?: pulumi.Input<string | types.enums.ReplicationRole>;
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
     * The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica'. This property is returned only for Replica server
     */
    sourceServerResourceId?: pulumi.Input<string>;
    /**
     * Storage properties of a server.
     */
    storage?: pulumi.Input<types.inputs.StorageArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * PostgreSQL Server version.
     */
    version?: pulumi.Input<string | types.enums.ServerVersion>;
}