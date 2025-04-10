import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance of an Azure ML web service resource.
 *
 * Uses Azure REST API version 2017-01-01. In version 1.x of the Azure Native provider, it used API version 2017-01-01.
 *
 * Other available API versions: 2016-05-01-preview.
 */
export class WebService extends pulumi.CustomResource {
    /**
     * Get an existing WebService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebService {
        return new WebService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearning:WebService';

    /**
     * Returns true if the given object is an instance of WebService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebService.__pulumiType;
    }

    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Contains the property payload that describes the web service.
     */
    public readonly properties!: pulumi.Output<types.outputs.WebServicePropertiesForGraphResponse>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.webServicePropertiesForGraphArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["webServiceName"] = args ? args.webServiceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearning/v20160501preview:WebService" }, { type: "azure-native:machinelearning/v20170101:WebService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebService resource.
 */
export interface WebServiceArgs {
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Contains the property payload that describes the web service.
     */
    properties: pulumi.Input<types.inputs.WebServicePropertiesForGraphArgs>;
    /**
     * Name of the resource group in which the web service is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the web service.
     */
    webServiceName?: pulumi.Input<string>;
}