import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Migrate Project.
 * Azure REST API version: 2019-10-01. Prior API version in Azure Native 1.x: 2019-10-01.
 *
 * Other available API versions: 2018-02-02.
 */
export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:Project';

    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Project {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }

    /**
     * For optimistic concurrency control.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Azure location in which project is created.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the project.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the project.
     */
    public readonly properties!: pulumi.Output<types.outputs.ProjectPropertiesResponse>;
    /**
     * Tags provided by Azure Tagging service.
     */
    public readonly tags!: pulumi.Output<any | undefined>;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects].
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20191001:Project" }, { type: "azure-native:migrate/v20230315:Project" }, { type: "azure-native:migrate/v20230401preview:Project" }, { type: "azure-native:migrate/v20230501preview:Project" }, { type: "azure-native:migrate/v20230909preview:Project" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Project.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * For optimistic concurrency control.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Azure location in which project is created.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName?: pulumi.Input<string>;
    /**
     * Properties of the project.
     */
    properties?: pulumi.Input<types.inputs.ProjectPropertiesArgs>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags provided by Azure Tagging service.
     */
    tags?: any;
}