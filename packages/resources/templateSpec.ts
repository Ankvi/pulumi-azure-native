import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Template Spec object.
 *
 * Uses Azure REST API version 2022-02-01. In version 2.x of the Azure Native provider, it used API version 2022-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2021-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class TemplateSpec extends pulumi.CustomResource {
    /**
     * Get an existing TemplateSpec resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TemplateSpec {
        return new TemplateSpec(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources:TemplateSpec';

    /**
     * Returns true if the given object is an instance of TemplateSpec.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemplateSpec {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemplateSpec.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Template Spec description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Template Spec display name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The Template Spec metadata. Metadata is an open-ended object and is typically a collection of key-value pairs.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * High-level information about the versions within this Template Spec. The keys are the version names. Only populated if the $expand query parameter is set to 'versions'.
     */
    public /*out*/ readonly versions!: pulumi.Output<{[key: string]: types.outputs.TemplateSpecVersionInfoResponse}>;

    /**
     * Create a TemplateSpec resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateSpecArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateSpecName"] = args ? args.templateSpecName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["versions"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["versions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources/v20190601preview:TemplateSpec" }, { type: "azure-native:resources/v20210301preview:TemplateSpec" }, { type: "azure-native:resources/v20210501:TemplateSpec" }, { type: "azure-native:resources/v20220201:TemplateSpec" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TemplateSpec.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TemplateSpec resource.
 */
export interface TemplateSpecArgs {
    /**
     * Template Spec description.
     */
    description?: pulumi.Input<string>;
    /**
     * Template Spec display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations.
     */
    location?: pulumi.Input<string>;
    /**
     * The Template Spec metadata. Metadata is an open-ended object and is typically a collection of key-value pairs.
     */
    metadata?: any;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the Template Spec.
     */
    templateSpecName?: pulumi.Input<string>;
}