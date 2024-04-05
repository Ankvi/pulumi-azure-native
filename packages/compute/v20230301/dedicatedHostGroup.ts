import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the dedicated host group that the dedicated hosts should be assigned to. Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group.
 */
export class DedicatedHostGroup extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHostGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedHostGroup {
        return new DedicatedHostGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20230301:DedicatedHostGroup';

    /**
     * Returns true if the given object is an instance of DedicatedHostGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DedicatedHostGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DedicatedHostGroup.__pulumiType;
    }

    /**
     * Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01.
     */
    public readonly additionalCapabilities!: pulumi.Output<types.outputs.DedicatedHostGroupPropertiesResponseAdditionalCapabilities | undefined>;
    /**
     * A list of references to all dedicated hosts in the dedicated host group.
     */
    public /*out*/ readonly hosts!: pulumi.Output<types.outputs.SubResourceReadOnlyResponse[]>;
    /**
     * The dedicated host group instance view, which has the list of instance view of the dedicated hosts under the dedicated host group.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.DedicatedHostGroupInstanceViewResponse>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Number of fault domains that the host group can span.
     */
    public readonly platformFaultDomainCount!: pulumi.Output<number>;
    /**
     * Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01.
     */
    public readonly supportAutomaticPlacement!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a DedicatedHostGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHostGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.platformFaultDomainCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'platformFaultDomainCount'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalCapabilities"] = args ? args.additionalCapabilities : undefined;
            resourceInputs["hostGroupName"] = args ? args.hostGroupName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["platformFaultDomainCount"] = args ? args.platformFaultDomainCount : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["supportAutomaticPlacement"] = args ? args.supportAutomaticPlacement : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["hosts"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalCapabilities"] = undefined /*out*/;
            resourceInputs["hosts"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platformFaultDomainCount"] = undefined /*out*/;
            resourceInputs["supportAutomaticPlacement"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:DedicatedHostGroup" }, { type: "azure-native:compute/v20190301:DedicatedHostGroup" }, { type: "azure-native:compute/v20190701:DedicatedHostGroup" }, { type: "azure-native:compute/v20191201:DedicatedHostGroup" }, { type: "azure-native:compute/v20200601:DedicatedHostGroup" }, { type: "azure-native:compute/v20201201:DedicatedHostGroup" }, { type: "azure-native:compute/v20210301:DedicatedHostGroup" }, { type: "azure-native:compute/v20210401:DedicatedHostGroup" }, { type: "azure-native:compute/v20210701:DedicatedHostGroup" }, { type: "azure-native:compute/v20211101:DedicatedHostGroup" }, { type: "azure-native:compute/v20220301:DedicatedHostGroup" }, { type: "azure-native:compute/v20220801:DedicatedHostGroup" }, { type: "azure-native:compute/v20221101:DedicatedHostGroup" }, { type: "azure-native:compute/v20230701:DedicatedHostGroup" }, { type: "azure-native:compute/v20230901:DedicatedHostGroup" }, { type: "azure-native:compute/v20240301:DedicatedHostGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DedicatedHostGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DedicatedHostGroup resource.
 */
export interface DedicatedHostGroupArgs {
    /**
     * Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01.
     */
    additionalCapabilities?: pulumi.Input<types.inputs.DedicatedHostGroupPropertiesAdditionalCapabilitiesArgs>;
    /**
     * The name of the dedicated host group.
     */
    hostGroupName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Number of fault domains that the host group can span.
     */
    platformFaultDomainCount: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01.
     */
    supportAutomaticPlacement?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}