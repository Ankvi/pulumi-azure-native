import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cloud shell console
 * Azure REST API version: 2018-10-01. Prior API version in Azure Native 1.x: 2018-10-01.
 */
export class Console extends pulumi.CustomResource {
    /**
     * Get an existing Console resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Console {
        return new Console(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:portal:Console';

    /**
     * Returns true if the given object is an instance of Console.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Console {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Console.__pulumiType;
    }

    /**
     * Cloud shell console properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.ConsolePropertiesResponse>;

    /**
     * Create a Console resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsoleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            resourceInputs["consoleName"] = args ? args.consoleName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
        } else {
            resourceInputs["properties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:portal/v20181001:Console" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Console.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Console resource.
 */
export interface ConsoleArgs {
    /**
     * The name of the console
     */
    consoleName?: pulumi.Input<string>;
    /**
     * Cloud shell properties for creating a console.
     */
    properties: pulumi.Input<types.inputs.ConsoleCreatePropertiesArgs>;
}
