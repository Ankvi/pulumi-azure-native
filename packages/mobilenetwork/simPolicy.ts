import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SIM policy resource.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-06-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SimPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SimPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SimPolicy {
        return new SimPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilenetwork:SimPolicy';

    /**
     * Returns true if the given object is an instance of SimPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SimPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SimPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The default slice to use if the UE does not explicitly specify it. This slice must exist in the `sliceConfigurations` map. The slice must be in the same location as the SIM policy.
     */
    public readonly defaultSlice!: pulumi.Output<types.outputs.SliceResourceIdResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the SIM policy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * UE periodic registration update timer (5G) or UE periodic tracking area update timer (4G), in seconds.
     */
    public readonly registrationTimer!: pulumi.Output<number | undefined>;
    /**
     * RAT/Frequency Selection Priority Index, defined in 3GPP TS 36.413. This is an optional setting and by default is unspecified.
     */
    public readonly rfspIndex!: pulumi.Output<number | undefined>;
    /**
     * A dictionary of sites to the provisioning state of this SIM policy on that site.
     */
    public /*out*/ readonly siteProvisioningState!: pulumi.Output<{[key: string]: string}>;
    /**
     * The allowed slices and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
     */
    public readonly sliceConfigurations!: pulumi.Output<types.outputs.SliceConfigurationResponse[]>;
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
     * Aggregate maximum bit rate across all non-GBR QoS flows of all PDU sessions of a given UE. See 3GPP TS23.501 section 5.7.2.6 for a full description of the UE-AMBR.
     */
    public readonly ueAmbr!: pulumi.Output<types.outputs.AmbrResponse>;

    /**
     * Create a SimPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SimPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.defaultSlice === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultSlice'");
            }
            if ((!args || args.mobileNetworkName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mobileNetworkName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sliceConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sliceConfigurations'");
            }
            if ((!args || args.ueAmbr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ueAmbr'");
            }
            resourceInputs["defaultSlice"] = args ? args.defaultSlice : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mobileNetworkName"] = args ? args.mobileNetworkName : undefined;
            resourceInputs["registrationTimer"] = (args ? args.registrationTimer : undefined) ?? 3240;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rfspIndex"] = args ? args.rfspIndex : undefined;
            resourceInputs["simPolicyName"] = args ? args.simPolicyName : undefined;
            resourceInputs["sliceConfigurations"] = args ? args.sliceConfigurations : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["ueAmbr"] = args ? args.ueAmbr : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["siteProvisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultSlice"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["registrationTimer"] = undefined /*out*/;
            resourceInputs["rfspIndex"] = undefined /*out*/;
            resourceInputs["siteProvisioningState"] = undefined /*out*/;
            resourceInputs["sliceConfigurations"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["ueAmbr"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilenetwork/v20220301preview:SimPolicy" }, { type: "azure-native:mobilenetwork/v20220401preview:SimPolicy" }, { type: "azure-native:mobilenetwork/v20221101:SimPolicy" }, { type: "azure-native:mobilenetwork/v20230601:SimPolicy" }, { type: "azure-native:mobilenetwork/v20230901:SimPolicy" }, { type: "azure-native:mobilenetwork/v20240201:SimPolicy" }, { type: "azure-native:mobilenetwork/v20240401:SimPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SimPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SimPolicy resource.
 */
export interface SimPolicyArgs {
    /**
     * The default slice to use if the UE does not explicitly specify it. This slice must exist in the `sliceConfigurations` map. The slice must be in the same location as the SIM policy.
     */
    defaultSlice: pulumi.Input<types.inputs.SliceResourceIdArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: pulumi.Input<string>;
    /**
     * UE periodic registration update timer (5G) or UE periodic tracking area update timer (4G), in seconds.
     */
    registrationTimer?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * RAT/Frequency Selection Priority Index, defined in 3GPP TS 36.413. This is an optional setting and by default is unspecified.
     */
    rfspIndex?: pulumi.Input<number>;
    /**
     * The name of the SIM policy.
     */
    simPolicyName?: pulumi.Input<string>;
    /**
     * The allowed slices and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
     */
    sliceConfigurations: pulumi.Input<pulumi.Input<types.inputs.SliceConfigurationArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Aggregate maximum bit rate across all non-GBR QoS flows of all PDU sessions of a given UE. See 3GPP TS23.501 section 5.7.2.6 for a full description of the UE-AMBR.
     */
    ueAmbr: pulumi.Input<types.inputs.AmbrArgs>;
}