import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Association Subresource of Traffic Controller
 *
 * Uses Azure REST API version 2025-01-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-11-01, 2024-05-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicenetworking [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AssociationsInterface extends pulumi.CustomResource {
    /**
     * Get an existing AssociationsInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AssociationsInterface {
        return new AssociationsInterface(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicenetworking:AssociationsInterface';

    /**
     * Returns true if the given object is an instance of AssociationsInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssociationsInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssociationsInterface.__pulumiType;
    }

    /**
     * Association Type
     */
    public readonly associationType!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning State of Traffic Controller Association Resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Association Subnet
     */
    public readonly subnet!: pulumi.Output<types.outputs.AssociationSubnetResponse | undefined>;
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
     * Create a AssociationsInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssociationsInterfaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.associationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'associationType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.trafficControllerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficControllerName'");
            }
            resourceInputs["associationName"] = args ? args.associationName : undefined;
            resourceInputs["associationType"] = args ? args.associationType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnet"] = args ? args.subnet : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trafficControllerName"] = args ? args.trafficControllerName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["associationType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicenetworking/v20221001preview:AssociationsInterface" }, { type: "azure-native:servicenetworking/v20230501preview:AssociationsInterface" }, { type: "azure-native:servicenetworking/v20231101:AssociationsInterface" }, { type: "azure-native:servicenetworking/v20240501preview:AssociationsInterface" }, { type: "azure-native:servicenetworking/v20250101:AssociationsInterface" }, { type: "azure-native:servicenetworking/v20250301preview:AssociationsInterface" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AssociationsInterface.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AssociationsInterface resource.
 */
export interface AssociationsInterfaceArgs {
    /**
     * Name of Association
     */
    associationName?: pulumi.Input<string>;
    /**
     * Association Type
     */
    associationType: pulumi.Input<string | types.enums.AssociationType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Association Subnet
     */
    subnet?: pulumi.Input<types.inputs.AssociationSubnetArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
}