import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific Application Insights web test definition.
 * Azure REST API version: 2022-06-15.
 */
export function getWebTest(args: GetWebTestArgs, opts?: pulumi.InvokeOptions): Promise<GetWebTestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getWebTest", {
        "resourceGroupName": args.resourceGroupName,
        "webTestName": args.webTestName,
    }, opts);
}

export interface GetWebTestArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights WebTest resource.
     */
    webTestName: string;
}

/**
 * An Application Insights WebTest definition.
 */
export interface GetWebTestResult {
    /**
     * An XML configuration specification for a WebTest.
     */
    readonly configuration?: types.outputs.WebTestPropertiesResponseConfiguration;
    /**
     * User defined description for this WebTest.
     */
    readonly description?: string;
    /**
     * Is the test actively being monitored.
     */
    readonly enabled?: boolean;
    /**
     * Interval in seconds between test runs for this WebTest. Default value is 300.
     */
    readonly frequency?: number;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The kind of WebTest that this web test watches. Choices are ping, multistep and standard.
     */
    readonly kind?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    readonly locations: types.outputs.WebTestGeolocationResponse[];
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Current state of this component, whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    readonly provisioningState: string;
    /**
     * The collection of request properties
     */
    readonly request?: types.outputs.WebTestPropertiesResponseRequest;
    /**
     * Allow for retries should this WebTest fail.
     */
    readonly retryEnabled?: boolean;
    /**
     * Unique ID of this WebTest. This is typically the same value as the Name field.
     */
    readonly syntheticMonitorId: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Seconds until this WebTest will timeout and fail. Default value is 30.
     */
    readonly timeout?: number;
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * The collection of validation rule properties
     */
    readonly validationRules?: types.outputs.WebTestPropertiesResponseValidationRules;
    /**
     * The kind of web test this is, valid choices are ping, multistep and standard.
     */
    readonly webTestKind: string;
    /**
     * User defined name if this WebTest.
     */
    readonly webTestName: string;
}
/**
 * Get a specific Application Insights web test definition.
 * Azure REST API version: 2022-06-15.
 */
export function getWebTestOutput(args: GetWebTestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebTestResult> {
    return pulumi.output(args).apply((a: any) => getWebTest(a, opts))
}

export interface GetWebTestOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights WebTest resource.
     */
    webTestName: pulumi.Input<string>;
}
