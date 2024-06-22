import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Replication protection Cluster.
 * Azure REST API version: 2024-02-01.
 *
 * Other available API versions: 2024-04-01.
 */
export class ReplicationProtectionCluster extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationProtectionCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationProtectionCluster {
        return new ReplicationProtectionCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices:ReplicationProtectionCluster';

    /**
     * Returns true if the given object is an instance of ReplicationProtectionCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationProtectionCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationProtectionCluster.__pulumiType;
    }

    /**
     * The name of the protection cluster.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The custom data.
     */
    public readonly properties!: pulumi.Output<types.outputs.ReplicationProtectionClusterPropertiesResponse>;
    /**
     * The Type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReplicationProtectionCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationProtectionClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.protectionContainerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protectionContainerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["protectionContainerName"] = args ? args.protectionContainerName : undefined;
            resourceInputs["replicationProtectionClusterName"] = args ? args.replicationProtectionClusterName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices/v20240201:ReplicationProtectionCluster" }, { type: "azure-native:recoveryservices/v20240401:ReplicationProtectionCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReplicationProtectionCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReplicationProtectionCluster resource.
 */
export interface ReplicationProtectionClusterArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The custom data.
     */
    properties?: pulumi.Input<types.inputs.ReplicationProtectionClusterPropertiesArgs>;
    /**
     * Protection container name.
     */
    protectionContainerName: pulumi.Input<string>;
    /**
     * Replication protection cluster name.
     */
    replicationProtectionClusterName?: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}