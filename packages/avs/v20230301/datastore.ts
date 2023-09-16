import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A datastore resource
 */
export class Datastore extends pulumi.CustomResource {
    /**
     * Get an existing Datastore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Datastore {
        return new Datastore(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs/v20230301:Datastore';

    /**
     * Returns true if the given object is an instance of Datastore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Datastore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Datastore.__pulumiType;
    }

    /**
     * An iSCSI volume
     */
    public readonly diskPoolVolume!: pulumi.Output<types.outputs.avs.v20230301.DiskPoolVolumeResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * An Azure NetApp Files volume
     */
    public readonly netAppVolume!: pulumi.Output<types.outputs.avs.v20230301.NetAppVolumeResponse | undefined>;
    /**
     * The state of the datastore provisioning
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The operational status of the datastore
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Datastore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatastoreArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["datastoreName"] = args ? args.datastoreName : undefined;
            resourceInputs["diskPoolVolume"] = args ? (args.diskPoolVolume ? pulumi.output(args.diskPoolVolume).apply(types.inputs.avs.v20230301.diskPoolVolumeArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["netAppVolume"] = args ? args.netAppVolume : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["diskPoolVolume"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["netAppVolume"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs:Datastore" }, { type: "azure-native:avs/v20210101preview:Datastore" }, { type: "azure-native:avs/v20210601:Datastore" }, { type: "azure-native:avs/v20211201:Datastore" }, { type: "azure-native:avs/v20220501:Datastore" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Datastore.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Datastore resource.
 */
export interface DatastoreArgs {
    /**
     * Name of the cluster in the private cloud
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the datastore in the private cloud cluster
     */
    datastoreName?: pulumi.Input<string>;
    /**
     * An iSCSI volume
     */
    diskPoolVolume?: pulumi.Input<types.inputs.avs.v20230301.DiskPoolVolumeArgs>;
    /**
     * An Azure NetApp Files volume
     */
    netAppVolume?: pulumi.Input<types.inputs.avs.v20230301.NetAppVolumeArgs>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
