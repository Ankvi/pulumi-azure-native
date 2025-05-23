import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Issue Attachment Contract details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApiIssueAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ApiIssueAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiIssueAttachment {
        return new ApiIssueAttachment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ApiIssueAttachment';

    /**
     * Returns true if the given object is an instance of ApiIssueAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiIssueAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiIssueAttachment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * An HTTP link or Base64-encoded binary data.
     */
    public readonly content!: pulumi.Output<string>;
    /**
     * Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     */
    public readonly contentFormat!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Filename by which the binary data will be saved.
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApiIssueAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiIssueAttachmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.contentFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentFormat'");
            }
            if ((!args || args.issueId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'issueId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["attachmentId"] = args ? args.attachmentId : undefined;
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["contentFormat"] = args ? args.contentFormat : undefined;
            resourceInputs["issueId"] = args ? args.issueId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["contentFormat"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20180101:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20180601preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20190101:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20191201:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20191201preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20200601preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20201201:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20210101preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20210401preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20210801:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20211201preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20220401preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20220801:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20220901preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20230301preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20230501preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20230901preview:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20240501:ApiIssueAttachment" }, { type: "azure-native:apimanagement/v20240601preview:ApiIssueAttachment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiIssueAttachment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiIssueAttachment resource.
 */
export interface ApiIssueAttachmentArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Attachment identifier within an Issue. Must be unique in the current Issue.
     */
    attachmentId?: pulumi.Input<string>;
    /**
     * An HTTP link or Base64-encoded binary data.
     */
    content: pulumi.Input<string>;
    /**
     * Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     */
    contentFormat: pulumi.Input<string>;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    issueId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Filename by which the binary data will be saved.
     */
    title: pulumi.Input<string>;
}