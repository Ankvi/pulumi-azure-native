import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Distributed availability group between box and Sql Managed Instance.
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
    public static readonly __pulumiType = 'azure-native:sql/v20230201preview:DistributedAvailabilityGroup';

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
     * Databases in the distributed availability group
     */
    public /*out*/ readonly databases!: pulumi.Output<types.outputs.DistributedAvailabilityGroupDatabaseResponse[]>;
    /**
     * ID of the distributed availability group
     */
    public /*out*/ readonly distributedAvailabilityGroupId!: pulumi.Output<string>;
    /**
     * Name of the distributed availability group
     */
    public readonly distributedAvailabilityGroupName!: pulumi.Output<string>;
    /**
     * Managed instance side availability group name
     */
    public /*out*/ readonly instanceAvailabilityGroupName!: pulumi.Output<string>;
    /**
     * Managed instance side link role
     */
    public /*out*/ readonly instanceLinkRole!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * SQL server side availability group name
     */
    public /*out*/ readonly partnerAvailabilityGroupName!: pulumi.Output<string>;
    /**
     * SQL server side endpoint - IP or DNS resolvable name
     */
    public /*out*/ readonly partnerEndpoint!: pulumi.Output<string>;
    /**
     * SQL server side link role
     */
    public /*out*/ readonly partnerLinkRole!: pulumi.Output<string>;
    /**
     * Replication mode of the link
     */
    public readonly replicationMode!: pulumi.Output<string | undefined>;
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
            resourceInputs["databases"] = undefined /*out*/;
            resourceInputs["distributedAvailabilityGroupId"] = undefined /*out*/;
            resourceInputs["instanceAvailabilityGroupName"] = undefined /*out*/;
            resourceInputs["instanceLinkRole"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerAvailabilityGroupName"] = undefined /*out*/;
            resourceInputs["partnerEndpoint"] = undefined /*out*/;
            resourceInputs["partnerLinkRole"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["databases"] = undefined /*out*/;
            resourceInputs["distributedAvailabilityGroupId"] = undefined /*out*/;
            resourceInputs["distributedAvailabilityGroupName"] = undefined /*out*/;
            resourceInputs["instanceAvailabilityGroupName"] = undefined /*out*/;
            resourceInputs["instanceLinkRole"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerAvailabilityGroupName"] = undefined /*out*/;
            resourceInputs["partnerEndpoint"] = undefined /*out*/;
            resourceInputs["partnerLinkRole"] = undefined /*out*/;
            resourceInputs["replicationMode"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20210501preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20210801preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20211101:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20211101preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20220201preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20220501preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20220801preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20221101preview:DistributedAvailabilityGroup" }, { type: "azure-native:sql/v20230501preview:DistributedAvailabilityGroup" }] };
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
    replicationMode?: pulumi.Input<string | types.enums.ReplicationModeType>;
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
