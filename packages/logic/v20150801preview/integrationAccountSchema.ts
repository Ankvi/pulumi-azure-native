import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    public static readonly __pulumiType = 'azure-native:logic/v20150801preview:IntegrationAccountSchema';

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
    public readonly content!: pulumi.Output<any | undefined>;
    /**
     * The content link.
     */
    public /*out*/ readonly contentLink!: pulumi.Output<types.outputs.IntegrationAccountContentLinkResponse>;
    /**
     * The content type.
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * The created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * The resource name.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The schema type.
     */
    public readonly schemaType!: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The target namespace.
     */
    public readonly targetNamespace!: pulumi.Output<string | undefined>;
    /**
     * The resource type.
     */
    public readonly type!: pulumi.Output<string | undefined>;

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
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["schemaType"] = args ? args.schemaType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetNamespace"] = args ? args.targetNamespace : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["contentLink"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
        } else {
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["contentLink"] = undefined /*out*/;
            resourceInputs["contentType"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schemaType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetNamespace"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic:IntegrationAccountSchema" }, { type: "azure-native:logic/v20160601:IntegrationAccountSchema" }, { type: "azure-native:logic/v20180701preview:IntegrationAccountSchema" }, { type: "azure-native:logic/v20190501:IntegrationAccountSchema" }] };
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
    content?: any;
    /**
     * The content type.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The resource id.
     */
    id?: pulumi.Input<string>;
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
     * The resource name.
     */
    name?: pulumi.Input<string>;
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
    schemaType?: pulumi.Input<types.enums.SchemaType>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The target namespace.
     */
    targetNamespace?: pulumi.Input<string>;
    /**
     * The resource type.
     */
    type?: pulumi.Input<string>;
}