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
    declare public readonly authImage: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The details of Broker Docker Image.
     */
    declare public readonly brokerImage: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The details of Node Tolerations for Broker Pods.
     */
    declare public readonly brokerNodeTolerations: pulumi.Output<types.outputs.NodeTolerationsResponse | undefined>;
    /**
     * The cardinality details of the broker.
     */
    declare public readonly cardinality: pulumi.Output<types.outputs.CardinalityResponse | undefined>;
    /**
     * The diagnostic details of the broker deployment.
     */
    declare public readonly diagnostics: pulumi.Output<types.outputs.BrokerDiagnosticsResponse | undefined>;
    /**
     * The settings of the disk-backed message buffer.
     */
    declare public readonly diskBackedMessageBufferSettings: pulumi.Output<types.outputs.DiskBackedMessageBufferSettingsResponse | undefined>;
    /**
     * The setting to enable or disable encryption of internal Traffic.
     */
    declare public readonly encryptInternalTraffic: pulumi.Output<boolean | undefined>;
    /**
     * Extended Location
     */
    declare public readonly extendedLocation: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The details of Health Manager Docker Image.
     */
    declare public readonly healthManagerImage: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The details of Node Tolerations for Health Manager Pods.
     */
    declare public readonly healthManagerNodeTolerations: pulumi.Output<types.outputs.NodeTolerationsResponse | undefined>;
    /**
     * Details of the internal CA cert that will be used to secure communication between pods.
     */
    declare public readonly internalCerts: pulumi.Output<types.outputs.CertManagerCertOptionsResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    declare public readonly location: pulumi.Output<string>;
    /**
     * Memory profile of broker.
     */
    declare public readonly memoryProfile: pulumi.Output<string | undefined>;
    /**
     * The Running Mode of the Broker Deployment.
     */
    declare public readonly mode: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    declare public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

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
            if (args?.authImage === undefined && !opts.urn) {
                throw new Error("Missing required property 'authImage'");
            }
            if (args?.brokerImage === undefined && !opts.urn) {
                throw new Error("Missing required property 'brokerImage'");
            }
            if (args?.extendedLocation === undefined && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if (args?.healthManagerImage === undefined && !opts.urn) {
                throw new Error("Missing required property 'healthManagerImage'");
            }
            if (args?.mode === undefined && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if (args?.mqName === undefined && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authImage"] = args?.authImage;
            resourceInputs["brokerImage"] = args?.brokerImage;
            resourceInputs["brokerName"] = args?.brokerName;
            resourceInputs["brokerNodeTolerations"] = args?.brokerNodeTolerations;
            resourceInputs["cardinality"] = args ? (args.cardinality ? pulumi.output(args.cardinality).apply(types.inputs.cardinalityArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["diagnostics"] = args ? (args.diagnostics ? pulumi.output(args.diagnostics).apply(types.inputs.brokerDiagnosticsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["diskBackedMessageBufferSettings"] = args?.diskBackedMessageBufferSettings;
            resourceInputs["encryptInternalTraffic"] = (args?.encryptInternalTraffic) ?? true;
            resourceInputs["extendedLocation"] = args?.extendedLocation;
            resourceInputs["healthManagerImage"] = args?.healthManagerImage;
            resourceInputs["healthManagerNodeTolerations"] = args?.healthManagerNodeTolerations;
            resourceInputs["internalCerts"] = args ? (args.internalCerts ? pulumi.output(args.internalCerts).apply(types.inputs.certManagerCertOptionsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args?.location;
            resourceInputs["memoryProfile"] = (args?.memoryProfile) ?? "medium";
            resourceInputs["mode"] = args?.mode;
            resourceInputs["mqName"] = args?.mqName;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["tags"] = args?.tags;
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