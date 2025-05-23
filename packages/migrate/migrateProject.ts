import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Migrate Project REST Resource.
 *
 * Uses Azure REST API version 2018-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-09-01-preview.
 */
export class MigrateProject extends pulumi.CustomResource {
    /**
     * Get an existing MigrateProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MigrateProject {
        return new MigrateProject(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:MigrateProject';

    /**
     * Returns true if the given object is an instance of MigrateProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MigrateProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MigrateProject.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the eTag for concurrency control.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the Azure location in which migrate project is created.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets the name of the migrate project.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the nested properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.MigrateProjectPropertiesResponse>;
    /**
     * Gets or sets the tags.
     */
    public readonly tags!: pulumi.Output<types.outputs.MigrateProjectResponseTags | undefined>;
    /**
     * Handled by resource provider. Type = Microsoft.Migrate/MigrateProject.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MigrateProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MigrateProjectArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["migrateProjectName"] = args ? args.migrateProjectName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20180901preview:MigrateProject" }, { type: "azure-native:migrate/v20200501:MigrateProject" }, { type: "azure-native:migrate/v20200501:MigrateProjectsControllerMigrateProject" }, { type: "azure-native:migrate/v20230101:MigrateProject" }, { type: "azure-native:migrate/v20230101:MigrateProjectsControllerMigrateProject" }, { type: "azure-native:migrate:MigrateProjectsControllerMigrateProject" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MigrateProject.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MigrateProject resource.
 */
export interface MigrateProjectArgs {
    /**
     * Gets or sets the eTag for concurrency control.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Gets or sets the Azure location in which migrate project is created.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName?: pulumi.Input<string>;
    /**
     * Gets or sets the nested properties.
     */
    properties?: pulumi.Input<types.inputs.MigrateProjectPropertiesArgs>;
    /**
     * Name of the Azure Resource Group that migrate project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the tags.
     */
    tags?: pulumi.Input<types.inputs.MigrateProjectTagsArgs>;
}