import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration account map.
 *
 * Uses Azure REST API version 2019-05-01. In version 2.x of the Azure Native provider, it used API version 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class IntegrationAccountMap extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountMap {
        return new IntegrationAccountMap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:IntegrationAccountMap';

    /**
     * Returns true if the given object is an instance of IntegrationAccountMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationAccountMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationAccountMap.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The map type.
     */
    public readonly mapType!: pulumi.Output<string>;
    /**
     * The metadata.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The parameters schema of integration account map.
     */
    public readonly parametersSchema!: pulumi.Output<types.outputs.IntegrationAccountMapPropertiesResponseParametersSchema | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IntegrationAccountMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountMapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.integrationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.mapType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mapType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mapName"] = args ? args.mapName : undefined;
            resourceInputs["mapType"] = args ? args.mapType : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["parametersSchema"] = args ? args.parametersSchema : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["contentLink"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["contentLink"] = undefined /*out*/;
            resourceInputs["contentType"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mapType"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parametersSchema"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20150801preview:IntegrationAccountMap" }, { type: "azure-native:logic/v20160601:IntegrationAccountMap" }, { type: "azure-native:logic/v20160601:Map" }, { type: "azure-native:logic/v20180701preview:IntegrationAccountMap" }, { type: "azure-native:logic/v20190501:IntegrationAccountMap" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IntegrationAccountMap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationAccountMap resource.
 */
export interface IntegrationAccountMapArgs {
    /**
     * The content.
     */
    content?: pulumi.Input<string>;
    /**
     * The content type.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The integration account map name.
     */
    mapName?: pulumi.Input<string>;
    /**
     * The map type.
     */
    mapType: pulumi.Input<string | types.enums.MapType>;
    /**
     * The metadata.
     */
    metadata?: any;
    /**
     * The parameters schema of integration account map.
     */
    parametersSchema?: pulumi.Input<types.inputs.IntegrationAccountMapPropertiesParametersSchemaArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}