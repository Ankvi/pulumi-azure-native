import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
 *
 * Uses Azure REST API version 2020-03-01. In version 2.x of the Azure Native provider, it used API version 2020-03-01.
 *
 * Other available API versions: 2021-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native streamanalytics [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Function extends pulumi.CustomResource {
    /**
     * Get an existing Function resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Function {
        return new Function(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:streamanalytics:Function';

    /**
     * Returns true if the given object is an instance of Function.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Function {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Function.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The properties that are associated with a function.
     */
    public readonly properties!: pulumi.Output<types.outputs.AggregateFunctionPropertiesResponse | types.outputs.ScalarFunctionPropertiesResponse>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Function resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.jobName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["functionName"] = args ? args.functionName : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:streamanalytics/v20160301:Function" }, { type: "azure-native:streamanalytics/v20170401preview:Function" }, { type: "azure-native:streamanalytics/v20200301:Function" }, { type: "azure-native:streamanalytics/v20211001preview:Function" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Function.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Function resource.
 */
export interface FunctionArgs {
    /**
     * The name of the function.
     */
    functionName?: pulumi.Input<string>;
    /**
     * The name of the streaming job.
     */
    jobName: pulumi.Input<string>;
    /**
     * Resource name
     */
    name?: pulumi.Input<string>;
    /**
     * The properties that are associated with a function.
     */
    properties?: pulumi.Input<types.inputs.AggregateFunctionPropertiesArgs | types.inputs.ScalarFunctionPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}