import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of a particular extension in HCI Cluster.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-02-01, 2023-03-01, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-09-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Extension extends pulumi.CustomResource {
    /**
     * Get an existing Extension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Extension {
        return new Extension(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:Extension';

    /**
     * Returns true if the given object is an instance of Extension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Extension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Extension.__pulumiType;
    }

    /**
     * Aggregate state of Arc Extensions across the nodes in this HCI cluster.
     */
    public /*out*/ readonly aggregateState!: pulumi.Output<string>;
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    public readonly autoUpgradeMinorVersion!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
     */
    public readonly enableAutomaticUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * Indicates if the extension is managed by azure or the user.
     */
    public /*out*/ readonly managedBy!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of Arc Extension in each of the nodes.
     */
    public /*out*/ readonly perNodeExtensionDetails!: pulumi.Output<types.outputs.PerNodeExtensionStateResponse[]>;
    /**
     * Protected settings (may contain secrets).
     */
    public readonly protectedSettings!: pulumi.Output<any | undefined>;
    /**
     * Provisioning state of the Extension proxy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The name of the extension handler publisher.
     */
    public readonly publisher!: pulumi.Output<string | undefined>;
    /**
     * Json formatted public settings for the extension.
     */
    public readonly settings!: pulumi.Output<any | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Specifies the version of the script handler. Latest version would be used if not specified.
     */
    public readonly typeHandlerVersion!: pulumi.Output<string | undefined>;

    /**
     * Create a Extension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExtensionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.arcSettingName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'arcSettingName'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["arcSettingName"] = args ? args.arcSettingName : undefined;
            resourceInputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["enableAutomaticUpgrade"] = args ? args.enableAutomaticUpgrade : undefined;
            resourceInputs["extensionName"] = args ? args.extensionName : undefined;
            resourceInputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            resourceInputs["protectedSettings"] = args ? args.protectedSettings : undefined;
            resourceInputs["publisher"] = args ? args.publisher : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["typeHandlerVersion"] = args ? args.typeHandlerVersion : undefined;
            resourceInputs["aggregateState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perNodeExtensionDetails"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
        } else {
            resourceInputs["aggregateState"] = undefined /*out*/;
            resourceInputs["autoUpgradeMinorVersion"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["enableAutomaticUpgrade"] = undefined /*out*/;
            resourceInputs["forceUpdateTag"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perNodeExtensionDetails"] = undefined /*out*/;
            resourceInputs["protectedSettings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisher"] = undefined /*out*/;
            resourceInputs["settings"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeHandlerVersion"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20210101preview:Extension" }, { type: "azure-native:azurestackhci/v20210901:Extension" }, { type: "azure-native:azurestackhci/v20210901preview:Extension" }, { type: "azure-native:azurestackhci/v20220101:Extension" }, { type: "azure-native:azurestackhci/v20220301:Extension" }, { type: "azure-native:azurestackhci/v20220501:Extension" }, { type: "azure-native:azurestackhci/v20220901:Extension" }, { type: "azure-native:azurestackhci/v20221001:Extension" }, { type: "azure-native:azurestackhci/v20221201:Extension" }, { type: "azure-native:azurestackhci/v20221215preview:Extension" }, { type: "azure-native:azurestackhci/v20230201:Extension" }, { type: "azure-native:azurestackhci/v20230301:Extension" }, { type: "azure-native:azurestackhci/v20230601:Extension" }, { type: "azure-native:azurestackhci/v20230801:Extension" }, { type: "azure-native:azurestackhci/v20230801preview:Extension" }, { type: "azure-native:azurestackhci/v20231101preview:Extension" }, { type: "azure-native:azurestackhci/v20240101:Extension" }, { type: "azure-native:azurestackhci/v20240215preview:Extension" }, { type: "azure-native:azurestackhci/v20240401:Extension" }, { type: "azure-native:azurestackhci/v20240901preview:Extension" }, { type: "azure-native:azurestackhci/v20241201preview:Extension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Extension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Extension resource.
 */
export interface ExtensionArgs {
    /**
     * The name of the proxy resource holding details of HCI ArcSetting information.
     */
    arcSettingName: pulumi.Input<string>;
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * The name of the machine extension.
     */
    extensionName?: pulumi.Input<string>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * Protected settings (may contain secrets).
     */
    protectedSettings?: any;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler. Latest version would be used if not specified.
     */
    typeHandlerVersion?: pulumi.Input<string>;
}