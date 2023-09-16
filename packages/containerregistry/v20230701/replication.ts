import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * An object that represents a replication for a container registry.
 */
export class Replication extends pulumi.CustomResource {
    /**
     * Get an existing Replication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Replication {
        return new Replication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230701:Replication';

    /**
     * Returns true if the given object is an instance of Replication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Replication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Replication.__pulumiType;
    }

    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the replication at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies whether the replication's regional endpoint is enabled. Requests will not be routed to a replication whose regional endpoint is disabled, however its data will continue to be synced with other replications.
     */
    public readonly regionEndpointEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The status of the replication at the time the operation was called.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.containerregistry.v20230701.StatusResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.containerregistry.v20230701.SystemDataResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Whether or not zone redundancy is enabled for this container registry replication
     */
    public readonly zoneRedundancy!: pulumi.Output<string | undefined>;

    /**
     * Create a Replication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["regionEndpointEnabled"] = (args ? args.regionEndpointEnabled : undefined) ?? true;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["replicationName"] = args ? args.replicationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundancy"] = (args ? args.zoneRedundancy : undefined) ?? "Disabled";
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["regionEndpointEnabled"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneRedundancy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:Replication" }, { type: "azure-native:containerregistry/v20170601preview:Replication" }, { type: "azure-native:containerregistry/v20171001:Replication" }, { type: "azure-native:containerregistry/v20190501:Replication" }, { type: "azure-native:containerregistry/v20191201preview:Replication" }, { type: "azure-native:containerregistry/v20201101preview:Replication" }, { type: "azure-native:containerregistry/v20210601preview:Replication" }, { type: "azure-native:containerregistry/v20210801preview:Replication" }, { type: "azure-native:containerregistry/v20210901:Replication" }, { type: "azure-native:containerregistry/v20211201preview:Replication" }, { type: "azure-native:containerregistry/v20220201preview:Replication" }, { type: "azure-native:containerregistry/v20221201:Replication" }, { type: "azure-native:containerregistry/v20230101preview:Replication" }, { type: "azure-native:containerregistry/v20230601preview:Replication" }, { type: "azure-native:containerregistry/v20230801preview:Replication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Replication.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Replication resource.
 */
export interface ReplicationArgs {
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies whether the replication's regional endpoint is enabled. Requests will not be routed to a replication whose regional endpoint is disabled, however its data will continue to be synced with other replications.
     */
    regionEndpointEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the replication.
     */
    replicationName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether or not zone redundancy is enabled for this container registry replication
     */
    zoneRedundancy?: pulumi.Input<string | types.enums.v20230701.ZoneRedundancy>;
}
