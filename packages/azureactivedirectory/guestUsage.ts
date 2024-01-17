import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Guest Usages Resource
 * Azure REST API version: 2021-04-01. Prior API version in Azure Native 1.x: 2020-05-01-preview.
 *
 * Other available API versions: 2023-01-18-preview, 2023-05-17-preview.
 */
export class GuestUsage extends pulumi.CustomResource {
    /**
     * Get an existing GuestUsage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GuestUsage {
        return new GuestUsage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azureactivedirectory:GuestUsage';

    /**
     * Returns true if the given object is an instance of GuestUsage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuestUsage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuestUsage.__pulumiType;
    }

    /**
     * Location of the Guest Usages resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the Guest Usages resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * An identifier for the tenant for which the resource is being created
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the Guest Usages resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GuestUsage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuestUsageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azureactivedirectory/v20200501preview:GuestUsage" }, { type: "azure-native:azureactivedirectory/v20210401:GuestUsage" }, { type: "azure-native:azureactivedirectory/v20230118preview:GuestUsage" }, { type: "azure-native:azureactivedirectory/v20230517preview:GuestUsage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GuestUsage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GuestUsage resource.
 */
export interface GuestUsageArgs {
    /**
     * Location of the Guest Usages resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The initial domain name of the Azure AD B2C tenant.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An identifier for the tenant for which the resource is being created
     */
    tenantId?: pulumi.Input<string>;
}