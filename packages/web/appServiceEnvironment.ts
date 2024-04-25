import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * App Service Environment ARM resource.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2019-08-01, 2020-10-01, 2021-01-15, 2023-01-01, 2023-12-01.
 */
export class AppServiceEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServiceEnvironment {
        return new AppServiceEnvironment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:AppServiceEnvironment';

    /**
     * Returns true if the given object is an instance of AppServiceEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppServiceEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppServiceEnvironment.__pulumiType;
    }

    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    public readonly clusterSettings!: pulumi.Output<types.outputs.NameValuePairResponse[] | undefined>;
    /**
     * Full view of the custom domain suffix configuration for ASEv3.
     */
    public readonly customDnsSuffixConfiguration!: pulumi.Output<types.outputs.CustomDnsSuffixConfigurationResponse | undefined>;
    /**
     * Dedicated Host Count
     */
    public readonly dedicatedHostCount!: pulumi.Output<number | undefined>;
    /**
     * DNS suffix of the App Service Environment.
     */
    public readonly dnsSuffix!: pulumi.Output<string | undefined>;
    /**
     * Scale factor for front-ends.
     */
    public readonly frontEndScaleFactor!: pulumi.Output<number | undefined>;
    /**
     * Flag that displays whether an ASE has linux workers or not
     */
    public /*out*/ readonly hasLinuxWorkers!: pulumi.Output<boolean>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    public readonly internalLoadBalancingMode!: pulumi.Output<string | undefined>;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    public readonly ipsslAddressCount!: pulumi.Output<number | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum number of VMs in the App Service Environment.
     */
    public /*out*/ readonly maximumNumberOfMachines!: pulumi.Output<number>;
    /**
     * Number of front-end instances.
     */
    public /*out*/ readonly multiRoleCount!: pulumi.Output<number>;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    public readonly multiSize!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Full view of networking configuration for an ASE.
     */
    public readonly networkingConfiguration!: pulumi.Output<types.outputs.AseV3NetworkingConfigurationResponse | undefined>;
    /**
     * Provisioning state of the App Service Environment.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Current status of the App Service Environment.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    public /*out*/ readonly suspended!: pulumi.Output<boolean>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Whether an upgrade is available for this App Service Environment.
     */
    public /*out*/ readonly upgradeAvailability!: pulumi.Output<string>;
    /**
     * Upgrade Preference
     */
    public readonly upgradePreference!: pulumi.Output<string | undefined>;
    /**
     * User added ip ranges to whitelist on ASE db
     */
    public readonly userWhitelistedIpRanges!: pulumi.Output<string[] | undefined>;
    /**
     * Description of the Virtual Network.
     */
    public readonly virtualNetwork!: pulumi.Output<types.outputs.VirtualNetworkProfileResponse>;
    /**
     * Whether or not this App Service Environment is zone-redundant.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a AppServiceEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceEnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetwork === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetwork'");
            }
            resourceInputs["clusterSettings"] = args ? args.clusterSettings : undefined;
            resourceInputs["customDnsSuffixConfiguration"] = args ? args.customDnsSuffixConfiguration : undefined;
            resourceInputs["dedicatedHostCount"] = args ? args.dedicatedHostCount : undefined;
            resourceInputs["dnsSuffix"] = args ? args.dnsSuffix : undefined;
            resourceInputs["frontEndScaleFactor"] = args ? args.frontEndScaleFactor : undefined;
            resourceInputs["internalLoadBalancingMode"] = args ? args.internalLoadBalancingMode : undefined;
            resourceInputs["ipsslAddressCount"] = args ? args.ipsslAddressCount : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["multiSize"] = args ? args.multiSize : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkingConfiguration"] = args ? args.networkingConfiguration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["upgradePreference"] = (args ? args.upgradePreference : undefined) ?? "None";
            resourceInputs["userWhitelistedIpRanges"] = args ? args.userWhitelistedIpRanges : undefined;
            resourceInputs["virtualNetwork"] = args ? args.virtualNetwork : undefined;
            resourceInputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            resourceInputs["hasLinuxWorkers"] = undefined /*out*/;
            resourceInputs["maximumNumberOfMachines"] = undefined /*out*/;
            resourceInputs["multiRoleCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["suspended"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeAvailability"] = undefined /*out*/;
        } else {
            resourceInputs["clusterSettings"] = undefined /*out*/;
            resourceInputs["customDnsSuffixConfiguration"] = undefined /*out*/;
            resourceInputs["dedicatedHostCount"] = undefined /*out*/;
            resourceInputs["dnsSuffix"] = undefined /*out*/;
            resourceInputs["frontEndScaleFactor"] = undefined /*out*/;
            resourceInputs["hasLinuxWorkers"] = undefined /*out*/;
            resourceInputs["internalLoadBalancingMode"] = undefined /*out*/;
            resourceInputs["ipsslAddressCount"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maximumNumberOfMachines"] = undefined /*out*/;
            resourceInputs["multiRoleCount"] = undefined /*out*/;
            resourceInputs["multiSize"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkingConfiguration"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["suspended"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeAvailability"] = undefined /*out*/;
            resourceInputs["upgradePreference"] = undefined /*out*/;
            resourceInputs["userWhitelistedIpRanges"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:AppServiceEnvironment" }, { type: "azure-native:web/v20160901:AppServiceEnvironment" }, { type: "azure-native:web/v20180201:AppServiceEnvironment" }, { type: "azure-native:web/v20190801:AppServiceEnvironment" }, { type: "azure-native:web/v20200601:AppServiceEnvironment" }, { type: "azure-native:web/v20200901:AppServiceEnvironment" }, { type: "azure-native:web/v20201001:AppServiceEnvironment" }, { type: "azure-native:web/v20201201:AppServiceEnvironment" }, { type: "azure-native:web/v20210101:AppServiceEnvironment" }, { type: "azure-native:web/v20210115:AppServiceEnvironment" }, { type: "azure-native:web/v20210201:AppServiceEnvironment" }, { type: "azure-native:web/v20210301:AppServiceEnvironment" }, { type: "azure-native:web/v20220301:AppServiceEnvironment" }, { type: "azure-native:web/v20220901:AppServiceEnvironment" }, { type: "azure-native:web/v20230101:AppServiceEnvironment" }, { type: "azure-native:web/v20231201:AppServiceEnvironment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppServiceEnvironment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppServiceEnvironment resource.
 */
export interface AppServiceEnvironmentArgs {
    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    clusterSettings?: pulumi.Input<pulumi.Input<types.inputs.NameValuePairArgs>[]>;
    /**
     * Full view of the custom domain suffix configuration for ASEv3.
     */
    customDnsSuffixConfiguration?: pulumi.Input<types.inputs.CustomDnsSuffixConfigurationArgs>;
    /**
     * Dedicated Host Count
     */
    dedicatedHostCount?: pulumi.Input<number>;
    /**
     * DNS suffix of the App Service Environment.
     */
    dnsSuffix?: pulumi.Input<string>;
    /**
     * Scale factor for front-ends.
     */
    frontEndScaleFactor?: pulumi.Input<number>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    internalLoadBalancingMode?: pulumi.Input<string | types.enums.LoadBalancingMode>;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    ipsslAddressCount?: pulumi.Input<number>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    multiSize?: pulumi.Input<string>;
    /**
     * Name of the App Service Environment.
     */
    name?: pulumi.Input<string>;
    /**
     * Full view of networking configuration for an ASE.
     */
    networkingConfiguration?: pulumi.Input<types.inputs.AseV3NetworkingConfigurationArgs>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Upgrade Preference
     */
    upgradePreference?: pulumi.Input<string | types.enums.UpgradePreference>;
    /**
     * User added ip ranges to whitelist on ASE db
     */
    userWhitelistedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the Virtual Network.
     */
    virtualNetwork: pulumi.Input<types.inputs.VirtualNetworkProfileArgs>;
    /**
     * Whether or not this App Service Environment is zone-redundant.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}