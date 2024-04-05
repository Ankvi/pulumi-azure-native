import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Solution REST Resource.
 */
export class SolutionsControllerSolution extends pulumi.CustomResource {
    /**
     * Get an existing SolutionsControllerSolution resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SolutionsControllerSolution {
        return new SolutionsControllerSolution(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate/v20230101:SolutionsControllerSolution';

    /**
     * Returns true if the given object is an instance of SolutionsControllerSolution.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SolutionsControllerSolution {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SolutionsControllerSolution.__pulumiType;
    }

    /**
     * Gets or sets the ETAG for optimistic concurrency control.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Gets the name of this REST resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the properties of the solution.
     */
    public readonly properties!: pulumi.Output<types.outputs.SolutionPropertiesResponse>;
    /**
     * Gets the type of this REST resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SolutionsControllerSolution resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SolutionsControllerSolutionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.migrateProjectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'migrateProjectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["migrateProjectName"] = args ? args.migrateProjectName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["solutionName"] = args ? args.solutionName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate:SolutionsControllerSolution" }, { type: "azure-native:migrate/v20180901preview:SolutionsControllerSolution" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SolutionsControllerSolution.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SolutionsControllerSolution resource.
 */
export interface SolutionsControllerSolutionArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Gets or sets the properties of the solution.
     */
    properties?: pulumi.Input<types.inputs.SolutionPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Unique name of a migration solution within a migrate project.
     */
    solutionName?: pulumi.Input<string>;
}