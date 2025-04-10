import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Distributed availability group between box and Sql Managed Instance.
 *
 * Uses Azure REST API version 2021-11-01. In version 1.x of the Azure Native provider, it used API version 2021-05-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export class DistributedAvailabilityGroup extends pulumi.CustomResource {
    /**
     * Get an existing DistributedAvailabilityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DistributedAvailabilityGroup {
        return new DistributedAvailabilityGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:DistributedAvailabilityGroup';

    /**
     * Returns true if the given object is an instance of DistributedAvailabilityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DistributedAvailabilityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DistributedAvailabilityGroup.__pulumiType;
    }

    /**
     * The distributed availability group id
     */
    public /*out*/ readonly distributedAvailabilityGroupId!: pulumi.Output<string>;
    /**
     * The last hardened lsn
     */
    public /*out*/ readonly lastHardenedLsn!: pulumi.Output<string>;
    /**
     * The link state
     */
    public /*out*/ readonly linkState!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The primary availability group name
     */
    public readonly primaryAvailabilityGroupName!: pulumi.Output<string | undefined>;
    /**
     * The replication mode of a distributed availability group. Parameter will be ignored during link creation.
     */
    public readonly replicationMode!: pulumi.Output<string | undefined>;
    /**
     * The secondary availability group name
     */
    public readonly secondaryAvailabilityGroupName!: pulumi.Output<string | undefined>;
    /**
     * The source endpoint
     */
    public readonly sourceEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The source replica id
     */
    public /*out*/ readonly sourceReplicaId!: pulumi.Output<string>;
    /**
     * The name of the target database
     */
    public readonly targetDatabase!: pulumi.Output<string | undefined>;
    /**
     * The target replica id
     */
    public /*out*/ readonly targetReplicaId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DistributedAvailabilityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DistributedAvailabilityGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["distributedAvailabilityGroupName"] = args ? args.distributedAvailabilityGroupName : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["primaryAvailabilityGroupName"] = args ? args.primaryAvailabilityGroupName : undefined;
            resourceInputs["replicationMode"] = args ? args.replicationMode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secondaryAvailabilityGroupName"] = args ? args.secondaryAvailabilityGroupName : undefined;
            resourceInputs["sourceEndpoint"] = args ? args.sourceEndpoint : undefined;
            resourceInputs["targetDatabase"] = args ? args.targetDatabase : undefined;
            resourceInputs["distributedAvailabilityGroupId"] = undefined /*out*/;
            resourceInputs["lastHardenedLsn"] = undefined /*out*/;
            resourceInputs["linkState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sourceReplicaId"] = undefined /*out*/;
            resourceInputs["targetReplicaId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["distributedAvailabilityGroupId"] = undefined /*out*/;
            resourceInputs["lastHardenedLsn"] = undefined /*out*/;
            resourceInputs["linkState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["primaryAvailabilityGroupName"] = undefined /*out*/;
            resourceInputs["replicationMode"] = undefined /*out*/;
            resourceInputs["secondaryAvailabilityGroupName"] = undefined /*out*/;
            resourceInputs["sourceEndpoint"] = undefined /*out*/;
            resourceInputs["sourceReplicaId"] = undefined /*out*/;
            resourceInputs["targetDatabase"] = undefined /*out*/;
            resourceInputs["targetReplicaId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20210501preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20210801preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20211101:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20211101preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20220201preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20220501preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20220801preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20221101preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20230201preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20230501preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20230801:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20230801preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20240501preview:DistributedAvailabilityGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DistributedAvailabilityGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DistributedAvailabilityGroup resource.
 */
export interface DistributedAvailabilityGroupArgs {
    /**
     * The distributed availability group name.
     */
    distributedAvailabilityGroupName?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The primary availability group name
     */
    primaryAvailabilityGroupName?: pulumi.Input<string>;
    /**
     * The replication mode of a distributed availability group. Parameter will be ignored during link creation.
     */
    replicationMode?: pulumi.Input<string | types.enums.ReplicationMode>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The secondary availability group name
     */
    secondaryAvailabilityGroupName?: pulumi.Input<string>;
    /**
     * The source endpoint
     */
    sourceEndpoint?: pulumi.Input<string>;
    /**
     * The name of the target database
     */
    targetDatabase?: pulumi.Input<string>;
}