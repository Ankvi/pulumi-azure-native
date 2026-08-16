import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Solution data structure
 *
 * Uses Azure REST API version 2023-03-01-preview.
 */
export class UserSolution extends pulumi.CustomResource {
    /**
     * Get an existing UserSolution resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UserSolution {
        return new UserSolution(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:marketplace:UserSolution';

    /**
     * Returns true if the given object is an instance of UserSolution.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserSolution {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserSolution.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    declare public readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    declare public readonly products: pulumi.Output<types.outputs.ProductResponse[] | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a UserSolution resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserSolutionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["displayName"] = args?.displayName;
            resourceInputs["products"] = args?.products;
            resourceInputs["solutionId"] = args?.solutionId;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["products"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:marketplace/v20230301preview:UserSolution" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(UserSolution.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a UserSolution resource.
 */
export interface UserSolutionArgs {
    displayName?: pulumi.Input<string | undefined>;
    products?: pulumi.Input<pulumi.Input<types.inputs.ProductArgs>[] | undefined>;
    /**
     * The solution id
     */
    solutionId?: pulumi.Input<string | undefined>;
}