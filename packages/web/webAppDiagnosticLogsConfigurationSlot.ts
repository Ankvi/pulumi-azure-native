import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration of App Service site logs.
 * Azure REST API version: 2023-12-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2024-04-01.
 */
export class WebAppDiagnosticLogsConfigurationSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDiagnosticLogsConfigurationSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDiagnosticLogsConfigurationSlot {
        return new WebAppDiagnosticLogsConfigurationSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppDiagnosticLogsConfigurationSlot';

    /**
     * Returns true if the given object is an instance of WebAppDiagnosticLogsConfigurationSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppDiagnosticLogsConfigurationSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppDiagnosticLogsConfigurationSlot.__pulumiType;
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
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppDiagnosticLogsConfigurationSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDiagnosticLogsConfigurationSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["applicationLogs"] = args ? (args.applicationLogs ? pulumi.output(args.applicationLogs).apply(types.inputs.applicationLogsConfigArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["detailedErrorMessages"] = args ? args.detailedErrorMessages : undefined;
            resourceInputs["failedRequestsTracing"] = args ? args.failedRequestsTracing : undefined;
            resourceInputs["httpLogs"] = args ? args.httpLogs : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["applicationLogs"] = undefined /*out*/;
            resourceInputs["detailedErrorMessages"] = undefined /*out*/;
            resourceInputs["failedRequestsTracing"] = undefined /*out*/;
            resourceInputs["httpLogs"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20160801:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20180201:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20181101:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20190801:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20200601:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20200901:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20201001:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20201201:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20210101:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20210115:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20210201:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20210301:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20220301:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20220901:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20230101:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20231201:WebAppDiagnosticLogsConfigurationSlot" }, { type: "azure-native:web/v20240401:WebAppDiagnosticLogsConfigurationSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppDiagnosticLogsConfigurationSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppDiagnosticLogsConfigurationSlot resource.
 */
export interface WebAppDiagnosticLogsConfigurationSlotArgs {
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
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the logging configuration for the production slot.
     */
    slot: pulumi.Input<string>;
}