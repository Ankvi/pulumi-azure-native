import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An instance failover group.
 */
export class InstanceFailoverGroup extends pulumi.CustomResource {
    /**
     * Get an existing InstanceFailoverGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InstanceFailoverGroup {
        return new InstanceFailoverGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:InstanceFailoverGroup';

    /**
     * Returns true if the given object is an instance of InstanceFailoverGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstanceFailoverGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstanceFailoverGroup.__pulumiType;
    }

    /**
     * List of managed instance pairs in the failover group.
     */
    public readonly managedInstancePairs!: pulumi.Output<types.outputs.ManagedInstancePairInfoResponse[]>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Partner region information for the failover group.
     */
    public readonly partnerRegions!: pulumi.Output<types.outputs.PartnerRegionInfoResponse[]>;
    /**
     * Read-only endpoint of the failover group instance.
     */
    public readonly readOnlyEndpoint!: pulumi.Output<types.outputs.InstanceFailoverGroupReadOnlyEndpointResponse | undefined>;
    /**
     * Read-write endpoint of the failover group instance.
     */
    public readonly readWriteEndpoint!: pulumi.Output<types.outputs.InstanceFailoverGroupReadWriteEndpointResponse>;
    /**
     * Local replication role of the failover group instance.
     */
    public /*out*/ readonly replicationRole!: pulumi.Output<string>;
    /**
     * Replication state of the failover group instance.
     */
    public /*out*/ readonly replicationState!: pulumi.Output<string>;
    /**
     * Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only.
     */
    public readonly secondaryType!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a InstanceFailoverGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceFailoverGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.locationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locationName'");
            }
            if ((!args || args.managedInstancePairs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstancePairs'");
            }
            if ((!args || args.partnerRegions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partnerRegions'");
            }
            if ((!args || args.readWriteEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'readWriteEndpoint'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["failoverGroupName"] = args ? args.failoverGroupName : undefined;
            resourceInputs["locationName"] = args ? args.locationName : undefined;
            resourceInputs["managedInstancePairs"] = args ? args.managedInstancePairs : undefined;
            resourceInputs["partnerRegions"] = args ? args.partnerRegions : undefined;
            resourceInputs["readOnlyEndpoint"] = args ? args.readOnlyEndpoint : undefined;
            resourceInputs["readWriteEndpoint"] = args ? args.readWriteEndpoint : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secondaryType"] = args ? args.secondaryType : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["replicationRole"] = undefined /*out*/;
            resourceInputs["replicationState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["managedInstancePairs"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerRegions"] = undefined /*out*/;
            resourceInputs["readOnlyEndpoint"] = undefined /*out*/;
            resourceInputs["readWriteEndpoint"] = undefined /*out*/;
            resourceInputs["replicationRole"] = undefined /*out*/;
            resourceInputs["replicationState"] = undefined /*out*/;
            resourceInputs["secondaryType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:InstanceFailoverGroup" }, { type: "azure-native:sql/v20171001preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20200202preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20200801preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20201101preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20210201preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20210501preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20210801preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20211101:InstanceFailoverGroup" }, { type: "azure-native:sql/v20211101preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20220201preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20220501preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20220801preview:InstanceFailoverGroup" }, { type: "azure-native:sql/v20230201preview:InstanceFailoverGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InstanceFailoverGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InstanceFailoverGroup resource.
 */
export interface InstanceFailoverGroupArgs {
    /**
     * The name of the failover group.
     */
    failoverGroupName?: pulumi.Input<string>;
    /**
     * The name of the region where the resource is located.
     */
    locationName: pulumi.Input<string>;
    /**
     * List of managed instance pairs in the failover group.
     */
    managedInstancePairs: pulumi.Input<pulumi.Input<types.inputs.ManagedInstancePairInfoArgs>[]>;
    /**
     * Partner region information for the failover group.
     */
    partnerRegions: pulumi.Input<pulumi.Input<types.inputs.PartnerRegionInfoArgs>[]>;
    /**
     * Read-only endpoint of the failover group instance.
     */
    readOnlyEndpoint?: pulumi.Input<types.inputs.InstanceFailoverGroupReadOnlyEndpointArgs>;
    /**
     * Read-write endpoint of the failover group instance.
     */
    readWriteEndpoint: pulumi.Input<types.inputs.InstanceFailoverGroupReadWriteEndpointArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only.
     */
    secondaryType?: pulumi.Input<string | types.enums.SecondaryInstanceType>;
}
