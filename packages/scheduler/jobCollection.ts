import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2016-03-01. Prior API version in Azure Native 1.x: 2016-03-01
 */
export class JobCollection extends pulumi.CustomResource {
    /**
     * Get an existing JobCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobCollection {
        return new JobCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:scheduler:JobCollection';

    /**
     * Returns true if the given object is an instance of JobCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobCollection.__pulumiType;
    }

    /**
     * Gets or sets the storage account location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the job collection resource name.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the job collection properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.scheduler.JobCollectionPropertiesResponse>;
    /**
     * Gets or sets the tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the job collection resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["jobCollectionName"] = args ? args.jobCollectionName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scheduler/v20140801preview:JobCollection" }, { type: "azure-native:scheduler/v20160101:JobCollection" }, { type: "azure-native:scheduler/v20160301:JobCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobCollection resource.
 */
export interface JobCollectionArgs {
    /**
     * The job collection name.
     */
    jobCollectionName?: pulumi.Input<string>;
    /**
     * Gets or sets the storage account location.
     */
    location?: pulumi.Input<string>;
    /**
     * Gets or sets the job collection resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the job collection properties.
     */
    properties?: pulumi.Input<types.inputs.scheduler.JobCollectionPropertiesArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
