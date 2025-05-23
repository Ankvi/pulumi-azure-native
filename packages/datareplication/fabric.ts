import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fabric model.
 *
 * Uses Azure REST API version 2021-02-16-preview. In version 2.x of the Azure Native provider, it used API version 2021-02-16-preview.
 *
 * Other available API versions: 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datareplication [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Fabric extends pulumi.CustomResource {
    /**
     * Get an existing Fabric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Fabric {
        return new Fabric(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datareplication:Fabric';

    /**
     * Returns true if the given object is an instance of Fabric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Fabric {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Fabric.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the location of the fabric.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Gets or sets the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Fabric model properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.FabricModelPropertiesResponse>;
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.FabricModelResponseSystemData>;
    /**
     * Gets or sets the resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Fabric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FabricArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datareplication/v20210216preview:Fabric" }, { type: "azure-native:datareplication/v20240901:Fabric" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Fabric.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Fabric resource.
 */
export interface FabricArgs {
    /**
     * The fabric name.
     */
    fabricName?: pulumi.Input<string>;
    /**
     * Gets or sets the location of the fabric.
     */
    location?: pulumi.Input<string>;
    /**
     * Fabric model properties.
     */
    properties: pulumi.Input<types.inputs.FabricModelPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}