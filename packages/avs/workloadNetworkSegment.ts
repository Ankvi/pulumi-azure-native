import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX Segment
 * Azure REST API version: 2022-05-01. Prior API version in Azure Native 1.x: 2020-07-17-preview.
 *
 * Other available API versions: 2023-03-01.
 */
export class WorkloadNetworkSegment extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadNetworkSegment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadNetworkSegment {
        return new WorkloadNetworkSegment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:WorkloadNetworkSegment';

    /**
     * Returns true if the given object is an instance of WorkloadNetworkSegment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadNetworkSegment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadNetworkSegment.__pulumiType;
    }

    /**
     * Gateway which to connect segment to.
     */
    public readonly connectedGateway!: pulumi.Output<string | undefined>;
    /**
     * Display name of the segment.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Port Vif which segment is associated with.
     */
    public /*out*/ readonly portVif!: pulumi.Output<types.outputs.WorkloadNetworkSegmentPortVifResponse[]>;
    /**
     * The provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * NSX revision number.
     */
    public readonly revision!: pulumi.Output<number | undefined>;
    /**
     * Segment status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Subnet which to connect segment to.
     */
    public readonly subnet!: pulumi.Output<types.outputs.WorkloadNetworkSegmentSubnetResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadNetworkSegment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadNetworkSegmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectedGateway"] = args ? args.connectedGateway : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["revision"] = args ? args.revision : undefined;
            resourceInputs["segmentId"] = args ? args.segmentId : undefined;
            resourceInputs["subnet"] = args ? args.subnet : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["portVif"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectedGateway"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["portVif"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200717preview:WorkloadNetworkSegment" }, { type: "azure-native:avs/v20210101preview:WorkloadNetworkSegment" }, { type: "azure-native:avs/v20210601:WorkloadNetworkSegment" }, { type: "azure-native:avs/v20211201:WorkloadNetworkSegment" }, { type: "azure-native:avs/v20220501:WorkloadNetworkSegment" }, { type: "azure-native:avs/v20230301:WorkloadNetworkSegment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkSegment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkSegment resource.
 */
export interface WorkloadNetworkSegmentArgs {
    /**
     * Gateway which to connect segment to.
     */
    connectedGateway?: pulumi.Input<string>;
    /**
     * Display name of the segment.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * NSX revision number.
     */
    revision?: pulumi.Input<number>;
    /**
     * NSX Segment identifier. Generally the same as the Segment's display name
     */
    segmentId?: pulumi.Input<string>;
    /**
     * Subnet which to connect segment to.
     */
    subnet?: pulumi.Input<types.inputs.WorkloadNetworkSegmentSubnetArgs>;
}