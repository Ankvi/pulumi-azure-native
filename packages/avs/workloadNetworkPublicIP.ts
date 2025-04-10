import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX Public IP Block
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2021-06-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export class WorkloadNetworkPublicIP extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadNetworkPublicIP resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadNetworkPublicIP {
        return new WorkloadNetworkPublicIP(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:WorkloadNetworkPublicIP';

    /**
     * Returns true if the given object is an instance of WorkloadNetworkPublicIP.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadNetworkPublicIP {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadNetworkPublicIP.__pulumiType;
    }

    /**
     * Display name of the Public IP Block.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Number of Public IPs requested.
     */
    public readonly numberOfPublicIPs!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * CIDR Block of the Public IP Block.
     */
    public /*out*/ readonly publicIPBlock!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadNetworkPublicIP resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadNetworkPublicIPArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["numberOfPublicIPs"] = args ? args.numberOfPublicIPs : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["publicIPId"] = args ? args.publicIPId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPBlock"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfPublicIPs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPBlock"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20210601:WorkloadNetworkPublicIP" }, { type: "azure-native:avs/v20211201:WorkloadNetworkPublicIP" }, { type: "azure-native:avs/v20220501:WorkloadNetworkPublicIP" }, { type: "azure-native:avs/v20230301:WorkloadNetworkPublicIP" }, { type: "azure-native:avs/v20230901:WorkloadNetworkPublicIP" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkPublicIP.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkPublicIP resource.
 */
export interface WorkloadNetworkPublicIPArgs {
    /**
     * Display name of the Public IP Block.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Number of Public IPs requested.
     */
    numberOfPublicIPs?: pulumi.Input<number>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * NSX Public IP Block identifier. Generally the same as the Public IP Block's display name
     */
    publicIPId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}