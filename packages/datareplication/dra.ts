import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dra model.
 *
 * Uses Azure REST API version 2021-02-16-preview. In version 2.x of the Azure Native provider, it used API version 2021-02-16-preview.
 */
export class Dra extends pulumi.CustomResource {
    /**
     * Get an existing Dra resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Dra {
        return new Dra(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datareplication:Dra';

    /**
     * Returns true if the given object is an instance of Dra.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dra {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dra.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Dra model properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.DraModelPropertiesResponse>;
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.DraModelResponseSystemData>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Dra resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DraArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["fabricAgentName"] = args ? args.fabricAgentName : undefined;
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datareplication/v20210216preview:Dra" }, { type: "azure-native:datareplication/v20240901:Dra" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Dra.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Dra resource.
 */
export interface DraArgs {
    /**
     * The fabric agent (Dra) name.
     */
    fabricAgentName?: pulumi.Input<string>;
    /**
     * The fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Dra model properties.
     */
    properties: pulumi.Input<types.inputs.DraModelPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}