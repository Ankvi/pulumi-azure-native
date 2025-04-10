import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The NetworkToNetworkInterconnect resource definition.
 *
 * Uses Azure REST API version 2023-02-01-preview. In version 1.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export class NetworkToNetworkInterconnect extends pulumi.CustomResource {
    /**
     * Get an existing NetworkToNetworkInterconnect resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkToNetworkInterconnect {
        return new NetworkToNetworkInterconnect(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:NetworkToNetworkInterconnect';

    /**
     * Returns true if the given object is an instance of NetworkToNetworkInterconnect.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkToNetworkInterconnect {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkToNetworkInterconnect.__pulumiType;
    }

    /**
     * Gets the administrativeState of the resource. Example -Enabled/Disabled
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Configuration to use NNI for Infrastructure Management. Example: True/False.
     */
    public readonly isManagementType!: pulumi.Output<string>;
    /**
     * Common properties for Layer2Configuration.
     */
    public readonly layer2Configuration!: pulumi.Output<types.outputs.Layer2ConfigurationResponse | undefined>;
    /**
     * Common properties for Layer3Configuration.
     */
    public readonly layer3Configuration!: pulumi.Output<types.outputs.Layer3ConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Type of NNI used. Example: CE | NPB
     */
    public readonly nniType!: pulumi.Output<string | undefined>;
    /**
     * Gets the provisioning state of the resource.
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
     * Based on this parameter the layer2/layer3 is made as mandatory. Example: True/False
     */
    public readonly useOptionB!: pulumi.Output<string>;

    /**
     * Create a NetworkToNetworkInterconnect resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkToNetworkInterconnectArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.isManagementType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isManagementType'");
            }
            if ((!args || args.networkFabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.useOptionB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'useOptionB'");
            }
            resourceInputs["isManagementType"] = args ? args.isManagementType : undefined;
            resourceInputs["layer2Configuration"] = args ? (args.layer2Configuration ? pulumi.output(args.layer2Configuration).apply(types.inputs.layer2ConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["layer3Configuration"] = args ? args.layer3Configuration : undefined;
            resourceInputs["networkFabricName"] = args ? args.networkFabricName : undefined;
            resourceInputs["networkToNetworkInterconnectName"] = args ? args.networkToNetworkInterconnectName : undefined;
            resourceInputs["nniType"] = (args ? args.nniType : undefined) ?? "CE";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["useOptionB"] = args ? args.useOptionB : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["isManagementType"] = undefined /*out*/;
            resourceInputs["layer2Configuration"] = undefined /*out*/;
            resourceInputs["layer3Configuration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nniType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useOptionB"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:NetworkToNetworkInterconnect" }, { type: "azure-native:managednetworkfabric/v20230615:NetworkToNetworkInterconnect" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkToNetworkInterconnect.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkToNetworkInterconnect resource.
 */
export interface NetworkToNetworkInterconnectArgs {
    /**
     * Configuration to use NNI for Infrastructure Management. Example: True/False.
     */
    isManagementType: pulumi.Input<string | types.enums.BooleanEnumProperty>;
    /**
     * Common properties for Layer2Configuration.
     */
    layer2Configuration?: pulumi.Input<types.inputs.Layer2ConfigurationArgs>;
    /**
     * Common properties for Layer3Configuration.
     */
    layer3Configuration?: pulumi.Input<types.inputs.Layer3ConfigurationArgs>;
    /**
     * Name of the NetworkFabric.
     */
    networkFabricName: pulumi.Input<string>;
    /**
     * Name of the NetworkToNetworkInterconnectName
     */
    networkToNetworkInterconnectName?: pulumi.Input<string>;
    /**
     * Type of NNI used. Example: CE | NPB
     */
    nniType?: pulumi.Input<string | types.enums.NniType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Based on this parameter the layer2/layer3 is made as mandatory. Example: True/False
     */
    useOptionB: pulumi.Input<string | types.enums.BooleanEnumProperty>;
}