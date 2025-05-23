import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Application Insights WebTest definition.
 *
 * Uses Azure REST API version 2022-06-15.
 *
 * Other available API versions: 2015-05-01, 2018-05-01-preview, 2020-10-05-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WebTest extends pulumi.CustomResource {
    /**
     * Get an existing WebTest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebTest {
        return new WebTest(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:applicationinsights:WebTest';

    /**
     * Returns true if the given object is an instance of WebTest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebTest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebTest.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * An XML configuration specification for a WebTest.
     */
    public readonly configuration!: pulumi.Output<types.outputs.WebTestPropertiesResponseConfiguration | undefined>;
    /**
     * User defined description for this WebTest.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Is the test actively being monitored.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Interval in seconds between test runs for this WebTest. Default value is 300.
     */
    public readonly frequency!: pulumi.Output<number | undefined>;
    /**
     * The kind of WebTest that this web test watches. Choices are ping, multistep and standard.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    public readonly locations!: pulumi.Output<types.outputs.WebTestGeolocationResponse[]>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Current state of this component, whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The collection of request properties
     */
    public readonly request!: pulumi.Output<types.outputs.WebTestPropertiesResponseRequest | undefined>;
    /**
     * Allow for retries should this WebTest fail.
     */
    public readonly retryEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Unique ID of this WebTest. This is typically the same value as the Name field.
     */
    public readonly syntheticMonitorId!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Seconds until this WebTest will timeout and fail. Default value is 30.
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The collection of validation rule properties
     */
    public readonly validationRules!: pulumi.Output<types.outputs.WebTestPropertiesResponseValidationRules | undefined>;
    /**
     * The kind of web test this is, valid choices are ping, multistep and standard.
     */
    public readonly webTestKind!: pulumi.Output<string>;
    /**
     * User defined name if this WebTest.
     */
    public readonly webTestName!: pulumi.Output<string>;

    /**
     * Create a WebTest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebTestArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.locations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locations'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.syntheticMonitorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'syntheticMonitorId'");
            }
            if ((!args || args.webTestKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'webTestKind'");
            }
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["frequency"] = (args ? args.frequency : undefined) ?? 300;
            resourceInputs["kind"] = (args ? args.kind : undefined) ?? "ping";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["request"] = args ? args.request : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retryEnabled"] = args ? args.retryEnabled : undefined;
            resourceInputs["syntheticMonitorId"] = args ? args.syntheticMonitorId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeout"] = (args ? args.timeout : undefined) ?? 30;
            resourceInputs["validationRules"] = args ? args.validationRules : undefined;
            resourceInputs["webTestKind"] = (args ? args.webTestKind : undefined) ?? "ping";
            resourceInputs["webTestName"] = args ? args.webTestName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configuration"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["frequency"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["locations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["request"] = undefined /*out*/;
            resourceInputs["retryEnabled"] = undefined /*out*/;
            resourceInputs["syntheticMonitorId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeout"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationRules"] = undefined /*out*/;
            resourceInputs["webTestKind"] = undefined /*out*/;
            resourceInputs["webTestName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:applicationinsights/v20150501:WebTest" }, { type: "azure-native:applicationinsights/v20180501preview:WebTest" }, { type: "azure-native:applicationinsights/v20201005preview:WebTest" }, { type: "azure-native:applicationinsights/v20220615:WebTest" }, { type: "azure-native:insights/v20201005preview:WebTest" }, { type: "azure-native:insights/v20220615:WebTest" }, { type: "azure-native:insights:WebTest" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebTest.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebTest resource.
 */
export interface WebTestArgs {
    /**
     * An XML configuration specification for a WebTest.
     */
    configuration?: pulumi.Input<types.inputs.WebTestPropertiesConfigurationArgs>;
    /**
     * User defined description for this WebTest.
     */
    description?: pulumi.Input<string>;
    /**
     * Is the test actively being monitored.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Interval in seconds between test runs for this WebTest. Default value is 300.
     */
    frequency?: pulumi.Input<number>;
    /**
     * The kind of WebTest that this web test watches. Choices are ping, multistep and standard.
     */
    kind?: pulumi.Input<types.enums.WebTestKind>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    locations: pulumi.Input<pulumi.Input<types.inputs.WebTestGeolocationArgs>[]>;
    /**
     * The collection of request properties
     */
    request?: pulumi.Input<types.inputs.WebTestPropertiesRequestArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Allow for retries should this WebTest fail.
     */
    retryEnabled?: pulumi.Input<boolean>;
    /**
     * Unique ID of this WebTest. This is typically the same value as the Name field.
     */
    syntheticMonitorId: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Seconds until this WebTest will timeout and fail. Default value is 30.
     */
    timeout?: pulumi.Input<number>;
    /**
     * The collection of validation rule properties
     */
    validationRules?: pulumi.Input<types.inputs.WebTestPropertiesValidationRulesArgs>;
    /**
     * The kind of web test this is, valid choices are ping, multistep and standard.
     */
    webTestKind: pulumi.Input<types.enums.WebTestKind>;
    /**
     * User defined name if this WebTest.
     */
    webTestName?: pulumi.Input<string>;
}