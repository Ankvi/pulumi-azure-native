import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of generic ARM proxy resource.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export class DataCollectionRuleAssociation extends pulumi.CustomResource {
    /**
     * Get an existing DataCollectionRuleAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataCollectionRuleAssociation {
        return new DataCollectionRuleAssociation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:DataCollectionRuleAssociation';

    /**
     * Returns true if the given object is an instance of DataCollectionRuleAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataCollectionRuleAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataCollectionRuleAssociation.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The resource ID of the data collection endpoint that is to be associated.
     */
    public readonly dataCollectionEndpointId!: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the data collection rule that is to be associated.
     */
    public readonly dataCollectionRuleId!: pulumi.Output<string | undefined>;
    /**
     * Description of the association.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Resource entity tag (ETag).
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Metadata about the resource
     */
    public /*out*/ readonly metadata!: pulumi.Output<types.outputs.DataCollectionRuleAssociationResponseMetadata>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.DataCollectionRuleAssociationProxyOnlyResourceResponseSystemData>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataCollectionRuleAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataCollectionRuleAssociationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["associationName"] = args ? args.associationName : undefined;
            resourceInputs["dataCollectionEndpointId"] = args ? args.dataCollectionEndpointId : undefined;
            resourceInputs["dataCollectionRuleId"] = args ? args.dataCollectionRuleId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataCollectionEndpointId"] = undefined /*out*/;
            resourceInputs["dataCollectionRuleId"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20220601:DataCollectionRuleAssociation" }, { type: "azure-native:insights/v20230311:DataCollectionRuleAssociation" }, { type: "azure-native:insights:DataCollectionRuleAssociation" }, { type: "azure-native:monitor/v20191101preview:DataCollectionRuleAssociation" }, { type: "azure-native:monitor/v20210401:DataCollectionRuleAssociation" }, { type: "azure-native:monitor/v20210901preview:DataCollectionRuleAssociation" }, { type: "azure-native:monitor/v20220601:DataCollectionRuleAssociation" }, { type: "azure-native:monitor/v20230311:DataCollectionRuleAssociation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataCollectionRuleAssociation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataCollectionRuleAssociation resource.
 */
export interface DataCollectionRuleAssociationArgs {
    /**
     * The name of the association. The name is case insensitive.
     */
    associationName?: pulumi.Input<string>;
    /**
     * The resource ID of the data collection endpoint that is to be associated.
     */
    dataCollectionEndpointId?: pulumi.Input<string>;
    /**
     * The resource ID of the data collection rule that is to be associated.
     */
    dataCollectionRuleId?: pulumi.Input<string>;
    /**
     * Description of the association.
     */
    description?: pulumi.Input<string>;
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}