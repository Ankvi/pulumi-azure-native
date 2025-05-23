import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the virtualNetwork.
 *
 * Uses Azure REST API version 2023-12-01. In version 2.x of the Azure Native provider, it used API version 2022-07-15-preview.
 *
 * Other available API versions: 2022-07-15-preview, 2023-03-01-preview, 2023-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetwork {
        return new VirtualNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:VirtualNetwork';

    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetwork.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    public /*out*/ readonly customResourceName!: pulumi.Output<string>;
    /**
     * Gets or sets the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Gets or sets the inventory Item ID for the virtual network.
     */
    public readonly inventoryItemId!: pulumi.Output<string | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter Managed Object name for the virtual network.
     */
    public /*out*/ readonly moName!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual network.
     */
    public readonly moRefId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ResourceStatusResponse[]>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets the Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this template resides.
     */
    public readonly vCenterId!: pulumi.Output<string | undefined>;

    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["moRefId"] = args ? args.moRefId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vCenterId"] = args ? args.vCenterId : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["moRefId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vCenterId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20201001preview:VirtualNetwork" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:VirtualNetwork" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:VirtualNetwork" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:VirtualNetwork" }, { type: "azure-native:connectedvmwarevsphere/v20231001:VirtualNetwork" }, { type: "azure-native:connectedvmwarevsphere/v20231201:VirtualNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * Gets or sets the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the inventory Item ID for the virtual network.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the virtual network.
     */
    moRefId?: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this template resides.
     */
    vCenterId?: pulumi.Input<string>;
    /**
     * Name of the virtual network resource.
     */
    virtualNetworkName?: pulumi.Input<string>;
}