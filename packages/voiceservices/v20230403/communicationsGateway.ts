import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A CommunicationsGateway resource
 */
export class CommunicationsGateway extends pulumi.CustomResource {
    /**
     * Get an existing CommunicationsGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CommunicationsGateway {
        return new CommunicationsGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:voiceservices/v20230403:CommunicationsGateway';

    /**
     * Returns true if the given object is an instance of CommunicationsGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CommunicationsGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CommunicationsGateway.__pulumiType;
    }

    /**
     * Details of API bridge functionality, if required
     */
    public readonly apiBridge!: pulumi.Output<any | undefined>;
    /**
     * The autogenerated label used as part of the FQDNs for accessing the Communications Gateway
     */
    public /*out*/ readonly autoGeneratedDomainNameLabel!: pulumi.Output<string>;
    /**
     * The scope at which the auto-generated domain name can be re-used
     */
    public readonly autoGeneratedDomainNameLabelScope!: pulumi.Output<string | undefined>;
    /**
     * Voice codecs to support
     */
    public readonly codecs!: pulumi.Output<string[]>;
    /**
     * How to connect back to the operator network, e.g. MAPS
     */
    public readonly connectivity!: pulumi.Output<string>;
    /**
     * How to handle 911 calls
     */
    public readonly e911Type!: pulumi.Output<string>;
    /**
     * A list of dial strings used for emergency calling.
     */
    public readonly emergencyDialStrings!: pulumi.Output<string[] | undefined>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Whether an integrated Mobile Control Point is in use.
     */
    public readonly integratedMcpEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Whether an on-premises Mobile Control Point is in use.
     */
    public readonly onPremMcpEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * What platforms to support
     */
    public readonly platforms!: pulumi.Output<string[]>;
    /**
     * Resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The regions in which to deploy the resources needed for Teams Calling
     */
    public readonly serviceLocations!: pulumi.Output<types.outputs.ServiceRegionPropertiesResponse[]>;
    /**
     * The current status of the deployment.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * This number is used in Teams Phone Mobile scenarios for access to the voicemail IVR from the native dialer.
     */
    public readonly teamsVoicemailPilotNumber!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CommunicationsGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommunicationsGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.codecs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'codecs'");
            }
            if ((!args || args.connectivity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectivity'");
            }
            if ((!args || args.e911Type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'e911Type'");
            }
            if ((!args || args.platforms === undefined) && !opts.urn) {
                throw new Error("Missing required property 'platforms'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceLocations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceLocations'");
            }
            resourceInputs["apiBridge"] = args ? args.apiBridge : undefined;
            resourceInputs["autoGeneratedDomainNameLabelScope"] = (args ? args.autoGeneratedDomainNameLabelScope : undefined) ?? "TenantReuse";
            resourceInputs["codecs"] = args ? args.codecs : undefined;
            resourceInputs["communicationsGatewayName"] = args ? args.communicationsGatewayName : undefined;
            resourceInputs["connectivity"] = args ? args.connectivity : undefined;
            resourceInputs["e911Type"] = args ? args.e911Type : undefined;
            resourceInputs["emergencyDialStrings"] = args ? args.emergencyDialStrings : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["integratedMcpEnabled"] = (args ? args.integratedMcpEnabled : undefined) ?? false;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["onPremMcpEnabled"] = (args ? args.onPremMcpEnabled : undefined) ?? false;
            resourceInputs["platforms"] = args ? args.platforms : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceLocations"] = args ? args.serviceLocations : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["teamsVoicemailPilotNumber"] = args ? args.teamsVoicemailPilotNumber : undefined;
            resourceInputs["autoGeneratedDomainNameLabel"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiBridge"] = undefined /*out*/;
            resourceInputs["autoGeneratedDomainNameLabel"] = undefined /*out*/;
            resourceInputs["autoGeneratedDomainNameLabelScope"] = undefined /*out*/;
            resourceInputs["codecs"] = undefined /*out*/;
            resourceInputs["connectivity"] = undefined /*out*/;
            resourceInputs["e911Type"] = undefined /*out*/;
            resourceInputs["emergencyDialStrings"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["integratedMcpEnabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["onPremMcpEnabled"] = undefined /*out*/;
            resourceInputs["platforms"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceLocations"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["teamsVoicemailPilotNumber"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:voiceservices:CommunicationsGateway" }, { type: "azure-native:voiceservices/v20221201preview:CommunicationsGateway" }, { type: "azure-native:voiceservices/v20230131:CommunicationsGateway" }, { type: "azure-native:voiceservices/v20230901:CommunicationsGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CommunicationsGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CommunicationsGateway resource.
 */
export interface CommunicationsGatewayArgs {
    /**
     * Details of API bridge functionality, if required
     */
    apiBridge?: any;
    /**
     * The scope at which the auto-generated domain name can be re-used
     */
    autoGeneratedDomainNameLabelScope?: pulumi.Input<string | types.enums.AutoGeneratedDomainNameLabelScope>;
    /**
     * Voice codecs to support
     */
    codecs: pulumi.Input<pulumi.Input<string | types.enums.TeamsCodecs>[]>;
    /**
     * Unique identifier for this deployment
     */
    communicationsGatewayName?: pulumi.Input<string>;
    /**
     * How to connect back to the operator network, e.g. MAPS
     */
    connectivity: pulumi.Input<string | types.enums.Connectivity>;
    /**
     * How to handle 911 calls
     */
    e911Type: pulumi.Input<string | types.enums.E911Type>;
    /**
     * A list of dial strings used for emergency calling.
     */
    emergencyDialStrings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Whether an integrated Mobile Control Point is in use.
     */
    integratedMcpEnabled?: pulumi.Input<boolean>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Whether an on-premises Mobile Control Point is in use.
     */
    onPremMcpEnabled?: pulumi.Input<boolean>;
    /**
     * What platforms to support
     */
    platforms: pulumi.Input<pulumi.Input<string | types.enums.CommunicationsPlatform>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The regions in which to deploy the resources needed for Teams Calling
     */
    serviceLocations: pulumi.Input<pulumi.Input<types.inputs.ServiceRegionPropertiesArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * This number is used in Teams Phone Mobile scenarios for access to the voicemail IVR from the native dialer.
     */
    teamsVoicemailPilotNumber?: pulumi.Input<string>;
}