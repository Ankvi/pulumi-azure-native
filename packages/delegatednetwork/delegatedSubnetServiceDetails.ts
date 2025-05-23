import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an instance of a orchestrator.
 *
 * Uses Azure REST API version 2023-06-27-preview. In version 2.x of the Azure Native provider, it used API version 2021-03-15.
 *
 * Other available API versions: 2021-03-15, 2023-05-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native delegatednetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DelegatedSubnetServiceDetails extends pulumi.CustomResource {
    /**
     * Get an existing DelegatedSubnetServiceDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DelegatedSubnetServiceDetails {
        return new DelegatedSubnetServiceDetails(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:delegatednetwork:DelegatedSubnetServiceDetails';

    /**
     * Returns true if the given object is an instance of DelegatedSubnetServiceDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DelegatedSubnetServiceDetails {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DelegatedSubnetServiceDetails.__pulumiType;
    }

    /**
     * Defines prefix size of CIDR blocks allocated to nodes in VnetBlock Mode.
     * Delegated subnet's prefix size should be smaller than this by a minimum of 3.
     */
    public readonly allocationBlockPrefixSize!: pulumi.Output<number | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Properties of the controller.
     */
    public readonly controllerDetails!: pulumi.Output<types.outputs.ControllerDetailsResponse | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current state of dnc delegated subnet resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource guid.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * subnet details
     */
    public readonly subnetDetails!: pulumi.Output<types.outputs.SubnetDetailsResponse | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DelegatedSubnetServiceDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DelegatedSubnetServiceDetailsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allocationBlockPrefixSize"] = args ? args.allocationBlockPrefixSize : undefined;
            resourceInputs["controllerDetails"] = args ? args.controllerDetails : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["subnetDetails"] = args ? args.subnetDetails : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allocationBlockPrefixSize"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["controllerDetails"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["subnetDetails"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:delegatednetwork/v20200808preview:DelegatedSubnetServiceDetails" }, { type: "azure-native:delegatednetwork/v20210315:DelegatedSubnetServiceDetails" }, { type: "azure-native:delegatednetwork/v20230518preview:DelegatedSubnetServiceDetails" }, { type: "azure-native:delegatednetwork/v20230627preview:DelegatedSubnetServiceDetails" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DelegatedSubnetServiceDetails.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DelegatedSubnetServiceDetails resource.
 */
export interface DelegatedSubnetServiceDetailsArgs {
    /**
     * Defines prefix size of CIDR blocks allocated to nodes in VnetBlock Mode.
     * Delegated subnet's prefix size should be smaller than this by a minimum of 3.
     */
    allocationBlockPrefixSize?: pulumi.Input<number>;
    /**
     * Properties of the controller.
     */
    controllerDetails?: pulumi.Input<types.inputs.ControllerDetailsArgs>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * subnet details
     */
    subnetDetails?: pulumi.Input<types.inputs.SubnetDetailsArgs>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}