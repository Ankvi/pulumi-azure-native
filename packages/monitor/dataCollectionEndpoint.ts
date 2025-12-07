import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of ARM tracked top level resource.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2024-03-11. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DataCollectionEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing DataCollectionEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataCollectionEndpoint {
        return new DataCollectionEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:DataCollectionEndpoint';

    /**
     * Returns true if the given object is an instance of DataCollectionEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataCollectionEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataCollectionEndpoint.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The endpoint used by clients to access their configuration.
     */
    declare public /*out*/ readonly configurationAccess: pulumi.Output<types.outputs.DataCollectionEndpointResponseConfigurationAccess | undefined>;
    /**
     * Description of the data collection endpoint.
     */
    declare public readonly description: pulumi.Output<string | undefined>;
    /**
     * Resource entity tag (ETag).
     */
    declare public /*out*/ readonly etag: pulumi.Output<string>;
    /**
     * Failover configuration on this endpoint. This property is READ-ONLY.
     */
    declare public /*out*/ readonly failoverConfiguration: pulumi.Output<types.outputs.DataCollectionEndpointResponseFailoverConfiguration>;
    /**
     * Managed service identity of the resource.
     */
    declare public readonly identity: pulumi.Output<types.outputs.DataCollectionEndpointResourceResponseIdentity | undefined>;
    /**
     * The immutable ID of this data collection endpoint resource. This property is READ-ONLY.
     */
    declare public readonly immutableId: pulumi.Output<string | undefined>;
    /**
     * The kind of the resource.
     */
    declare public readonly kind: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives.
     */
    declare public readonly location: pulumi.Output<string>;
    /**
     * The endpoint used by clients to ingest logs.
     */
    declare public /*out*/ readonly logsIngestion: pulumi.Output<types.outputs.DataCollectionEndpointResponseLogsIngestion | undefined>;
    /**
     * Metadata for the resource. This property is READ-ONLY.
     */
    declare public /*out*/ readonly metadata: pulumi.Output<types.outputs.DataCollectionEndpointResponseMetadata>;
    /**
     * The endpoint used by clients to ingest metrics.
     */
    declare public /*out*/ readonly metricsIngestion: pulumi.Output<types.outputs.DataCollectionEndpointResponseMetricsIngestion | undefined>;
    /**
     * The name of the resource.
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * Network access control rules for the endpoints.
     */
    declare public readonly networkAcls: pulumi.Output<types.outputs.DataCollectionEndpointResponseNetworkAcls | undefined>;
    /**
     * List of Azure Monitor Private Link Scope Resources to which this data collection endpoint resource is associated. This property is READ-ONLY.
     */
    declare public /*out*/ readonly privateLinkScopedResources: pulumi.Output<types.outputs.PrivateLinkScopedResourceResponse[]>;
    /**
     * The resource provisioning state. This property is READ-ONLY.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.DataCollectionEndpointResourceResponseSystemData>;
    /**
     * Resource tags.
     */
    declare public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a DataCollectionEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataCollectionEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataCollectionEndpointName"] = args?.dataCollectionEndpointName;
            resourceInputs["description"] = args?.description;
            resourceInputs["identity"] = args?.identity;
            resourceInputs["immutableId"] = args?.immutableId;
            resourceInputs["kind"] = args?.kind;
            resourceInputs["location"] = args?.location;
            resourceInputs["networkAcls"] = args?.networkAcls;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["tags"] = args?.tags;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationAccess"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["failoverConfiguration"] = undefined /*out*/;
            resourceInputs["logsIngestion"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["metricsIngestion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationAccess"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["failoverConfiguration"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["immutableId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logsIngestion"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["metricsIngestion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAcls"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20220601:DataCollectionEndpoint" }, { type: "azure-native:insights/v20230311:DataCollectionEndpoint" }, { type: "azure-native:insights:DataCollectionEndpoint" }, { type: "azure-native:monitor/v20210401:DataCollectionEndpoint" }, { type: "azure-native:monitor/v20210901preview:DataCollectionEndpoint" }, { type: "azure-native:monitor/v20220601:DataCollectionEndpoint" }, { type: "azure-native:monitor/v20230311:DataCollectionEndpoint" }, { type: "azure-native:monitor/v20240311:DataCollectionEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataCollectionEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataCollectionEndpoint resource.
 */
export interface DataCollectionEndpointArgs {
    /**
     * The name of the data collection endpoint. The name is case insensitive.
     */
    dataCollectionEndpointName?: pulumi.Input<string>;
    /**
     * Description of the data collection endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * Managed service identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.DataCollectionEndpointResourceIdentityArgs>;
    /**
     * The immutable ID of this data collection endpoint resource. This property is READ-ONLY.
     */
    immutableId?: pulumi.Input<string>;
    /**
     * The kind of the resource.
     */
    kind?: pulumi.Input<string | types.enums.KnownDataCollectionEndpointResourceKind>;
    /**
     * The geo-location where the resource lives.
     */
    location?: pulumi.Input<string>;
    /**
     * Network access control rules for the endpoints.
     */
    networkAcls?: pulumi.Input<types.inputs.DataCollectionEndpointNetworkAclsArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}