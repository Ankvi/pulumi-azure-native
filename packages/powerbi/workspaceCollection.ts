import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2016-01-29. In version 2.x of the Azure Native provider, it used API version 2016-01-29.
 */
export class WorkspaceCollection extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceCollection {
        return new WorkspaceCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:powerbi:WorkspaceCollection';

    /**
     * Returns true if the given object is an instance of WorkspaceCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceCollection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Workspace collection name
     */
    public /*out*/ readonly name!: pulumi.Output<string | undefined>;
    /**
     * Properties
     */
    public /*out*/ readonly properties!: pulumi.Output<any>;
    public readonly sku!: pulumi.Output<types.outputs.AzureSkuResponse | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a WorkspaceCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceCollectionName"] = args ? args.workspaceCollectionName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:powerbi/v20160129:WorkspaceCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceCollection resource.
 */
export interface WorkspaceCollectionArgs {
    /**
     * Azure location
     */
    location?: pulumi.Input<string>;
    /**
     * Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    sku?: pulumi.Input<types.inputs.AzureSkuArgs>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Power BI Embedded Workspace Collection name
     */
    workspaceCollectionName?: pulumi.Input<string>;
}