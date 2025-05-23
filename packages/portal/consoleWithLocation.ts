import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cloud shell console
 *
 * Uses Azure REST API version 2018-10-01. In version 2.x of the Azure Native provider, it used API version 2018-10-01.
 */
export class ConsoleWithLocation extends pulumi.CustomResource {
    /**
     * Get an existing ConsoleWithLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConsoleWithLocation {
        return new ConsoleWithLocation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:portal:ConsoleWithLocation';

    /**
     * Returns true if the given object is an instance of ConsoleWithLocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConsoleWithLocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConsoleWithLocation.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Cloud shell console properties.
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.ConsolePropertiesResponse>;

    /**
     * Create a ConsoleWithLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsoleWithLocationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["consoleName"] = args ? args.consoleName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:portal/v20181001:ConsoleWithLocation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConsoleWithLocation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConsoleWithLocation resource.
 */
export interface ConsoleWithLocationArgs {
    /**
     * The name of the console
     */
    consoleName?: pulumi.Input<string>;
    /**
     * The provider location
     */
    location: pulumi.Input<string>;
}