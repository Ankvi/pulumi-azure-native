import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns an Application Insights component.
 *
 * Uses Azure REST API version 2020-02-02.
 *
 * Other available API versions: 2015-05-01, 2018-05-01-preview, 2020-02-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getComponent(args: GetComponentArgs, opts?: pulumi.InvokeOptions): Promise<GetComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:applicationinsights:getComponent", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetComponentArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: string;
}

/**
 * An Application Insights component definition.
 */
export interface GetComponentResult {
    /**
     * Application Insights Unique ID for your Application.
     */
    readonly appId: string;
    /**
     * The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
     */
    readonly applicationId: string;
    /**
     * Type of application being monitored.
     */
    readonly applicationType: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Application Insights component connection string.
     */
    readonly connectionString: string;
    /**
     * Creation Date for the Application Insights component, in ISO 8601 format.
     */
    readonly creationDate: string;
    /**
     * Disable IP masking.
     */
    readonly disableIpMasking?: boolean;
    /**
     * Disable Non-AAD based Auth.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Resource etag
     */
    readonly etag?: string;
    /**
     * Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
     */
    readonly flowType?: string;
    /**
     * Force users to create their own storage account for profiler and debugger.
     */
    readonly forceCustomerStorageForProfiler?: boolean;
    /**
     * The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
     */
    readonly hockeyAppId?: string;
    /**
     * Token used to authenticate communications with between Application Insights and HockeyApp.
     */
    readonly hockeyAppToken: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Purge data immediately after 30 days.
     */
    readonly immediatePurgeDataOn30Days?: boolean;
    /**
     * Indicates the flow of the ingestion.
     */
    readonly ingestionMode?: string;
    /**
     * Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
     */
    readonly instrumentationKey: string;
    /**
     * The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
     */
    readonly kind: string;
    /**
     * The date which the component got migrated to LA, in ISO 8601 format.
     */
    readonly laMigrationDate: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * List of linked private link scope resources.
     */
    readonly privateLinkScopedResources: types.outputs.PrivateLinkScopedResourceResponse[];
    /**
     * Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    readonly provisioningState: string;
    /**
     * The network access type for accessing Application Insights ingestion.
     */
    readonly publicNetworkAccessForIngestion?: string;
    /**
     * The network access type for accessing Application Insights query.
     */
    readonly publicNetworkAccessForQuery?: string;
    /**
     * Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
     */
    readonly requestSource?: string;
    /**
     * Retention period in days.
     */
    readonly retentionInDays?: number;
    /**
     * Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
     */
    readonly samplingPercentage?: number;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure Tenant Id.
     */
    readonly tenantId: string;
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * Resource Id of the log analytics workspace which the data will be ingested to. This property is required to create an application with this API version. Applications from older versions will not have this property.
     */
    readonly workspaceResourceId?: string;
}
/**
 * Returns an Application Insights component.
 *
 * Uses Azure REST API version 2020-02-02.
 *
 * Other available API versions: 2015-05-01, 2018-05-01-preview, 2020-02-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getComponentOutput(args: GetComponentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:applicationinsights:getComponent", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetComponentOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}