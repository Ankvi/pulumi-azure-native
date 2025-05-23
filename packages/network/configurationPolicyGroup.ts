import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VpnServerConfigurationPolicyGroup Resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ConfigurationPolicyGroup extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationPolicyGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConfigurationPolicyGroup {
        return new ConfigurationPolicyGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ConfigurationPolicyGroup';

    /**
     * Returns true if the given object is an instance of ConfigurationPolicyGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigurationPolicyGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigurationPolicyGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
     */
    public readonly isDefault!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * List of references to P2SConnectionConfigurations.
     */
    public /*out*/ readonly p2SConnectionConfigurations!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
     */
    public readonly policyMembers!: pulumi.Output<types.outputs.VpnServerConfigurationPolicyGroupMemberResponse[] | undefined>;
    /**
     * Priority for VpnServerConfigurationPolicyGroup.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the VpnServerConfigurationPolicyGroup resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConfigurationPolicyGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationPolicyGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vpnServerConfigurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpnServerConfigurationName'");
            }
            resourceInputs["configurationPolicyGroupName"] = args ? args.configurationPolicyGroupName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["isDefault"] = args ? args.isDefault : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policyMembers"] = args ? args.policyMembers : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vpnServerConfigurationName"] = args ? args.vpnServerConfigurationName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["p2SConnectionConfigurations"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isDefault"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["p2SConnectionConfigurations"] = undefined /*out*/;
            resourceInputs["policyMembers"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210801:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20220101:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20220501:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20220701:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20220901:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20221101:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20230201:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20230401:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20230501:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20230601:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20230901:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20231101:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20240101:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20240301:ConfigurationPolicyGroup" }, { type: "azure-native:network/v20240501:ConfigurationPolicyGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConfigurationPolicyGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConfigurationPolicyGroup resource.
 */
export interface ConfigurationPolicyGroupArgs {
    /**
     * The name of the ConfigurationPolicyGroup.
     */
    configurationPolicyGroupName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
     */
    policyMembers?: pulumi.Input<pulumi.Input<types.inputs.VpnServerConfigurationPolicyGroupMemberArgs>[]>;
    /**
     * Priority for VpnServerConfigurationPolicyGroup.
     */
    priority?: pulumi.Input<number>;
    /**
     * The resource group name of the ConfigurationPolicyGroup.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VpnServerConfiguration.
     */
    vpnServerConfigurationName: pulumi.Input<string>;
}