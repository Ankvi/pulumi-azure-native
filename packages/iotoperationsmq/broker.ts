import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ broker resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class Broker extends pulumi.CustomResource {
    /**
     * Get an existing Broker resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Broker {
        return new Broker(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:Broker';

    /**
     * Returns true if the given object is an instance of Broker.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Broker {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Broker.__pulumiType;
    }

    /**
     * The details of Authentication Docker Image.
     */
    public readonly authImage!: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The details of Broker Docker Image.
     */
    public readonly brokerImage!: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The details of Node Tolerations for Broker Pods.
     */
    public readonly brokerNodeTolerations!: pulumi.Output<types.outputs.NodeTolerationsResponse | undefined>;
    /**
     * The cardinality details of the broker.
     */
    public readonly cardinality!: pulumi.Output<types.outputs.CardinalityResponse | undefined>;
    /**
     * The diagnostic details of the broker deployment.
     */
    public readonly diagnostics!: pulumi.Output<types.outputs.BrokerDiagnosticsResponse | undefined>;
    /**
     * The settings of the disk-backed message buffer.
     */
    public readonly diskBackedMessageBufferSettings!: pulumi.Output<types.outputs.DiskBackedMessageBufferSettingsResponse | undefined>;
    /**
     * The setting to enable or disable encryption of internal Traffic.
     */
    public readonly encryptInternalTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The details of Health Manager Docker Image.
     */
    public readonly healthManagerImage!: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The details of Node Tolerations for Health Manager Pods.
     */
    public readonly healthManagerNodeTolerations!: pulumi.Output<types.outputs.NodeTolerationsResponse | undefined>;
    /**
     * Details of the internal CA cert that will be used to secure communication between pods.
     */
    public readonly internalCerts!: pulumi.Output<types.outputs.CertManagerCertOptionsResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Memory profile of broker.
     */
    public readonly memoryProfile!: pulumi.Output<string | undefined>;
    /**
     * The Running Mode of the Broker Deployment.
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Create a Broker resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BrokerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.authImage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authImage'");
            }
            if ((!args || args.brokerImage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'brokerImage'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.healthManagerImage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'healthManagerImage'");
            }
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authImage"] = args ? args.authImage : undefined;
            resourceInputs["brokerImage"] = args ? args.brokerImage : undefined;
            resourceInputs["brokerName"] = args ? args.brokerName : undefined;
            resourceInputs["brokerNodeTolerations"] = args ? args.brokerNodeTolerations : undefined;
            resourceInputs["cardinality"] = args ? (args.cardinality ? pulumi.output(args.cardinality).apply(types.inputs.cardinalityArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["diagnostics"] = args ? (args.diagnostics ? pulumi.output(args.diagnostics).apply(types.inputs.brokerDiagnosticsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["diskBackedMessageBufferSettings"] = args ? args.diskBackedMessageBufferSettings : undefined;
            resourceInputs["encryptInternalTraffic"] = (args ? args.encryptInternalTraffic : undefined) ?? true;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["healthManagerImage"] = args ? args.healthManagerImage : undefined;
            resourceInputs["healthManagerNodeTolerations"] = args ? args.healthManagerNodeTolerations : undefined;
            resourceInputs["internalCerts"] = args ? (args.internalCerts ? pulumi.output(args.internalCerts).apply(types.inputs.certManagerCertOptionsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["memoryProfile"] = (args ? args.memoryProfile : undefined) ?? "medium";
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authImage"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["brokerImage"] = undefined /*out*/;
            resourceInputs["brokerNodeTolerations"] = undefined /*out*/;
            resourceInputs["cardinality"] = undefined /*out*/;
            resourceInputs["diagnostics"] = undefined /*out*/;
            resourceInputs["diskBackedMessageBufferSettings"] = undefined /*out*/;
            resourceInputs["encryptInternalTraffic"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["healthManagerImage"] = undefined /*out*/;
            resourceInputs["healthManagerNodeTolerations"] = undefined /*out*/;
            resourceInputs["internalCerts"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["memoryProfile"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:Broker" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Broker.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Broker resource.
 */
export interface BrokerArgs {
    /**
     * The details of Authentication Docker Image.
     */
    authImage: pulumi.Input<types.inputs.ContainerImageArgs>;
    /**
     * The details of Broker Docker Image.
     */
    brokerImage: pulumi.Input<types.inputs.ContainerImageArgs>;
    /**
     * Name of MQ broker resource
     */
    brokerName?: pulumi.Input<string>;
    /**
     * The details of Node Tolerations for Broker Pods.
     */
    brokerNodeTolerations?: pulumi.Input<types.inputs.NodeTolerationsArgs>;
    /**
     * The cardinality details of the broker.
     */
    cardinality?: pulumi.Input<types.inputs.CardinalityArgs>;
    /**
     * The diagnostic details of the broker deployment.
     */
    diagnostics?: pulumi.Input<types.inputs.BrokerDiagnosticsArgs>;
    /**
     * The settings of the disk-backed message buffer.
     */
    diskBackedMessageBufferSettings?: pulumi.Input<types.inputs.DiskBackedMessageBufferSettingsArgs>;
    /**
     * The setting to enable or disable encryption of internal Traffic.
     */
    encryptInternalTraffic?: pulumi.Input<boolean>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The details of Health Manager Docker Image.
     */
    healthManagerImage: pulumi.Input<types.inputs.ContainerImageArgs>;
    /**
     * The details of Node Tolerations for Health Manager Pods.
     */
    healthManagerNodeTolerations?: pulumi.Input<types.inputs.NodeTolerationsArgs>;
    /**
     * Details of the internal CA cert that will be used to secure communication between pods.
     */
    internalCerts?: pulumi.Input<types.inputs.CertManagerCertOptionsArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Memory profile of broker.
     */
    memoryProfile?: pulumi.Input<string | types.enums.BrokerMemoryProfile>;
    /**
     * The Running Mode of the Broker Deployment.
     */
    mode: pulumi.Input<string | types.enums.RunMode>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}