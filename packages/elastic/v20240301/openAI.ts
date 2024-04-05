import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capture properties of Open AI resource Integration.
 */
export class OpenAI extends pulumi.CustomResource {
    /**
     * Get an existing OpenAI resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OpenAI {
        return new OpenAI(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:elastic/v20240301:OpenAI';

    /**
     * Returns true if the given object is an instance of OpenAI.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpenAI {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpenAI.__pulumiType;
    }

    /**
     * Name of the integration.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Open AI Integration details.
     */
    public readonly properties!: pulumi.Output<types.outputs.OpenAIIntegrationPropertiesResponse>;
    /**
     * The type of the integration.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OpenAI resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenAIArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.monitorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["integrationName"] = args ? args.integrationName : undefined;
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:elastic:OpenAI" }, { type: "azure-native:elastic/v20240101preview:OpenAI" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OpenAI.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OpenAI resource.
 */
export interface OpenAIArgs {
    /**
     * OpenAI Integration name
     */
    integrationName?: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * Open AI Integration details.
     */
    properties?: pulumi.Input<types.inputs.OpenAIIntegrationPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}