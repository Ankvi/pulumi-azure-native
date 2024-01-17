import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource information.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2019-05-01.
 *
 * Other available API versions: 2015-11-01, 2023-07-01.
 */
export class Resource extends pulumi.CustomResource {
    /**
     * Get an existing Resource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Resource {
        return new Resource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources:Resource';

    /**
     * Returns true if the given object is an instance of Resource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Resource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Resource.__pulumiType;
    }

    /**
     * Resource extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The kind of the resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * ID of the resource that manages this resource.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The plan of the resource.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * The resource properties.
     */
    public readonly properties!: pulumi.Output<any>;
    /**
     * The SKU of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Resource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.parentResourcePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentResourcePath'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceProviderNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceProviderNamespace'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["parentResourcePath"] = args ? args.parentResourcePath : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["resourceProviderNamespace"] = args ? args.resourceProviderNamespace : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources/v20151101:Resource" }, { type: "azure-native:resources/v20160201:Resource" }, { type: "azure-native:resources/v20160701:Resource" }, { type: "azure-native:resources/v20160901:Resource" }, { type: "azure-native:resources/v20170510:Resource" }, { type: "azure-native:resources/v20180201:Resource" }, { type: "azure-native:resources/v20180501:Resource" }, { type: "azure-native:resources/v20190301:Resource" }, { type: "azure-native:resources/v20190501:Resource" }, { type: "azure-native:resources/v20190510:Resource" }, { type: "azure-native:resources/v20190701:Resource" }, { type: "azure-native:resources/v20190801:Resource" }, { type: "azure-native:resources/v20191001:Resource" }, { type: "azure-native:resources/v20200601:Resource" }, { type: "azure-native:resources/v20200801:Resource" }, { type: "azure-native:resources/v20201001:Resource" }, { type: "azure-native:resources/v20210101:Resource" }, { type: "azure-native:resources/v20210401:Resource" }, { type: "azure-native:resources/v20220901:Resource" }, { type: "azure-native:resources/v20230701:Resource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Resource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Resource resource.
 */
export interface ResourceArgs {
    /**
     * Resource extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The kind of the resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * ID of the resource that manages this resource.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * The parent resource identity.
     */
    parentResourcePath: pulumi.Input<string>;
    /**
     * The plan of the resource.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * The resource properties.
     */
    properties?: any;
    /**
     * The name of the resource group for the resource. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource to create.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The resource type of the resource to create.
     */
    resourceType: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}