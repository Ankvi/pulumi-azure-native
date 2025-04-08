import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration account schema.
 *
 * Uses Azure REST API version 2019-05-01. In version 1.x of the Azure Native provider, it used API version 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export class IntegrationAccountSchema extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountSchema {
        return new IntegrationAccountSchema(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:IntegrationAccountSchema';

    /**
     * Returns true if the given object is an instance of IntegrationAccountSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationAccountSchema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationAccountSchema.__pulumiType;
    }

    /**
     * The changed time.
     */
    public /*out*/ readonly changedTime!: pulumi.Output<string>;
    /**
     * The content.
     */
    public readonly content!: pulumi.Output<string | undefined>;
    /**
     * The content link.
     */
    public /*out*/ readonly contentLink!: pulumi.Output<types.outputs.ContentLinkResponse>;
    /**
     * The content type.
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * The created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The document name.
     */
    public readonly documentName!: pulumi.Output<string | undefined>;
    /**
     * The file name.
     */
    public readonly fileName!: pulumi.Output<string | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The schema type.
     */
    public readonly schemaType!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The target namespace of the schema.
     */
    public readonly targetNamespace!: pulumi.Output<string | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IntegrationAccountSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountSchemaArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.integrationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schemaType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaType'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["documentName"] = args ? args.documentName : undefined;
            resourceInputs["fileName"] = args ? args.fileName : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["schemaType"] = args ? args.schemaType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetNamespace"] = args ? args.targetNamespace : undefined;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["contentLink"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["contentLink"] = undefined /*out*/;
            resourceInputs["contentType"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["documentName"] = undefined /*out*/;
            resourceInputs["fileName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schemaType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetNamespace"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20150801preview:IntegrationAccountSchema" }, { type: "azure-native:logic/v20160601:IntegrationAccountSchema" }, { type: "azure-native:logic/v20180701preview:IntegrationAccountSchema" }, { type: "azure-native:logic/v20190501:IntegrationAccountSchema" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IntegrationAccountSchema.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationAccountSchema resource.
 */
export interface IntegrationAccountSchemaArgs {
    /**
     * The content.
     */
    content?: pulumi.Input<string>;
    /**
     * The content type.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The document name.
     */
    documentName?: pulumi.Input<string>;
    /**
     * The file name.
     */
    fileName?: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    metadata?: any;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The integration account schema name.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The schema type.
     */
    schemaType: pulumi.Input<string | types.enums.SchemaType>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The target namespace of the schema.
     */
    targetNamespace?: pulumi.Input<string>;
}