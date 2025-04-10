import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX DHCP
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2020-07-17-preview.
 *
 * Other available API versions: 2021-01-01-preview, 2023-03-01, 2023-09-01.
 */
export class WorkloadNetworkDhcp extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadNetworkDhcp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadNetworkDhcp {
        return new WorkloadNetworkDhcp(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:WorkloadNetworkDhcp';

    /**
     * Returns true if the given object is an instance of WorkloadNetworkDhcp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadNetworkDhcp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadNetworkDhcp.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * DHCP properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.WorkloadNetworkDhcpRelayResponse | types.outputs.WorkloadNetworkDhcpServerResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadNetworkDhcp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadNetworkDhcpArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dhcpId"] = args ? args.dhcpId : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200717preview:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20210101preview:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20210601:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20211201:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20220501:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20230301:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20230901:WorkloadNetworkDhcp" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkDhcp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkDhcp resource.
 */
export interface WorkloadNetworkDhcpArgs {
    /**
     * NSX DHCP identifier. Generally the same as the DHCP display name
     */
    dhcpId?: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * DHCP properties.
     */
    properties?: pulumi.Input<types.inputs.WorkloadNetworkDhcpRelayArgs | types.inputs.WorkloadNetworkDhcpServerArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}