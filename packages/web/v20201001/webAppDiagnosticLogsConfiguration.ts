import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration of App Service site logs.
 */
export class WebAppDiagnosticLogsConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDiagnosticLogsConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDiagnosticLogsConfiguration {
        return new WebAppDiagnosticLogsConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20201001:WebAppDiagnosticLogsConfiguration';

    /**
     * Returns true if the given object is an instance of WebAppDiagnosticLogsConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppDiagnosticLogsConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppDiagnosticLogsConfiguration.__pulumiType;
    }

    /**
     * Application logs configuration.
     */
    public readonly applicationLogs!: pulumi.Output<types.outputs.ApplicationLogsConfigResponse | undefined>;
    /**
     * Detailed error messages configuration.
     */
    public readonly detailedErrorMessages!: pulumi.Output<types.outputs.EnabledConfigResponse | undefined>;
    /**
     * Failed requests tracing configuration.
     */
    public readonly failedRequestsTracing!: pulumi.Output<types.outputs.EnabledConfigResponse | undefined>;
    /**
     * HTTP logs configuration.
     */
    public readonly httpLogs!: pulumi.Output<types.outputs.HttpLogsConfigResponse | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppDiagnosticLogsConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDiagnosticLogsConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationLogs"] = args ? (args.applicationLogs ? pulumi.output(args.applicationLogs).apply(types.inputs.applicationLogsConfigArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["detailedErrorMessages"] = args ? args.detailedErrorMessages : undefined;
            resourceInputs["failedRequestsTracing"] = args ? args.failedRequestsTracing : undefined;
            resourceInputs["httpLogs"] = args ? args.httpLogs : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["applicationLogs"] = undefined /*out*/;
            resourceInputs["detailedErrorMessages"] = undefined /*out*/;
            resourceInputs["failedRequestsTracing"] = undefined /*out*/;
            resourceInputs["httpLogs"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20150801:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20160801:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20180201:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20181101:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20190801:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20200601:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20200901:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20201201:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20210101:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20210115:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20210201:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20210301:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20220301:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20220901:WebAppDiagnosticLogsConfiguration" }, { type: "azure-native:web/v20230101:WebAppDiagnosticLogsConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppDiagnosticLogsConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppDiagnosticLogsConfiguration resource.
 */
export interface WebAppDiagnosticLogsConfigurationArgs {
    /**
     * Application logs configuration.
     */
    applicationLogs?: pulumi.Input<types.inputs.ApplicationLogsConfigArgs>;
    /**
     * Detailed error messages configuration.
     */
    detailedErrorMessages?: pulumi.Input<types.inputs.EnabledConfigArgs>;
    /**
     * Failed requests tracing configuration.
     */
    failedRequestsTracing?: pulumi.Input<types.inputs.EnabledConfigArgs>;
    /**
     * HTTP logs configuration.
     */
    httpLogs?: pulumi.Input<types.inputs.HttpLogsConfigArgs>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}