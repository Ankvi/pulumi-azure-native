import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Template Spec Version object.
 */
export class TemplateSpecVersion extends pulumi.CustomResource {
    /**
     * Get an existing TemplateSpecVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TemplateSpecVersion {
        return new TemplateSpecVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources/v20190601preview:TemplateSpecVersion';

    /**
     * Returns true if the given object is an instance of TemplateSpecVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemplateSpecVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemplateSpecVersion.__pulumiType;
    }

    /**
     * An array of Template Spec artifacts.
     */
    public readonly artifacts!: pulumi.Output<types.outputs.resources.v20190601preview.TemplateSpecTemplateArtifactResponse[] | undefined>;
    /**
     * Template Spec version description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The location of the Template Spec Version. It must match the location of the parent Template Spec.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.resources.v20190601preview.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Azure Resource Manager template content.
     */
    public readonly template!: pulumi.Output<any | undefined>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TemplateSpecVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateSpecVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.templateSpecName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateSpecName'");
            }
            resourceInputs["artifacts"] = args ? args.artifacts : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["templateSpecName"] = args ? args.templateSpecName : undefined;
            resourceInputs["templateSpecVersion"] = args ? args.templateSpecVersion : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["artifacts"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["template"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources:TemplateSpecVersion" }, { type: "azure-native:resources/v20210301preview:TemplateSpecVersion" }, { type: "azure-native:resources/v20210501:TemplateSpecVersion" }, { type: "azure-native:resources/v20220201:TemplateSpecVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TemplateSpecVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TemplateSpecVersion resource.
 */
export interface TemplateSpecVersionArgs {
    /**
     * An array of Template Spec artifacts.
     */
    artifacts?: pulumi.Input<pulumi.Input<types.inputs.resources.v20190601preview.TemplateSpecTemplateArtifactArgs>[]>;
    /**
     * Template Spec version description.
     */
    description?: pulumi.Input<string>;
    /**
     * The location of the Template Spec Version. It must match the location of the parent Template Spec.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Azure Resource Manager template content.
     */
    template?: any;
    /**
     * Name of the Template Spec.
     */
    templateSpecName: pulumi.Input<string>;
    /**
     * The version of the Template Spec.
     */
    templateSpecVersion?: pulumi.Input<string>;
}
