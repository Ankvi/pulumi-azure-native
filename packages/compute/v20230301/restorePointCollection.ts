import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Create or update Restore Point collection parameters.
 */
export class RestorePointCollection extends pulumi.CustomResource {
    /**
     * Get an existing RestorePointCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RestorePointCollection {
        return new RestorePointCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20230301:RestorePointCollection';

    /**
     * Returns true if the given object is an instance of RestorePointCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RestorePointCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RestorePointCollection.__pulumiType;
    }

    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the restore point collection.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The unique id of the restore point collection.
     */
    public /*out*/ readonly restorePointCollectionId!: pulumi.Output<string>;
    /**
     * A list containing all restore points created under this restore point collection.
     */
    public /*out*/ readonly restorePoints!: pulumi.Output<types.outputs.RestorePointResponse[]>;
    /**
     * The properties of the source resource that this restore point collection is created from.
     */
    public readonly source!: pulumi.Output<types.outputs.RestorePointCollectionSourcePropertiesResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RestorePointCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RestorePointCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restorePointCollectionName"] = args ? args.restorePointCollectionName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["restorePointCollectionId"] = undefined /*out*/;
            resourceInputs["restorePoints"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["restorePointCollectionId"] = undefined /*out*/;
            resourceInputs["restorePoints"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:RestorePointCollection" }, { type: "azure-native:compute/v20210301:RestorePointCollection" }, { type: "azure-native:compute/v20210401:RestorePointCollection" }, { type: "azure-native:compute/v20210701:RestorePointCollection" }, { type: "azure-native:compute/v20211101:RestorePointCollection" }, { type: "azure-native:compute/v20220301:RestorePointCollection" }, { type: "azure-native:compute/v20220801:RestorePointCollection" }, { type: "azure-native:compute/v20221101:RestorePointCollection" }, { type: "azure-native:compute/v20230701:RestorePointCollection" }, { type: "azure-native:compute/v20230901:RestorePointCollection" }, { type: "azure-native:compute/v20240301:RestorePointCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RestorePointCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RestorePointCollection resource.
 */
export interface RestorePointCollectionArgs {
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the restore point collection.
     */
    restorePointCollectionName?: pulumi.Input<string>;
    /**
     * The properties of the source resource that this restore point collection is created from.
     */
    source?: pulumi.Input<types.inputs.RestorePointCollectionSourcePropertiesArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}