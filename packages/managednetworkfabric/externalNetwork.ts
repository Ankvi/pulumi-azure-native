import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the External Network resource.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ExternalNetwork extends pulumi.CustomResource {
    /**
     * Get an existing ExternalNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExternalNetwork {
        return new ExternalNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:ExternalNetwork';

    /**
     * Returns true if the given object is an instance of ExternalNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExternalNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExternalNetwork.__pulumiType;
    }

    /**
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * Export Route Policy either IPv4 or IPv6.
     */
    public readonly exportRoutePolicy!: pulumi.Output<types.outputs.ExportRoutePolicyResponse | undefined>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    public readonly exportRoutePolicyId!: pulumi.Output<string | undefined>;
    /**
     * Import Route Policy either IPv4 or IPv6.
     */
    public readonly importRoutePolicy!: pulumi.Output<types.outputs.ImportRoutePolicyResponse | undefined>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    public readonly importRoutePolicyId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ARM Resource ID of the networkToNetworkInterconnectId of the ExternalNetwork resource.
     */
    public readonly networkToNetworkInterconnectId!: pulumi.Output<string | undefined>;
    /**
     * option A properties object
     */
    public readonly optionAProperties!: pulumi.Output<types.outputs.ExternalNetworkPropertiesResponseOptionAProperties | undefined>;
    /**
     * option B properties object
     */
    public readonly optionBProperties!: pulumi.Output<types.outputs.L3OptionBPropertiesResponse | undefined>;
    /**
     * Peering option list.
     */
    public readonly peeringOption!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ExternalNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExternalNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.l3IsolationDomainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'l3IsolationDomainName'");
            }
            if ((!args || args.peeringOption === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peeringOption'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["exportRoutePolicy"] = args ? args.exportRoutePolicy : undefined;
            resourceInputs["exportRoutePolicyId"] = args ? args.exportRoutePolicyId : undefined;
            resourceInputs["externalNetworkName"] = args ? args.externalNetworkName : undefined;
            resourceInputs["importRoutePolicy"] = args ? args.importRoutePolicy : undefined;
            resourceInputs["importRoutePolicyId"] = args ? args.importRoutePolicyId : undefined;
            resourceInputs["l3IsolationDomainName"] = args ? args.l3IsolationDomainName : undefined;
            resourceInputs["networkToNetworkInterconnectId"] = args ? args.networkToNetworkInterconnectId : undefined;
            resourceInputs["optionAProperties"] = args ? (args.optionAProperties ? pulumi.output(args.optionAProperties).apply(types.inputs.externalNetworkPropertiesOptionAPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["optionBProperties"] = args ? args.optionBProperties : undefined;
            resourceInputs["peeringOption"] = args ? args.peeringOption : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["exportRoutePolicy"] = undefined /*out*/;
            resourceInputs["exportRoutePolicyId"] = undefined /*out*/;
            resourceInputs["importRoutePolicy"] = undefined /*out*/;
            resourceInputs["importRoutePolicyId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkToNetworkInterconnectId"] = undefined /*out*/;
            resourceInputs["optionAProperties"] = undefined /*out*/;
            resourceInputs["optionBProperties"] = undefined /*out*/;
            resourceInputs["peeringOption"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:ExternalNetwork" }, { type: "azure-native:managednetworkfabric/v20230615:ExternalNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExternalNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExternalNetwork resource.
 */
export interface ExternalNetworkArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * Export Route Policy either IPv4 or IPv6.
     */
    exportRoutePolicy?: pulumi.Input<types.inputs.ExportRoutePolicyArgs>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    exportRoutePolicyId?: pulumi.Input<string>;
    /**
     * Name of the External Network.
     */
    externalNetworkName?: pulumi.Input<string>;
    /**
     * Import Route Policy either IPv4 or IPv6.
     */
    importRoutePolicy?: pulumi.Input<types.inputs.ImportRoutePolicyArgs>;
    /**
     * ARM Resource ID of the RoutePolicy. This is used for the backward compatibility.
     */
    importRoutePolicyId?: pulumi.Input<string>;
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName: pulumi.Input<string>;
    /**
     * ARM Resource ID of the networkToNetworkInterconnectId of the ExternalNetwork resource.
     */
    networkToNetworkInterconnectId?: pulumi.Input<string>;
    /**
     * option A properties object
     */
    optionAProperties?: pulumi.Input<types.inputs.ExternalNetworkPropertiesOptionAPropertiesArgs>;
    /**
     * option B properties object
     */
    optionBProperties?: pulumi.Input<types.inputs.L3OptionBPropertiesArgs>;
    /**
     * Peering option list.
     */
    peeringOption: pulumi.Input<string | types.enums.PeeringOption>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}