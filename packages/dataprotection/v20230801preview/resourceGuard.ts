import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class ResourceGuard extends pulumi.CustomResource {
    /**
     * Get an existing ResourceGuard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ResourceGuard {
        return new ResourceGuard(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dataprotection/v20230801preview:ResourceGuard';

    /**
     * Returns true if the given object is an instance of ResourceGuard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceGuard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceGuard.__pulumiType;
    }

    /**
     * Optional ETag.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ResourceGuardResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ResourceGuardResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ResourceGuard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceGuardArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuardsName"] = args ? args.resourceGuardsName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dataprotection:ResourceGuard" }, { type: "azure-native:dataprotection/v20210701:ResourceGuard" }, { type: "azure-native:dataprotection/v20211001preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20211201preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20220101:ResourceGuard" }, { type: "azure-native:dataprotection/v20220201preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20220301:ResourceGuard" }, { type: "azure-native:dataprotection/v20220331preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20220401:ResourceGuard" }, { type: "azure-native:dataprotection/v20220501:ResourceGuard" }, { type: "azure-native:dataprotection/v20220901preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20221001preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20221101preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20221201:ResourceGuard" }, { type: "azure-native:dataprotection/v20230101:ResourceGuard" }, { type: "azure-native:dataprotection/v20230401preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20230501:ResourceGuard" }, { type: "azure-native:dataprotection/v20230601preview:ResourceGuard" }, { type: "azure-native:dataprotection/v20230801:ResourceGuard" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ResourceGuard.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ResourceGuard resource.
 */
export interface ResourceGuardArgs {
    /**
     * Optional ETag.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * ResourceGuardResource properties
     */
    properties?: pulumi.Input<types.inputs.ResourceGuardArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of ResourceGuard
     */
    resourceGuardsName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
