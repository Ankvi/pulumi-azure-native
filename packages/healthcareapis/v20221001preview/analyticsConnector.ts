import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Analytics Connector definition.
 */
export class AnalyticsConnector extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AnalyticsConnector {
        return new AnalyticsConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:healthcareapis/v20221001preview:AnalyticsConnector';

    /**
     * Returns true if the given object is an instance of AnalyticsConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AnalyticsConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AnalyticsConnector.__pulumiType;
    }

    /**
     * Data destination configuration for Analytics Connector.
     */
    public readonly dataDestinationConfiguration!: pulumi.Output<types.outputs.healthcareapis.v20221001preview.AnalyticsConnectorDataLakeDataDestinationResponse>;
    /**
     * Data mapping configuration for Analytics Connector.
     */
    public readonly dataMappingConfiguration!: pulumi.Output<types.outputs.healthcareapis.v20221001preview.AnalyticsConnectorFhirToParquetMappingResponse>;
    /**
     * Data source for Analytics Connector.
     */
    public readonly dataSourceConfiguration!: pulumi.Output<types.outputs.healthcareapis.v20221001preview.AnalyticsConnectorFhirServiceDataSourceResponse>;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    public readonly identity!: pulumi.Output<types.outputs.healthcareapis.v20221001preview.ServiceManagedIdentityResponseIdentity | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.healthcareapis.v20221001preview.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AnalyticsConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyticsConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataDestinationConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataDestinationConfiguration'");
            }
            if ((!args || args.dataMappingConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataMappingConfiguration'");
            }
            if ((!args || args.dataSourceConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataSourceConfiguration'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["analyticsConnectorName"] = args ? args.analyticsConnectorName : undefined;
            resourceInputs["dataDestinationConfiguration"] = args ? args.dataDestinationConfiguration : undefined;
            resourceInputs["dataMappingConfiguration"] = args ? args.dataMappingConfiguration : undefined;
            resourceInputs["dataSourceConfiguration"] = args ? args.dataSourceConfiguration : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataDestinationConfiguration"] = undefined /*out*/;
            resourceInputs["dataMappingConfiguration"] = undefined /*out*/;
            resourceInputs["dataSourceConfiguration"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:healthcareapis:AnalyticsConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AnalyticsConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AnalyticsConnector resource.
 */
export interface AnalyticsConnectorArgs {
    /**
     * The name of Analytics Connector resource.
     */
    analyticsConnectorName?: pulumi.Input<string>;
    /**
     * Data destination configuration for Analytics Connector.
     */
    dataDestinationConfiguration: pulumi.Input<types.inputs.healthcareapis.v20221001preview.AnalyticsConnectorDataLakeDataDestinationArgs>;
    /**
     * Data mapping configuration for Analytics Connector.
     */
    dataMappingConfiguration: pulumi.Input<types.inputs.healthcareapis.v20221001preview.AnalyticsConnectorFhirToParquetMappingArgs>;
    /**
     * Data source for Analytics Connector.
     */
    dataSourceConfiguration: pulumi.Input<types.inputs.healthcareapis.v20221001preview.AnalyticsConnectorFhirServiceDataSourceArgs>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    identity?: pulumi.Input<types.inputs.healthcareapis.v20221001preview.ServiceManagedIdentityIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}
