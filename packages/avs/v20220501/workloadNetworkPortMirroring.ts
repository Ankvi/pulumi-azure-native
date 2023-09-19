import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX Port Mirroring
 */
export class WorkloadNetworkPortMirroring extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadNetworkPortMirroring resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadNetworkPortMirroring {
        return new WorkloadNetworkPortMirroring(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs/v20220501:WorkloadNetworkPortMirroring';

    /**
     * Returns true if the given object is an instance of WorkloadNetworkPortMirroring.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadNetworkPortMirroring {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadNetworkPortMirroring.__pulumiType;
    }

    /**
     * Destination VM Group.
     */
    public readonly destination!: pulumi.Output<string | undefined>;
    /**
     * Direction of port mirroring profile.
     */
    public readonly direction!: pulumi.Output<string | undefined>;
    /**
     * Display name of the port mirroring profile.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * NSX revision number.
     */
    public readonly revision!: pulumi.Output<number | undefined>;
    /**
     * Source VM Group.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * Port Mirroring Status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadNetworkPortMirroring resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadNetworkPortMirroringArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["portMirroringId"] = args ? args.portMirroringId : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["revision"] = args ? args.revision : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs:WorkloadNetworkPortMirroring" }, { type: "azure-native:avs/v20200717preview:WorkloadNetworkPortMirroring" }, { type: "azure-native:avs/v20210101preview:WorkloadNetworkPortMirroring" }, { type: "azure-native:avs/v20210601:WorkloadNetworkPortMirroring" }, { type: "azure-native:avs/v20211201:WorkloadNetworkPortMirroring" }, { type: "azure-native:avs/v20230301:WorkloadNetworkPortMirroring" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkPortMirroring.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkPortMirroring resource.
 */
export interface WorkloadNetworkPortMirroringArgs {
    /**
     * Destination VM Group.
     */
    destination?: pulumi.Input<string>;
    /**
     * Direction of port mirroring profile.
     */
    direction?: pulumi.Input<string | types.enums.PortMirroringDirectionEnum>;
    /**
     * Display name of the port mirroring profile.
     */
    displayName?: pulumi.Input<string>;
    /**
     * NSX Port Mirroring identifier. Generally the same as the Port Mirroring display name
     */
    portMirroringId?: pulumi.Input<string>;
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
     * Source VM Group.
     */
    source?: pulumi.Input<string>;
}
