import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Email Template details.
 */
export class EmailTemplate extends pulumi.CustomResource {
    /**
     * Get an existing EmailTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EmailTemplate {
        return new EmailTemplate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20220801:EmailTemplate';

    /**
     * Returns true if the given object is an instance of EmailTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EmailTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EmailTemplate.__pulumiType;
    }

    /**
     * Email Template Body. This should be a valid XDocument
     */
    public readonly body!: pulumi.Output<string>;
    /**
     * Description of the Email Template.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether the template is the default template provided by API Management or has been edited.
     */
    public /*out*/ readonly isDefault!: pulumi.Output<boolean>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Email Template Parameter values.
     */
    public readonly parameters!: pulumi.Output<types.outputs.apimanagement.v20220801.EmailTemplateParametersContractPropertiesResponse[] | undefined>;
    /**
     * Subject of the Template.
     */
    public readonly subject!: pulumi.Output<string>;
    /**
     * Title of the Template.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EmailTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EmailTemplateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["subject"] = args ? args.subject : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["isDefault"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["body"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["isDefault"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["subject"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:EmailTemplate" }, { type: "azure-native:apimanagement/v20170301:EmailTemplate" }, { type: "azure-native:apimanagement/v20180101:EmailTemplate" }, { type: "azure-native:apimanagement/v20180601preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20190101:EmailTemplate" }, { type: "azure-native:apimanagement/v20191201:EmailTemplate" }, { type: "azure-native:apimanagement/v20191201preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20200601preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20201201:EmailTemplate" }, { type: "azure-native:apimanagement/v20210101preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20210401preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20210801:EmailTemplate" }, { type: "azure-native:apimanagement/v20211201preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20220401preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20220901preview:EmailTemplate" }, { type: "azure-native:apimanagement/v20230301preview:EmailTemplate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EmailTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EmailTemplate resource.
 */
export interface EmailTemplateArgs {
    /**
     * Email Template Body. This should be a valid XDocument
     */
    body?: pulumi.Input<string>;
    /**
     * Description of the Email Template.
     */
    description?: pulumi.Input<string>;
    /**
     * Email Template Parameter values.
     */
    parameters?: pulumi.Input<pulumi.Input<types.inputs.apimanagement.v20220801.EmailTemplateParametersContractPropertiesArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Subject of the Template.
     */
    subject?: pulumi.Input<string>;
    /**
     * Email Template Name Identifier.
     */
    templateName?: pulumi.Input<string>;
    /**
     * Title of the Template.
     */
    title?: pulumi.Input<string>;
}
