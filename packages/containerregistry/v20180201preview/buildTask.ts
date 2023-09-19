import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The build task that has the resource properties and all build items. The build task will have all information to schedule a build against it.
 */
export class BuildTask extends pulumi.CustomResource {
    /**
     * Get an existing BuildTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BuildTask {
        return new BuildTask(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20180201preview:BuildTask';

    /**
     * Returns true if the given object is an instance of BuildTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BuildTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BuildTask.__pulumiType;
    }

    /**
     * The alternative updatable name for a build task.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * The creation date of build task.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The platform properties against which the build has to happen.
     */
    public readonly platform!: pulumi.Output<types.outputs.PlatformPropertiesResponse>;
    /**
     * The provisioning state of the build task.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The properties that describes the source(code) for the build task.
     */
    public readonly sourceRepository!: pulumi.Output<types.outputs.SourceRepositoryPropertiesResponse>;
    /**
     * The current status of build task.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Build timeout in seconds.
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BuildTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BuildTaskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.alias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alias'");
            }
            if ((!args || args.platform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'platform'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceRepository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceRepository'");
            }
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["buildTaskName"] = args ? args.buildTaskName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceRepository"] = args ? (args.sourceRepository ? pulumi.output(args.sourceRepository).apply(types.inputs.sourceRepositoryPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeout"] = (args ? args.timeout : undefined) ?? 3600;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alias"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platform"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceRepository"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeout"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:BuildTask" }, { type: "azure-native:containerregistry/v20180901:BuildTask" }, { type: "azure-native:containerregistry/v20190401:BuildTask" }, { type: "azure-native:containerregistry/v20190601preview:BuildTask" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BuildTask.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BuildTask resource.
 */
export interface BuildTaskArgs {
    /**
     * The alternative updatable name for a build task.
     */
    alias: pulumi.Input<string>;
    /**
     * The name of the container registry build task.
     */
    buildTaskName?: pulumi.Input<string>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * The platform properties against which the build has to happen.
     */
    platform: pulumi.Input<types.inputs.PlatformPropertiesArgs>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The properties that describes the source(code) for the build task.
     */
    sourceRepository: pulumi.Input<types.inputs.SourceRepositoryPropertiesArgs>;
    /**
     * The current status of build task.
     */
    status?: pulumi.Input<string | types.enums.BuildTaskStatus>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Build timeout in seconds.
     */
    timeout?: pulumi.Input<number>;
}
