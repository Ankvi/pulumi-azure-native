import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a server.
 * Azure REST API version: 2018-06-01. Prior API version in Azure Native 1.x: 2018-06-01
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
    public static readonly __pulumiType = 'azure-native:dbformariadb:Server';

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
    public /*out*/ readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * Earliest restore point creation time (ISO8601 format)
     */
    public /*out*/ readonly earliestRestoreDate!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified domain name of a server.
     */
    public /*out*/ readonly fullyQualifiedDomainName!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The master server id of a replica server.
     */
    public /*out*/ readonly masterServerId!: pulumi.Output<string | undefined>;
    /**
     * Enforce a minimal Tls version for the server.
     */
    public /*out*/ readonly minimalTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of private endpoint connections on a server
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.dbformariadb.ServerPrivateEndpointConnectionResponse[]>;
    /**
     * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    public /*out*/ readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The maximum number of replicas that a master server can have.
     */
    public /*out*/ readonly replicaCapacity!: pulumi.Output<number | undefined>;
    /**
     * The replication role of the server.
     */
    public /*out*/ readonly replicationRole!: pulumi.Output<string | undefined>;
    /**
     * The SKU (pricing tier) of the server.
     */
    public readonly sku!: pulumi.Output<types.outputs.dbformariadb.SkuResponse | undefined>;
    /**
     * Enable ssl enforcement or not when connect to server.
     */
    public /*out*/ readonly sslEnforcement!: pulumi.Output<string | undefined>;
    /**
     * Storage profile of a server.
     */
    public /*out*/ readonly storageProfile!: pulumi.Output<types.outputs.dbformariadb.StorageProfileResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A state of a server that is visible to user.
     */
    public /*out*/ readonly userVisibleState!: pulumi.Output<string | undefined>;
    /**
     * Server version.
     */
    public /*out*/ readonly version!: pulumi.Output<string | undefined>;

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
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["earliestRestoreDate"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["masterServerId"] = undefined /*out*/;
            resourceInputs["minimalTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["replicaCapacity"] = undefined /*out*/;
            resourceInputs["replicationRole"] = undefined /*out*/;
            resourceInputs["sslEnforcement"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userVisibleState"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["earliestRestoreDate"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["masterServerId"] = undefined /*out*/;
            resourceInputs["minimalTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["replicaCapacity"] = undefined /*out*/;
            resourceInputs["replicationRole"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["sslEnforcement"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userVisibleState"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbformariadb/v20180601:Server" }, { type: "azure-native:dbformariadb/v20180601preview:Server" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Server.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The location the resource resides in.
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of the server.
     */
    properties: pulumi.Input<types.inputs.dbformariadb.ServerPropertiesForDefaultCreateArgs | types.inputs.dbformariadb.ServerPropertiesForGeoRestoreArgs | types.inputs.dbformariadb.ServerPropertiesForReplicaArgs | types.inputs.dbformariadb.ServerPropertiesForRestoreArgs>;
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
    sku?: pulumi.Input<types.inputs.dbformariadb.SkuArgs>;
    /**
     * Application-specific metadata in the form of key-value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
