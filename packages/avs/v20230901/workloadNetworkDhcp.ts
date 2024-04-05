import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NSX DHCP
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
    public static readonly __pulumiType = 'azure-native:avs/v20230901:WorkloadNetworkDhcp';

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
     * Type of DHCP: SERVER or RELAY.
     */
    public readonly dhcpType!: pulumi.Output<string>;
    /**
     * Display name of the DHCP entity.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
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
     * NSX Segments consuming DHCP.
     */
    public /*out*/ readonly segments!: pulumi.Output<string[]>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            if ((!args || args.dhcpType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dhcpType'");
            }
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dhcpId"] = args ? args.dhcpId : undefined;
            resourceInputs["dhcpType"] = args ? args.dhcpType : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["revision"] = args ? args.revision : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["segments"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dhcpType"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["segments"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20200717preview:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20210101preview:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20210601:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20211201:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20220501:WorkloadNetworkDhcp" }, { type: "azure-native:avs/v20230301:WorkloadNetworkDhcp" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkDhcp.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkDhcp resource.
 */
export interface WorkloadNetworkDhcpArgs {
    /**
     * The ID of the DHCP configuration
     */
    dhcpId?: pulumi.Input<string>;
    /**
     * Type of DHCP: SERVER or RELAY.
     */
    dhcpType: pulumi.Input<string | types.enums.DhcpTypeEnum>;
    /**
     * Display name of the DHCP entity.
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
}