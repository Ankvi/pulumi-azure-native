import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a devcenter resource.
 */
export class DevCenter extends pulumi.CustomResource {
    /**
     * Get an existing DevCenter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DevCenter {
        return new DevCenter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter/v20230801preview:DevCenter';

    /**
     * Returns true if the given object is an instance of DevCenter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DevCenter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DevCenter.__pulumiType;
    }

    /**
     * The URI of the Dev Center.
     */
    public /*out*/ readonly devCenterUri!: pulumi.Output<string>;
    /**
     * Encryption settings to be used for server-side encryption for proprietary content (such as catalogs, logs, customizations).
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionResponse | undefined>;
    /**
     * Managed identity properties
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Create a DevCenter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DevCenterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["devCenterName"] = args ? args.devCenterName : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["devCenterUri"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["devCenterUri"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter:DevCenter" }, { type: "azure-native:devcenter/v20220801preview:DevCenter" }, { type: "azure-native:devcenter/v20220901preview:DevCenter" }, { type: "azure-native:devcenter/v20221012preview:DevCenter" }, { type: "azure-native:devcenter/v20221111preview:DevCenter" }, { type: "azure-native:devcenter/v20230101preview:DevCenter" }, { type: "azure-native:devcenter/v20230401:DevCenter" }, { type: "azure-native:devcenter/v20231001preview:DevCenter" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DevCenter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DevCenter resource.
 */
export interface DevCenterArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName?: pulumi.Input<string>;
    /**
     * Encryption settings to be used for server-side encryption for proprietary content (such as catalogs, logs, customizations).
     */
    encryption?: pulumi.Input<types.inputs.EncryptionArgs>;
    /**
     * Managed identity properties
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
