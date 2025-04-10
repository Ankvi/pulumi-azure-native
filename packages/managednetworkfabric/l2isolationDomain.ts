import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The L2IsolationDomain resource definition.
 *
 * Uses Azure REST API version 2023-02-01-preview. In version 1.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export class L2IsolationDomain extends pulumi.CustomResource {
    /**
     * Get an existing L2IsolationDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): L2IsolationDomain {
        return new L2IsolationDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:L2IsolationDomain';

    /**
     * Returns true if the given object is an instance of L2IsolationDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L2IsolationDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L2IsolationDomain.__pulumiType;
    }

    /**
     * state. Example: Enabled | Disabled. It indicates administrative state of the isolationDomain, whether it is enabled or disabled. If enabled, the configuration is applied on the devices. If disabled, the configuration is removed from the devices
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * List of resources the L2 Isolation Domain is disabled on. Can be either entire NetworkFabric or NetworkRack.
     */
    public /*out*/ readonly disabledOnResources!: pulumi.Output<string[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * maximum transmission unit. Default value is 1500.
     */
    public readonly mtu!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network Fabric ARM resource id.
     */
    public readonly networkFabricId!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * vlanId. Example: 501.
     */
    public readonly vlanId!: pulumi.Output<number>;

    /**
     * Create a L2IsolationDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L2IsolationDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkFabricId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vlanId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlanId'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["l2IsolationDomainName"] = args ? args.l2IsolationDomainName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["networkFabricId"] = args ? args.networkFabricId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["disabledOnResources"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["disabledOnResources"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mtu"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFabricId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vlanId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:L2IsolationDomain" }, { type: "azure-native:managednetworkfabric/v20230615:L2IsolationDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(L2IsolationDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a L2IsolationDomain resource.
 */
export interface L2IsolationDomainArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * Name of the L2 Isolation Domain
     */
    l2IsolationDomainName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * maximum transmission unit. Default value is 1500.
     */
    mtu?: pulumi.Input<number>;
    /**
     * Network Fabric ARM resource id.
     */
    networkFabricId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * vlanId. Example: 501.
     */
    vlanId: pulumi.Input<number>;
}