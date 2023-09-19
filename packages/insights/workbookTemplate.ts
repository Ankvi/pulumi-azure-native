import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Application Insights workbook template definition.
 * Azure REST API version: 2020-11-20. Prior API version in Azure Native 1.x: 2019-10-17-preview
 */
export class WorkbookTemplate extends pulumi.CustomResource {
    /**
     * Get an existing WorkbookTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkbookTemplate {
        return new WorkbookTemplate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights:WorkbookTemplate';

    /**
     * Returns true if the given object is an instance of WorkbookTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkbookTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkbookTemplate.__pulumiType;
    }

    /**
     * Information about the author of the workbook template.
     */
    public readonly author!: pulumi.Output<string | undefined>;
    /**
     * Workbook galleries supported by the template.
     */
    public readonly galleries!: pulumi.Output<types.outputs.WorkbookTemplateGalleryResponse[]>;
    /**
     * Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal.
     */
    public readonly localized!: pulumi.Output<{[key: string]: types.outputs.WorkbookTemplateLocalizedGalleryResponse[]} | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Valid JSON object containing workbook template payload.
     */
    public readonly templateData!: pulumi.Output<any>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkbookTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkbookTemplateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.galleries === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleries'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.templateData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateData'");
            }
            resourceInputs["author"] = args ? args.author : undefined;
            resourceInputs["galleries"] = args ? args.galleries : undefined;
            resourceInputs["localized"] = args ? args.localized : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateData"] = args ? args.templateData : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["galleries"] = undefined /*out*/;
            resourceInputs["localized"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["templateData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20191017preview:WorkbookTemplate" }, { type: "azure-native:insights/v20201120:WorkbookTemplate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkbookTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkbookTemplate resource.
 */
export interface WorkbookTemplateArgs {
    /**
     * Information about the author of the workbook template.
     */
    author?: pulumi.Input<string>;
    /**
     * Workbook galleries supported by the template.
     */
    galleries: pulumi.Input<pulumi.Input<types.inputs.WorkbookTemplateGalleryArgs>[]>;
    /**
     * Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal.
     */
    localized?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<types.inputs.WorkbookTemplateLocalizedGalleryArgs>[]>}>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode.
     */
    priority?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Valid JSON object containing workbook template payload.
     */
    templateData: any;
}
