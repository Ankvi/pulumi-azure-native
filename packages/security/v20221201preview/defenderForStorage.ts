import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Defender for Storage resource.
 */
export class DefenderForStorage extends pulumi.CustomResource {
    /**
     * Get an existing DefenderForStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DefenderForStorage {
        return new DefenderForStorage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security/v20221201preview:DefenderForStorage';

    /**
     * Returns true if the given object is an instance of DefenderForStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefenderForStorage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefenderForStorage.__pulumiType;
    }

    /**
     * Indicates whether Defender for Storage is enabled on this storage account.
     */
    public readonly isEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Properties of Malware Scanning.
     */
    public readonly malwareScanning!: pulumi.Output<types.outputs.MalwareScanningPropertiesResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
     */
    public readonly overrideSubscriptionLevelSettings!: pulumi.Output<boolean | undefined>;
    /**
     * Properties of Sensitive Data Discovery.
     */
    public readonly sensitiveDataDiscovery!: pulumi.Output<types.outputs.SensitiveDataDiscoveryPropertiesResponse | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefenderForStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefenderForStorageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["malwareScanning"] = args ? args.malwareScanning : undefined;
            resourceInputs["overrideSubscriptionLevelSettings"] = args ? args.overrideSubscriptionLevelSettings : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["sensitiveDataDiscovery"] = args ? args.sensitiveDataDiscovery : undefined;
            resourceInputs["settingName"] = args ? args.settingName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["malwareScanning"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["overrideSubscriptionLevelSettings"] = undefined /*out*/;
            resourceInputs["sensitiveDataDiscovery"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security:DefenderForStorage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DefenderForStorage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DefenderForStorage resource.
 */
export interface DefenderForStorageArgs {
    /**
     * Indicates whether Defender for Storage is enabled on this storage account.
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * Properties of Malware Scanning.
     */
    malwareScanning?: pulumi.Input<types.inputs.MalwareScanningPropertiesArgs>;
    /**
     * Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
     */
    overrideSubscriptionLevelSettings?: pulumi.Input<boolean>;
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Properties of Sensitive Data Discovery.
     */
    sensitiveDataDiscovery?: pulumi.Input<types.inputs.SensitiveDataDiscoveryPropertiesArgs>;
    /**
     * Defender for Storage setting name.
     */
    settingName?: pulumi.Input<string>;
}