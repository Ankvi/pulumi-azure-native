import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ diagnostic services resource
 * Azure REST API version: 2023-10-04-preview.
 */
export class DiagnosticService extends pulumi.CustomResource {
    /**
     * Get an existing DiagnosticService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiagnosticService {
        return new DiagnosticService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:DiagnosticService';

    /**
     * Returns true if the given object is an instance of DiagnosticService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiagnosticService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiagnosticService.__pulumiType;
    }

    /**
     * The frequency at which the data will be exported.
     */
    public readonly dataExportFrequencySeconds!: pulumi.Output<number | undefined>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The details of Diagnostic Service Docker Image.
     */
    public readonly image!: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The format for the logs generated.
     */
    public readonly logFormat!: pulumi.Output<string | undefined>;
    /**
     * The format for the logs generated.
     */
    public readonly logLevel!: pulumi.Output<string | undefined>;
    /**
     * The maximum data stored in MiB.
     */
    public readonly maxDataStorageSize!: pulumi.Output<number | undefined>;
    /**
     * The port at which metrics is exposed.
     */
    public readonly metricsPort!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The destination to collect traces. Diagnostic service will push traces to this endpoint
     */
    public readonly openTelemetryTracesCollectorAddr!: pulumi.Output<string | undefined>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metric inactivity timeout.
     */
    public readonly staleDataTimeoutSeconds!: pulumi.Output<number | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DiagnosticService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiagnosticServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.image === undefined) && !opts.urn) {
                throw new Error("Missing required property 'image'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataExportFrequencySeconds"] = (args ? args.dataExportFrequencySeconds : undefined) ?? 10;
            resourceInputs["diagnosticServiceName"] = args ? args.diagnosticServiceName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logFormat"] = (args ? args.logFormat : undefined) ?? "json";
            resourceInputs["logLevel"] = (args ? args.logLevel : undefined) ?? "info";
            resourceInputs["maxDataStorageSize"] = (args ? args.maxDataStorageSize : undefined) ?? 16;
            resourceInputs["metricsPort"] = (args ? args.metricsPort : undefined) ?? 9600;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["openTelemetryTracesCollectorAddr"] = args ? args.openTelemetryTracesCollectorAddr : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["staleDataTimeoutSeconds"] = (args ? args.staleDataTimeoutSeconds : undefined) ?? 600;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataExportFrequencySeconds"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["image"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logFormat"] = undefined /*out*/;
            resourceInputs["logLevel"] = undefined /*out*/;
            resourceInputs["maxDataStorageSize"] = undefined /*out*/;
            resourceInputs["metricsPort"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["openTelemetryTracesCollectorAddr"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["staleDataTimeoutSeconds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:DiagnosticService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiagnosticService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiagnosticService resource.
 */
export interface DiagnosticServiceArgs {
    /**
     * The frequency at which the data will be exported.
     */
    dataExportFrequencySeconds?: pulumi.Input<number>;
    /**
     * Name of MQ diagnostic resource
     */
    diagnosticServiceName?: pulumi.Input<string>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The details of Diagnostic Service Docker Image.
     */
    image: pulumi.Input<types.inputs.ContainerImageArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The format for the logs generated.
     */
    logFormat?: pulumi.Input<string>;
    /**
     * The format for the logs generated.
     */
    logLevel?: pulumi.Input<string>;
    /**
     * The maximum data stored in MiB.
     */
    maxDataStorageSize?: pulumi.Input<number>;
    /**
     * The port at which metrics is exposed.
     */
    metricsPort?: pulumi.Input<number>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The destination to collect traces. Diagnostic service will push traces to this endpoint
     */
    openTelemetryTracesCollectorAddr?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Metric inactivity timeout.
     */
    staleDataTimeoutSeconds?: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}