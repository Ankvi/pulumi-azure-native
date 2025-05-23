import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Application Insights component definition.
 *
 * Uses Azure REST API version 2020-02-02.
 *
 * Other available API versions: 2015-05-01, 2018-05-01-preview, 2020-02-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Component extends pulumi.CustomResource {
    /**
     * Get an existing Component resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Component {
        return new Component(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:applicationinsights:Component';

    /**
     * Returns true if the given object is an instance of Component.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Component {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Component.__pulumiType;
    }

    /**
     * Application Insights Unique ID for your Application.
     */
    public /*out*/ readonly appId!: pulumi.Output<string>;
    /**
     * The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
     */
    public /*out*/ readonly applicationId!: pulumi.Output<string>;
    /**
     * Type of application being monitored.
     */
    public readonly applicationType!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Application Insights component connection string.
     */
    public /*out*/ readonly connectionString!: pulumi.Output<string>;
    /**
     * Creation Date for the Application Insights component, in ISO 8601 format.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Disable IP masking.
     */
    public readonly disableIpMasking!: pulumi.Output<boolean | undefined>;
    /**
     * Disable Non-AAD based Auth.
     */
    public readonly disableLocalAuth!: pulumi.Output<boolean | undefined>;
    /**
     * Resource etag
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
     */
    public readonly flowType!: pulumi.Output<string | undefined>;
    /**
     * Force users to create their own storage account for profiler and debugger.
     */
    public readonly forceCustomerStorageForProfiler!: pulumi.Output<boolean | undefined>;
    /**
     * The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
     */
    public readonly hockeyAppId!: pulumi.Output<string | undefined>;
    /**
     * Token used to authenticate communications with between Application Insights and HockeyApp.
     */
    public /*out*/ readonly hockeyAppToken!: pulumi.Output<string>;
    /**
     * Purge data immediately after 30 days.
     */
    public readonly immediatePurgeDataOn30Days!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates the flow of the ingestion.
     */
    public readonly ingestionMode!: pulumi.Output<string | undefined>;
    /**
     * Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
     */
    public /*out*/ readonly instrumentationKey!: pulumi.Output<string>;
    /**
     * The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The date which the component got migrated to LA, in ISO 8601 format.
     */
    public /*out*/ readonly laMigrationDate!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of linked private link scope resources.
     */
    public /*out*/ readonly privateLinkScopedResources!: pulumi.Output<types.outputs.PrivateLinkScopedResourceResponse[]>;
    /**
     * Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The network access type for accessing Application Insights ingestion.
     */
    public readonly publicNetworkAccessForIngestion!: pulumi.Output<string | undefined>;
    /**
     * The network access type for accessing Application Insights query.
     */
    public readonly publicNetworkAccessForQuery!: pulumi.Output<string | undefined>;
    /**
     * Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
     */
    public readonly requestSource!: pulumi.Output<string | undefined>;
    /**
     * Retention period in days.
     */
    public readonly retentionInDays!: pulumi.Output<number | undefined>;
    /**
     * Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
     */
    public readonly samplingPercentage!: pulumi.Output<number | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure Tenant Id.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Resource Id of the log analytics workspace which the data will be ingested to. This property is required to create an application with this API version. Applications from older versions will not have this property.
     */
    public readonly workspaceResourceId!: pulumi.Output<string | undefined>;

    /**
     * Create a Component resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComponentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationType'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationType"] = (args ? args.applicationType : undefined) ?? "web";
            resourceInputs["disableIpMasking"] = args ? args.disableIpMasking : undefined;
            resourceInputs["disableLocalAuth"] = args ? args.disableLocalAuth : undefined;
            resourceInputs["flowType"] = (args ? args.flowType : undefined) ?? "Bluefield";
            resourceInputs["forceCustomerStorageForProfiler"] = args ? args.forceCustomerStorageForProfiler : undefined;
            resourceInputs["hockeyAppId"] = args ? args.hockeyAppId : undefined;
            resourceInputs["immediatePurgeDataOn30Days"] = args ? args.immediatePurgeDataOn30Days : undefined;
            resourceInputs["ingestionMode"] = (args ? args.ingestionMode : undefined) ?? "LogAnalytics";
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicNetworkAccessForIngestion"] = args ? args.publicNetworkAccessForIngestion : undefined;
            resourceInputs["publicNetworkAccessForQuery"] = args ? args.publicNetworkAccessForQuery : undefined;
            resourceInputs["requestSource"] = (args ? args.requestSource : undefined) ?? "rest";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["retentionInDays"] = args ? args.retentionInDays : undefined;
            resourceInputs["samplingPercentage"] = args ? args.samplingPercentage : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceResourceId"] = args ? args.workspaceResourceId : undefined;
            resourceInputs["appId"] = undefined /*out*/;
            resourceInputs["applicationId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hockeyAppToken"] = undefined /*out*/;
            resourceInputs["instrumentationKey"] = undefined /*out*/;
            resourceInputs["laMigrationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appId"] = undefined /*out*/;
            resourceInputs["applicationId"] = undefined /*out*/;
            resourceInputs["applicationType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["disableIpMasking"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["flowType"] = undefined /*out*/;
            resourceInputs["forceCustomerStorageForProfiler"] = undefined /*out*/;
            resourceInputs["hockeyAppId"] = undefined /*out*/;
            resourceInputs["hockeyAppToken"] = undefined /*out*/;
            resourceInputs["immediatePurgeDataOn30Days"] = undefined /*out*/;
            resourceInputs["ingestionMode"] = undefined /*out*/;
            resourceInputs["instrumentationKey"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["laMigrationDate"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccessForIngestion"] = undefined /*out*/;
            resourceInputs["publicNetworkAccessForQuery"] = undefined /*out*/;
            resourceInputs["requestSource"] = undefined /*out*/;
            resourceInputs["retentionInDays"] = undefined /*out*/;
            resourceInputs["samplingPercentage"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceResourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:applicationinsights/v20150501:Component" }, { type: "azure-native:applicationinsights/v20180501preview:Component" }, { type: "azure-native:applicationinsights/v20200202:Component" }, { type: "azure-native:applicationinsights/v20200202preview:Component" }, { type: "azure-native:insights/v20200202:Component" }, { type: "azure-native:insights/v20200202preview:Component" }, { type: "azure-native:insights:Component" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Component.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Component resource.
 */
export interface ComponentArgs {
    /**
     * Type of application being monitored.
     */
    applicationType: pulumi.Input<string | types.enums.ApplicationType>;
    /**
     * Disable IP masking.
     */
    disableIpMasking?: pulumi.Input<boolean>;
    /**
     * Disable Non-AAD based Auth.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
     */
    flowType?: pulumi.Input<string | types.enums.FlowType>;
    /**
     * Force users to create their own storage account for profiler and debugger.
     */
    forceCustomerStorageForProfiler?: pulumi.Input<boolean>;
    /**
     * The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
     */
    hockeyAppId?: pulumi.Input<string>;
    /**
     * Purge data immediately after 30 days.
     */
    immediatePurgeDataOn30Days?: pulumi.Input<boolean>;
    /**
     * Indicates the flow of the ingestion.
     */
    ingestionMode?: pulumi.Input<string | types.enums.IngestionMode>;
    /**
     * The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
     */
    kind: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The network access type for accessing Application Insights ingestion.
     */
    publicNetworkAccessForIngestion?: pulumi.Input<string | types.enums.PublicNetworkAccessType>;
    /**
     * The network access type for accessing Application Insights query.
     */
    publicNetworkAccessForQuery?: pulumi.Input<string | types.enums.PublicNetworkAccessType>;
    /**
     * Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
     */
    requestSource?: pulumi.Input<string | types.enums.RequestSource>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Retention period in days.
     */
    retentionInDays?: pulumi.Input<number>;
    /**
     * Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
     */
    samplingPercentage?: pulumi.Input<number>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource Id of the log analytics workspace which the data will be ingested to. This property is required to create an application with this API version. Applications from older versions will not have this property.
     */
    workspaceResourceId?: pulumi.Input<string>;
}