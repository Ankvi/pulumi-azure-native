import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the move collection.
 *
 * Uses Azure REST API version 2022-08-01. In version 1.x of the Azure Native provider, it used API version 2021-01-01.
 *
 * Other available API versions: 2023-08-01.
 */
export class MoveCollection extends pulumi.CustomResource {
    /**
     * Get an existing MoveCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MoveCollection {
        return new MoveCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:MoveCollection';

    /**
     * Returns true if the given object is an instance of MoveCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MoveCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MoveCollection.__pulumiType;
    }

    /**
     * The etag of the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Defines the MSI properties of the Move Collection.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the move collection properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.MoveCollectionPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MoveCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MoveCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["moveCollectionName"] = args ? args.moveCollectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20191001preview:MoveCollection" }, { type: "azure-native:migrate/v20210101:MoveCollection" }, { type: "azure-native:migrate/v20210801:MoveCollection" }, { type: "azure-native:migrate/v20220801:MoveCollection" }, { type: "azure-native:migrate/v20230801:MoveCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MoveCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MoveCollection resource.
 */
export interface MoveCollectionArgs {
    /**
     * Defines the MSI properties of the Move Collection.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives.
     */
    location?: pulumi.Input<string>;
    /**
     * The Move Collection Name.
     */
    moveCollectionName?: pulumi.Input<string>;
    /**
     * Defines the move collection properties.
     */
    properties?: pulumi.Input<types.inputs.MoveCollectionPropertiesArgs>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}