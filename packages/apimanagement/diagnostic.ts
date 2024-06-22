import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Diagnostic details.
 * Azure REST API version: 2022-08-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2018-01-01, 2019-01-01, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export class Diagnostic extends pulumi.CustomResource {
    /**
     * Get an existing Diagnostic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Diagnostic {
        return new Diagnostic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:Diagnostic';

    /**
     * Returns true if the given object is an instance of Diagnostic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Diagnostic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Diagnostic.__pulumiType;
    }

    /**
     * Specifies for what type of messages sampling settings should not apply.
     */
    public readonly alwaysLog!: pulumi.Output<string | undefined>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Backend
     */
    public readonly backend!: pulumi.Output<types.outputs.PipelineDiagnosticSettingsResponse | undefined>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    public readonly frontend!: pulumi.Output<types.outputs.PipelineDiagnosticSettingsResponse | undefined>;
    /**
     * Sets correlation protocol to use for Application Insights diagnostics.
     */
    public readonly httpCorrelationProtocol!: pulumi.Output<string | undefined>;
    /**
     * Log the ClientIP. Default is false.
     */
    public readonly logClientIp!: pulumi.Output<boolean | undefined>;
    /**
     * Resource Id of a target logger.
     */
    public readonly loggerId!: pulumi.Output<string>;
    /**
     * Emit custom metrics via emit-metric policy. Applicable only to Application Insights diagnostic settings.
     */
    public readonly metrics!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The format of the Operation Name for Application Insights telemetries. Default is Name.
     */
    public readonly operationNameFormat!: pulumi.Output<string | undefined>;
    /**
     * Sampling settings for Diagnostic.
     */
    public readonly sampling!: pulumi.Output<types.outputs.SamplingSettingsResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The verbosity level applied to traces emitted by trace policies.
     */
    public readonly verbosity!: pulumi.Output<string | undefined>;

    /**
     * Create a Diagnostic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiagnosticArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.loggerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loggerId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["alwaysLog"] = args ? args.alwaysLog : undefined;
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["diagnosticId"] = args ? args.diagnosticId : undefined;
            resourceInputs["frontend"] = args ? args.frontend : undefined;
            resourceInputs["httpCorrelationProtocol"] = args ? args.httpCorrelationProtocol : undefined;
            resourceInputs["logClientIp"] = args ? args.logClientIp : undefined;
            resourceInputs["loggerId"] = args ? args.loggerId : undefined;
            resourceInputs["metrics"] = args ? args.metrics : undefined;
            resourceInputs["operationNameFormat"] = args ? args.operationNameFormat : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sampling"] = args ? args.sampling : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["verbosity"] = args ? args.verbosity : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alwaysLog"] = undefined /*out*/;
            resourceInputs["backend"] = undefined /*out*/;
            resourceInputs["frontend"] = undefined /*out*/;
            resourceInputs["httpCorrelationProtocol"] = undefined /*out*/;
            resourceInputs["logClientIp"] = undefined /*out*/;
            resourceInputs["loggerId"] = undefined /*out*/;
            resourceInputs["metrics"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationNameFormat"] = undefined /*out*/;
            resourceInputs["sampling"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["verbosity"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:Diagnostic" }, { type: "azure-native:apimanagement/v20180101:Diagnostic" }, { type: "azure-native:apimanagement/v20180601preview:Diagnostic" }, { type: "azure-native:apimanagement/v20190101:Diagnostic" }, { type: "azure-native:apimanagement/v20191201:Diagnostic" }, { type: "azure-native:apimanagement/v20191201preview:Diagnostic" }, { type: "azure-native:apimanagement/v20200601preview:Diagnostic" }, { type: "azure-native:apimanagement/v20201201:Diagnostic" }, { type: "azure-native:apimanagement/v20210101preview:Diagnostic" }, { type: "azure-native:apimanagement/v20210401preview:Diagnostic" }, { type: "azure-native:apimanagement/v20210801:Diagnostic" }, { type: "azure-native:apimanagement/v20211201preview:Diagnostic" }, { type: "azure-native:apimanagement/v20220401preview:Diagnostic" }, { type: "azure-native:apimanagement/v20220801:Diagnostic" }, { type: "azure-native:apimanagement/v20220901preview:Diagnostic" }, { type: "azure-native:apimanagement/v20230301preview:Diagnostic" }, { type: "azure-native:apimanagement/v20230501preview:Diagnostic" }, { type: "azure-native:apimanagement/v20230901preview:Diagnostic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Diagnostic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Diagnostic resource.
 */
export interface DiagnosticArgs {
    /**
     * Specifies for what type of messages sampling settings should not apply.
     */
    alwaysLog?: pulumi.Input<string | types.enums.AlwaysLog>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Backend
     */
    backend?: pulumi.Input<types.inputs.PipelineDiagnosticSettingsArgs>;
    /**
     * Diagnostic identifier. Must be unique in the current API Management service instance.
     */
    diagnosticId?: pulumi.Input<string>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    frontend?: pulumi.Input<types.inputs.PipelineDiagnosticSettingsArgs>;
    /**
     * Sets correlation protocol to use for Application Insights diagnostics.
     */
    httpCorrelationProtocol?: pulumi.Input<string | types.enums.HttpCorrelationProtocol>;
    /**
     * Log the ClientIP. Default is false.
     */
    logClientIp?: pulumi.Input<boolean>;
    /**
     * Resource Id of a target logger.
     */
    loggerId: pulumi.Input<string>;
    /**
     * Emit custom metrics via emit-metric policy. Applicable only to Application Insights diagnostic settings.
     */
    metrics?: pulumi.Input<boolean>;
    /**
     * The format of the Operation Name for Application Insights telemetries. Default is Name.
     */
    operationNameFormat?: pulumi.Input<string | types.enums.OperationNameFormat>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sampling settings for Diagnostic.
     */
    sampling?: pulumi.Input<types.inputs.SamplingSettingsArgs>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The verbosity level applied to traces emitted by trace policies.
     */
    verbosity?: pulumi.Input<string | types.enums.Verbosity>;
}