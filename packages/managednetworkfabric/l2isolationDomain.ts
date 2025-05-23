import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The L2 Isolation Domain resource definition.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum transmission unit. Default value is 1500.
     */
    public readonly mtu!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ARM Resource ID of the Network Fabric.
     */
    public readonly networkFabricId!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
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
     * Vlan Identifier of the Network Fabric. Example: 501.
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
            resourceInputs["mtu"] = (args ? args.mtu : undefined) ?? 1500;
            resourceInputs["networkFabricId"] = args ? args.networkFabricId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
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
     * Name of the L2 Isolation Domain.
     */
    l2IsolationDomainName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Maximum transmission unit. Default value is 1500.
     */
    mtu?: pulumi.Input<number>;
    /**
     * ARM Resource ID of the Network Fabric.
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
     * Vlan Identifier of the Network Fabric. Example: 501.
     */
    vlanId: pulumi.Input<number>;
}