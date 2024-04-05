import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes an Azure AI Search service and its current state.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:search/v20240301preview:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    /**
     * Defines the options for how the data plane API of a search service authenticates requests. This cannot be set if 'disableLocalAuth' is set to true.
     */
    public readonly authOptions!: pulumi.Output<types.outputs.DataPlaneAuthOptionsResponse | undefined>;
    /**
     * When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined.
     */
    public readonly disableLocalAuth!: pulumi.Output<boolean | undefined>;
    /**
     * A list of data exfiltration scenarios that are explicitly disallowed for the search service. Currently, the only supported value is 'All' to disable all possible data export scenarios with more fine grained controls planned for the future.
     */
    public readonly disabledDataExfiltrationOptions!: pulumi.Output<string[] | undefined>;
    /**
     * A system generated property representing the service's etag that can be for optimistic concurrency control during updates.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service.
     */
    public readonly encryptionWithCmk!: pulumi.Output<types.outputs.EncryptionWithCmkResponse | undefined>;
    /**
     * Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
     */
    public readonly hostingMode!: pulumi.Output<string | undefined>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network specific rules that determine how the Azure AI Search service may be reached.
     */
    public readonly networkRuleSet!: pulumi.Output<types.outputs.NetworkRuleSetResponse | undefined>;
    /**
     * The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
     */
    public readonly partitionCount!: pulumi.Output<number | undefined>;
    /**
     * The list of private endpoint connections to the Azure AI Search service.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The state of the last provisioning operation performed on the search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create search service. This is because the free service uses capacity that is already set up.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
     */
    public readonly replicaCount!: pulumi.Output<number | undefined>;
    /**
     * Sets options that control the availability of semantic search. This configuration is only possible for certain Azure AI Search SKUs in certain locations.
     */
    public readonly semanticSearch!: pulumi.Output<string | undefined>;
    /**
     * The list of shared private link resources managed by the Azure AI Search service.
     */
    public /*out*/ readonly sharedPrivateLinkResources!: pulumi.Output<types.outputs.SharedPrivateLinkResourceResponse[]>;
    /**
     * The SKU of the search service, which determines price tier and capacity limits. This property is required when creating a new search service.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The status of the search service. Possible values include: 'running': The search service is running and no provisioning operations are underway. 'provisioning': The search service is being provisioned or scaled up or down. 'deleting': The search service is being deleted. 'degraded': The search service is degraded. This can occur when the underlying search units are not healthy. The search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The search service is disabled. In this state, the service will reject all API requests. 'error': The search service is in an error state. 'stopped': The search service is in a subscription that's disabled. If your service is in the degraded, disabled, or error states, it means the Azure AI Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The details of the search service status.
     */
    public /*out*/ readonly statusDetails!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authOptions"] = args ? args.authOptions : undefined;
            resourceInputs["disableLocalAuth"] = args ? args.disableLocalAuth : undefined;
            resourceInputs["disabledDataExfiltrationOptions"] = args ? args.disabledDataExfiltrationOptions : undefined;
            resourceInputs["encryptionWithCmk"] = args ? args.encryptionWithCmk : undefined;
            resourceInputs["hostingMode"] = (args ? args.hostingMode : undefined) ?? "default";
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkRuleSet"] = args ? args.networkRuleSet : undefined;
            resourceInputs["partitionCount"] = (args ? args.partitionCount : undefined) ?? 1;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "enabled";
            resourceInputs["replicaCount"] = (args ? args.replicaCount : undefined) ?? 1;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["searchServiceName"] = args ? args.searchServiceName : undefined;
            resourceInputs["semanticSearch"] = args ? args.semanticSearch : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResources"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authOptions"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["disabledDataExfiltrationOptions"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["encryptionWithCmk"] = undefined /*out*/;
            resourceInputs["hostingMode"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkRuleSet"] = undefined /*out*/;
            resourceInputs["partitionCount"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["replicaCount"] = undefined /*out*/;
            resourceInputs["semanticSearch"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResources"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:search:Service" }, { type: "azure-native:search/v20150819:Service" }, { type: "azure-native:search/v20191001preview:Service" }, { type: "azure-native:search/v20200313:Service" }, { type: "azure-native:search/v20200801:Service" }, { type: "azure-native:search/v20200801preview:Service" }, { type: "azure-native:search/v20210401preview:Service" }, { type: "azure-native:search/v20220901:Service" }, { type: "azure-native:search/v20231101:Service" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Defines the options for how the data plane API of a search service authenticates requests. This cannot be set if 'disableLocalAuth' is set to true.
     */
    authOptions?: pulumi.Input<types.inputs.DataPlaneAuthOptionsArgs>;
    /**
     * When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * A list of data exfiltration scenarios that are explicitly disallowed for the search service. Currently, the only supported value is 'All' to disable all possible data export scenarios with more fine grained controls planned for the future.
     */
    disabledDataExfiltrationOptions?: pulumi.Input<pulumi.Input<string | types.enums.SearchDisabledDataExfiltrationOption>[]>;
    /**
     * Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service.
     */
    encryptionWithCmk?: pulumi.Input<types.inputs.EncryptionWithCmkArgs>;
    /**
     * Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
     */
    hostingMode?: pulumi.Input<types.enums.HostingMode>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Network specific rules that determine how the Azure AI Search service may be reached.
     */
    networkRuleSet?: pulumi.Input<types.inputs.NetworkRuleSetArgs>;
    /**
     * The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
     */
    partitionCount?: pulumi.Input<number>;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
     */
    replicaCount?: pulumi.Input<number>;
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure AI Search service to create or update. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net). You cannot change the service name after the service is created.
     */
    searchServiceName?: pulumi.Input<string>;
    /**
     * Sets options that control the availability of semantic search. This configuration is only possible for certain Azure AI Search SKUs in certain locations.
     */
    semanticSearch?: pulumi.Input<string | types.enums.SearchSemanticSearch>;
    /**
     * The SKU of the search service, which determines price tier and capacity limits. This property is required when creating a new search service.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}