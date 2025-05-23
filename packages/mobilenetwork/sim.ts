import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SIM resource.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-06-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Sim extends pulumi.CustomResource {
    /**
     * Get an existing Sim resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Sim {
        return new Sim(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilenetwork:Sim';

    /**
     * Returns true if the given object is an instance of Sim.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Sim {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Sim.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value.
     */
    public readonly deviceType!: pulumi.Output<string | undefined>;
    /**
     * The integrated circuit card ID (ICCID) for the SIM.
     */
    public readonly integratedCircuitCardIdentifier!: pulumi.Output<string | undefined>;
    /**
     * The international mobile subscriber identity (IMSI) for the SIM.
     */
    public readonly internationalMobileSubscriberIdentity!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the SIM resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SIM policy used by this SIM. The SIM policy must be in the same location as the SIM.
     */
    public readonly simPolicy!: pulumi.Output<types.outputs.SimPolicyResourceIdResponse | undefined>;
    /**
     * The state of the SIM resource.
     */
    public /*out*/ readonly simState!: pulumi.Output<string>;
    /**
     * A dictionary of sites to the provisioning state of this SIM on that site.
     */
    public /*out*/ readonly siteProvisioningState!: pulumi.Output<{[key: string]: string}>;
    /**
     * A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
     */
    public readonly staticIpConfiguration!: pulumi.Output<types.outputs.SimStaticIpPropertiesResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The public key fingerprint of the SIM vendor who provided this SIM, if any.
     */
    public /*out*/ readonly vendorKeyFingerprint!: pulumi.Output<string>;
    /**
     * The name of the SIM vendor who provided this SIM, if any.
     */
    public /*out*/ readonly vendorName!: pulumi.Output<string>;

    /**
     * Create a Sim resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SimArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.internationalMobileSubscriberIdentity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'internationalMobileSubscriberIdentity'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.simGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'simGroupName'");
            }
            resourceInputs["authenticationKey"] = args ? args.authenticationKey : undefined;
            resourceInputs["deviceType"] = args ? args.deviceType : undefined;
            resourceInputs["integratedCircuitCardIdentifier"] = args ? args.integratedCircuitCardIdentifier : undefined;
            resourceInputs["internationalMobileSubscriberIdentity"] = args ? args.internationalMobileSubscriberIdentity : undefined;
            resourceInputs["operatorKeyCode"] = args ? args.operatorKeyCode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["simGroupName"] = args ? args.simGroupName : undefined;
            resourceInputs["simName"] = args ? args.simName : undefined;
            resourceInputs["simPolicy"] = args ? args.simPolicy : undefined;
            resourceInputs["staticIpConfiguration"] = args ? args.staticIpConfiguration : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["simState"] = undefined /*out*/;
            resourceInputs["siteProvisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vendorKeyFingerprint"] = undefined /*out*/;
            resourceInputs["vendorName"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deviceType"] = undefined /*out*/;
            resourceInputs["integratedCircuitCardIdentifier"] = undefined /*out*/;
            resourceInputs["internationalMobileSubscriberIdentity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["simPolicy"] = undefined /*out*/;
            resourceInputs["simState"] = undefined /*out*/;
            resourceInputs["siteProvisioningState"] = undefined /*out*/;
            resourceInputs["staticIpConfiguration"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vendorKeyFingerprint"] = undefined /*out*/;
            resourceInputs["vendorName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilenetwork/v20220301preview:Sim" }, { type: "azure-native:mobilenetwork/v20220401preview:Sim" }, { type: "azure-native:mobilenetwork/v20221101:Sim" }, { type: "azure-native:mobilenetwork/v20230601:Sim" }, { type: "azure-native:mobilenetwork/v20230901:Sim" }, { type: "azure-native:mobilenetwork/v20240201:Sim" }, { type: "azure-native:mobilenetwork/v20240401:Sim" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Sim.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Sim resource.
 */
export interface SimArgs {
    /**
     * The Ki value for the SIM.
     */
    authenticationKey?: pulumi.Input<string>;
    /**
     * An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value.
     */
    deviceType?: pulumi.Input<string>;
    /**
     * The integrated circuit card ID (ICCID) for the SIM.
     */
    integratedCircuitCardIdentifier?: pulumi.Input<string>;
    /**
     * The international mobile subscriber identity (IMSI) for the SIM.
     */
    internationalMobileSubscriberIdentity: pulumi.Input<string>;
    /**
     * The Opc value for the SIM.
     */
    operatorKeyCode?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SIM Group.
     */
    simGroupName: pulumi.Input<string>;
    /**
     * The name of the SIM.
     */
    simName?: pulumi.Input<string>;
    /**
     * The SIM policy used by this SIM. The SIM policy must be in the same location as the SIM.
     */
    simPolicy?: pulumi.Input<types.inputs.SimPolicyResourceIdArgs>;
    /**
     * A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}.
     */
    staticIpConfiguration?: pulumi.Input<pulumi.Input<types.inputs.SimStaticIpPropertiesArgs>[]>;
}