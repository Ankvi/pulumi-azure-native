import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security Partner Provider resource.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class SecurityPartnerProvider extends pulumi.CustomResource {
    /**
     * Get an existing SecurityPartnerProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityPartnerProvider {
        return new SecurityPartnerProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:SecurityPartnerProvider';

    /**
     * Returns true if the given object is an instance of SecurityPartnerProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityPartnerProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityPartnerProvider.__pulumiType;
    }

    /**
     * The connection status with the Security Partner Provider.
     */
    public /*out*/ readonly connectionStatus!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the Security Partner Provider resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The security provider name.
     */
    public readonly securityProviderName!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The virtualHub to which the Security Partner Provider belongs.
     */
    public readonly virtualHub!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;

    /**
     * Create a SecurityPartnerProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityPartnerProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityPartnerProviderName"] = args ? args.securityPartnerProviderName : undefined;
            resourceInputs["securityProviderName"] = args ? args.securityProviderName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["securityProviderName"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200301:SecurityPartnerProvider" }, { type: "azure-native:network/v20200401:SecurityPartnerProvider" }, { type: "azure-native:network/v20200501:SecurityPartnerProvider" }, { type: "azure-native:network/v20200601:SecurityPartnerProvider" }, { type: "azure-native:network/v20200701:SecurityPartnerProvider" }, { type: "azure-native:network/v20200801:SecurityPartnerProvider" }, { type: "azure-native:network/v20201101:SecurityPartnerProvider" }, { type: "azure-native:network/v20210201:SecurityPartnerProvider" }, { type: "azure-native:network/v20210301:SecurityPartnerProvider" }, { type: "azure-native:network/v20210501:SecurityPartnerProvider" }, { type: "azure-native:network/v20210801:SecurityPartnerProvider" }, { type: "azure-native:network/v20220101:SecurityPartnerProvider" }, { type: "azure-native:network/v20220501:SecurityPartnerProvider" }, { type: "azure-native:network/v20220701:SecurityPartnerProvider" }, { type: "azure-native:network/v20220901:SecurityPartnerProvider" }, { type: "azure-native:network/v20221101:SecurityPartnerProvider" }, { type: "azure-native:network/v20230201:SecurityPartnerProvider" }, { type: "azure-native:network/v20230401:SecurityPartnerProvider" }, { type: "azure-native:network/v20230501:SecurityPartnerProvider" }, { type: "azure-native:network/v20230601:SecurityPartnerProvider" }, { type: "azure-native:network/v20230901:SecurityPartnerProvider" }, { type: "azure-native:network/v20231101:SecurityPartnerProvider" }, { type: "azure-native:network/v20240101:SecurityPartnerProvider" }, { type: "azure-native:network/v20240301:SecurityPartnerProvider" }, { type: "azure-native:network/v20240501:SecurityPartnerProvider" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityPartnerProvider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityPartnerProvider resource.
 */
export interface SecurityPartnerProviderArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Security Partner Provider.
     */
    securityPartnerProviderName?: pulumi.Input<string>;
    /**
     * The security provider name.
     */
    securityProviderName?: pulumi.Input<string | types.enums.SecurityProviderName>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The virtualHub to which the Security Partner Provider belongs.
     */
    virtualHub?: pulumi.Input<types.inputs.SubResourceArgs>;
}